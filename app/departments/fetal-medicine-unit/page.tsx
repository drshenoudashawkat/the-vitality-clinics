import Link from "next/link";

export default function FetalMedicineUnitPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              Fetal Medicine Unit
            </span>


            <h1 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
              Advanced Fetal Medicine & Pregnancy Assessment in Hurghada
            </h1>


            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides advanced fetal medicine services
              including detailed ultrasound examinations, fetal growth
              monitoring, Doppler studies, and specialized care for normal and
              high-risk pregnancies using modern diagnostic technology.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="#contact"
                className="rounded-xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-emerald-700"
              >
                Book Consultation
              </Link>


              <Link
                href="/departments/4d-ultrasonography"
                className="rounded-xl border-2 border-emerald-600 px-8 py-4 font-bold text-emerald-700"
              >
                4D Ultrasonography
              </Link>

            </div>

          </div>

        </div>

      </section>




      {/* Overview */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Specialized Care for Your Baby’s Development
          </h2>


          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
            Fetal medicine focuses on monitoring fetal health during pregnancy,
            identifying potential concerns early, and providing detailed
            assessments to support the best possible pregnancy outcomes.
          </p>

        </div>

      </section>





      {/* Services */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">


          <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Fetal Medicine Services
          </h2>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


            {[
              "Early Pregnancy Assessment",
              "First Trimester Screening",
              "Nuchal Translucency (NT) Scan",
              "Detailed Anatomy Scan",
              "Fetal Growth Monitoring",
              "Doppler Ultrasound Studies",
              "High-Risk Pregnancy Follow-up",
              "Multiple Pregnancy Assessment",
              "Fetal Wellbeing Evaluation",
              "Congenital Anomaly Screening",
              "Placental Assessment",
              "4D Fetal Ultrasound",
            ].map((service) => (

              <div
                key={service}
                className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <h3 className="text-xl font-bold text-slate-900">
                  {service}
                </h3>


                <p className="mt-3 leading-7 text-gray-600">
                  Advanced assessment performed with modern ultrasound
                  technology and specialist medical care.
                </p>

              </div>

            ))}


          </div>


        </div>

      </section>





      {/* Pregnancy Monitoring */}
      <section className="py-20">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">


          <div>

            <h2 className="text-3xl font-extrabold text-slate-900">
              Advanced Pregnancy Monitoring
            </h2>


            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our fetal medicine team provides detailed monitoring throughout
              pregnancy, especially for pregnancies requiring closer follow-up
              and specialized evaluation.
            </p>


            <ul className="mt-6 space-y-3 text-gray-700">

              <li>✓ Assessment of fetal growth and development</li>
              <li>✓ Monitoring fetal movements and wellbeing</li>
              <li>✓ Doppler blood flow evaluation</li>
              <li>✓ High-risk pregnancy support</li>
              <li>✓ Detailed ultrasound reporting</li>

            </ul>

          </div>



          <div className="rounded-3xl bg-emerald-50 p-10">

            <h3 className="text-2xl font-bold text-slate-900">
              Modern Ultrasound Technology
            </h3>


            <p className="mt-4 leading-8 text-gray-600">
              Using advanced imaging technology to provide accurate fetal
              assessment and a reassuring experience for expecting parents.
            </p>


          </div>


        </div>

      </section>





      {/* Why Choose */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6">


          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Why Choose The Vitality Clinics Fetal Medicine Unit?
          </h2>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Experienced Specialists",
              "Advanced Ultrasound Technology",
              "International Patient Care",
              "Detailed Medical Reports",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur"
              >
                <p className="font-bold">
                  {item}
                </p>
              </div>

            ))}

          </div>


        </div>

      </section>





      {/* CTA */}
      <section className="py-20 text-center">

        <h2 className="text-3xl font-extrabold text-slate-900">
          Expert Fetal Care for a Healthy Pregnancy Journey
        </h2>


        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Contact The Vitality Clinics for advanced fetal medicine consultation
          and pregnancy assessment in Hurghada.
        </p>


        <Link
          href="#contact"
          className="mt-8 inline-flex rounded-xl bg-emerald-600 px-10 py-4 font-bold text-white shadow-lg transition hover:bg-emerald-700"
        >
          Book Your Appointment
        </Link>


      </section>


    </main>
  );
}