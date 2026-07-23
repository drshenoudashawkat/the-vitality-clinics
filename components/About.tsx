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
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* IMAGE */}
        <div className="relative">

          <div
            className="
              overflow-hidden
              rounded-[40px]
              border
              border-emerald-500/20
              shadow-2xl
            "
          >
            <Image
              src="/images/about/about-main.jpg"
              alt="The Vitality Clinics medical clinic in Hurghada"
              width={700}
              height={700}
              className="
                h-[600px]
                w-full
                object-cover
                transition
                duration-1000
                hover:scale-105
              "
            />
          </div>

          <div
            className="
              absolute
              -bottom-8
              -right-8
              rounded-3xl
              border
              border-emerald-500/30
              bg-slate-900/95
              p-7
              shadow-2xl
              backdrop-blur
            "
          >
            <h3 className="text-3xl font-extrabold text-white">
              Trusted
            </h3>

            <p className="mt-2 text-emerald-400">
              Healthcare Excellence
            </p>
          </div>

        </div>

        {/* CONTENT */}

        <div>

          <span
            className="
              inline-block
              rounded-full
              bg-emerald-600/20
              px-5
              py-2
              text-sm
              font-bold
              text-emerald-400
            "
          >
            About The Vitality Clinics
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
            Comprehensive Healthcare

            <span className="block text-emerald-400">
              In The Heart of Hurghada
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            The Vitality Clinics is a modern multispecialty medical clinic in
            Hurghada, providing professional healthcare services through
            experienced doctors, advanced diagnostic technology, and
            patient-centered medical care.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            We provide healthcare solutions for residents, expatriates,
            tourists, and international patients, including specialist
            consultations, emergency care, women's health, pregnancy care,
            4D ultrasound, laboratory services, and international insurance
            assistance.
          </p>

          <div className="mt-10 grid gap-5">

            {[
              {
                icon: CheckCircle,
                text: "Experienced Specialist Doctors",
              },
              {
                icon: HeartPulse,
                text: "Complete Multispecialty Healthcare",
              },
              {
                icon: Globe2,
                text: "International Patient & Insurance Support",
              },
              {
                icon: Stethoscope,
                text: "Professional Medical Care in Hurghada",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.text}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-700
                    bg-slate-900
                    p-4
                    shadow-lg
                    transition
                    hover:-translate-y-1
                    hover:border-emerald-500
                    hover:shadow-emerald-500/20
                  "
                >
                  <Icon
                    size={28}
                    className="text-emerald-400"
                  />

                  <span className="text-lg font-medium text-slate-100">
                    {item.text}
                  </span>

                </div>

              );

            })}

          </div>

          <a
            href="#services"
            className="
              mt-10
              inline-flex
              rounded-xl
              bg-emerald-600
              px-8
              py-4
              font-bold
              text-white
              shadow-lg
              transition
              hover:bg-emerald-700
            "
          >
            Explore Our Medical Services
          </a>

        </div>

      </div>

    </section>
  );
}