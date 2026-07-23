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
      className="
        relative
        overflow-hidden
        bg-slate-900
        py-24
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-slate-900
          via-slate-800
          to-slate-900
        "
      />


      <div className="relative mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-4xl text-center">


          <span
            className="
              inline-flex
              rounded-full
              bg-emerald-500/20
              px-5
              py-2
              text-sm
              font-bold
              text-emerald-400
            "
          >
            4D Ultrasound & Fetal Medicine
          </span>



          <h2
            className="
              mt-6
              text-4xl
              font-extrabold
              leading-tight
              text-white
              sm:text-5xl
            "
          >
            Advanced 4D Ultrasound & Pregnancy Care in Hurghada
          </h2>



          <p
            className="
              mx-auto
              mt-5
              max-w-4xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            The Vitality Clinics provides advanced 4D ultrasound, fetal medicine,
            pregnancy monitoring, and women's health services in Hurghada.
            Our experienced specialists use modern ultrasound technology for
            detailed fetal assessment, pregnancy follow-up, Doppler studies,
            and accurate prenatal diagnosis in a comfortable medical environment.
          </p>


        </div>





        <div
          className="
            mt-16
            grid
            gap-7
            md:grid-cols-2
          "
        >


          {features.map((item)=>{

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                  group
                  rounded-[32px]
                  border
                  border-slate-700
                  bg-slate-800
                  p-8
                  shadow-md
                  transition
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >


                <div
                  className="
                    inline-flex
                    rounded-2xl
                    bg-emerald-500/20
                    p-5
                    text-emerald-400
                    transition
                    duration-500
                    group-hover:bg-emerald-600
                    group-hover:text-white
                  "
                >
                  <Icon size={36}/>
                </div>




                <h3
                  className="
                    mt-6
                    text-2xl
                    font-extrabold
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





        <div
          className="
            mt-14
            flex
            flex-col
            justify-center
            gap-4
            text-center
            sm:flex-row
          "
        >


          <Link
            href="/departments/4d-ultrasonography"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              border-2
              border-emerald-500
              px-8
              py-4
              text-lg
              font-bold
              text-emerald-400
              transition
              hover:bg-emerald-500/10
            "
          >
            Learn More About 4D Ultrasound
          </Link>



          <Link
            href="#contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-emerald-600
              px-8
              py-4
              text-lg
              font-bold
              text-white
              shadow-lg
              transition
              hover:bg-emerald-700
            "
          >
            Book 4D Ultrasound Appointment
          </Link>



        </div>


      </div>

    </section>
  );
}