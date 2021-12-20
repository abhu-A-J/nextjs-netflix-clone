import Image from 'next/image';
import { useState } from 'react';
import cls from 'classnames';
import { motion } from 'framer-motion';

import styles from './index.module.css';

const classMap = {
  large: styles.lgItem,
  medium: styles.mdItem,
  small: styles.smItem,
};

const FALLBACK_URL =
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export default function Card(props) {
  // Props
  const { imgUrl = FALLBACK_URL, size = 'medium', id } = props;

  const [fallbackImage, setFallbackImg] = useState(imgUrl);

  const handleOnError = (e) => {
    setFallbackImg(FALLBACK_URL);
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={{ ...scale }}
      >
        <Image
          src={fallbackImage}
          alt=""
          layout="fill"
          className={styles.cardImg}
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
}
