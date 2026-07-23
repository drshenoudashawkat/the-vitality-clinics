import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-14 text-white">

      <div className="mx-auto max-w-7xl px-5 sm:px-6">


        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">



          {/* Brand */}

          <div>

            <h2 className="text-3xl font-extrabold text-white">
              The Vitality Clinics
            </h2>


            <div className="mt-3 h-1 w-20 rounded-full bg-emerald-500" />


            <p className="mt-5 leading-7 text-slate-300">
              A trusted medical clinic in Hurghada providing comprehensive
              healthcare services for residents, expatriates, tourists, and
              international patients.
            </p>


            <p className="mt-4 leading-7 text-slate-400">
              Professional specialist doctors, advanced diagnostics, women's
              health, 4D ultrasound, emergency care, and tourist healthcare
              services.
            </p>


          </div>





          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>


            <div className="mt-5 space-y-3 text-slate-400">


              {[
                ["#home", "Home"],
                ["#about", "About Us"],
                ["#services", "Medical Services"],
                ["#tourists", "Tourist Healthcare"],
                ["#contact", "Contact Us"],
              ].map(([href, label]) => (

                <Link
                  key={href}
                  href={href}
                  className="block transition hover:text-emerald-400"
                >
                  {label}
                </Link>

              ))}



              <Link
                href="#appointment"
                className="flex items-center gap-2 transition hover:text-emerald-400"
              >
                <CalendarCheck size={17}/>
                Book Appointment
              </Link>


            </div>


          </div>








          {/* Services */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Medical Services
            </h3>


            <div className="mt-5 space-y-3 text-slate-400">


              <Link href="#services" className="block transition hover:text-emerald-400">
                Internal Medicine
              </Link>


              <Link href="#women-health" className="block transition hover:text-emerald-400">
                Women's Health & Gynecology
              </Link>


              <Link href="#fetal-medicine" className="block transition hover:text-emerald-400">
                Fetal Medicine Unit
              </Link>


              <Link href="#4d-ultrasound" className="block transition hover:text-emerald-400">
                Advanced 4D Ultrasound
              </Link>


              <Link href="#tourists" className="block transition hover:text-emerald-400">
                Tourist Medical Care
              </Link>


              <p className="text-slate-400">
                Emergency Medical Support
              </p>


            </div>


          </div>









          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Contact Information
            </h3>


            <div className="mt-5 space-y-4 text-slate-400">


              <a
                href="tel:+201281270005"
                className="flex items-center gap-3 transition hover:text-emerald-400"
              >
                <Phone size={18}/>
                +20 128 127 0005
              </a>




              <a
                href="mailto:vitalitymedicalcare@gmail.com"
                className="flex items-center gap-3 transition hover:text-emerald-400"
              >
                <Mail size={18}/>
                Email Us
              </a>




              <a
                href="https://share.google/BQGURfwiWLWdd14pb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-emerald-400"
              >
                <MapPin size={18}/>
                Hurghada, Red Sea, Egypt
              </a>




              <a
                href="https://wa.me/201281270005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-emerald-400"
              >
                <MessageCircle size={18}/>
                WhatsApp 24/7
              </a>


            </div>


          </div>



        </div>








        <div className="mt-12 border-t border-white/10 pt-6 text-center">


          <p className="text-slate-400">
            © 2026 Vitality Medical Care. All rights reserved.
          </p>


          <p className="mt-2 text-sm text-slate-500">
            The Vitality Clinics | Trusted Healthcare Excellence in Hurghada,
            Egypt
          </p>


        </div>


      </div>


    </footer>
  );
}