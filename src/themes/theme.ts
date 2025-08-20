import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#eb1b25',
    },
    grey: {
      500: '#f5f5f5',
      700: '#333333',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.grey[500],
          },
        }),
      },
    },
  },
});

export default customTheme;
