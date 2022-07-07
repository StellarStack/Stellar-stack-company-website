/* eslint-disable @next/next/no-page-custom-font */
import Footer from "../src/components/Aboutus/Footer"
import Hero from "../src/components/Aboutus/hero"
import Section1 from "../src/components/Aboutus/Section1"
import Section2 from "../src/components/Aboutus/Section2"
import Section3 from "../src/components/Aboutus/Section3"
import Head from "next/head"


export default function MyApp() {
    return (
        <>
         <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;700&display=swap" rel="stylesheet" />

            </Head>
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Footer />




        </>
    )
}