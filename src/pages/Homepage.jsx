import Benefits from "../components/Benefits";
import ContactUs from "../components/ContactUs";
import Countdown from "../components/Countdown";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Insights from "../components/Insights";
import Navbar from "../components/Nav";
import Sponsor from "../components/Sponsor";
import Success from "../components/Success";

function Homepage() {
    return (
        <>
            <Navbar />
            <main className="">
                <Hero />
                <Sponsor />
                <Details />
                <Countdown />
                <Benefits />
                <Success />
                <Insights />
                <ContactUs />
                <Footer />
            </main>
        </>
    )

}

export default Homepage;