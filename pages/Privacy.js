/* eslint-disable @next/next/no-page-custom-font */
import Header from "../src/components/Privacy/header"
import Section1 from "../src/components/Privacy/Section1"
import Footer from "../src/components/Privacy/Footer"
import Head from "next/head"


export default function MyApp() {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;700&display=swap" rel="stylesheet" />

            </Head>
            <div className="">
                <Header />
                <Section1 />
                <Footer />
            </div>
        </>
    )

}