export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-white">

      <div className="mx-auto max-w-7xl px-6">


        <div className="grid gap-8 md:grid-cols-3">


          <div>

            <h2 className="text-3xl font-extrabold">
              The Vitality Clinics
            </h2>

            <p className="mt-4 text-gray-400">
              Travel Healthcare Services in Hurghada.
              Professional medical care for residents,
              expatriates, and tourists.
            </p>

          </div>



          <div>

            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <div className="mt-4 space-y-2 text-gray-400">

              <p>Home</p>
              <p>About</p>
              <p>Services</p>
              <p>Contact</p>

            </div>

          </div>



          <div>

            <h3 className="text-xl font-bold">
              Contact
            </h3>

            <p className="mt-4 text-gray-400">
              +20 128 127 0005
            </p>

            <p className="mt-2 text-gray-400">
              Hurghada, Egypt
            </p>

          </div>


        </div>



        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">

          © 2026 Vitality Medical Care. All rights reserved.

        </div>


      </div>


    </footer>
  );
}