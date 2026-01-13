import {Footer, HeroSection, LogoSection, MainSection, Navbar } from "../components/index.js"

function Home() {
    // const conferenceData = {
    //     title: "TechConnect 2024",
    //     date: "April 15-17, 2024",
    //     location: "San Francisco, CA",
    //     attendees: 1500,
    //     updates: [
    //       "New keynote speaker announcement: Dr. Sarah Chen on AI Ethics",
    //       "Workshop schedule now available - 20 hands-on sessions added",
    //       "Early bird registration extended until March 1st",
    //       "Virtual attendance options now available"
    //     ]
    //   };
    return (
        <>  
            <HeroSection />
            <MainSection/>
            <Footer />
        </>
    )
}

export default Home
