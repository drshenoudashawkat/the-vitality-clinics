import { Baby, HeartHandshake, Microscope, ScanHeart } from "lucide-react";

const services = [
  {
    icon: <HeartHandshake size={36} className="text-emerald-600" />,
    title: "Couple Fertility Assessment",
    description:
      "Comprehensive evaluation for both partners to identify possible causes of infertility and create an individualized care plan.",
  },
  {
    icon: <Baby size={36} className="text-emerald-600" />,
    title: "Ovulation Monitoring",
    description:
      "Accurate follicular tracking and ovulation assessment using advanced ultrasound technology.",
  },
  {
    icon: <Microscope size={36} className="text-emerald-600" />,
    title: "Hormonal Evaluation",
    description:
      "Laboratory investigations and hormonal assessment to support fertility diagnosis and treatment planning.",
  },
  {
    icon: <ScanHeart size={36} className="text-emerald-600" />,
    title: "Fertility Ultrasound",
    description:
      "High-quality pelvic ultrasound examinations for ovarian reserve assessment and uterine evaluation.",
  },
];

export default function Infertility() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-700">
            Infertility Unit
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Comprehensive Fertility Assessment & Care
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Our Infertility Unit provides evidence-based fertility evaluation,
            reproductive health assessment, and personalized care for couples
            seeking pregnancy, supported by modern diagnostics and experienced
            specialists.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {item.icon}

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