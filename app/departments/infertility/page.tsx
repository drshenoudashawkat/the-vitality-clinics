export const metadata = {
  title: "Infertility Unit | The Vitality Clinics",
  description:
    "Comprehensive infertility assessment and fertility care in Hurghada. Our Infertility Unit offers personalized evaluation, ovulation monitoring, reproductive ultrasound, and evidence-based fertility management.",
};

export default function InfertilityPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-emerald-600 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-5xl font-extrabold">
            Infertility Unit
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-emerald-100">
            Comprehensive fertility assessment, reproductive health evaluation,
            ovulation monitoring, and personalized treatment planning for couples
            seeking pregnancy.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-4xl font-bold text-slate-900">
            Comprehensive Fertility Care
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Our Infertility Unit provides evidence-based fertility assessment for
            both women and men. We focus on identifying the underlying causes of
            infertility and developing individualized management plans using
            modern diagnostic techniques and international clinical guidelines.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            We understand that fertility concerns can be emotionally challenging.
            Our experienced team offers compassionate, confidential, and
            patient-centered care throughout every stage of the fertility journey.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-4xl font-bold text-slate-900">
            Our Services
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-2xl font-bold">
                Female Fertility Assessment
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• Ovulation assessment</li>
                <li>• Hormonal evaluation</li>
                <li>• Ovarian reserve assessment</li>
                <li>• Pelvic ultrasound</li>
                <li>• Uterine evaluation</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-2xl font-bold">
                Male Fertility Assessment
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• Semen analysis</li>
                <li>• Medical evaluation</li>
                <li>• Hormonal investigations</li>
                <li>• Lifestyle counseling</li>
                <li>• Personalized management</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* When to Visit */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-4xl font-bold text-slate-900">
            When Should You Seek Fertility Assessment?
          </h2>

          <div className="mt-10 rounded-3xl bg-emerald-50 p-10">

            <ul className="space-y-4 text-lg leading-8 text-gray-700">
              <li>• Trying to conceive for 12 months without success.</li>
              <li>• Women over 35 trying for more than 6 months.</li>
              <li>• Irregular menstrual cycles.</li>
              <li>• Previous miscarriages.</li>
              <li>• Known hormonal disorders.</li>
              <li>• Previous pelvic surgery.</li>
              <li>• Male fertility concerns.</li>
            </ul>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-600 py-24 text-center text-white">

        <h2 className="text-4xl font-bold">
          Book Your Fertility Consultation
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl text-emerald-100">
          Our experienced specialists are committed to providing comprehensive,
          compassionate, and confidential fertility care tailored to your needs.
        </p>

        <a
          href="/#contact"
          className="mt-10 inline-block rounded-xl bg-white px-10 py-4 text-lg font-bold text-emerald-700 transition hover:bg-gray-100"
        >
          Book Appointment
        </a>

      </section>

    </main>
  );
}