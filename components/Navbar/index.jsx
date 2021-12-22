import Image from 'next/image';
import Link from 'next/Link';
import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';

import styles from './index.module.css';

import { magic } from '../../lib/magic-client';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [email, setEmail] = useState('');

  const router = useRouter();

  const toggleDropdown = (e) => {
    e.preventDefault();
    setShowDropdown((prevState) => !prevState);
  };

  const handleSignout = async (e) => {
    e.preventDefault();
    try {
      await magic.user.logout();
      router.push('/login');
    } catch (err) {
      console.error('Error logging out user', err);
    }
  };

  useEffect(async () => {
    console.log('Running effect');
    try {
      const { email, publicAddress } = await magic.user.getMetadata();
      console.log(email);
      if (email) {
        setEmail(email);
      }
    } catch (err) {
      console.error('Error getting user metadata', err);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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

        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem2}>
            <Link href="/browse/my-list" passHref>
              <a>My List</a>
            </Link>
          </li>
        </ul>

        {/* Navigation */}
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={toggleDropdown}>
              <p className={styles.username}>{email}</p>
              <Image
                src="/expandeMore.svg"
                alt="Expande the dropdown to see the options"
                width={24}
                height={24}
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <a className={styles.linkName} onClick={handleSignout}>
                    Sign Out
                  </a>
                  <div className={styles.lineWrapper} />
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
