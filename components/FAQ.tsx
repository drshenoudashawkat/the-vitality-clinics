const faqs = [
  {
    question: "Do I need an appointment before visiting the clinic?",
    answer:
      "Appointments are recommended to reduce waiting time, however walk-in patients are also welcome depending on availability.",
  },
  {
    question: "Do you provide medical care for tourists?",
    answer:
      "Yes. We provide comprehensive medical care for tourists, expatriates, and residents in Hurghada, including emergency consultations and travel-related healthcare.",
  },
  {
    question: "Do you accept international insurance?",
    answer:
      "Yes. We cooperate with a wide range of international insurance providers. Please contact us before your visit for verification.",
  },
  {
    question: "Do you provide 4D ultrasound?",
    answer:
      "Yes. Our clinic offers advanced 4D ultrasonography for pregnancy follow-up, fetal assessment, and women's health examinations.",
  },
  {
    question: "Do you have an infertility unit?",
    answer:
      "Yes. Our Infertility Unit provides fertility assessment, ovulation monitoring, reproductive health evaluation, and personalized treatment planning.",
  },
  {
    question: "What medical specialties are available?",
    answer:
      "Our clinic offers Internal Medicine, Pediatrics, Obstetrics & Gynecology, General Surgery, Dermatology, Cardiology, Orthopedics, Neurology & Psychiatry, Urology, Laboratory Services, Emergency Care, and Travel Healthcare.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Find answers to the most common questions about our medical services,
            appointments, insurance, women's health, and tourist healthcare.
          </p>

        </div>

        <div className="mt-14 space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200 bg-slate-50 p-7"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}