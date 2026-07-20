import { Baby, ScanHeart, HeartPulse, ImageIcon } from "lucide-react";

const features = [
  {
    icon: <Baby size={36} className="text-emerald-600" />,
    title: "Pregnancy Follow-up",
    description:
      "Comprehensive ultrasound examinations throughout pregnancy to monitor fetal growth, wellbeing, and maternal health.",
  },
  {
    icon: <ScanHeart size={36} className="text-emerald-600" />,
    title: "4D Ultrasonography",
    description:
      "Advanced real-time 4D imaging providing detailed fetal visualization with excellent image quality.",
  },
  {
    icon: <HeartPulse size={36} className="text-emerald-600" />,
    title: "Fetal Wellbeing Assessment",
    description:
      "Professional fetal evaluation including growth monitoring, anatomical assessment, and high-risk pregnancy follow-up.",
  },
  {
    icon: <ImageIcon size={36} className="text-emerald-600" />,
    title: "High Resolution Imaging",
    description:
      "Modern ultrasound technology delivering clear diagnostic images for obstetrics, gynecology, and women's health.",
  },
];

export default function Ultrasound4D() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">
            4D Ultrasonography
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Advanced Pregnancy & Women's Imaging
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Experience high-quality obstetric and gynecological ultrasound
            performed by experienced specialists using advanced 4D technology
            for accurate diagnosis and pregnancy monitoring.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
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