import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import MedicalDepartments from "../components/MedicalDepartments";
import Services from "../components/Services";
import Insurance from "../components/Insurance";
import Tourists from "../components/Tourists";
import WomenHealth from "../components/WomenHealth";
import FetalMedicine from "../components/Infertility";
import Ultrasound4D from "../components/Ultrasound4D";
import Statistics from "../components/Statistics";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Appointment from "../components/Appointment";
import BlogPreview from "../components/BlogPreview";
import Contact from "../components/Contact";
import Location from "../components/Location";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import SectionDivider from "../components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-28 sm:pt-32">

        <Hero />

        <SectionDivider />

        <About />

        <SectionDivider />

        <WhyChooseUs />

        <SectionDivider />

        <MedicalDepartments />

        <SectionDivider />

        <Services />

        <SectionDivider />

        <Insurance />

        <SectionDivider />

        <Tourists />

        <SectionDivider />

        <WomenHealth />

        <SectionDivider />

        <FetalMedicine />

        <SectionDivider />

        <Ultrasound4D />

        <SectionDivider />

        <Statistics />

        <SectionDivider />

        <Reviews />

        <SectionDivider />

        <FAQ />

        <SectionDivider />

        <Appointment />

        <SectionDivider />

        <BlogPreview />

        <SectionDivider />

        <Contact />

        <SectionDivider />

        <Location />

      </main>

      <FloatingButtons />

      <Footer />
    </>
  );
}