import { CalendarCheck, Phone, Mail } from "lucide-react";

export default function Appointment() {
  return (
    <section className="bg-emerald-600 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
          Book Your Appointment
        </span>

        <h2 className="mt-6 text-4xl font-extrabold text-white">
          Your Health Starts Here
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-emerald-100">
          Schedule your appointment with our experienced medical team. We provide
          comprehensive healthcare services for residents, expatriates, and
          tourists in Hurghada with modern diagnostics and personalized care.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="tel:+201281270005"
            className="flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-lg transition hover:scale-105"
          >
            <Phone size={22} />
            Call Now
          </a>

          <a
            href="mailto:vitalitymedicalcare@gmail.com"
            className="flex items-center gap-3 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-emerald-700"
          >
            <Mail size={22} />
            Send Email
          </a>

          <a
            href="#contact"
            className="flex items-center gap-3 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            <CalendarCheck size={22} />
            Book Appointment
          </a>

        </div>

      </div>
    </section>
  );
}