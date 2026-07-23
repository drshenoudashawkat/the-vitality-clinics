import {
  ShieldCheck,
  FileText,
  Globe2,
  Headset,
} from "lucide-react";

const insuranceFeatures = [
  {
    icon: ShieldCheck,
    title: "International Insurance Assistance",
    text: "We support international patients with insurance procedures, approvals, and coordination with insurance providers.",
  },
  {
    icon: FileText,
    title: "Medical Reports & Documentation",
    text: "Professional medical reports, invoices, and required documents prepared according to insurance requirements.",
  },
  {
    icon: Globe2,
    title: "Healthcare For Tourists & Expats",
    text: "Dedicated medical support for tourists, expatriates, and international visitors during their stay in Hurghada.",
  },
  {
    icon: Headset,
    title: "24/7 Medical Coordination",
    text: "Continuous communication and healthcare coordination for urgent and routine medical needs.",
  },
];

export default function Insurance() {
  return (
    <section
      id="insurance"
      className="bg-gradient-to-b from-white to-emerald-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            International Insurance
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Healthcare Support For International Patients
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            The Vitality Clinics provides professional medical assistance for
            tourists, expatriates, and international patients with smooth
            communication, insurance support, and complete healthcare
            coordination in Hurghada.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {insuranceFeatures.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-4 text-emerald-700">
                  <Icon size={35} />
                </div>


                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>


                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}