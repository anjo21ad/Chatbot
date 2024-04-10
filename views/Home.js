import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions, Grid, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ElderlyIcon from '@mui/icons-material/Elderly';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e677', 
    },
    secondary: {
      main: '#00FF00', // lime green
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
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
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          boxShadow: '0px 8px 25px rgba(0, 230, 118, 0.5)',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
      },
    },
  },
});

const Home = () => {
  const navigate = useNavigate();

  const salaryActions = [
    { title: 'Overenskomst for lærere', icon: <AccountBalanceWalletIcon />, path: '/overenskomst-for-lærere' },
    { title: 'Refusion', icon: <MonetizationOnIcon />, path: '/refusion' },
    { title: 'Lønreview', icon: <AssessmentIcon />, path: '/løn-review' },
    { title: 'Pension', icon: <ElderlyIcon />, path: '/pension' }, 
    { title: 'Arbejdstid', icon: <AccessTimeIcon />, path: '/arbejdstid' },
    { title: 'Feriepenge', icon: <BeachAccessIcon />, path: '/feriepenge' },
  ];

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          height: '90vh',
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#121212',
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: '#ffffff',
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 3,
            textShadow: '0 0 8px #00e676',
          }}
        >
          Payroll Bot
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {salaryActions.map((action, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                      {action.icon}
                      {action.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      onClick={() => navigate(action.path)}
                      sx={{
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      Udforsk
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Home;