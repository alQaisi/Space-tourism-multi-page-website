import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles["text-container"]}>
          <h5 className='heading five'>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className='heading one'>SPACE</h1>
          <p className='text'>
            Let’s face it; if you want to go to space, 
            you might as well genuinely go to outer space
            and not hover kind of on the edge of it. 
            Well sit back, and relax because we’ll give 
            you a truly out of this world experience!
          </p>
        </div>
        <Link href="/destination"><p className={styles.explore}>EXPLORE</p></Link>
      </div>
    </Layout>
  );
}
