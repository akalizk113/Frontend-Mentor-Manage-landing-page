import { createTheme } from '@mui/material';

const defaultTheme = createTheme();

const theme = createTheme({
   palette: {
      primary: {
         main: 'hsl(12, 88%, 59%)',
      },

      lightgray: defaultTheme.palette.augmentColor({
         color: { main: 'hsl(0, 0%, 98%)' },
         name: 'lightgray',
      }),

      darkgraylishblue: defaultTheme.palette.augmentColor({
         color: { main: 'hsl(227, 12%, 61%)' },
         name: 'darkgraylishblue',
      }),

      darkblue: defaultTheme.palette.augmentColor({
         color: { main: 'hsl(233, 12%, 13%)' },
         name: 'darkblue',
      }),
      palered: defaultTheme.palette.augmentColor({
         color: { main: 'hsl(13, 100%, 96%)' },
         name: 'palered',
      }),

      text: {
         primary: 'hsl(228, 39%, 23%)',
         secondary: 'hsl(227, 12%, 61%)',
      },
   },
   breakpoints: {
      value: {
         sm: 375,
         md: 768,
         lg: 1024,
      },
   },
   typography: {
      fontFamily: "'Be Vietnam', sans-serif",
      fontWeight: 400,
      htmlFontSize: 16,
      button: {
         fontFamily: "'Be Vietnam', sans-serif",
         fontWeight: 500,
         textTransform: 'capitalize',
      },
      h1: {
         fontFamily: "'Be Vietnam', sans-serif",
         fontWeight: 700,
         fontSize: '3.4rem',
         color: 'hsl(228, 39%, 23%)',
      },
      h2: {
         fontFamily: "'Be Vietnam', sans-serif",
         fontWeight: 700,
         fontSize: '2.2rem',
         color: 'hsl(228, 39%, 23%)',
      },
      h5: {
         fontFamily: "'Be Vietnam', sans-serif",
         fontWeight: 700,
         fontSize: '1rem',
         color: 'hsl(228, 39%, 23%)',
      },
      body1: {
         fontFamily: "'Be Vietnam', sans-serif",
         fontWeight: 400,
         fontSize: '1rem',
         color: 'hsl(227, 12%, 61%)',
      },
   },
   components: {
      MuiButton: {
         styleOverrides: {
            root: {
               color: '#ffffff',
               backgroundColor: 'hsl(12, 88%, 59%)',
               boxShadow:
                  '0px 4px 4px -2px rgb(242 95 58 / 20%), 0px 6px 8px 0px rgb(242 95 58 / 14%), 0px 2px 12px 1px rgb(242 95 58 / 12%);',
               padding: '10px 30px',
               borderRadius: '22px',
               '&:hover': {
                  backgroundColor: 'hsl(12, 88%, 72.3%)',
               },
            },
         },
      },
   },
});

export default theme;