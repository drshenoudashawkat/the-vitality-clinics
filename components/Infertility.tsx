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
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#0F172A]
        via-[#163A4A]
        to-[#0B3C5D]
        py-24
      "
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">


          <span
            className="
              inline-block
              rounded-full
              bg-pink-500/20
              px-5
              py-2
              text-sm
              font-semibold
              text-pink-300
              backdrop-blur-md
            "
          >
            Fetal Medicine Unit
          </span>



          <h2
            className="
              mt-6
              text-4xl
              font-extrabold
              text-white
              md:text-5xl
            "
          >
            Advanced Fetal Medicine & Pregnancy Care in Hurghada
          </h2>



          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            The Vitality Clinics provides advanced fetal medicine and pregnancy
            care in Hurghada, including detailed fetal anatomy scans, pregnancy
            ultrasound, Doppler studies, fetal growth monitoring, high-risk
            pregnancy follow-up, and prenatal consultations using modern
            ultrasound technology and specialist medical expertise.
          </p>



          <div className="mt-8">

            <a
              href="#appointment"
              className="
                inline-flex
                rounded-xl
                bg-[#0097A7]
                px-8
                py-4
                font-bold
                text-white
                shadow-xl
                transition
                hover:bg-[#007C89]
              "
            >
              Book Pregnancy Consultation
            </a>

          </div>


        </div>





        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >


          {services.map((item) => {

            const Icon = item.icon;


            return (

              <div
                key={item.title}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/10
                  p-8
                  backdrop-blur-xl
                  shadow-xl
                  transition
                  duration-300
                  hover:-translate-y-3
                  hover:bg-white/15
                "
              >


                <div
                  className="
                    inline-flex
                    rounded-2xl
                    bg-[#0097A7]/20
                    p-4
                  "
                >

                  <Icon
                    size={36}
                    className="text-[#8DE0E8]"
                  />

                </div>



                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h3>



                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-300
                  "
                >
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