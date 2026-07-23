import Link from "next/link";
import {
  Brain,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Activity,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Neurological Consultation",
    description:
      "Professional assessment and management of neurological conditions affecting the brain, nerves, and nervous system.",
  },
  {
    icon: HeartPulse,
    title: "Mental Health & Psychiatry Care",
    description:
      "Comprehensive psychiatric consultations and supportive treatment plans for emotional and mental wellbeing.",
  },
  {
    icon: Activity,
    title: "Headache & Migraine Management",
    description:
      "Specialized evaluation and treatment approaches for recurrent headaches, migraines, and related conditions.",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Medical Evaluation",
    description:
      "Detailed clinical assessment with personalized care plans based on each patient's symptoms and medical history.",
  },
  {
    icon: ShieldCheck,
    title: "Follow-up & Long-Term Care",
    description:
      "Continuous monitoring and follow-up for neurological and psychiatric conditions to improve quality of life.",
  },
];

export default function NeurologyPsychiatryPage() {
  return (
    <main className="bg-white">

      <section className="bg-gradient-to-br from-indigo-50 via-white to-emerald-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">


            <span className="rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">
              Neurology & Psychiatry Department
            </span>


            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Neurology & Psychiatry Care in Hurghada
            </h1>


            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides specialized neurological and
              psychiatric care with professional assessment, personalized
              treatment plans, and compassionate support for patients of
              different ages.
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
            Professional Brain & Mental Health Care
          </h2>


          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our specialists provide confidential, patient-centered care
            combining medical expertise with a compassionate approach to
            neurological and psychiatric health.
          </p>


        </div>

      </section>


    </main>
  );
}