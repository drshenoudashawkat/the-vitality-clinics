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
    icon: Stethoscope,
    title: "Experienced Specialist Doctors in Hurghada",
    description:
      "Our qualified doctors provide professional consultations, accurate diagnosis, and personalized treatment plans across multiple medical specialties.",
  },
  {
    icon: HeartPulse,
    title: "Complete Healthcare Solutions",
    description:
      "Comprehensive medical care including internal medicine, women's health, pregnancy care, 4D ultrasound, diagnostics, and chronic disease management.",
  },
  {
    icon: ShieldCheck,
    title: "International Insurance Support",
    description:
      "Assistance for international patients with insurance coordination, medical reports, and healthcare documentation.",
  },
  {
    icon: Globe,
    title: "Tourist Medical Care in Hurghada",
    description:
      "Fast and reliable healthcare services for tourists, hotel guests, expatriates, and international visitors.",
  },
  {
    icon: Clock3,
    title: "Accessible Medical Support",
    description:
      "Flexible appointments and responsive medical assistance designed for quick access to professional healthcare.",
  },
  {
    icon: BadgeCheck,
    title: "Modern Medical Technology",
    description:
      "Advanced diagnostic equipment including ultrasound technology and 4D ultrasonography for accurate medical assessment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="
        relative
        overflow-hidden
        bg-slate-900
        py-20
        sm:py-24
      "
    >

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />


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
            Why Choose The Vitality Clinics
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
            Trusted Healthcare Excellence in Hurghada
          </h2>



          <p
            className="
              mt-5
              text-lg
              leading-8
              text-slate-300
            "
          >
            The Vitality Clinics provides professional healthcare services in
            Hurghada for residents, expatriates, tourists, and international
            patients through experienced doctors, advanced technology, and
            patient-centered medical care.
          </p>


        </div>





        <div
          className="
            mt-14
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {features.map((item)=>{

            const Icon=item.icon;


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
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-emerald-500/20
                    transition
                    duration-500
                    group-hover:bg-emerald-600
                  "
                >

                  <Icon
                    size={32}
                    className="
                      text-emerald-400
                      transition
                      duration-500
                      group-hover:text-white
                    "
                  />

                </div>





                <h3
                  className="
                    mt-6
                    text-xl
                    font-extrabold
                    leading-snug
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