// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, useMediaQuery, ThemeProvider } from '@mui/material';
import testLogo from '../assets/testLogo.png'; // Ensure the path to the logo is correct
import customTheme from '../config/theme'; // Import the shared theme configuration

function Header() {
  // This hook provides a method to navigate programmatically between routes
  const navigate = useNavigate();

  // This hook checks the current media query and returns true if the screen is at least 'sm' size according to theme breakpoints
  const matches = useMediaQuery(customTheme.breakpoints.up('sm'));

  // Function to navigate back to the homepage
  const navigateHome = () => {
    navigate('/');
  };

  // The ThemeProvider component applies the theme to all its child components
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{
        display: 'flex', // CSS property to set flexbox layout
        alignItems: 'center', // CSS property to align items vertically in the center
        justifyContent: 'start', // CSS property to align items to the start of the flex container
        padding: matches ? '10px 20px' : '5px 10px', // Dynamic padding based on screen size
        background: customTheme.palette.background.paper, // Uses the theme to set a background color
        boxShadow: '0 2px 3px 1px rgba(0, 0, 0, .3)', // Adds shadow for depth effect
      }}>
        <Box onClick={navigateHome} sx={{
          cursor: 'pointer', // Makes the element clickable with a pointer cursor
          display: 'flex', // Ensures the logo and possibly other elements are laid out in a row
          alignItems: 'center', // Vertically centers the content within the box
          '&:hover img': { // Adds hover effects specifically to the image within this box
            boxShadow: '0 0 15px 3px rgba(255, 255, 255, 0.7)', // Glow effect on hover
            transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for the shadow effect
          },
        }}>
          <img src={testLogo} alt="Logo" style={{ 
            height: '85px', // Sets the height of the logo
            marginRight: '90px', // Adds space to the right of the logo
          }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
