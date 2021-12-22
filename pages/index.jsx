import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import SectionCards from '../components/SectionCards';

import { getPopularVideos, getVidoes } from '../lib/vidoes';

export default function Home(props) {
  // Props
  const { disneyVidoes, productivityVidoes, travelVidoes, popularVidoes } =
    props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Banner
          videoId="JbE8XJyNnZk"
          title="Spiderman"
          subTitle="Far from home"
          imageUrl="https://github.com/kulkarniankita/discover-videos/blob/main/public/static/clifford.webp?raw=true"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" vidoes={disneyVidoes} size="large" />

          <SectionCards title="Travel" vidoes={travelVidoes} size="small" />

          <SectionCards
            title="Productivity"
            vidoes={productivityVidoes}
            size="medium"
          />

          <SectionCards title="Popular" vidoes={popularVidoes} size="small" />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const disneyVidoes = await getVidoes('disney');
  const productivityVidoes = await getVidoes('productivity');
  const travelVidoes = await getVidoes('travel');

  const popularVidoes = await getPopularVideos();

  return {
    props: {
      disneyVidoes,
      productivityVidoes,
      travelVidoes,
      popularVidoes,
    },
  };
}
