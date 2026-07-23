import Link from "next/link";
import {
  Globe2,
  Stethoscope,
  ShieldCheck,
  Plane,
  HeartPulse,
  CalendarCheck,
} from "lucide-react";

const services = [
  {
    icon: Globe2,
    title: "Travel Health Consultation",
    description:
      "Professional medical advice for travelers before, during, and after their trips with personalized healthcare guidance.",
  },
  {
    icon: Plane,
    title: "Tourist Medical Support",
    description:
      "Dedicated healthcare services for tourists and international visitors in Hurghada during their stay.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Vaccination & Prevention",
    description:
      "Preventive healthcare advice including travel-related precautions and infection prevention guidance.",
  },
  {
    icon: Stethoscope,
    title: "Medical Assessment for Travelers",
    description:
      "Complete medical evaluation for travel-related concerns, existing conditions, and fitness requirements.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Assistance Abroad",
    description:
      "Support for expatriates and visitors requiring medical consultations, follow-up, and treatment coordination.",
  },
];

export default function TravelMedicinePage() {
  return (
    <main className="bg-white">

      <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">


            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              Travel Medicine Department
            </span>


            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Travel Medicine & Tourist Healthcare in Hurghada
            </h1>


            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides specialized travel medicine
              services for tourists, expatriates, and international visitors
              including medical consultations, preventive care, and healthcare
              support during their stay in Hurghada.
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
            Your Trusted Medical Partner During Your Stay
          </h2>


          <p className="mt-5 text-lg leading-8 text-gray-600">
            We provide accessible healthcare solutions for international
            visitors, hotel guests, and expatriates with professional medical
            support in Hurghada.
          </p>


        </div>

      </section>


    </main>
  );
}