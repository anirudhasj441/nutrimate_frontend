import type { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";
// import { purple } from "@mui/material/colors";

/**
 * The main theme configuration for the application.
 *
 * This theme uses Material-UI's `createTheme` function to define custom color settings
 * and other theme properties. The palette is set to dark mode with specific primary and
 * secondary colors.
 *
 * @constant
 * @type {Theme}
 */

declare module '@mui/material/styles' {
    interface Theme {
        custom: {
            hoverColor: string,
            contentBgColor: string
        }
    }

    interface ThemeOptions {
        custom?: {
            hoverColor?: string,
            contentBgColor?: string
        }
    }
}

const mainTheme: Theme = createTheme({
    palette: {
        mode: "light", // Sets the theme to dark mode
        
        primary: {
            main: "#9575cdd9",
        },
        secondary: {
            main: "#5e35b1", // Sets the secondary color to a shade of red
        },
        text: {
            primary: "#333",
        },
    },
    custom: {
        hoverColor: "#5e35b1e6",
        contentBgColor: '#fffc'
    }
});

export default mainTheme