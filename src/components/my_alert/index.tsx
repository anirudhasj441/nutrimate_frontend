import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert, { type AlertColor } from "@mui/material/Alert";
import Grow from "@mui/material/Grow";

interface IMyAlert {
  open: boolean;
  message: string;
  severity?: AlertColor;
  autoHideDuration?: number;
  onClose: () => void;
}

const GrowTransition = (props: any) => <Grow {...props} />;

const MyAlert: React.FC<IMyAlert> = ({
  open,
  message,
  severity = "success",
  autoHideDuration = 3000,
  onClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={(_, reason) => {
        // Prevent closing on clickaway if you want
        if (reason === "clickaway") return;
        onClose();
      }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      slots={{
        transition: GrowTransition
      }}
    >
      <Alert
        variant="filled"
        severity={severity}
        onClose={onClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MyAlert;