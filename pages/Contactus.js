/* eslint-disable @next/next/no-page-custom-font */
import Section2 from "../src/components/Contactus/Section2"
import Hero from "../src/components/Contactus/hero"
import Section1 from "../src/components/Contactus/Section1"
import Footer from "../src/components/Contactus/Footer"
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
            <Footer />



        </>
    )

}