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


      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:h-24 sm:px-6">


        {/* Logo */}

        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 sm:gap-4"
        >

          <Image
            src="/images/logo.png"
            alt="The Vitality Clinics Hurghada Medical Clinic"
            width={80}
            height={80}
            priority
            className="h-14 w-14 object-contain sm:h-20 sm:w-20"
          />


          <div>

            <h1 className="text-base font-extrabold leading-tight text-emerald-700 sm:text-2xl">
              The Vitality Clinics
            </h1>


            <p className="hidden text-xs uppercase tracking-[0.2em] text-gray-500 sm:block">
              Travel Healthcare Services
            </p>

          </div>

        </a>




        {/* Desktop Menu */}

        <nav className="hidden items-center gap-7 lg:flex">

          {links.map((link)=>(

            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 transition hover:text-emerald-600"
            >
              {link.name}
            </a>

          ))}

        </nav>





        {/* Desktop Action */}

        <div className="hidden items-center gap-3 lg:flex">


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






        {/* Mobile Actions */}

        <div className="flex items-center gap-2 lg:hidden">


          <a
            href="tel:+201281270005"
            className="rounded-lg bg-blue-600 p-2 text-white"
            aria-label="Call Clinic"
          >
            <Phone size={18}/>
          </a>



          <a
            href="#appointment"
            className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-bold text-white"
          >
            Book
          </a>



          <button
            onClick={()=>setOpen(!open)}
            className="rounded-lg p-2 text-emerald-700"
            aria-label="Open menu"
          >

            {open ? <X size={28}/> : <Menu size={28}/>}

          </button>


        </div>


      </div>







      {/* Mobile Menu */}

      {open && (

        <div className="border-t bg-white shadow-xl lg:hidden">

          <nav className="flex flex-col gap-5 px-6 py-6">


            {links.map((link)=>(

              <a
                key={link.name}
                href={link.href}
                onClick={()=>setOpen(false)}
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