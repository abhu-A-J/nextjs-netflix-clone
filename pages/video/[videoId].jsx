import Modal from 'react-modal';
import { useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import cls from 'classnames';

import Navbar from '../../components/Navbar';
import styles from '../../styles/Video.module.css';

Modal.setAppElement('#__next');

export default function Video() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Navbar />
      <Modal
        isOpen={true}
        contentLabel="Watch Video"
        onRequestClose={() => {
          router.back();
        }}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        {/* Youtube Embed Iframe */}
        <iframe
          className={styles.videoPlayer}
          id="ytplayer"
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&controls=0&rel=0&origin=http://example.com`}
          frameborder="0"
        />

        {/* Modal Body */}
        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{'Time'}</p>
              <p className={styles.title}>{'title'}</p>
              <p className={styles.description}>{'description'}</p>
            </div>
            <div className={styles.col2}>
              <p className={cls(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{'channelTitle'}</span>
              </p>
              <p className={cls(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{'viewCount'}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
