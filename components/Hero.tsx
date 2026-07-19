import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Clock3 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-blue-50 pt-36 pb-24">

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Text */}

        <div>

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            24/7 Travel Healthcare Services
          </span>

          <h1 className="mt-7 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Comprehensive
            <span className="block text-emerald-600">
              Medical Care
            </span>
            In Hurghada
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            The Vitality Clinics provides comprehensive healthcare services
            through experienced physicians, modern diagnostic technology,
            and patient-centered care for residents, expatriates, and tourists
            in Hurghada.
          </p>


          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-emerald-700">
              Book Appointment
              <ArrowRight size={20} />
            </button>


            <a
              href="tel:+201281270005"
              className="flex items-center gap-2 rounded-xl border-2 border-emerald-600 px-7 py-4 font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              <Phone size={20} />
              Call Now
            </a>

          </div>


          <div className="mt-12 grid grid-cols-2 gap-6">

            <div className="flex items-center gap-3">

              <ShieldCheck
                className="text-emerald-600"
                size={32}
              />

              <div>

                <h4 className="font-bold">
                  International Patients
                </h4>

                <p className="text-sm text-gray-500">
                  Professional Support
                </p>

              </div>

            </div>


            <div className="flex items-center gap-3">

              <Clock3
                className="text-emerald-600"
                size={32}
              />

              <div>

                <h4 className="font-bold">
                  24/7 Support
                </h4>

                <p className="text-sm text-gray-500">
                  Medical Assistance
                </p>

              </div>

            </div>

          </div>


        </div>



        {/* Image */}

        <div className="relative">

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <Image
              src="/images/clinic.png"
              alt="The Vitality Clinics"
              width={800}
              height={800}
              priority
              className="h-[620px] w-full object-cover"
            />

          </div>


          <div className="absolute bottom-8 left-8 rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur">

            <h3 className="text-4xl font-extrabold text-emerald-600">
              12K+
            </h3>

            <p className="text-gray-600">
              Patients Served
            </p>

          </div>


          <div className="absolute right-8 top-8 rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur">

            <h3 className="text-4xl font-extrabold text-emerald-600">
              15+
            </h3>

            <p className="text-gray-600">
              Medical Services
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}