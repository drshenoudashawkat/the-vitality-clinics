"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Insurance", href: "#insurance" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-md">

      <div className="mx-auto flex h-28 max-w-7xl items-center px-4 sm:h-32 sm:px-6">


        {/* Brand */}

        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center gap-3 sm:gap-5"
        >


          <Image
            src="/images/logo.png"
            alt="The Vitality Clinics Hurghada Medical Clinic"
            width={140}
            height={140}
            priority
            className="h-24 w-24 object-contain sm:h-28 sm:w-28"
          />



          <div className="flex flex-col">


            <h1
              className="
                whitespace-nowrap
                font-serif
                text-xl
                font-bold
                tracking-tight
                text-emerald-700
                drop-shadow-sm
                sm:text-3xl
              "
            >
              The Vitality Clinics
            </h1>



            <p
              className="
                mt-1
                text-center
                text-[9px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-slate-500
                sm:text-xs
              "
            >
              Travel Healthcare Services
            </p>



            <p
              className="
                mt-1
                whitespace-nowrap
                text-[8px]
                font-semibold
                tracking-wide
                text-slate-600
                sm:text-[11px]
              "
            >
              Powered by Vitality Medical Care Group (VMCG)
            </p>


          </div>


        </a>







        {/* Desktop Menu */}

        <nav className="ml-auto hidden items-center gap-6 lg:flex">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 transition hover:text-emerald-600"
            >
              {link.name}
            </a>

          ))}

        </nav>








        {/* Desktop Buttons */}

        <div className="ml-6 hidden shrink-0 items-center gap-3 lg:flex">


          <a
            href="https://wa.me/201281270005"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-emerald-600 px-5 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            WhatsApp
          </a>




          <a
            href="#appointment"
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-emerald-700"
          >
            Book Now
          </a>


        </div>









        {/* Mobile Buttons */}

        <div className="ml-auto flex items-center gap-1 lg:hidden">


          <a
            href="tel:+201281270005"
            className="rounded-lg bg-blue-600 p-2 text-white"
            aria-label="Call Clinic"
          >
            <Phone size={18}/>
          </a>




          <a
            href="#appointment"
            className="rounded-lg bg-emerald-600 px-2 py-2 text-xs font-bold text-white"
          >
            Book
          </a>





          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-emerald-700"
            aria-label="Open menu"
          >

            {open ? <X size={26}/> : <Menu size={26}/>}

          </button>


        </div>


      </div>










      {/* Mobile Menu */}

      {open && (

        <div className="border-t bg-white shadow-xl lg:hidden">


          <nav className="flex flex-col gap-5 px-6 py-6">


            {links.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-semibold text-gray-700 hover:text-emerald-600"
              >
                {link.name}
              </a>

            ))}





            <a
              href="https://wa.me/201281270005"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-600 px-5 py-3 text-center font-bold text-white"
            >
              WhatsApp
            </a>


          </nav>


        </div>

      )}


    </header>
  );
}