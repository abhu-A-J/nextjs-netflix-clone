import '../styles/globals.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { magic } from '../lib/magic-client';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // effect to check and redirect based on user login status
  useEffect(async () => {
    const isLoggedIn = await magic.user.isLoggedIn();

    if (isLoggedIn) {
      router.push('/');
    } else {
      router.push('/login');
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
