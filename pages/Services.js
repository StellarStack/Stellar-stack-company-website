/* eslint-disable @next/next/no-page-custom-font */
import Header from "../src/components/Services/Header"
import Section1 from "../src/components/Services/Section1"
// import Footer from "../src/components/Privacy/Footer"
import Head from "next/head"
import Section2 from "../src/components/Services/Section2"
import Section3 from "../src/components/Services/Section3"
import Footer from "../src/components/Services/Footer"


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
                <Section3 />
                <Footer />
                
            </div>
        </>
    )

}