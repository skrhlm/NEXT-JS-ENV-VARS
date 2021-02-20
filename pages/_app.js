import App from 'next/app'
import '../styles/globals.css'
import Link from 'next/link'
function MyApp({ Component, pageProps, ...rest }) {
  return (
  <>
  <nav>
    <Link href="/">static</Link>
    <Link href="/initial-props">getInitialProps</Link>
    <Link href="/server-side-props">getServerSideProps</Link>
    <Link href="/static-props">getStaticProps</Link>
  </nav>
  <main>
  <Component {...pageProps} {...rest}/>
  </main>
  
  </>)
}

export default MyApp

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, appGetInitialProps:true }
}