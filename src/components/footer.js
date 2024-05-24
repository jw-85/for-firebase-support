"use client"

import React from "react";
import Link from 'next/link';
import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Divider from "@mui/material/Divider";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://drft.app/">
                drft group
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    const theme = useTheme();
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <Container>
            <Box sx={{ mb: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box
                        component={Link}
                        href="/"
                    >
                        <Box
                            component='img'
                            src="/drft-logo.png"
                            sx={{
                                mr: 2,
                                height: { xs: 25, md: 30 },
                            }}
                        />
                    </Box>
                </Box>
                <Stack direction="row" spacing={2}>
                    <Button
                        id="business-apps-button"
                        onClick={handleOpenDialog}
                    >
                        Business Apps
                    </Button>
                    <Dialog
                        onClose={handleCloseDialog}
                        aria-labelledby="business-apps-dialog"
                        open={dialogOpen}
                        fullScreen={fullScreen}
                    >
                        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                            drft business apps
                        </DialogTitle>
                        <IconButton
                            aria-label="close"
                            onClick={handleCloseDialog}
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
                            <Typography gutterBottom>
                                Sail smoothly into efficient business management with drft! Specializing in B2B solutions, our suite of apps are crafted to revolutionize how businesses in the boating industry manage their watercraft, members, bookings and more.
                            </Typography>
                            {/* <Typography gutterBottom>
                                At drft, we understand the unique challenges faced by marine businesses and offer tailored tools to streamline operations, enhance customer engagement, and navigate the seas of business with ease.
                            </Typography>
                            <Typography gutterBottom>
                                Discover how our applications can anchor your business in success!
                            </Typography> */}
                            <List sx={{ pt: 2 }}>
                                <ListItem
                                    component={Link}
                                    href="/clubs"
                                    onClick={handleCloseDialog}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <ChevronRightIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary="Clubs" secondary="Watercraft club management." />
                                </ListItem>
                                <ListItem
                                    component={Link}
                                    href="/charter"
                                    onClick={handleCloseDialog}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <ChevronRightIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary="Charter" secondary="Coming soon - vessle and booking management app." />
                                </ListItem>
                            </List>
                        </DialogContent>
                        {/* <DialogActions>
                            <Button autoFocus onClick={handleCloseDialog}>
                                Save changes
                            </Button>
                        </DialogActions> */}
                    </Dialog>
                    <Button component={Link} href="/map" >
                        drft map
                    </Button>
                    <Button component={Link} href="/contact" >
                        Get in touch
                    </Button>
                </Stack>
            </Box>
            <Divider />
            <Box sx={{ mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Copyright />
                </Box>
                <Stack direction="row" spacing={1}>
                    <IconButton aria-label="x" component={Link} href="https://x.com/drftapp" target="_blank">
                        <XIcon />
                    </IconButton>
                    <IconButton aria-label="facebook" component={Link} href="https://facebook.com/drftapp" target="_blank">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="instagram" component={Link} href="https://instagram.com/drftapp" target="_blank">
                        <InstagramIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    )
}