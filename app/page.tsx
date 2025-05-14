import Head from 'next/head'
import Hero from './components/Hero'
import Features from './components/Features'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PropertyBox official website</title>
        <meta property="og:title" content="Crystal-num official website" key="title" />
      </Head>
      <Hero />
      <Features />
      
    </div>
  )
}
