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
      className="relative min-h-screen overflow-hidden"
    >

      <Image
        src="/images/hero.png"
        alt="The Vitality Clinics Hurghada Healthcare"
        fill
        priority
        className="object-cover"
      />


      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-black/30" />


      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-28 md:px-6">

        <div className="max-w-4xl">


          <span className="inline-block rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-lg md:px-5 md:text-sm">
            VITALITY MEDICAL CARE GROUP
          </span>



          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
            The Vitality Clinics
          </h1>



          <h2 className="mt-3 text-xl font-light text-emerald-300 sm:text-2xl md:text-3xl">
            Multispecialty Healthcare in Hurghada
          </h2>



          <div className="mt-6 h-1 w-20 rounded-full bg-emerald-500" />



          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 sm:text-xl md:text-2xl">
            World-class healthcare services for residents,
            expatriates, tourists, and international patients
            with experienced physicians and modern medical technology.
          </p>



          <div className="mt-8 flex flex-wrap gap-2">

            {specialties.map((item) => (

              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md sm:text-sm"
              >
                {item}
              </span>

            ))}

          </div>



          <div className="mt-10 flex flex-col gap-4 sm:flex-row">


            <a
              href="#appointment"
              className="rounded-xl bg-emerald-600 px-8 py-4 text-center font-bold text-white shadow-lg transition hover:bg-emerald-700"
            >
              Book Appointment
            </a>



            <a
              href="tel:+201281270005"
              className="rounded-xl border border-white px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-black"
            >
              Call Now
            </a>



            <a
              href="https://wa.me/201281270005"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-4 text-center font-bold text-emerald-700 transition hover:bg-gray-100"
            >
              WhatsApp
            </a>


          </div>


        </div>

      </div>

    </section>
  );
}