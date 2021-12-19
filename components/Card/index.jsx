import Image from 'next/image';
import styles from './index.module.css';

const classMap = {
  large: styles.lgItem,
  medium: styles.mdItem,
  small: styles.smItem,
};

export default function Card(props) {
  // Props
  const { imgUrl, size } = props;

  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image src={imgUrl} alt="" layout="fill" className={styles.cardImg} />
      </div>
    </div>
  );
}
