import Head from 'next/head'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config'

const {publicRuntimeConfig, serverRuntimeConfig} = getConfig()

export default function Home(props) {

  console.log("from getStaticProps", props)

  const s = `
  public process:       ${process.env.NEXT_PUBLIC_EXAMPLE || undefined}\n
  process:              ${process.env.EXAMPLE || undefined}\n
  publicRuntimeConfig:  ${publicRuntimeConfig?.EXAMPLE || undefined}\n
  serverRuntimeConfig:  ${serverRuntimeConfig?.EXAMPLE || undefined}\n
  `



  return (
    <div className={styles.container}>
     <h2>This page uses getStaticProps.</h2>
     <code>
       <pre>
        {s}
      </pre>
     </code>
    </div>
  )
}


export const getStaticProps = async ({ params }) => {
  return {props: {
    works: true
  }}
}
