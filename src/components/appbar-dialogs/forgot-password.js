'use client';

import * as React from 'react';
import { resetUserPassword } from '@/lib/firebase/auth';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

export default function DialogResetPassword({ handleClose }) {
  const handleResetPassword = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const response = await resetUserPassword(data.get('email'));
      console.log(response);
      if (response.status === "error") {
        alert(response.message);
        return;
      } else {
        handleClose();
      }
    } catch (error) {
      alert("Error resetting password");
    }
  };
  return (
    <Box component="form" noValidate onSubmit={handleResetPassword} sx={{ mt: 1 }}>
      <DialogTitle id="responsive-dialog-title">
        {"Reset Password"}
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
        <Box
          sx={{
            // my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button type="submit" autoFocus>
          Reset Password
        </Button>
      </DialogActions>
    </Box>
  );
}