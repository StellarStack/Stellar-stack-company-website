/* eslint-disable @next/next/no-page-custom-font */
import Header from "../src/components/Support/header"
import Section1 from "../src/components/Support/Section1"
import Section2 from "../src/components/Support/Section2"
import Footer from "../src/components/Support/Footer"
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
            <Section2 />
            <Footer /> 
        </div>
        </>
    )

}