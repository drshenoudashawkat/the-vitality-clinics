import {
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Globe,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: <Stethoscope size={36} className="text-emerald-600" />,
    title: "Experienced Medical Specialists",
    description:
      "Highly qualified consultants providing evidence-based healthcare across multiple medical specialties.",
  },
  {
    icon: <HeartPulse size={36} className="text-emerald-600" />,
    title: "Comprehensive Healthcare",
    description:
      "From routine consultations to advanced diagnostics, women's health, and chronic disease management.",
  },
  {
    icon: <ShieldCheck size={36} className="text-emerald-600" />,
    title: "International Insurance",
    description:
      "Supporting residents, expatriates, and international visitors with trusted insurance partners.",
  },
  {
    icon: <Globe size={36} className="text-emerald-600" />,
    title: "Tourists Medical Care",
    description:
      "Fast, professional healthcare services designed for visitors and travelers in Hurghada.",
  },
  {
    icon: <Clock3 size={36} className="text-emerald-600" />,
    title: "Extended Medical Support",
    description:
      "Flexible appointment scheduling and responsive medical assistance whenever you need us.",
  },
  {
    icon: <BadgeCheck size={36} className="text-emerald-600" />,
    title: "Modern Medical Technology",
    description:
      "Advanced diagnostic equipment including high-quality 4D ultrasonography and modern clinical facilities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Healthcare You Can Trust
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            The Vitality Clinics combines experienced physicians, advanced
            medical technology, personalized patient care, and comprehensive
            healthcare services to deliver outstanding medical experiences for
            residents, expatriates, and tourists in Hurghada.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div>{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}