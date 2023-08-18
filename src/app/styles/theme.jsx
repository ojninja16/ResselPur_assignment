'use client'
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 900,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

});

export default theme;
