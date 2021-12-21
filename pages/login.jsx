import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../styles/Login.module.css';

export default function Login() {
  const [userMsg, setUserMsg] = useState('');
  const [email, setEmail] = useState('');

  const { push } = useRouter();

  // Email Change Evenet
  const handleOnChangeEmail = (e) => {
    setUserMsg('');
    setEmail(e.target.value);
  };

  // login handler
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    console.log('Login');

    if (email) {
      // route to dashboard
      push('/');
    } else {
      // show the user message
      setUserMsg('Enter your email!');
    }
  };

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

          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
}
