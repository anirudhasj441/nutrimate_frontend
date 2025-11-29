
import type { IAlertContex, IAlertProvider } from "./types";

import type { AlertColor } from "@mui/material";
import React, { createContext, useState, useContext } from "react";
import MyAlert from ".";


const alertContext = createContext<IAlertContex | undefined>(undefined);

const AlertProvider: React.FC< IAlertProvider > = ( props: IAlertProvider ) => {
    const [open, setOpen ] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [severity, setSeverity] = useState<AlertColor>('success');
    
    const showAlert = ( aMsg:string, aSeverity: AlertColor = "success" ) => {
        setMessage( aMsg );
        setSeverity(aSeverity);
        setOpen( true );
    }
    
    return (
        <alertContext.Provider value={{showAlert}}>
            <>
                <MyAlert open={open} message={message} severity={severity} onClose={() => setOpen(false)} />
                {props.children}
            </>
        </alertContext.Provider>
    )
}

const useAlert = (): IAlertContex => {
  const context = useContext(alertContext);
  if (!context) {
    throw new Error("useAlert must be used inside AlertProvider");
  }
  return context;
};

export { AlertProvider, useAlert }
