import Link from "next/link";
import {
  Ambulance,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export default function EmergencyUrgentCarePage() {
  return (
    <main className="bg-gradient-to-b from-white to-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center">

          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-700">
            Emergency & Urgent Care
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Emergency Medical Services in Hurghada
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            The Vitality Clinics provides rapid medical assessment and urgent
            treatment for adults, children, residents, expatriates, and tourists
            requiring immediate medical attention.
          </p>

        </div>



        {/* Services */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <Ambulance size={40} className="text-red-600" />

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Immediate Medical Care
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Rapid assessment and treatment for urgent illnesses, injuries,
              dehydration, fever, infections, allergic reactions, and sudden
              medical conditions.
            </p>

          </div>



          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <HeartPulse size={40} className="text-red-600" />

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              Emergency Stabilization
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Initial emergency management, IV fluids, oxygen therapy, wound
              care, pain control, and patient stabilization before referral
              when required.
            </p>

          </div>



          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <ShieldCheck size={40} className="text-red-600" />

            <h2 className="mt-6 text-2xl font-bold text-slate-900">
              24/7 Medical Support
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Fast access to experienced physicians with emergency evaluation,
              laboratory investigations, imaging coordination, and follow-up
              medical care.
            </p>

          </div>

        </div>



        {/* Why Choose */}

        <div className="mt-20 rounded-3xl bg-white p-10 shadow-lg">

          <div className="flex items-center gap-3">

            <Stethoscope size={34} className="text-red-600" />

            <h2 className="text-3xl font-bold text-slate-900">
              Why Choose The Vitality Clinics?
            </h2>

          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our emergency team delivers prompt medical evaluation, modern
            diagnostic support, compassionate patient care, and coordinated
            treatment for urgent medical situations in Hurghada.
          </p>

        </div>



        {/* CTA */}

        <div className="mt-16 text-center">

          <Link
            href="/#contact"
            className="inline-flex rounded-xl bg-red-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-red-700"
          >
            Book an Appointment
          </Link>

        </div>

      </div>

    </main>
  );
}