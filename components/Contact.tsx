import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-24"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Get Medical Assistance
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Contact The Vitality Clinics for appointments, consultations,
            and medical support in Hurghada.
          </p>

        </div>


        <div className="mt-16 grid gap-8 lg:grid-cols-2">


          <div className="rounded-3xl bg-white p-8 shadow-xl">


            <h3 className="text-3xl font-bold text-slate-900">
              Contact Information
            </h3>


            <div className="mt-8 space-y-6">


              <div className="flex items-center gap-4">
                <Phone className="text-emerald-600" />
                <div>
                  <p className="font-semibold">Phone</p>
<a
  href="tel:+201281270005"
  className="text-gray-600 hover:text-emerald-600"
>
  +20 128 127 0005
</a>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <MessageCircle className="text-green-600" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-gray-600">
                    Available 24/7
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
<a
  href="mailto:vitalitymedicalcare@gmail.com"
  className="text-gray-600 hover:text-blue-600"
>
  vitalitymedicalcare@gmail.com
</a>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <MapPin className="text-red-500" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">
                    Hurghada, Red Sea, Egypt
                  </p>
                </div>
              </div>


            </div>


            <a
              href="https://wa.me/201281270005"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-green-700"
            >
              <MessageCircle />
              WhatsApp Now
            </a>


          </div>



          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

            <iframe
              className="h-[450px] w-full"
              src="https://maps.google.com/maps?q=Hurghada%20Egypt&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />

          </div>


        </div>


      </div>

    </section>
  );
}