import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import userContext from './core/User/context';
import router from "./router";
import User from './core/User';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import mainTheme from './theme';

import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const user = new User()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <userContext.Provider value={user}>
      <RouterProvider router={router} />
      </userContext.Provider>
    </ThemeProvider>
  </StrictMode>,
)
