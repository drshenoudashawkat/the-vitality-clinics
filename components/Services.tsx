import {
  Stethoscope,
  Ambulance,
  Hotel,
  Microscope,
  ShieldCheck,
  Droplets,
  Baby,
  FileCheck,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Medical Consultation in Hurghada",
    text:
      "Professional medical consultations with experienced doctors and specialists for residents, expatriates, tourists, and international visitors.",
  },
  {
    icon: Ambulance,
    title: "Emergency & Urgent Medical Care",
    text:
      "Fast healthcare support for urgent cases including infections, minor injuries, medical emergencies, IV therapy, and immediate treatment needs.",
  },
  {
    icon: Hotel,
    title: "Tourist Healthcare Services",
    text:
      "Dedicated medical care for tourists and hotel guests in Hurghada with quick access to professional doctors during their stay.",
  },
  {
    icon: Microscope,
    title: "Laboratory & Diagnostic Services",
    text:
      "Modern laboratory testing, ECG, ultrasound, and diagnostic investigations supporting accurate diagnosis and effective treatment plans.",
  },
  {
    icon: ShieldCheck,
    title: "International Insurance Support",
    text:
      "Assistance with international insurance providers, medical approvals, documentation, and coordination of healthcare services.",
  },
  {
    icon: Droplets,
    title: "IV Therapy & Minor Procedures",
    text:
      "Professional IV therapy, wound care, injections, dressing changes, and minor medical procedures performed by trained healthcare staff.",
  },
  {
    icon: Baby,
    title: "Women's Health & Pregnancy Care",
    text:
      "Complete women's healthcare including pregnancy follow-up, fetal medicine, 4D ultrasound, and gynecological consultations.",
  },
  {
    icon: FileCheck,
    title: "Medical Reports & Follow-up Care",
    text:
      "Professional medical reports, treatment summaries, insurance documents, and continuous patient follow-up services.",
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
            Healthcare Services in Hurghada
          </span>


          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Complete Medical Solutions For Residents & Visitors
          </h2>


          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            The Vitality Clinics provides comprehensive healthcare services in
            Hurghada including medical consultations, emergency care, tourist
            healthcare, laboratory diagnostics, women's health, pregnancy care,
            and international insurance assistance with modern medical
            standards.
          </p>


        </div>




        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">


          {services.map((service, index) => {

            const Icon = service.icon;


            return (

              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div className="inline-flex rounded-2xl bg-emerald-100 p-5 text-emerald-600 transition group-hover:bg-emerald-600 group-hover:text-white">

                  <Icon size={42} />

                </div>



                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>



                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {service.text}
                </p>



                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Book Service
                </a>


              </div>

            );

          })}


        </div>


      </div>

    </section>
  );
}