export default function CardiologyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-32">

      <section className="mx-auto max-w-6xl">

        <div className="text-center">

          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-700">
            Cardiology Department
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Advanced Cardiology Care in Hurghada
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            The Vitality Clinics provides professional cardiology services in
            Hurghada, offering heart disease evaluation, cardiovascular
            consultations, preventive care, and ongoing monitoring with a
            patient-centered approach and modern diagnostic support.
          </p>

        </div>



        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Cardiology Consultation
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Comprehensive heart consultations for evaluation of symptoms,
              risk factors, and cardiovascular health with personalized
              medical advice.
            </p>
          </div>



          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Heart Disease Assessment
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Professional assessment and follow-up for common heart conditions
              including hypertension, chest pain, palpitations, and cardiac
              risk factors.
            </p>
          </div>



          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Hypertension Management
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Monitoring and management of high blood pressure with suitable
              treatment plans and lifestyle recommendations.
            </p>
          </div>



          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              ECG & Cardiac Evaluation
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Diagnostic evaluation including ECG and medical assessment to
              support accurate heart health evaluation.
            </p>
          </div>



          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Preventive Heart Care
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Prevention-focused cardiovascular care helping patients reduce
              risks through early detection and regular monitoring.
            </p>
          </div>



          <div className="rounded-3xl bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Chronic Disease Follow-up
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Continuous medical support for patients with chronic conditions
              requiring regular cardiovascular monitoring.
            </p>
          </div>


        </div>



        <div className="mt-16 rounded-3xl bg-emerald-600 p-10 text-center">

          <h2 className="text-3xl font-extrabold text-white">
            Book Your Cardiology Consultation in Hurghada
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-emerald-100">
            Contact The Vitality Clinics for professional heart care,
            cardiovascular evaluation, and specialist medical support.
          </p>


          <a
            href="#appointment"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-emerald-700 transition hover:bg-gray-100"
          >
            Book Appointment
          </a>


        </div>


      </section>

    </main>
  );
}