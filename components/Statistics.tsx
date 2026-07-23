import {
  Users,
  CalendarCheck,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={38} className="text-emerald-600" />,
    number: "Thousands",
    title: "Patients & Visitors Supported",
  },
  {
    icon: <CalendarCheck size={38} className="text-emerald-600" />,
    number: "24/7",
    title: "Medical Assistance Available",
  },
  {
    icon: <Stethoscope size={38} className="text-emerald-600" />,
    number: "15+",
    title: "Healthcare Services & Specialties",
  },
  {
    icon: <ShieldCheck size={38} className="text-emerald-600" />,
    number: "International",
    title: "Quality Medical Care Standards",
  },
];

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="bg-emerald-600 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            The Vitality Clinics in Hurghada
          </span>


          <h2 className="mt-6 text-4xl font-extrabold text-white">
            Trusted Healthcare For Residents, Tourists & International Patients
          </h2>


          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-emerald-100">
            The Vitality Clinics provides comprehensive medical services in
            Hurghada through experienced doctors, advanced diagnostic
            technology, and personalized healthcare solutions designed for
            Egyptian residents, expatriates, and visitors from around the world.
          </p>

        </div>



        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">


          {stats.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2"
            >

              <div className="flex justify-center">
                {item.icon}
              </div>


              <h3 className="mt-6 text-4xl font-extrabold text-slate-900">
                {item.number}
              </h3>


              <p className="mt-3 text-lg font-medium text-gray-600">
                {item.title}
              </p>


            </div>

          ))}


        </div>


      </div>
    </section>
  );
}