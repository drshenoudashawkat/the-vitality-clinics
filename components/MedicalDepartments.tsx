import {
  HeartPulse,
  Baby,
  Stethoscope,
  ScanHeart,
  Microscope,
  Bone,
  Eye,
  Ear,
  Brain,
  ShieldPlus,
  Ambulance,
  FlaskConical,
} from "lucide-react";

const departments = [
  {
    title: "Internal Medicine",
    icon: <HeartPulse size={34} className="text-emerald-600" />,
  },
  {
    title: "Pediatrics",
    icon: <Baby size={34} className="text-emerald-600" />,
  },
  {
    title: "Obstetrics & Gynecology",
    icon: <Stethoscope size={34} className="text-emerald-600" />,
  },
  {
    title: "Infertility Unit",
    icon: <HeartPulse size={34} className="text-emerald-600" />,
  },
  {
    title: "4D Ultrasonography",
    icon: <ScanHeart size={34} className="text-emerald-600" />,
  },
  {
    title: "General Surgery",
    icon: <ShieldPlus size={34} className="text-emerald-600" />,
  },
  {
    title: "Orthopedics",
    icon: <Bone size={34} className="text-emerald-600" />,
  },
  {
    title: "Dermatology",
    icon: <Eye size={34} className="text-emerald-600" />,
  },
  {
    title: "ENT",
    icon: <Ear size={34} className="text-emerald-600" />,
  },
  {
    title: "Cardiology",
    icon: <HeartPulse size={34} className="text-emerald-600" />,
  },
  {
    title: "Neurology & Psychiatry",
    icon: <Brain size={34} className="text-emerald-600" />,
  },
  {
    title: "Urology",
    icon: <ShieldPlus size={34} className="text-emerald-600" />,
  },
  {
    title: "Travel Healthcare",
    icon: <Ambulance size={34} className="text-emerald-600" />,
  },
  {
    title: "Emergency Care",
    icon: <Ambulance size={34} className="text-emerald-600" />,
  },
  {
    title: "Laboratory Services",
    icon: <FlaskConical size={34} className="text-emerald-600" />,
  },
];

export default function MedicalDepartments() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Medical Departments
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Comprehensive Medical Specialties
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Comprehensive healthcare delivered by experienced specialists using
            modern medical technology and international standards of patient care.
          </p>

        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {departments.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {item.icon}

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Professional consultations, advanced diagnostics, and
                patient-centered medical care tailored to your healthcare needs.
              </p>

              <button className="mt-6 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">
                Learn More
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}