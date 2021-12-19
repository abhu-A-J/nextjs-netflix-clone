import Image from 'next/image';
import Link from 'next/Link';
import { useState } from 'react';

import styles from './index.module.css';

export default function Navbar(props) {
  // Props
  const { userName } = props;

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setShowDropdown((prevState) => !prevState);
  };

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
              <p className={styles.username}>{userName}</p>
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
                  <Link href="/login" passHref>
                    <a className={styles.linkName}>Sign Out of Netflix</a>
                  </Link>
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
