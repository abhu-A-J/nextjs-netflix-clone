import styles from '../../styles/Video.module.css';

import { Router, useRouter } from 'next/router';

export default function Video() {
  const router = useRouter();
  return (
    <div>
      <p>Video route {router.query.videoId}</p>
    </div>
  );
}
