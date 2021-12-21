import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../styles/Login.module.css';

import { magic } from '../lib/magic-client';

export default function Login() {
  const [userMsg, setUserMsg] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // Email Change Evenet
  const handleOnChangeEmail = (e) => {
    setUserMsg('');
    setEmail(e.target.value);
  };

  // login handler
  const handleLoginWithEmail = async (e) => {
    e.preventDefault();

    if (email) {
      // route to dashboard
      setIsLoading(true);
      try {
        const didToken = await magic.auth.loginWithMagicLink({ email });
        if (didToken) {
          router.push('/');
        }
      } catch (err) {
        console.error('Error logging in', err);
        setIsLoading(false);
      }
    } else {
      // show the user message
      setUserMsg('Enter your email!');
    }
  };

  const handleComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Login</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link href="/" passHref>
            <a className={styles.logoLink}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/netflixLogo.svg"
                  alt="Netflix Logo"
                  width={128}
                  height={34}
                />
              </div>
            </a>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>

          <input
            type="text"
            placeholder="Email Address"
            className={styles.emailInput}
            value={email}
            onChange={handleOnChangeEmail}
          />

          <p className={styles.userMsg}>{userMsg}</p>

          <button
            onClick={handleLoginWithEmail}
            className={styles.loginBtn}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
      </main>
    </div>
  );
}
