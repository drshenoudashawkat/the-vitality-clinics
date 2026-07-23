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
      className="bg-slate-50 py-16 sm:py-20 lg:py-24"
    >

      <div className="mx-auto max-w-7xl px-4 sm:px-6">


        <div className="mx-auto max-w-4xl text-center">


          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-700">
            Why Choose The Vitality Clinics
          </span>



          <h2 className="mt-5 text-3xl leading-tight font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted Healthcare Excellence in Hurghada
          </h2>



          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            The Vitality Clinics provides professional healthcare services in
            Hurghada for residents, expatriates, tourists, and international
            patients through experienced doctors, advanced technology, and
            patient-centered medical care.
          </p>


        </div>





        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">


          {features.map((item, index)=>{

            const Icon = item.icon;


            return (

              <div
                key={index}
                className="
                rounded-3xl 
                bg-white 
                p-6 
                sm:p-8
                shadow-sm 
                transition 
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                "
              >


                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">

                  <Icon
                    size={30}
                    className="text-emerald-600"
                  />

                </div>




                <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                  {item.title}
                </h3>




                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
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
