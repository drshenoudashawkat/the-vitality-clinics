import { MapPin, Phone, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2">


          <div>

            <span className="rounded-full bg-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-300">
              Clinic Location
            </span>



            <h2 className="mt-6 text-4xl font-extrabold text-white">
              Located in the Heart of Hurghada
            </h2>



            <p className="mt-6 text-lg leading-8 text-slate-300">
              The Vitality Clinics is conveniently located in the heart of
              Hurghada, providing easy access to professional healthcare
              services for residents, expatriates, tourists, and international
              patients. Our clinic offers comprehensive medical care in a
              modern, comfortable, and easily reachable location.
            </p>




            <div className="mt-8 flex gap-4">


              <MapPin
                size={32}
                className="text-emerald-400"
              />


              <div>

                <h3 className="font-bold text-white">
                  Our Address
                </h3>


                <a
                  href="https://share.google/BQGURfwiWLWdd14pb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-slate-300 hover:text-emerald-400"
                >
                  The Vitality Clinics,
                  <br />
                  Hurghada, Red Sea, Egypt
                </a>


              </div>


            </div>







            <div className="mt-8 flex flex-wrap gap-4">



              <a
                href="https://share.google/BQGURfwiWLWdd14pb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >

                <Navigation size={20} />

                Open in Google Maps

              </a>





              <a
                href="tel:+201281270005"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-400 px-6 py-3 font-semibold text-emerald-300 transition hover:bg-white hover:text-emerald-700"
              >

                <Phone size={20} />

                Call Clinic

              </a>



            </div>


          </div>








          <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-2xl">


            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.7971029279708!2d33.82589734426781!3d27.195478595711958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1452877406bc8b91%3A0xff9811f825801991!2sThe%20Vitality%20Clinics!5e0!3m2!1sen!2seg!4v1784763514938!5m2!1sen!2seg"
              width="100%"
              height="450"
              loading="lazy"
              className="rounded-2xl border-0"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />


          </div>


        </div>


      </div>
    </section>
  );
}