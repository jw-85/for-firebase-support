'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import StarIcon from '@mui/icons-material/StarBorder';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const tiers = [
    {
        title: 'Free',
        price: '0',
        description: [
            '5 members included',
            '2 watercraft',
            'All features',
            'Help center access',
        ],
        buttonText: 'Sign up for free',
        buttonHref: '/clubs/create-account?plan=free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Best starter option',
        price: '20',
        description: [
            '15 members included',
            '10 watercraft',
            '30 day trial',
            'Email support',
        ],
        buttonText: 'Get started',
        buttonHref: '/clubs/create-account?plan=pro',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '55',
        description: [
            'unlimited members',
            'unimited watercraft',
            'Phone & email support',
            'Account manager',
        ],
        buttonText: 'Contact us',
        buttonHref: '/clubs/contact?subject=Clubs Enterprise Plan',
        buttonVariant: 'outlined',
    },
];

export default function ClubsPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Ref for the pricing table
    const pricingRef = useRef(null);

    // Function to handle scroll on button click
    const scrollToPricing = () => {
        pricingRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box>

            {/* Hero Section */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                height: 400,
            }}>
                {/* Background Image */}
                <Image
                    src="/path-to-hero-image.jpg" // Replace with your image path
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />

                {/* Overlay */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust overlay color and opacity
                }} />

                {/* Text and Button */}
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    textAlign: 'center',
                    p: 2, // Padding for mobile responsiveness
                }}>
                    <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom>
                        Effortless Club Management
                    </Typography>
                    <Typography variant={isMobile ? 'body2' : 'body1'} paragraph>
                        drft clubs is here to make running your watercraft club a breeze. Say goodbye to the headache of juggling memberships and bookings – we’ve got it covered. This app is all about making your life easier and your club more enjoyable for your members.
                    </Typography>
                    <Button variant="contained" color="primary" onClick={scrollToPricing}>
                        View Plans
                    </Button>
                </Box>
            </Box>

            {/* Section 1 */}
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center" sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Making Club Management a Walk in the Park
                        </Typography>
                        <Typography paragraph>
                            Managing a marine club can be tough, but 'drft clubs' makes it simple. With our easy-to-use tools, you'll spend less time on paperwork and more time doing what you love. Your members will appreciate the smooth experience, from joining the club to booking their next adventure.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image
                            src="/path-to-your-image1.jpg"
                            alt="Club Management"
                            width={500}
                            height={300}
                            layout="responsive"
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Section 2 */}
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center" direction="row-reverse" sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            A User Experience Everyone Loves
                        </Typography>
                        <Typography paragraph>
                            We believe managing your club should be as enjoyable as a day at sea. That's why 'drft clubs' is designed to be super user-friendly. It's a win-win: your staff will find it a cinch to use, and your members will love the straightforward way they can interact with the club.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image
                            src="/path-to-your-image2.jpg"
                            alt="User Experience"
                            width={500}
                            height={300}
                            layout="responsive"
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Section 3 */}
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center" sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Charting New Waters in Marine Management
                        </Typography>
                        <Typography paragraph>
                            Think of drft clubs as your trusty first mate in the world of marine business. As we add new features, like handling watercraft maintenance, we’re not just building an app – we’re creating a community of happy club owners and members. Ready to join us on this exciting journey?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ position: 'relative', height: 300 }}>
                            <Image
                                src="/path-to-your-image3.jpg"
                                alt="Future of Management"
                                layout="fill"
                                objectFit="cover"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Pricing Table Section */}
            <Container ref={pricingRef} disableGutters maxWidth="sm" sx={{ pt: 2, pb: 6 }}>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Pricing
                </Typography>
                <Typography paragraph align="center">
                    Quickly build an effective pricing table for your potential customers with
                    this layout. It&apos;s built with default MUI components with little
                    customization.
                </Typography>
            </Container>
            <Container maxWidth="md">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /mo
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="left"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button component={Link} href={tier.buttonHref} fullWidth variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Feature Comparison Section */}
            <Box sx={{ pt: 2, my: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Feature Comparison
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Feature</TableCell>
                                <TableCell align="center">Free</TableCell>
                                <TableCell align="center">Pro</TableCell>
                                <TableCell align="center">Enterprise</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Club Features */}
                            <TableRow>
                                <TableCell>Club</TableCell>
                                <TableCell align="center">Basic Features</TableCell>
                                <TableCell align="center">Advanced Features</TableCell>
                                <TableCell align="center">All Features</TableCell>
                            </TableRow>
                            {/* Members Features */}
                            <TableRow>
                                <TableCell>Members</TableCell>
                                <TableCell align="center">Limited Access</TableCell>
                                <TableCell align="center">Full Access</TableCell>
                                <TableCell align="center">Premium Access</TableCell>
                            </TableRow>
                            {/* Watercraft Features */}
                            <TableRow>
                                <TableCell>Watercraft</TableCell>
                                <TableCell align="center">Basic Management</TableCell>
                                <TableCell align="center">Enhanced Management</TableCell>
                                <TableCell align="center">Comprehensive Management</TableCell>
                            </TableRow>
                            {/* Account Features */}
                            <TableRow>
                                <TableCell>Account</TableCell>
                                <TableCell align="center">Standard Support</TableCell>
                                <TableCell align="center">Priority Support</TableCell>
                                <TableCell align="center">24/7 Support</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}