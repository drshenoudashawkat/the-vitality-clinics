import Link from "next/link";

export default function ObstetricsGynecologyPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-pink-50 py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
              Obstetrics & Gynecology Department
            </span>


            <h1 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
              Comprehensive Women’s Health & Maternity Care in Hurghada
            </h1>


            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides advanced obstetrics and gynecology
              services for women at every stage of life, from pregnancy
              planning and antenatal care to gynecological treatment,
              preventive health, and advanced fetal assessment.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="#contact"
                className="rounded-xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-emerald-700"
              >
                Book Consultation
              </Link>


              <Link
                href="/departments/fetal-medicine-unit"
                className="rounded-xl border-2 border-emerald-600 px-8 py-4 font-bold text-emerald-700"
              >
                Fetal Medicine Unit
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* Overview */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Complete Women’s Healthcare Services
          </h2>


          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
            Our Obstetrics & Gynecology department offers comprehensive,
            patient-centered care using modern medical technology and
            international standards to support women’s health, pregnancy,
            childbirth preparation, and gynecological wellness.
          </p>


        </div>

      </section>




      {/* Services */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Obstetrics & Gynecology Services
          </h2>



          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


            {[
              "Pregnancy Follow-up & Antenatal Care",
              "High-Risk Pregnancy Management",
              "Pregnancy Planning & Preconception Care",
              "Early Pregnancy Assessment",
              "Fetal Growth Monitoring",
              "Doppler Ultrasound Assessment",
              "4D Ultrasound Examination",
              "Gynecological Consultation",
              "Menstrual Disorders Management",
              "Hormonal Problems Evaluation",
              "Polycystic Ovary Syndrome (PCOS)",
              "Infertility Assessment",
              "Family Planning Services",
              "Menopause Care",
              "Women’s Preventive Health Screening",
            ].map((service) => (

              <div
                key={service}
                className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <h3 className="text-xl font-bold text-slate-900">
                  {service}
                </h3>


                <p className="mt-3 text-gray-600">
                  Professional evaluation and personalized medical care provided by experienced specialists.
                </p>

              </div>

            ))}


          </div>

        </div>

      </section>





      {/* Pregnancy Care */}
      <section className="py-20">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">


          <div>

            <h2 className="text-3xl font-extrabold text-slate-900">
              Pregnancy & Maternity Care
            </h2>


            <p className="mt-5 text-lg leading-8 text-gray-600">
              From the first pregnancy visit until delivery preparation,
              our team provides continuous monitoring, ultrasound assessment,
              medical guidance, and support throughout pregnancy.
            </p>


            <ul className="mt-6 space-y-3 text-gray-700">

              <li>✓ First trimester pregnancy assessment</li>
              <li>✓ Routine antenatal follow-up</li>
              <li>✓ Anatomy scan & fetal assessment</li>
              <li>✓ High-risk pregnancy monitoring</li>
              <li>✓ Pregnancy complications management</li>

            </ul>

          </div>



          <div className="rounded-3xl bg-emerald-50 p-10">

            <h3 className="text-2xl font-bold text-slate-900">
              Advanced Women’s Health Technology
            </h3>


            <p className="mt-4 leading-7 text-gray-600">
              Using advanced ultrasound technology and modern diagnostic
              approaches to provide accurate assessment and comfortable
              patient experience.
            </p>


          </div>


        </div>

      </section>





      {/* Why Choose */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Why Choose The Vitality Clinics?
          </h2>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


            {[
              "Experienced Medical Specialists",
              "Modern Diagnostic Technology",
              "International Patient Support",
              "Personalized Healthcare Plans",
            ].map((item)=>(
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
          Your Women’s Health Journey Starts Here
        </h2>


        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Contact The Vitality Clinics for professional obstetrics and
          gynecology consultation in Hurghada.
        </p>


        <Link
          href="#contact"
          className="mt-8 inline-flex rounded-xl bg-emerald-600 px-10 py-4 font-bold text-white shadow-lg hover:bg-emerald-700"
        >
          Book Your Appointment
        </Link>


      </section>


    </main>
  );
}