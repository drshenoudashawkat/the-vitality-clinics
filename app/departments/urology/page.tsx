import Link from "next/link";
import {
  Droplets,
  Stethoscope,
  Activity,
  ShieldCheck,
  HeartPulse,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Urology Consultation",
    description:
      "Professional urological evaluation and treatment for urinary tract, kidney, and male health conditions.",
  },
  {
    icon: Activity,
    title: "Urinary Tract Problems",
    description:
      "Diagnosis and management of urinary infections, bladder problems, urinary symptoms, and related conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Kidney & Stone Management",
    description:
      "Medical assessment and follow-up for kidney stones, kidney-related concerns, and urinary system disorders.",
  },
  {
    icon: Stethoscope,
    title: "Male Health Services",
    description:
      "Comprehensive care for male urological health concerns with confidential professional consultations.",
  },
  {
    icon: HeartPulse,
    title: "Urological Follow-up Care",
    description:
      "Continuous monitoring, treatment plans, and personalized follow-up to support long-term urinary health.",
  },
];

export default function UrologyPage() {
  return (
    <main className="bg-white">

      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Urology Department
            </span>


            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Urology Care & Urinary Health Services in Hurghada
            </h1>


            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides specialized urology services
              including urinary tract care, kidney health assessment, male
              health consultations, and personalized treatment plans with
              professional medical support.
            </p>


            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 font-bold text-white transition hover:bg-emerald-700"
              >
                <CalendarCheck size={22} />
                Book Appointment
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
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <Icon
                    size={42}
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
            Professional Urology Care You Can Trust
          </h2>


          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our urology services focus on accurate diagnosis, effective
            treatment, and comfortable patient care for urinary and male
            health conditions.
          </p>

        </div>

      </section>

    </main>
  );
}