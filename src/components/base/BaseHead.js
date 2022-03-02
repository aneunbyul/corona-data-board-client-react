/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";

const BaseHead = ({ title = "corona data board", children }) => {
    return (
        <div>
            <Head>
                <title>{`corona data board : ${title.toUpperCase()}`}</title>
                {/*<link rel="canonical" href="https://www.telepix.net/index.html"/>*/}
                <meta property="og:title" content="corona data board (코로나 데이터 보드)"/>
                <meta property="og:description" content="corona data board" />
                <meta name="description" content="corona data board" />
                <meta name="keywords" content="corona data board 코로나 백신 현황 선별진료소"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
                />
                <meta property="og:site_name" content="corona data board"/>
                <meta property="og:type" content="website"/>
                {/*<meta property="og:url" content="https://telepix.net/"/>*/}
                {/*<meta property="og:image" content="https://telepix.net/main.png"/>*/}
                <link rel="icon" href="/favicon.ico" />

            </Head>
            {children}
        </div>
    );
};

export default BaseHead;
