import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Insurance from "../components/Insurance";
import Tourists from "../components/Tourists";
import WomenHealth from "../components/WomenHealth";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Services />

        <Insurance />

        <Tourists />

        <WomenHealth />

        <Reviews />

        <Contact />
      </main>

      <Footer />

      <FloatingButtons />
    </>
  );
}