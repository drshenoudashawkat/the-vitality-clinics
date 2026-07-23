import Image from "next/image";

const specialties = [
  "Internal Medicine",
  "Women's Health",
  "Fetal Medicine",
  "4D Ultrasound",
  "Pediatrics",
  "Emergency Care",
  "Travel Medicine",
  "International Insurance",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      <Image
        src="/images/hero.png"
        alt="The Vitality Clinics Hurghada Healthcare"
        fill
        priority
        className="object-cover"
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-slate-950/90
          via-slate-900/70
          to-emerald-700/35
        "
      />

      <div
        className="
          relative z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-5
          pt-20
          md:px-6
        "
      >
        <div className="max-w-4xl animate-[fadeIn_1.2s_ease-out]">

          <span
            className="
              inline-flex
              rounded-full
              bg-emerald-600
              px-5
              py-2
              text-xs
              font-bold
              tracking-wide
              text-white
              shadow-lg
              md:text-sm
            "
          >
            VITALITY MEDICAL CARE GROUP
          </span>

          <h1
            className="
              mt-5
              text-4xl
              font-extrabold
              leading-tight
              text-white
              drop-shadow-2xl
              sm:text-5xl
              md:text-7xl
            "
          >
            The Vitality Clinics
          </h1>

          <h2
            className="
              mt-3
              text-xl
              font-medium
              text-emerald-300
              sm:text-2xl
              md:text-3xl
            "
          >
            Multispecialty Healthcare in Hurghada
          </h2>

          <div
            className="
              mt-6
              h-1
              w-24
              rounded-full
              bg-emerald-500
            "
          />

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-100
              sm:text-xl
            "
          >
            World-class healthcare services for residents,
            expatriates, tourists, and international patients
            with experienced physicians and modern medical technology.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {specialties.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-slate-900/40
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-emerald-500
                  hover:bg-emerald-600
                  sm:text-sm
                "
              >
                {item}
              </span>
            ))}
          </div>

          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:flex-wrap
              sm:items-center
            "
          >
            <a
              href="#appointment"
              className="
                rounded-xl
                bg-emerald-600
                px-8
                py-4
                text-center
                font-bold
                text-white
                shadow-xl
                transition
                hover:bg-emerald-700
              "
            >
              Book Appointment
            </a>

            <a
              href="tel:+201281270005"
              className="
                rounded-xl
                border
                border-white
                px-8
                py-4
                text-center
                font-bold
                text-white
                transition
                hover:bg-white
                hover:text-slate-900
              "
            >
              Call Now
            </a>

            <a
              href="https://wa.me/201281270005"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                bg-green-600
                px-8
                py-4
                text-center
                font-bold
                text-white
                shadow-lg
                transition
                hover:bg-green-700
              "
            >
              WhatsApp
            </a>

            <span
              className="
                rounded-xl
                border
                border-emerald-400/40
                bg-emerald-500/15
                px-5
                py-3
                text-center
                text-sm
                font-bold
                text-white
                backdrop-blur-md
              "
            >
              ✓ We Work With All Insurance Companies
            </span>

          </div>

        </div>
      </div>
    </section>
  );
}