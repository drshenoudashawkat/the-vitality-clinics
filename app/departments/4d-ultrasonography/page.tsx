export const metadata = {
  title: "4D Ultrasonography | The Vitality Clinics",
  description:
    "Advanced 4D ultrasonography in Hurghada for pregnancy follow-up, fetal assessment, gynecology, and women's health using modern ultrasound technology.",
};

export default function Ultrasound4DPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-indigo-600 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">

          <h1 className="text-5xl font-extrabold">
            4D Ultrasonography
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-indigo-100">
            High-quality ultrasound imaging for pregnancy, fetal wellbeing,
            gynecology, infertility assessment, and women's health using
            advanced 4D technology.
          </p>

        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-4xl font-bold text-slate-900">
            Advanced Diagnostic Imaging
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Our modern ultrasound unit provides detailed imaging that supports
            accurate diagnosis and comprehensive pregnancy follow-up. We combine
            advanced equipment with experienced specialists to deliver reliable,
            patient-centered care.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            4D ultrasound allows real-time visualization while supporting
            routine obstetric examinations, fetal growth assessment, and
            gynecological evaluation.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-4xl font-bold text-slate-900">
            Ultrasound Services
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-2xl font-bold">
                Pregnancy Ultrasound
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• Early pregnancy assessment</li>
                <li>• Dating scan</li>
                <li>• Fetal growth monitoring</li>
                <li>• Fetal wellbeing assessment</li>
                <li>• Placental evaluation</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-2xl font-bold">
                Women's Health Imaging
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600">
                <li>• Pelvic ultrasound</li>
                <li>• Gynecological assessment</li>
                <li>• Ovarian evaluation</li>
                <li>• Fertility ultrasound</li>
                <li>• Uterine assessment</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Advantages */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose Our 4D Ultrasound Unit?
          </h2>

          <div className="mt-10 rounded-3xl bg-indigo-50 p-10">

            <ul className="space-y-4 text-lg leading-8 text-gray-700">
              <li>• Modern high-resolution ultrasound equipment.</li>
              <li>• Experienced obstetrics and gynecology specialists.</li>
              <li>• Detailed fetal anatomical assessment.</li>
              <li>• Pregnancy follow-up from early to late gestation.</li>
              <li>• Fertility and gynecological imaging.</li>
              <li>• Comfortable and private examination rooms.</li>
            </ul>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-24 text-center text-white">

        <h2 className="text-4xl font-bold">
          Schedule Your Ultrasound Examination
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl text-indigo-100">
          Book your appointment for advanced 4D ultrasonography with our
          experienced medical team at The Vitality Clinics.
        </p>

        <a
          href="/#contact"
          className="mt-10 inline-block rounded-xl bg-white px-10 py-4 text-lg font-bold text-indigo-700 hover:bg-gray-100"
        >
          Book Appointment
        </a>

      </section>

    </main>
  );
}