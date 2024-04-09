import React from 'react';
import { Box, Button, ThemeProvider, createTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Importing the back arrow icon for the back button

// Enhanced theme customization, including typography and button styles
const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e676',
    },
    secondary: {
      main: '#00FF00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          fontWeight: 'bold',
          letterSpacing: '0.05rem',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
});

const Overenskomst = () => (
  <ThemeProvider theme={customTheme}>
    <Box
      sx={{
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center the chat window vertically
        alignItems: 'center', // Center the chat window horizontally
        backgroundColor: 'background.default',
        p: 2, // Padding for smaller screens
        position: 'relative', // Set position relative for absolute positioning of the back button
      }}
    >
      <Button
        startIcon={<ArrowBackIcon />}
        variant="contained"
        color="secondary"
        sx={{
          position: 'absolute', // Absolute positioning for the button
          bottom: '10vh', // Position the button at the bottom of the container
          left: 'calc(25% - 300px)', // Adjusted value to push the button further to the left
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
        onClick={() => window.history.back()} // Using window.history.back() to navigate to the previous page
      >
        Tilbage
      </Button>
      
      <Box
        sx={{
          width: { xs: '100%', sm: 400 }, // Responsive width for the chat window
          height: 600,
          overflow: 'hidden', // Hide overflow for smooth border radius
          borderRadius: 2, // Consistent with Material-UI theme defaults
          boxShadow: 3, // Use theme shadows for consistency
          bgcolor: 'background.paper',
        }}
      >
        <iframe
          src="https://www.stack-ai.com/embed/fcdd1b2e-ae82-4686-99e8-81fc3f378d06/6ae16ee7-a6f2-49ff-bf15-a68cecde4035/6601a2762c69a90219979dd1"
          frameBorder="0"
          title="Chatbot"
          width="100%"
          height="100%"
          allow="microphone;"
          sx={{
            borderRadius: 2, // Consistent border radius
          }}
        />
      </Box>
    </Box>
  </ThemeProvider>
);

export default Overenskomst;
