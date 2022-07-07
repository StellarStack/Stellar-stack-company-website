/* eslint-disable @next/next/no-page-custom-font */
import Footer from "../src/components/Home/Footer"
import Header from "../src/components/Home/header"
import Hero from "../src/components/Home/hero"
import Section1 from "../src/components/Home/section1"
import Section2 from "../src/components/Home/Section2"
import Section3 from "../src/components/Home/section3"
import Section4 from "../src/components/Home/section4"
import Section5 from "../src/components/Home/section5"
import Section6 from "../src/components/Home/section6"
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
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
   </div>
</> 
  )

}