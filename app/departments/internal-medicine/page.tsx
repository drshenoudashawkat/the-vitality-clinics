import Link from "next/link";
import {
  HeartPulse,
  Stethoscope,
  Activity,
  ShieldCheck,
  ClipboardCheck,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Chronic Disease Management",
    description:
      "Comprehensive follow-up and management of chronic conditions including diabetes, hypertension, thyroid disorders, and cardiovascular risk factors.",
  },
  {
    icon: Stethoscope,
    title: "Medical Consultation",
    description:
      "Professional internal medicine consultations with accurate diagnosis and personalized treatment plans based on each patient's condition.",
  },
  {
    icon: Activity,
    title: "Diagnostic Assessment",
    description:
      "Complete medical evaluation including clinical examination, laboratory investigations, and advanced diagnostic support.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Healthcare",
    description:
      "Health screening, lifestyle guidance, and preventive medical care to maintain long-term wellness.",
  },
  {
    icon: ClipboardCheck,
    title: "Follow-up & Treatment Plans",
    description:
      "Continuous medical follow-up with organized treatment plans and monitoring of patient progress.",
  },
];

export default function InternalMedicinePage() {
  return (
    <main className="bg-white">


      <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">


            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              Internal Medicine Department
            </span>


            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Internal Medicine Specialist Care in Hurghada
            </h1>


            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides comprehensive internal medicine
              services for adults, focusing on accurate diagnosis, chronic
              disease management, preventive care, and personalized treatment
              plans for residents, expatriates, and international patients.
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
            Complete Adult Healthcare in Hurghada
          </h2>


          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our internal medicine team provides professional medical care
            with modern diagnostic support and a patient-centered approach
            to improve health outcomes and quality of life.
          </p>


        </div>

      </section>


    </main>
  );
}