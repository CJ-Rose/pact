import Head from 'next/head'
import Header from '../components/header'
import Menu from '../components/menu'

export default function Home() {
  return (
    <div>
      <Head>
        <title>pact</title>
        <meta name="description" content="facilitate group commitments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Menu />
      </main>

      <footer>
      </footer>

    </div>
  )
}
