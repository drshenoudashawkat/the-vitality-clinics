import Image from "next/image";
import { CheckCircle, HeartPulse, Globe2, Stethoscope } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-slate-50 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Image */}

        <div className="relative">

          <div className="overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src="/images/clinic.png"
              alt="The Vitality Clinics"
              width={700}
              height={700}
              className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          <div className="absolute -bottom-8 -right-8 rounded-3xl bg-white p-6 shadow-xl">

            <h3 className="text-5xl font-bold text-blue-700">
              12K+
            </h3>

            <p className="mt-2 text-gray-600">
              Happy Patients
            </p>

          </div>

        </div>

        {/* Right Content */}

        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About Us
          </span>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">
            Healthcare
            <span className="block text-blue-700">
              You Can Trust
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            The Vitality Clinics is a modern multidisciplinary medical clinic
            located in Hurghada, providing comprehensive healthcare services
            with experienced physicians, advanced medical technology, and
            international standards of care.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We proudly care for Egyptian residents, expatriates, and tourists,
            offering high-quality medical services in a comfortable and
            professional environment.
          </p>

          <div className="mt-10 grid gap-5">

            <div className="flex items-center gap-4">
              <CheckCircle className="text-blue-700" size={26} />
              <span className="text-lg">
                Experienced Medical Specialists
              </span>
            </div>

            <div className="flex items-center gap-4">
              <HeartPulse className="text-blue-700" size={26} />
              <span className="text-lg">
                Comprehensive Healthcare Services
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Globe2 className="text-blue-700" size={26} />
              <span className="text-lg">
                International Insurance Assistance
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Stethoscope className="text-blue-700" size={26} />
              <span className="text-lg">
                24/7 Medical Support
              </span>
            </div>

          </div>

          <button className="mt-10 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-800">
            Learn More About Us
          </button>

        </div>

      </div>
    </section>
  );
}