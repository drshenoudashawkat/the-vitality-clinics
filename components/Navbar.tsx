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
          : "bg-gradient-to-r from-white/90 via-[#F0F8FA]/90 to-white/90 backdrop-blur-lg"
        }
      `}
    >


      <div
        className={`
          mx-auto flex max-w-7xl items-center px-4 sm:px-6
          transition-all duration-500
          ${
            scrolled
            ? "h-20"
            : "h-28"
          }
        `}
      >



        {/* BRAND */}

        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 shrink-0"
        >


          <Image
            src="/images/logo.png"
            alt="The Vitality Clinics Hurghada"
            width={120}
            height={120}
            priority
            className={`
              object-contain transition-all duration-500
              ${
                scrolled
                ? "h-16 w-16"
                : "h-24 w-24"
              }
            `}
          />



          <div className="flex flex-col items-center">


            <h1
              className={`
                font-serif
                font-bold
                text-[#0B3C5D]
                text-center
                transition-all duration-500
                ${
                  scrolled
                  ? "text-xl"
                  : "text-3xl"
                }
              `}
            >
              The Vitality Clinics
            </h1>


            <p className="text-center text-[9px] uppercase tracking-[0.3em] text-[#C9A227]">
              Travel Healthcare Services
            </p>


            <p className="text-center text-[8px] tracking-wide text-slate-500">
              A Member of Vitality Medical Care Group (VMCG)
            </p>


          </div>


        </a>





        {/* MENU */}

        <nav className="ml-auto hidden items-center gap-6 lg:flex">

          {links.map((link)=>(

            <a
              key={link.name}
              href={link.href}
              className="
                font-medium
                text-[#334155]
                transition
                hover:text-[#0097A7]
              "
            >
              {link.name}
            </a>

          ))}

        </nav>





        {/* ACTIONS */}

        <div className="ml-5 hidden items-center gap-2 lg:flex">


          <a
            href="https://www.facebook.com/profile.php?id=61574801951110"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border text-slate-500 hover:text-[#0097A7]"
          >
            <FaFacebookF size={15}/>
          </a>



          <a
            href="https://www.instagram.com/vitalitymedicalcare/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border text-slate-500 hover:text-[#0097A7]"
          >
            <FaInstagram size={15}/>
          </a>



          <a
            href="https://wa.me/201281270005"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#0097A7] px-3 py-2 text-sm font-semibold text-[#0097A7]"
          >
            WhatsApp
          </a>



          <a
            href="#appointment"
            className="rounded-xl bg-[#0097A7] px-5 py-3 text-sm font-bold text-white shadow-md"
          >
            Book Now
          </a>


        </div>






        {/* MOBILE */}

        <div className="ml-auto flex items-center gap-1 lg:hidden">


          <a
            href="tel:+201281270005"
            className="rounded-lg bg-[#0B3C5D] p-2 text-white"
          >
            <Phone size={17}/>
          </a>


          <a
            href="#appointment"
            className="rounded-lg bg-[#0097A7] px-3 py-2 text-xs font-bold text-white"
          >
            Book
          </a>



          <button
            onClick={()=>setOpen(!open)}
            className="p-2 text-[#0097A7]"
          >
            {open ? <X size={25}/> : <Menu size={25}/>}
          </button>


        </div>


      </div>


    </header>

  );
}