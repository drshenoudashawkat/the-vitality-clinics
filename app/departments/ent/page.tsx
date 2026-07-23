import Link from "next/link";
import {
  Ear,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

export default function ENTPage() {
  return (
    <main className="bg-gradient-to-b from-white to-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            ENT Specialist
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Ear, Nose & Throat Care in Hurghada
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            The Vitality Clinics provides comprehensive Ear, Nose & Throat
            (ENT) services for adults and children, offering accurate diagnosis,
            modern treatment, and personalized medical care for a wide range of
            ENT conditions.
          </p>

        </div>



        {/* Services */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <Ear
              size={40}
              className="text-emerald-600"
            />

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Ear Care
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Diagnosis and treatment of ear infections, hearing problems,
              tinnitus, ear wax removal, dizziness, and balance disorders.
            </p>

          </div>



          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <Stethoscope
              size={40}
              className="text-emerald-600"
            />

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Nose & Sinus Care
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Professional management of sinusitis, allergic rhinitis, nasal
              blockage, nosebleeds, nasal polyps, and breathing difficulties.
            </p>

          </div>



          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <ShieldCheck
              size={40}
              className="text-emerald-600"
            />

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Throat & Pediatric ENT
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Evaluation and treatment of sore throat, tonsillitis, hoarseness,
              swallowing disorders, snoring, and ENT conditions affecting
              children.
            </p>

          </div>

        </div>



        {/* Why Choose */}

        <div className="mt-20 rounded-3xl bg-white p-10 shadow-lg">

          <div className="flex items-center gap-3">

            <HeartPulse
              size={34}
              className="text-emerald-600"
            />

            <h2 className="text-3xl font-bold text-slate-900">
              Why Choose The Vitality Clinics?
            </h2>

          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide high-quality ENT care using modern diagnostic equipment,
            evidence-based treatment, and personalized medical plans for both
            adults and children. Our goal is to ensure fast diagnosis, effective
            treatment, and excellent patient experience.
          </p>

        </div>



        {/* CTA */}

        <div className="mt-16 text-center">

          <Link
            href="/#contact"
            className="inline-flex rounded-xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-emerald-700"
          >
            Book an Appointment
          </Link>

        </div>

      </div>

    </main>
  );
}