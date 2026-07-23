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
    description:
      "Expert diagnosis and management of adult medical conditions including diabetes, hypertension, infections, and chronic diseases.",
    icon: HeartPulse,
  },
  {
    title: "Pediatrics",
    description:
      "Comprehensive healthcare for children including routine checkups, infections, growth monitoring, and pediatric consultations.",
    icon: Baby,
  },
  {
    title: "Obstetrics & Gynecology",
    description:
      "Complete women's healthcare including pregnancy care, gynecology consultations, and reproductive health services.",
    icon: Stethoscope,
  },
  {
    title: "Fetal Medicine Unit",
    description:
      "Advanced fetal assessment including anatomy scans, Doppler studies, fetal growth monitoring, and high-risk pregnancy follow-up.",
    icon: ScanHeart,
  },
  {
    title: "4D Ultrasonography",
    description:
      "Advanced 4D ultrasound services in Hurghada providing detailed fetal imaging and pregnancy monitoring.",
    icon: ScanHeart,
  },
  {
    title: "General Surgery",
    description:
      "Professional surgical consultations, evaluation, and treatment planning by experienced specialists.",
    icon: ShieldPlus,
  },
  {
    title: "Orthopedics",
    description:
      "Diagnosis and treatment of bone, joint, muscle, and orthopedic conditions.",
    icon: Bone,
  },
  {
    title: "Dermatology & Aesthetic Medicine",
    description:
      "Skin health, cosmetic consultations, and aesthetic medical treatments.",
    icon: Sparkles,
  },
  {
    title: "ENT Specialist",
    description:
      "Diagnosis and treatment of ear, nose, and throat conditions for adults and children.",
    icon: Ear,
  },
  {
    title: "Cardiology",
    description:
      "Heart health evaluation, cardiovascular consultations, and preventive cardiac care.",
    icon: HeartPulse,
  },
  {
    title: "Neurology & Psychiatry",
    description:
      "Specialized care for neurological conditions, mental health concerns, and psychiatric consultations.",
    icon: Brain,
  },
  {
    title: "Urology",
    description:
      "Diagnosis and management of urinary tract and male health conditions.",
    icon: ShieldPlus,
  },
  {
    title: "Tourist Healthcare Services",
    description:
      "Fast medical assistance for tourists, hotels guests, and international visitors in Hurghada.",
    icon: Ambulance,
  },
  {
    title: "Emergency & Urgent Care",
    description:
      "Rapid medical evaluation and urgent healthcare support for unexpected medical situations.",
    icon: Ambulance,
  },
  {
    title: "Laboratory & Diagnostic Services",
    description:
      "Modern laboratory testing and diagnostic services supporting accurate medical decisions.",
    icon: FlaskConical,
  },
];

export default function MedicalDepartments() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24"
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Medical Specialties in Hurghada
          </span>


          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Comprehensive Healthcare Services & Specialist Doctors
          </h2>


          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-gray-600">
            The Vitality Clinics provides comprehensive healthcare services in
            Hurghada through experienced specialist doctors, advanced
            diagnostic technology, and patient-centered medical care for
            residents, expatriates, tourists, and international visitors.
          </p>


        </div>




        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">


          {departments.map((item) => {

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



                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
                >
                  Book Consultation
                </a>


              </div>

            );

          })}


        </div>


      </div>

    </section>
  );
}