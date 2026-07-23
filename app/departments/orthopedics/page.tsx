import Link from "next/link";
import {
  Bone,
  Activity,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    icon: Bone,
    title: "Orthopedic Consultation",
    description:
      "Professional evaluation and treatment of bone, joint, and musculoskeletal conditions with personalized care plans.",
  },
  {
    icon: Activity,
    title: "Joint & Muscle Problems",
    description:
      "Diagnosis and management of joint pain, muscle injuries, arthritis, and movement-related conditions.",
  },
  {
    icon: Stethoscope,
    title: "Sports & Injury Care",
    description:
      "Assessment and treatment of sports injuries, fractures, sprains, and soft tissue problems.",
  },
  {
    icon: ShieldCheck,
    title: "Fracture & Trauma Management",
    description:
      "Medical support for fractures, trauma cases, and orthopedic emergencies with proper follow-up care.",
  },
  {
    icon: HeartPulse,
    title: "Pain Management & Follow-up",
    description:
      "Comprehensive follow-up programs to reduce pain, improve mobility, and support recovery.",
  },
];

export default function OrthopedicsPage() {
  return (
    <main className="bg-white">

      <section className="bg-gradient-to-br from-slate-100 via-white to-emerald-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              Orthopedics Department
            </span>


            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Orthopedic Care & Bone Health in Hurghada
            </h1>


            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides orthopedic consultations and
              musculoskeletal care for bone, joint, and injury-related
              conditions with experienced medical specialists and
              patient-focused treatment plans.
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
            Professional Orthopedic Treatment & Recovery
          </h2>


          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our orthopedic services help patients maintain mobility,
            manage pain, recover from injuries, and improve their quality
            of life through modern medical care.
          </p>


        </div>

      </section>


    </main>
  );
}