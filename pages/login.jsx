import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Login.module.css';

export default function Login() {
  // login handler
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    console.log('Login');
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
          />

          <p className={styles.userMsg}>Enter a valid email address</p>

          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
}
