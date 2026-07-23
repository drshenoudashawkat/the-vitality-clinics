import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Clock3,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        <div className="text-center">

          <span className="rounded-full bg-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-300">
            Contact The Vitality Clinics
          </span>


          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-5xl">
            Get Professional Medical Care in Hurghada
          </h2>


          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Contact The Vitality Clinics for medical consultations, specialist
            appointments, emergency support, tourist healthcare, pregnancy
            care, and international patient assistance in Hurghada.
          </p>

        </div>



        <div className="mt-12 grid gap-8 lg:grid-cols-2">



          <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">


            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Contact Information
            </h3>



            <div className="mt-8 space-y-6">


              <div className="flex gap-4">

                <Phone className="text-emerald-600" />

                <div>

                  <p className="font-semibold text-slate-900">
                    Phone
                  </p>

                  <a
                    href="tel:+201281270005"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    +20 128 127 0005
                  </a>

                </div>

              </div>





              <div className="flex gap-4">

                <MessageCircle className="text-green-600" />

                <div>

                  <p className="font-semibold text-slate-900">
                    WhatsApp Support
                  </p>

                  <a
                    href="https://wa.me/201281270005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Available 24/7 for medical assistance
                  </a>

                </div>

              </div>





              <div className="flex gap-4">

                <Mail className="text-blue-600" />

                <div>

                  <p className="font-semibold text-slate-900">
                    Email
                  </p>


                  <a
                    href="mailto:vitalitymedicalcare@gmail.com"
                    className="break-all text-gray-600 hover:text-blue-600"
                  >
                    vitalitymedicalcare@gmail.com
                  </a>

                </div>

              </div>






              <div className="flex gap-4">

                <MapPin className="text-red-500" />

                <div>

                  <p className="font-semibold text-slate-900">
                    Location
                  </p>


                  <a
                    href="https://share.google/BQGURfwiWLWdd14pb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    The Vitality Clinics
                    <br />
                    Hurghada, Red Sea, Egypt
                  </a>

                </div>

              </div>






              <div className="flex gap-4">

                <Clock3 className="text-emerald-600" />

                <div>

                  <p className="font-semibold text-slate-900">
                    Working Hours
                  </p>


                  <p className="text-gray-600">
                    24/7 Medical Support & Emergency Assistance
                  </p>

                </div>

              </div>



            </div>







            <div className="mt-10 grid gap-4 sm:grid-cols-3">



              <a
                href="tel:+201281270005"
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700"
              >

                <Phone size={20} />

                Call

              </a>






              <a
                href="https://wa.me/201281270005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
              >

                <MessageCircle size={20} />

                WhatsApp

              </a>






              <a
                href="https://share.google/BQGURfwiWLWdd14pb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-4 font-bold text-white shadow-lg transition hover:bg-emerald-700"
              >

                <Navigation size={20} />

                Map

              </a>



            </div>


          </div>








          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">


            <iframe
              className="h-[400px] w-full border-0 sm:h-[450px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.7971029279708!2d33.82589734426781!3d27.195478595711958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1452877406bc8b91%3A0xff9811f825801991!2sThe%20Vitality%20Clinics!5e0!3m2!1sen!2seg!4v1784763514938!5m2!1sen!2seg"
              loading="lazy"
            />


          </div>




        </div>


      </div>

    </section>
  );
}