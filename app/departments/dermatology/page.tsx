import Link from "next/link";
import {
  Sparkles,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

export default function DermatologyPage() {
  return (
    <main className="bg-gradient-to-b from-white to-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center">

          <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-700">
            Dermatology & Aesthetic Medicine
          </span>


          <h1 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Dermatology Care in Hurghada
          </h1>


          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            The Vitality Clinics provides professional dermatology and aesthetic
            medicine services in Hurghada with modern medical approaches,
            personalized treatment plans, and specialist care for skin health
            and beauty concerns.
          </p>

        </div>



        {/* Services */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">


          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <Sparkles
              size={40}
              className="text-emerald-600"
            />

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Skin Treatments
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Assessment and treatment of common skin conditions including
              acne, pigmentation, infections, and chronic skin problems.
            </p>

          </div>



          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <HeartPulse
              size={40}
              className="text-emerald-600"
            />

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Aesthetic Medicine
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Professional aesthetic consultations and skin improvement
              treatments designed according to individual needs.
            </p>

          </div>



          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <ShieldCheck
              size={40}
              className="text-emerald-600"
            />

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Specialist Dermatology Care
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Safe medical evaluation with experienced doctors and
              patient-focused dermatological care.
            </p>

          </div>


        </div>




        {/* CTA */}

        <div className="mt-16 text-center">


          <Link
            href="#contact"
            className="inline-flex rounded-xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-emerald-700"
          >
            Book Dermatology Consultation
          </Link>


        </div>


      </div>

    </main>
  );
}