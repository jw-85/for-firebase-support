import * as React from 'react';
import { getAuthenticatedAppForUser } from "@/lib/firebase/serverApp";
import { user } from '@/lib/firebase/auth';

import WelcomePage from './welcome';
import DashboardPage from './dashboard';

export default async function HomePage() {
  const { currentUser } = await getAuthenticatedAppForUser();
  if (currentUser) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    return <WelcomePage />;
  } else if (!currentUser) {
    // No user is signed in.
    return <DashboardPage />;
  }
}