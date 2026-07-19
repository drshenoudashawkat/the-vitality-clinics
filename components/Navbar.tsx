import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl shadow-md">

      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6">


        {/* Logo + Brand */}

        <a href="#" className="flex items-center gap-4">

          <Image
            src="/images/logo.png"
            alt="The Vitality Clinics Logo"
            width={110}
            height={110}
            priority
            className="object-contain"
          />


          <div className="flex flex-col">

            <h1 className="text-2xl font-extrabold tracking-tight text-emerald-700">
              The Vitality Clinics
            </h1>


            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Travel Healthcare Services
            </p>


          </div>

        </a>



        {/* Menu */}

        <nav className="hidden items-center gap-7 lg:flex">

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-emerald-600"
          >
            Home
          </a>


          <a
            href="#about"
            className="font-medium text-gray-700 transition hover:text-emerald-600"
          >
            About
          </a>


          <a
            href="#services"
            className="font-medium text-gray-700 transition hover:text-emerald-600"
          >
            Services
          </a>


          <a
            href="#insurance"
            className="font-medium text-gray-700 transition hover:text-emerald-600"
          >
            Insurance
          </a>


          <a
            href="#reviews"
            className="font-medium text-gray-700 transition hover:text-emerald-600"
          >
            Reviews
          </a>


          <a
            href="#contact"
            className="font-medium text-gray-700 transition hover:text-emerald-600"
          >
            Contact
          </a>


        </nav>



        {/* Buttons */}

        <div className="flex items-center gap-3">


          <a
            href="https://wa.me/201281270005"
            className="hidden rounded-xl border-2 border-emerald-600 px-5 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50 md:block"
          >
            WhatsApp
          </a>


          <button
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700"
          >
            Book Now
          </button>


        </div>


      </div>

    </header>
  );
}