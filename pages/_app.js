import '../styles/globals.css'
import Link from 'next/link'
function MyApp({ Component, pageProps }) {
  return (
  <>
  <nav>
    <Link href="/">static</Link>
    <Link href="/initial-props">getInitialProps</Link>
    <Link href="/server-side-props">serverSideProps</Link>
    <Link href="/static-props">getStaticProps</Link>
  </nav>
  <main>
  <Component {...pageProps} />
  </main>
  
  </>)
}

export default MyApp
