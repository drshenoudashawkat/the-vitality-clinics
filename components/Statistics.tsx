import { Users, CalendarCheck, Stethoscope, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: <Users size={38} className="text-emerald-600" />,
    number: "12K+",
    title: "Patients Served",
  },
  {
    icon: <CalendarCheck size={38} className="text-emerald-600" />,
    number: "24/7",
    title: "Medical Support",
  },
  {
    icon: <Stethoscope size={38} className="text-emerald-600" />,
    number: "15+",
    title: "Medical Departments",
  },
  {
    icon: <ShieldCheck size={38} className="text-emerald-600" />,
    number: "100%",
    title: "Patient-Centered Care",
  },
];

export default function Statistics() {
  return (
    <section className="bg-emerald-600 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-extrabold text-white">
            Trusted Healthcare Excellence
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-emerald-100">
            Delivering comprehensive healthcare with experienced physicians,
            advanced diagnostics, and compassionate patient care in Hurghada.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 text-center shadow-lg"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="mt-6 text-5xl font-extrabold text-slate-900">
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