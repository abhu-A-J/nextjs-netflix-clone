import Link from 'next/link';
import Card from '../Card';

import styles from './index.module.css';

export default function SectionCards(props) {
  // Props
  const { title, vidoes, size = 'medium' } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.cardWrapper}>
        {vidoes.map((video, index) => {
          return (
            <Link href={`/video/${video.id}`} key={index + video.imgUrl}>
              <a>
                <Card imgUrl={video.imgUrl} size={size} id={index} />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
