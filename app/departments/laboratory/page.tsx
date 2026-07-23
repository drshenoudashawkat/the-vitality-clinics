import Link from "next/link";
import {
  FlaskConical,
  Microscope,
  ShieldCheck,
  FileCheck,
  Activity,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Complete Laboratory Testing",
    description:
      "Reliable laboratory investigations including blood tests, urine analysis, and routine diagnostic testing with accurate results.",
  },
  {
    icon: Microscope,
    title: "Advanced Diagnostic Analysis",
    description:
      "Modern laboratory services supporting accurate diagnosis and medical decision-making for different health conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety Standards",
    description:
      "Laboratory procedures performed with attention to accuracy, quality control, and patient safety.",
  },
  {
    icon: FileCheck,
    title: "Medical Reports & Results",
    description:
      "Clear laboratory reports and professional documentation to support consultations and treatment follow-up.",
  },
  {
    icon: Activity,
    title: "Health Monitoring Tests",
    description:
      "Regular monitoring investigations for chronic diseases, preventive healthcare, and follow-up plans.",
  },
];

export default function LaboratoryPage() {
  return (
    <main className="bg-white">

      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Laboratory & Diagnostic Services
            </span>


            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Reliable Laboratory Services in Hurghada
            </h1>


            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides professional laboratory and
              diagnostic services with accurate testing, modern technology,
              and fast results to support proper medical diagnosis and
              effective treatment plans.
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
            Accurate Diagnosis Starts With Quality Testing
          </h2>


          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our laboratory services help doctors make accurate decisions
            through dependable testing, professional reporting, and
            comprehensive diagnostic support.
          </p>


        </div>

      </section>


    </main>
  );
}