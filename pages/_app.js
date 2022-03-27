import '../styles/globals.css'
import {ThemeProvider} from "styled-components";
import Layout from "../src/components/layouts/Layout";
import {RecoilRoot} from "recoil";

function MyApp({Component, pageProps}) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
