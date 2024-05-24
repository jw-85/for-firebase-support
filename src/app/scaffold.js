'use client'

import * as React from 'react';
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppTopBar from '@/components/appbar';
import Footer from '@/components/footer';
import { firebaseConfig } from "@/lib/firebase/config";
import { onAuthStateChanged } from "@/lib/firebase/auth.js";

export default function LayoutScaffolding({ children, initialUser }) {

	const user = useUserSession(initialUser) ;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <AppTopBar user={user} />
      {/* <Toolbar /> */}
      <Container maxWidth="lg" disableGutters={true} sx={{ mb: 2 }} >
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}

function useUserSession(initialUser) {
	// The initialUser comes from the server via a server component
	const [user, setUser] = React.useState(initialUser);
	const router = useRouter();

	// Register the service worker that sends auth state back to server
	// The service worker is built with npm run build-service-worker
	React.useEffect(() => {
		if ("serviceWorker" in navigator) {
			const serializedFirebaseConfig = encodeURIComponent(JSON.stringify(firebaseConfig));
			const serviceWorkerUrl = `/auth-service-worker.js?firebaseConfig=${serializedFirebaseConfig}`
		
		  navigator.serviceWorker
			.register(serviceWorkerUrl)
			.then((registration) => console.log("scope is: ", registration.scope));
		}
	  }, []);

  React.useEffect(() => {
		const unsubscribe = onAuthStateChanged((authUser) => {
			setUser(authUser)
		})

		return () => unsubscribe()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		onAuthStateChanged((authUser) => {
			if (user === undefined) return

			// refresh when user changed to ease testing
			if (user?.email !== authUser?.email) {
				router.refresh()
			}
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	return user;
}