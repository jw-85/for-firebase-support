'use client';

import * as React from 'react';
import Link from 'next/link'
import {
  signOut
} from "@/lib/firebase/auth.js";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DialogLogin from '@/components/appbar-dialogs/login';
import DialogResetPassword from '@/components/appbar-dialogs/forgot-password';
import DialogSignUp from '@/components/appbar-dialogs/sign-up';

export default function AppTopBar({ user }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [dialogPage, setDialogPage] = React.useState('login'); // ['login', 'sign-up', 'reset-password']
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDialogPage('login');
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    signOut();
    setAnchorElUser(null);
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box
            component={Link}
            href="/"
            // sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' }}}
            sx={{ flexGrow: 1 }}
          >
            <Box
              component='img'
              src="/drft-text-white.png"
              sx={{
                mr: 2,
                height: '25px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            />
          </Box>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          {/* <Button component={Link} href={'/login'} color="inherit">Login</Button> */}
          {
            user ?
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user.displayName} src={user.photoURL} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem component={Link} href='/profile'>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleSignOut}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
              :
              <Button onClick={user ? null : handleClickOpen} color="inherit">
                {user ? user.email : 'Login'}
              </Button>
          }
        </Toolbar>
      </AppBar>
      <Dialog
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {dialogPage === 'login' && <DialogLogin handleClose={handleClose} setDialogPage={setDialogPage} />}
        {dialogPage === 'reset-password' && <DialogResetPassword handleClose={handleClose} />}
        {dialogPage === 'sign-up' && <DialogSignUp handleClose={handleClose} setDialogPage={setDialogPage} />}
      </Dialog>
    </Box>
  );
}

// function DialogLogin({ handleClose, setDialogPage }) {
//   const handleLogin = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     try {
//       const response = await signInUserByEmail(data.get('email'), data.get('password'));
//       console.log(response);
//       if (response.status === "error") {
//         alert(response.message);
//         return;
//       }
//     } catch (error) {
//       alert("Error signing in with email and password");
//     }
//   };
//   return (
//     <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
//       <DialogTitle id="responsive-dialog-title">
//         {"Login to drft"}
//       </DialogTitle>
//       <IconButton
//         aria-label="close"
//         onClick={handleClose}
//         sx={{
//           position: 'absolute',
//           right: 8,
//           top: 8,
//           color: (theme) => theme.palette.grey[500],
//         }}
//       >
//         <CloseIcon />
//       </IconButton>
//       <DialogContent dividers>
//         <Box
//           sx={{
//             // my: 8,
//             mx: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <Grid container>
//             <Grid item xs>
//               <Typography variant="body2" component={Button} onClick={() => setDialogPage('reset-password')}>
//                 Forgot password?
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Typography variant="body2" component={Button} onClick={() => setDialogPage('sign-up')}>
//                 Don't have an account? Sign Up
//               </Typography>
//             </Grid>
//           </Grid>
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         <Button variant="contained" type="submit" autoFocus>
//           Login
//         </Button>
//       </DialogActions>
//     </Box>
//   );
// }

// function DialogResetPassword({ handleClose }) {
//   const handleResetPassword = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     try {
//       const response = await resetUserPassword(data.get('email'));
//       console.log(response);
//       if (response.status === "error") {
//         alert(response.message);
//         return;
//       }
//     } catch (error) {
//       alert("Error resetting password");
//     }
//   };
//   return (
//     <Box component="form" noValidate onSubmit={handleResetPassword} sx={{ mt: 1 }}>
//       <DialogTitle id="responsive-dialog-title">
//         {"Reset Password"}
//       </DialogTitle>
//       <IconButton
//         aria-label="close"
//         onClick={handleClose}
//         sx={{
//           position: 'absolute',
//           right: 8,
//           top: 8,
//           color: (theme) => theme.palette.grey[500],
//         }}
//       >
//         <CloseIcon />
//       </IconButton>
//       <DialogContent dividers>
//         <Box
//           sx={{
//             // my: 8,
//             mx: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         <Button type="submit" autoFocus>
//           Reset Password
//         </Button>
//       </DialogActions>
//     </Box>
//   );
// }

// function DialogSignUp({ handleClose, setDialogPage }) {
//   const handleSignUp = async (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     try {
//       const response = await registerUserByEmail(data.get('email'), data.get('password'));
//       console.log(response);
//       if (response.status === "error") {
//         alert(response.message);
//         return;
//       }
//     } catch (error) {
//       alert("Error signing up with email and password");
//     }
//   };
//   return (
//     <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 1 }}>
//       <DialogTitle id="responsive-dialog-title">
//         {"Sign Up to drft"}
//       </DialogTitle>
//       <IconButton
//         aria-label="close"
//         onClick={handleClose}
//         sx={{
//           position: 'absolute',
//           right: 8,
//           top: 8,
//           color: (theme) => theme.palette.grey[500],
//         }}
//       >
//         <CloseIcon />
//       </IconButton>
//       <DialogContent dividers>
//         <Box
//           sx={{
//             // my: 8,
//             mx: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="firstName"
//             label="First Name"
//             name="firstName"
//             autoComplete="given-name"
//             autoFocus
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="lastName"
//             label="Last Name"
//             name="lastName"
//             autoComplete="family-name"
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="new-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="allowExtraEmails" color="primary" />}
//             label="I want to receive inspiration, marketing promotions and updates via email."
//           />
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         <Button type="submit" autoFocus>
//           Sign Up
//         </Button>
//       </DialogActions>
//     </Box>
//   );
// }