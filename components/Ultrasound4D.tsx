import Link from "next/link";
import { Baby, ScanHeart, HeartPulse, ImageIcon } from "lucide-react";

const features = [
  {
    icon: Baby,
    title: "Pregnancy Follow-up & Antenatal Care",
    description:
      "Complete pregnancy monitoring with advanced ultrasound examinations, fetal growth assessment, and professional antenatal follow-up throughout every stage of pregnancy.",
  },
  {
    icon: ScanHeart,
    title: "Advanced 4D Ultrasound in Hurghada",
    description:
      "High-resolution real-time 4D ultrasound imaging providing detailed fetal visualization, facial features assessment, and advanced pregnancy evaluation using modern ultrasound technology.",
  },
  {
    icon: HeartPulse,
    title: "Fetal Medicine & Fetal Wellbeing Assessment",
    description:
      "Specialized fetal medicine services including fetal growth monitoring, Doppler ultrasound, fetal anatomy assessment, and high-risk pregnancy follow-up.",
  },
  {
    icon: ImageIcon,
    title: "Obstetric & Gynecological Ultrasound",
    description:
      "Comprehensive ultrasound services for pregnancy care, women's health, gynecological conditions, and accurate diagnosis with advanced imaging equipment.",
  },
];

export default function Ultrasound4D() {
  return (
    <section
      id="4d-ultrasound"
      className="bg-white py-24"
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">


          <span className="rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">
            4D Ultrasound & Fetal Medicine
          </span>



          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Advanced 4D Ultrasound & Pregnancy Care in Hurghada
          </h2>



          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-gray-600">
            The Vitality Clinics provides advanced 4D ultrasound, fetal medicine,
            pregnancy monitoring, and women's health services in Hurghada.
            Our experienced specialists use modern ultrasound technology for
            detailed fetal assessment, pregnancy follow-up, Doppler studies,
            and accurate prenatal diagnosis in a comfortable medical environment.
          </p>


        </div>





        <div className="mt-16 grid gap-8 md:grid-cols-2">


          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <Icon
                  size={36}
                  className="text-emerald-600"
                />


                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>


                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>


              </div>

            );

          })}


        </div>





        <div className="mt-14 flex flex-col justify-center gap-4 text-center sm:flex-row">


          <Link
            href="/departments/4d-ultrasonography"
            className="inline-flex items-center justify-center rounded-xl border-2 border-emerald-600 px-8 py-4 text-lg font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            Learn More About 4D Ultrasound
          </Link>




          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-emerald-700"
          >
            Book 4D Ultrasound Appointment
          </Link>



        </div>


      </div>

    </section>
  );
}