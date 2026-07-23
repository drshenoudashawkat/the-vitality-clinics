import {
  HeartPulse,
  Baby,
  Stethoscope,
  ScanHeart,
  Bone,
  Sparkles,
  Ear,
  Brain,
  ShieldPlus,
  Ambulance,
  FlaskConical,
} from "lucide-react";

const departments = [
  {
    title: "Internal Medicine",
    slug: "internal-medicine",
    description:
      "Expert diagnosis and management of adult medical conditions including diabetes, hypertension, infections, and chronic diseases.",
    icon: HeartPulse,
  },
  {
    title: "Pediatrics",
    slug: "pediatrics",
    description:
      "Comprehensive healthcare for children including routine checkups, infections, growth monitoring, and pediatric consultations.",
    icon: Baby,
  },
  {
    title: "Obstetrics & Gynecology",
    slug: "obstetrics-gynecology",
    description:
      "Complete women's healthcare including pregnancy care, gynecology consultations, and reproductive health services.",
    icon: Stethoscope,
  },
  {
    title: "Fetal Medicine Unit",
    slug: "fetal-medicine-unit",
    description:
      "Advanced fetal assessment including anatomy scans, Doppler studies, fetal growth monitoring, and high-risk pregnancy follow-up.",
    icon: ScanHeart,
  },
  {
    title: "4D Ultrasonography",
    slug: "4d-ultrasonography",
    description:
      "Advanced 4D ultrasound services in Hurghada providing detailed fetal imaging and pregnancy monitoring.",
    icon: ScanHeart,
  },
  {
    title: "General Surgery",
    slug: "general-surgery",
    description:
      "Professional surgical consultations, evaluation, and treatment planning by experienced specialists.",
    icon: ShieldPlus,
  },
  {
    title: "Orthopedics",
    slug: "orthopedics",
    description:
      "Diagnosis and treatment of bone, joint, muscle, and orthopedic conditions.",
    icon: Bone,
  },
  {
    title: "Dermatology & Aesthetic Medicine",
    slug: "dermatology",
    description:
      "Skin health, cosmetic consultations, and aesthetic medical treatments.",
    icon: Sparkles,
  },
  {
    title: "ENT Specialist",
    slug: "ent",
    description:
      "Diagnosis and treatment of ear, nose, and throat conditions for adults and children.",
    icon: Ear,
  },
  {
    title: "Cardiology",
    slug: "cardiology",
    description:
      "Heart health evaluation, cardiovascular consultations, and preventive cardiac care.",
    icon: HeartPulse,
  },
  {
    title: "Neurology & Psychiatry",
    slug: "neurology-psychiatry",
    description:
      "Specialized care for neurological conditions, mental health concerns, and psychiatric consultations.",
    icon: Brain,
  },
  {
    title: "Urology",
    slug: "urology",
    description:
      "Diagnosis and management of urinary tract and male health conditions.",
    icon: ShieldPlus,
  },
  {
    title: "Travel Medicine",
    slug: "travel-medicine",
    description:
      "Fast medical assistance for tourists, hotel guests, and international visitors in Hurghada.",
    icon: Ambulance,
  },
  {
    title: "Emergency & Urgent Care",
    slug: "emergency-urgent-care",
    description:
      "Rapid medical evaluation and urgent healthcare support for unexpected medical situations.",
    icon: Ambulance,
  },
  {
    title: "Laboratory & Diagnostic Services",
    slug: "laboratory",
    description:
      "Modern laboratory testing and diagnostic services supporting accurate medical decisions.",
    icon: FlaskConical,
  },
];

export default function MedicalDepartments() {
  return (
    <section
      id="medical-specialties"
      className="
        relative
        overflow-hidden
        bg-slate-900
        py-16
        sm:py-24
        min-h-screen
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


      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">


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
            Medical Specialties in Hurghada
          </span>


          <h2
            className="
              mt-6
              text-3xl
              font-extrabold
              text-white
              sm:text-5xl
            "
          >
            Comprehensive Healthcare Services & Specialist Doctors
          </h2>


          <p
            className="
              mx-auto
              mt-5
              max-w-4xl
              text-base
              leading-7
              text-slate-300
              sm:text-lg
              sm:leading-8
            "
          >
            The Vitality Clinics provides comprehensive healthcare services in
            Hurghada through experienced specialist doctors, advanced
            diagnostic technology, and patient-centered medical care for
            residents, expatriates, tourists, and international visitors.
          </p>


        </div>



        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {departments.map((item)=>{

            const Icon=item.icon;

            return (

              <div
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-700
                  bg-slate-800
                  p-6
                  shadow-lg
                  transition
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
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
                    size={30}
                    className="
                      text-emerald-400
                      transition
                      group-hover:text-white
                    "
                  />

                </div>


                <h3
                  className="
                    mt-5
                    text-xl
                    font-extrabold
                    text-white
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-300
                  "
                >
                  {item.description}
                </p>


                <a
                  href={`/departments/${item.slug}`}
                  className="
                    mt-5
                    inline-flex
                    rounded-xl
                    bg-emerald-600
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-emerald-700
                  "
                >
                  Learn More
                </a>

              </div>

            );

          })}

        </div>


      </div>

    </section>
  );
}