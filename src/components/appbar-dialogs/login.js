'use client';

import * as React from 'react';
import { signInUserByEmail } from '@/lib/firebase/auth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function DialogLogin({ handleClose, setDialogPage }) {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const response = await signInUserByEmail(data.get('email'), data.get('password'));
      console.log(response);
      if (response.status === "error") {
        setAlertMessage(response.message);
        setAlertOpen(true);
        return;
      } else {
        handleClose();
      }
    } catch (error) {
      setAlertMessage("Error signing in with email and password");
      setAlertOpen(true);
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
      <DialogTitle id="responsive-dialog-title">
        {"Login to drft"}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <DialogContentText>
          Log into your drft account to access your account and settings.
        </DialogContentText>
        <Box
          sx={{
            my: 2,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={{ sm: 2, md: 3 }} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Email Address
              </Typography>
              <TextField
                margin="normal"
                variant="standard"
                required
                fullWidth
                id="email"
                // label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Password
              </Typography>
              <TextField
                margin="normal"
                variant="standard"
                required
                fullWidth
                name="password"
                // label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Typography variant="body2" component={Button} onClick={() => setDialogPage('reset-password')}>
                Forgot password?
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" component={Button} onClick={() => setDialogPage('sign-up')}>
                Don't have an account? Sign Up
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Snackbar
          open={alertOpen}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert
            onClose={handleCloseAlert}
            severity="error"
            // variant="filled"
            sx={{ width: '100%' }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleCloseAlert}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {alertMessage}
          </Alert>
        </Snackbar>
        </DialogContent>
        {/* diable submit button if email and password are null */}
      <DialogActions>
        <Button variant="contained" type="submit" autoFocus>
          Login
        </Button>
      </DialogActions>
    </Box>
  );
}