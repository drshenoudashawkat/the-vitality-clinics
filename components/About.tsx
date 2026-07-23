import Image from "next/image";
import {
  CheckCircle,
  HeartPulse,
  Globe2,
  Stethoscope,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-slate-50 py-24"
    >

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">


        {/* Image */}

        <div className="relative">

          <div className="overflow-hidden rounded-[32px] shadow-2xl">

            <Image
              src="/images/about/about-main.jpg"
              alt="The Vitality Clinics medical clinic in Hurghada"
              width={700}
              height={700}
              className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>



          <div className="absolute -bottom-8 -right-8 rounded-3xl bg-white p-6 shadow-xl">

            <h3 className="text-3xl font-bold text-emerald-700">
              Trusted
            </h3>

            <p className="mt-2 text-gray-600">
              Healthcare Excellence
            </p>

          </div>


        </div>





        {/* Content */}

        <div>


          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            About The Vitality Clinics
          </span>




          <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">

            Comprehensive Healthcare

            <span className="block text-emerald-700">
              In The Heart of Hurghada
            </span>

          </h2>





          <p className="mt-8 text-lg leading-8 text-gray-600">

            The Vitality Clinics is a modern multispecialty medical clinic in
            Hurghada, providing professional healthcare services through
            experienced doctors, advanced diagnostic technology, and
            patient-centered medical care.

          </p>




          <p className="mt-5 text-lg leading-8 text-gray-600">

            We provide healthcare solutions for residents, expatriates,
            tourists, and international patients, including specialist
            consultations, emergency care, women's health, pregnancy care,
            4D ultrasound, laboratory services, and international insurance
            assistance.

          </p>





          <div className="mt-10 grid gap-5">


            <div className="flex items-center gap-4">
              <CheckCircle
                className="text-emerald-700"
                size={26}
              />

              <span className="text-lg">
                Experienced Specialist Doctors
              </span>

            </div>



            <div className="flex items-center gap-4">

              <HeartPulse
                className="text-emerald-700"
                size={26}
              />

              <span className="text-lg">
                Complete Multispecialty Healthcare
              </span>

            </div>




            <div className="flex items-center gap-4">

              <Globe2
                className="text-emerald-700"
                size={26}
              />

              <span className="text-lg">
                International Patient & Insurance Support
              </span>

            </div>




            <div className="flex items-center gap-4">

              <Stethoscope
                className="text-emerald-700"
                size={26}
              />

              <span className="text-lg">
                Professional Medical Care in Hurghada
              </span>

            </div>


          </div>





          <a
            href="#services"
            className="mt-10 inline-flex rounded-xl bg-emerald-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-emerald-800"
          >
            Explore Our Medical Services
          </a>



        </div>


      </div>

    </section>
  );
}