import { MessageCircle, Phone, MapPin } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">


      {/* WhatsApp */}

      <div className="group relative">

        <a
          href="https://wa.me/201281270005"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp The Vitality Clinics"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full bg-green-600 text-white
            shadow-xl transition-all duration-300
            hover:scale-110 hover:bg-green-700
            sm:h-14 sm:w-14
          "
        >
          <MessageCircle size={25} />
        </a>


        <span
          className="
          pointer-events-none absolute right-16 top-1/2
          hidden -translate-y-1/2 rounded-lg
          bg-slate-900 px-3 py-2 text-sm text-white
          opacity-0 transition
          group-hover:block group-hover:opacity-100
          sm:block
          "
        >
          WhatsApp
        </span>

      </div>






      {/* Call */}

      <div className="group relative">

        <a
          href="tel:+201281270005"
          aria-label="Call The Vitality Clinics"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full bg-blue-700 text-white
            shadow-xl transition-all duration-300
            hover:scale-110 hover:bg-blue-800
            sm:h-14 sm:w-14
          "
        >
          <Phone size={24}/>
        </a>


        <span
          className="
          pointer-events-none absolute right-16 top-1/2
          hidden -translate-y-1/2 rounded-lg
          bg-slate-900 px-3 py-2 text-sm text-white
          opacity-0 transition
          group-hover:block group-hover:opacity-100
          sm:block
          "
        >
          Call Clinic
        </span>


      </div>







      {/* Google Maps */}

      <div className="group relative">

        <a
          href="https://share.google/BQGURfwiWLWdd14pb"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Vitality Clinics Location"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full bg-red-600 text-white
            shadow-xl transition-all duration-300
            hover:scale-110 hover:bg-red-700
            sm:h-14 sm:w-14
          "
        >
          <MapPin size={24}/>
        </a>



        <span
          className="
          pointer-events-none absolute right-16 top-1/2
          hidden -translate-y-1/2 rounded-lg
          bg-slate-900 px-3 py-2 text-sm text-white
          opacity-0 transition
          group-hover:block group-hover:opacity-100
          sm:block
          "
        >
          Location
        </span>


      </div>


    </div>
  );
}