import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, CalendarCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-14 text-white">

      <div className="mx-auto max-w-7xl px-5 sm:px-6">


        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">





          {/* Brand */}

          <div>

            <h2 className="text-3xl font-extrabold text-white">
              The Vitality Clinics
            </h2>


            <p className="mt-5 leading-7 text-gray-400">
              A trusted medical clinic in Hurghada providing comprehensive
              healthcare services for residents, expatriates, tourists, and
              international patients.
            </p>


            <p className="mt-4 leading-7 text-gray-400">
              Professional doctors, advanced diagnostics, women's health,
              4D ultrasound, emergency care, and tourist medical services.
            </p>


          </div>






          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold">
              Quick Links
            </h3>


            <div className="mt-5 space-y-3 text-gray-400">


              <Link
                href="#home"
                className="block hover:text-white"
              >
                Home
              </Link>


              <Link
                href="#about"
                className="block hover:text-white"
              >
                About Us
              </Link>


              <Link
                href="#services"
                className="block hover:text-white"
              >
                Medical Services
              </Link>


              <Link
                href="#tourists"
                className="block hover:text-white"
              >
                Tourist Healthcare
              </Link>


              <Link
                href="#appointment"
                className="flex items-center gap-2 hover:text-white"
              >
                <CalendarCheck size={17}/>
                Book Appointment
              </Link>


              <Link
                href="#contact"
                className="block hover:text-white"
              >
                Contact Us
              </Link>


            </div>

          </div>






          {/* Services */}

          <div>

            <h3 className="text-xl font-bold">
              Medical Services
            </h3>


            <div className="mt-5 space-y-3 text-gray-400">


              <Link href="#services" className="block hover:text-white">
                Internal Medicine
              </Link>


              <Link href="#women-health" className="block hover:text-white">
                Women's Health & Gynecology
              </Link>


              <Link href="#fetal-medicine" className="block hover:text-white">
                Fetal Medicine Unit
              </Link>


              <Link href="#ultrasound" className="block hover:text-white">
                Advanced 4D Ultrasound
              </Link>


              <Link href="#tourists" className="block hover:text-white">
                Medical Tourism
              </Link>


              <p>
                Emergency Medical Care
              </p>


            </div>

          </div>







          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold">
              Contact Information
            </h3>


            <div className="mt-5 space-y-4 text-gray-400">



              <a
                href="tel:+201281270005"
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone size={18}/>
                +20 128 127 0005
              </a>





              <a
                href="mailto:vitalitymedicalcare@gmail.com"
                className="flex items-center gap-3 hover:text-white"
              >
                <Mail size={18}/>
                Email Us
              </a>





              <a
                href="https://share.google/BQGURfwiWLWdd14pb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <MapPin size={18}/>
                Located in the Heart of Hurghada
              </a>






              <a
                href="https://wa.me/201281270005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <MessageCircle size={18}/>
                WhatsApp 24/7
              </a>



            </div>


          </div>



        </div>







        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">


          <p>
            © 2026 Vitality Medical Care. All rights reserved.
          </p>


          <p className="mt-2 text-sm">
            The Vitality Clinics | Trusted Healthcare Excellence in Hurghada,
            Egypt
          </p>


        </div>



      </div>


    </footer>
  );
}