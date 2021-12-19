import Image from 'next/image';
import styles from './index.module.css';

export default function Banner(props) {
  // Props
  const { title, subTitle, imageUrl } = props;

  const handleOnPlay = () => {
    console.log('Play');
  };

  return (
    <div className={styles.container}>
      {/* Left Wrapper */}
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}> N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
						<Image src="/playArrow.svg" alt="Play the item" width={32} height={32}/>
              <span className={styles.playText}>
							Play
							</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={styles.bannerImg}
        style={{
          background: `url(${imageUrl})`,
        }}
      />
    </div>
  );
}
