import '../styles/globals.css';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { magic } from '../lib/magic-client';

import Loader from '../components/Loader';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  // remove loader once routing is successful
  const handleComplete = () => {
    setIsLoading(false);
  };

  // effect to check and redirect based on user login status
  useEffect(async () => {
    // check user login status
    const isLoggedIn = await magic.user.isLoggedIn();

    // if not loggedn in, redirect to login page
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      // if loggedIn and trying to access login page, redirect to home
      if (isLoggedIn && router.pathname === '/login') {
        router.push('/');
      }
    }
  }, []);

  // listen to events change to stop flicker event
  useEffect(() => {
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (isLoading) {
    return <Loader />;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
