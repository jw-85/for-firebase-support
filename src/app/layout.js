import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { getAuthenticatedAppForUser } from "@/lib/firebase/serverApp";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import CssBaseline from '@mui/material/CssBaseline';
import LayoutScaffolding from './scaffold';
// Force next.js to treat this route as server-side rendered
// Without this line, during the build process, next.js will treat this route as static and build a static HTML file for it
export const dynamic = "force-dynamic";

export const metadata = {
  title: 'Welcome | drft',
  description: 'Welcome to drft, the ultimate online platform for boat owners and boat club members. Whether you\'re a proud boat owner or a dedicated club member, drft offers an innovative and user-friendly way to manage your vessels effortlessly. Stay connected with co-owners and friends, sharing updates, schedules, and memorable moments on the water. Our intuitive interface allows for easy tracking of maintenance, trip planning, and financial management. Join the drft community today and transform your boating experience into an organized, social, and enjoyable journey!',
};

export default async function RootLayout({ children }) {
  const { currentUser } = await getAuthenticatedAppForUser();

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <LayoutScaffolding children={children} initialUser={currentUser?.toJSON()} />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}