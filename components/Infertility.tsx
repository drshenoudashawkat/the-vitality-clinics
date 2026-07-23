import {
  Baby,
  HeartPulse,
  ScanHeart,
  Activity,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Baby,
    title: "Early Pregnancy Assessment",
    description:
      "Complete early pregnancy evaluation including viability scan, dating scan, and fetal wellbeing assessment by experienced specialists.",
  },
  {
    icon: ScanHeart,
    title: "Detailed Fetal Anatomy Scan",
    description:
      "Advanced fetal anomaly screening and detailed anatomy assessment to evaluate fetal development and identify possible fetal conditions.",
  },
  {
    icon: HeartPulse,
    title: "Fetal Growth & Doppler Ultrasound",
    description:
      "Regular fetal growth monitoring with Doppler ultrasound studies to assess placental blood flow and fetal wellbeing throughout pregnancy.",
  },
  {
    icon: Activity,
    title: "High-Risk Pregnancy Monitoring",
    description:
      "Specialized pregnancy follow-up for high-risk cases including maternal medical conditions, multiple pregnancies, and fetal concerns.",
  },
  {
    icon: Stethoscope,
    title: "Prenatal Consultation",
    description:
      "Professional prenatal consultations and personalized pregnancy care plans throughout all stages of pregnancy.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Ultrasound Technology",
    description:
      "Modern fetal imaging services including 4D ultrasound and detailed pregnancy assessment using advanced medical technology.",
  },
];

export default function FetalMedicine() {
  return (
    <section
      id="fetal-medicine"
      className="bg-slate-50 py-24"
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">


          <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-700">
            Fetal Medicine Unit
          </span>



          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Advanced Fetal Medicine & Pregnancy Care in Hurghada
          </h2>



          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            The Vitality Clinics provides advanced fetal medicine and pregnancy
            care in Hurghada, including detailed fetal anatomy scans, pregnancy
            ultrasound, Doppler studies, fetal growth monitoring, high-risk
            pregnancy follow-up, and prenatal consultations using modern
            ultrasound technology and specialist medical expertise.
          </p>



          <div className="mt-8">

            <a
              href="#appointment"
              className="inline-flex rounded-xl bg-emerald-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700"
            >
              Book Pregnancy Consultation
            </a>

          </div>


        </div>





        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {services.map((item) => {

            const Icon = item.icon;


            return (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
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


      </div>


    </section>
  );
}