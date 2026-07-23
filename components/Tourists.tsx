import {
  Plane,
  Hotel,
  Stethoscope,
  Ambulance,
  Languages,
  HeartHandshake,
} from "lucide-react";

const touristServices = [
  {
    icon: Ambulance,
    title: "Urgent Medical Care",
    text: "Fast medical assistance for tourists experiencing sudden illness, infections, injuries, or urgent health concerns in Hurghada.",
  },
  {
    icon: Hotel,
    title: "Hotel & Resort Medical Support",
    text: "Professional doctor visits and medical assistance for hotel guests and international visitors throughout their stay.",
  },
  {
    icon: Stethoscope,
    title: "Specialist Consultations",
    text: "Access to experienced physicians and medical specialists with clear communication and personalized care.",
  },
  {
    icon: Languages,
    title: "Multilingual Healthcare Support",
    text: "Comfortable medical communication and assistance for international patients from different countries.",
  },
  {
    icon: Plane,
    title: "Travel Healthcare Services",
    text: "Medical solutions for tourists before, during, and after their trip with reliable healthcare support.",
  },
  {
    icon: HeartHandshake,
    title: "Complete Patient Assistance",
    text: "Continuous follow-up, medical coordination, and compassionate support whenever needed.",
  },
];

export default function Tourists() {
  return (
    <section
      id="tourists"
      className="bg-gradient-to-b from-white to-emerald-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Tourist Healthcare Services
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Medical Care For Tourists In Hurghada
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            The Vitality Clinics provides reliable healthcare services for
            tourists, hotel guests, and international visitors in Hurghada,
            with professional doctors, fast medical assistance, and
            patient-centered care.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {touristServices.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div className="inline-flex rounded-2xl bg-emerald-600 p-5 text-white transition group-hover:scale-110">
                  <Icon size={40} />
                </div>


                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>


                <p className="mt-4 leading-7 text-gray-600">
                  {service.text}
                </p>


              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}