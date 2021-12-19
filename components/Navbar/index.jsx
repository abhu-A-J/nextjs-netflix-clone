import styles from './index.module.css';

export default function Navbar(props) {
  // Props
  const { userName } = props;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a href="/" className={styles.logoLink}>
          <div className={styles.logoWrapper}>Netflix</div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem2}>My List</li>
        </ul>

        {/* Navigation */}
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn}>
              <p className={styles.username}>{userName}</p>
              {/* Expanded More icon */}
            </button>

            <div className={styles.navDropdown}>
              <div>
                <a className={styles.linkName}>Sign Out of Netflix</a>
                <div className={styles.lineWrapper} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
