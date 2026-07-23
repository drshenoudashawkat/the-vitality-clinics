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
import FadeIn from "../components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-28 sm:pt-32">

        <FadeIn><Hero /></FadeIn>

        <SectionDivider />

        <FadeIn><About /></FadeIn>

        <SectionDivider />

        <FadeIn><WhyChooseUs /></FadeIn>

        <SectionDivider />

        <FadeIn><MedicalDepartments /></FadeIn>

        <SectionDivider />

        <FadeIn><Services /></FadeIn>

        <SectionDivider />

        <FadeIn><Insurance /></FadeIn>

        <SectionDivider />

        <FadeIn><Tourists /></FadeIn>

        <SectionDivider />

        <FadeIn><WomenHealth /></FadeIn>

        <SectionDivider />

        <FadeIn><FetalMedicine /></FadeIn>

        <SectionDivider />

        <FadeIn><Ultrasound4D /></FadeIn>

        <SectionDivider />

        <FadeIn><Statistics /></FadeIn>

        <SectionDivider />

        <FadeIn><Reviews /></FadeIn>

        <SectionDivider />

        <FadeIn><FAQ /></FadeIn>

        <SectionDivider />

        <FadeIn><Appointment /></FadeIn>

        <SectionDivider />

        <FadeIn><BlogPreview /></FadeIn>

        <SectionDivider />

        <FadeIn><Contact /></FadeIn>

        <SectionDivider />

        <FadeIn><Location /></FadeIn>

      </main>

      <FloatingButtons />

      <Footer />
    </>
  );
}