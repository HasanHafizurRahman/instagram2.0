import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <devicePixelRatio>
      <Head>
        <title>Instagram 2.0</title>
      </Head>

      {/* header  */}
    <Header />
    <Feed />

    </devicePixelRatio>
  )
}


