import { CalendarCheck, Phone, Mail, MessageCircle } from "lucide-react";

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="bg-emerald-600 py-20 sm:py-24"
    >

      <div className="mx-auto max-w-5xl px-5 sm:px-6 text-center">


        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
          Book Your Medical Appointment
        </span>




        <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-5xl">
          Schedule Your Healthcare Appointment in Hurghada
        </h2>




        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-emerald-100 sm:text-lg sm:leading-8">
          Book your appointment at The Vitality Clinics with experienced
          doctors and medical specialists in Hurghada. We provide comprehensive
          healthcare services for residents, expatriates, tourists, and
          international patients including consultations, diagnostics,
          women's health, pregnancy care, and urgent medical assistance.
        </p>





        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">





          <a
            href="tel:+201281270005"
            className="flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-lg transition hover:scale-105"
          >
            <Phone size={22} />
            Call Now
          </a>





          <a
            href="https://wa.me/201281270005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
          >
            <MessageCircle size={22} />
            WhatsApp Booking
          </a>





          <a
            href="mailto:vitalitymedicalcare@gmail.com"
            className="flex items-center justify-center gap-3 rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-emerald-700"
          >
            <Mail size={22} />
            Send Email
          </a>





          <a
            href="#contact"
            className="flex items-center justify-center gap-3 rounded-xl bg-slate-900 px-8 py-4 font-bold text-white transition hover:bg-slate-800"
          >
            <CalendarCheck size={22} />
            Contact Clinic
          </a>



        </div>



      </div>


    </section>
  );
}