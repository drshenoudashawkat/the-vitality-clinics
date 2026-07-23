import Link from "next/link";
import {
  Scissors,
  Stethoscope,
  ShieldCheck,
  Activity,
  HeartPulse,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Minor Surgical Procedures",
    description:
      "Professional minor surgical procedures including wound management, suturing, abscess care, and outpatient surgical treatments.",
  },
  {
    icon: Stethoscope,
    title: "General Surgery Consultation",
    description:
      "Comprehensive surgical consultations with careful assessment, diagnosis, and personalized treatment planning.",
  },
  {
    icon: Activity,
    title: "Emergency Surgical Care",
    description:
      "Fast evaluation and initial management of urgent surgical conditions and injuries.",
  },
  {
    icon: HeartPulse,
    title: "Postoperative Follow-up",
    description:
      "Continuous follow-up care after surgical procedures to ensure proper healing and recovery.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Professional Care",
    description:
      "Patient-focused surgical services following modern medical standards and safety protocols.",
  },
];

export default function GeneralSurgeryPage() {
  return (
    <main className="bg-white">

      <section className="bg-gradient-to-br from-emerald-50 to-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              General Surgery Department
            </span>


            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              General Surgery Services in Hurghada
            </h1>


            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides professional general surgery
              consultations and outpatient surgical services in Hurghada.
              Our medical team offers accurate assessment, safe procedures,
              and personalized care for every patient.
            </p>


            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white transition hover:bg-emerald-700"
              >
                <CalendarCheck size={22} />
                Book Consultation
              </Link>


              <a
                href="tel:+201281270005"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-600 px-7 py-4 font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                <Stethoscope size={22} />
                Call Clinic
              </a>

            </div>

          </div>

        </div>

      </section>



      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {

              const Icon = service.icon;

              return (

                <div
                  key={service.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <Icon
                    size={40}
                    className="text-emerald-600"
                  />


                  <h2 className="mt-6 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h2>


                  <p className="mt-4 leading-7 text-gray-600">
                    {service.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-extrabold text-slate-900">
            Professional Surgical Care in Hurghada
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Whether you need a surgical consultation, minor procedure,
            wound care, or follow-up after surgery, The Vitality Clinics
            provides accessible and professional medical support.
          </p>

        </div>

      </section>


    </main>
  );
}