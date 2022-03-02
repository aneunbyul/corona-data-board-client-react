import '../styles/globals.css'
import {ThemeProvider} from "styled-components";
import Layout from "../src/components/layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
