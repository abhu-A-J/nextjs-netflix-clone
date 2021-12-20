import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import SectionCards from '../components/SectionCards';

const disneyVidoes = [
  {
    imgUrl:
      'https://github.com/kulkarniankita/discover-videos/blob/main/public/static/clifford.webp?raw=true',
  },

  {
    imgUrl:
      'https://github.com/kulkarniankita/discover-videos/blob/main/public/static/clifford.webp?raw=true',
  },

  {
    imgUrl:
      'https://github.com/kulkarniankita/discover-videos/blob/main/public/static/clifford.webp?raw=true',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
      </Head>
      <Navbar userName="demo@gmail.com" />

      <Banner
        title="Spiderman"
        subTitle="Far from home"
        imageUrl="https://github.com/kulkarniankita/discover-videos/blob/main/public/static/clifford.webp?raw=true"
      />

      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" vidoes={disneyVidoes} size="large" />

        <SectionCards
          title="Productivity"
          vidoes={disneyVidoes}
          size="medium"
        />

        <SectionCards
          title="Cartoon"
          vidoes={disneyVidoes}
          size="small"
        />
      </div>
    </div>
  );
}
