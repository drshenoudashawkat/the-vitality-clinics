import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import MedicalDepartments from "../components/MedicalDepartments";
import Services from "../components/Services";
import Insurance from "../components/Insurance";
import Tourists from "../components/Tourists";
import WomenHealth from "../components/WomenHealth";
import Infertility from "../components/Infertility";
import Ultrasound4D from "../components/Ultrasound4D";
import Statistics from "../components/Statistics";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Appointment from "../components/Appointment";
import BlogPreview from "../components/BlogPreview";
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

        <WhyChooseUs />

        <MedicalDepartments />

        <Services />

        <Insurance />

        <Tourists />

        <WomenHealth />

        <Infertility />

        <Ultrasound4D />

        <Statistics />

        <Gallery />

        <Reviews />

        <FAQ />

        <Appointment />

        <BlogPreview />

        <Contact />
      </main>

      <FloatingButtons />

      <Footer />
    </>
  );
}