import {
  Stethoscope,
  HeartPulse,
  Baby,
  Ambulance,
  Microscope,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope size={42} />,
    title: "General Medicine",
    text: "Complete medical consultations, preventive care, and follow-up for all ages.",
  },
  {
    icon: <HeartPulse size={42} />,
    title: "Internal Medicine",
    text: "Management of diabetes, hypertension, infections, and chronic diseases.",
  },
  {
    icon: <Baby size={42} />,
    title: "Women's Health & 4D Ultrasound",
    text: "Pregnancy follow-up, gynecology services, and advanced ultrasound care.",
  },
  {
    icon: <Ambulance size={42} />,
    title: "Emergency Care",
    text: "Fast medical assistance, urgent consultations, IV therapy, and wound care.",
  },
  {
    icon: <Microscope size={42} />,
    title: "Diagnostics",
    text: "Laboratory investigations, ECG, ultrasound, and medical assessment.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "International Patients",
    text: "Medical support for tourists, expatriates, and insurance patients.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-slate-50 to-white py-24"
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Our Services
          </span>


          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Complete Healthcare Solutions
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Advanced medical care delivered by experienced specialists with
            modern technology and international standards.
          </p>

        </div>



        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {services.map((service, index) => (

            <div
              key={index}
              className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="inline-flex rounded-2xl bg-emerald-100 p-5 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">

                {service.icon}

              </div>



              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>



              <p className="mt-4 leading-7 text-gray-600">
                {service.text}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}