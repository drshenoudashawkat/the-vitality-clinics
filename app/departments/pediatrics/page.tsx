import Link from "next/link";
import {
  Baby,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Activity,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Child Healthcare & Development",
    description:
      "Complete pediatric care including growth monitoring, developmental assessment, and preventive healthcare for children.",
  },
  {
    icon: HeartPulse,
    title: "Pediatric Consultations",
    description:
      "Professional medical consultations for infants, children, and adolescents with personalized treatment plans.",
  },
  {
    icon: Activity,
    title: "Child Illness Management",
    description:
      "Diagnosis and treatment of common childhood illnesses, infections, fever, respiratory problems, and digestive conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Vaccination & Preventive Care",
    description:
      "Preventive pediatric services including vaccination guidance and health monitoring to support children's wellbeing.",
  },
  {
    icon: Stethoscope,
    title: "Emergency Pediatric Support",
    description:
      "Medical assessment and urgent care support for children requiring immediate attention.",
  },
];

export default function PediatricsPage() {
  return (
    <main className="bg-white">

      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Pediatrics Department
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Specialized Pediatric Care in Hurghada
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides comprehensive pediatric healthcare
              services for infants, children, and adolescents with experienced
              doctors, modern diagnostic support, and compassionate care.
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
            Caring Healthcare for Every Child
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our pediatric services focus on prevention, early diagnosis,
            and comprehensive treatment in a comfortable and child-friendly
            medical environment.
          </p>

        </div>

      </section>

    </main>
  );
}