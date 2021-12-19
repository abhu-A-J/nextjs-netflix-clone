import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

import Banner from '../components/Banner';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
      </Head>

      <h1>Netflix Clone</h1>

      {/* <Navbar /> */}

      <Banner
        title="Spiderman"
        subTitle="Far from home"
        imageUrl="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      {/* <Card /> */}
    </div>
  );
}
