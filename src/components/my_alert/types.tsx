import type { AlertColor } from "@mui/material";

interface IAlertContex {
    showAlert: ( message: string, severity?: AlertColor ) => void;
}

interface IAlertProvider {
    children: React.ReactNode
}

export type { IAlertContex , IAlertProvider }