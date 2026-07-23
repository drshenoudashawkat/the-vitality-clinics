"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Medical Specialties", href: "#medical-specialties" },
    { name: "Services", href: "#services" },
    { name: "Insurance", href: "#insurance" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${
          scrolled
            ? "bg-white/95 shadow-xl backdrop-blur-xl"
            : "bg-white/90 backdrop-blur-lg"
        }
      `}
    >

      <div
        className={`
          mx-auto flex max-w-7xl items-center px-4 sm:px-6
          ${
            scrolled ? "h-20" : "h-28"
          }
        `}
      >

        {/* LOGO */}

        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 shrink-0"
        >

          <Image
            src="/images/logo.png"
            alt="The Vitality Clinics"
            width={120}
            height={120}
            priority
            className="h-20 w-20 object-contain"
          />

          <div>
            <h1 className="font-serif text-xl font-bold text-[#0B3C5D]">
              The Vitality Clinics
            </h1>

            <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9A227]">
              Travel Healthcare Services
            </p>

          </div>

        </a>



        {/* DESKTOP MENU */}

        <nav className="ml-auto hidden lg:flex items-center gap-6">

          {links.map((link)=>(
            <a
              key={link.name}
              href={link.href}
              className="
              font-medium
              text-[#334155]
              hover:text-[#0097A7]
              transition
              "
            >
              {link.name}
            </a>
          ))}

        </nav>



        {/* DESKTOP ACTION */}

        <div className="ml-5 hidden lg:flex items-center gap-3">

          <a
            href="https://www.facebook.com/profile.php?id=61574801951110"
            target="_blank"
            className="flex h-9 w-9 items-center justify-center rounded-full border"
          >
            <FaFacebookF size={15}/>
          </a>


          <a
            href="https://www.instagram.com/vitalitymedicalcare/"
            target="_blank"
            className="flex h-9 w-9 items-center justify-center rounded-full border"
          >
            <FaInstagram size={15}/>
          </a>


          <a
            href="https://wa.me/201281270005"
            target="_blank"
            className="rounded-xl border border-[#0097A7] px-3 py-2 text-sm text-[#0097A7]"
          >
            WhatsApp
          </a>


          <a
            href="#appointment"
            className="rounded-xl bg-[#0097A7] px-5 py-3 text-white"
          >
            Book Now
          </a>

        </div>



        {/* MOBILE BUTTONS */}

        <div className="ml-auto flex items-center gap-2 lg:hidden">

          <a
            href="tel:+201281270005"
            className="rounded-lg bg-[#0B3C5D] p-2 text-white"
          >
            <Phone size={17}/>
          </a>


          <button
            onClick={()=>setOpen(!open)}
            className="rounded-lg p-2 text-[#0097A7]"
          >
            {open ? <X size={28}/> : <Menu size={28}/>}
          </button>

        </div>


      </div>



      {/* MOBILE MENU */}

      {open && (

        <div
          className="
          absolute
          top-full
          left-0
          right-0
          bg-white
          shadow-xl
          border-t
          lg:hidden
          "
        >

          <nav className="flex flex-col p-6 gap-5">

            {links.map((link)=>(

              <a
                key={link.name}
                href={link.href}
                onClick={()=>setOpen(false)}
                className="
                text-lg
                font-semibold
                text-[#0B3C5D]
                hover:text-[#0097A7]
                "
              >
                {link.name}
              </a>

            ))}


            <a
              href="https://wa.me/201281270005"
              className="
              rounded-xl
              bg-[#0097A7]
              py-3
              text-center
              font-bold
              text-white
              "
            >
              WhatsApp
            </a>

          </nav>

        </div>

      )}

    </header>
  );
}