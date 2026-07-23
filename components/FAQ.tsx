const faqs = [
{
  question: "Where is The Vitality Clinics located?",
  answer:
    "The Vitality Clinics is located in the heart of Hurghada, offering easy and convenient access for residents, expatriates, tourists, and international visitors. Our clinic provides professional healthcare services in a comfortable and easily reachable location close to the main areas of Hurghada.",
},
  {
    question: "Do I need an appointment before visiting the clinic?",
    answer:
      "Appointments are recommended to ensure faster service and reduce waiting time. Walk-in patients are also welcome depending on doctor availability.",
  },
  {
    question: "Do you provide medical care for tourists in Hurghada?",
    answer:
      "Yes. We provide dedicated tourist healthcare services including urgent medical consultations, hotel medical support, travel-related healthcare, and follow-up care during your stay in Hurghada.",
  },
  {
    question: "Do you accept international insurance?",
    answer:
      "Yes. The Vitality Clinics supports international patients with insurance coordination, medical documentation, and assistance with international healthcare requirements.",
  },
  {
    question: "Do you provide 4D ultrasound and pregnancy follow-up?",
    answer:
      "Yes. Our Women's Health and Fetal Medicine services include pregnancy follow-up, advanced 4D ultrasound, fetal growth assessment, Doppler studies, and prenatal monitoring.",
  },
  {
    question: "Do you have a Fetal Medicine Unit?",
    answer:
      "Yes. Our Fetal Medicine Unit provides advanced prenatal diagnosis, fetal assessment, high-risk pregnancy monitoring, and specialized pregnancy care using modern ultrasound technology.",
  },
  {
    question: "What medical specialties are available at the clinic?",
    answer:
      "Our medical specialties include Internal Medicine, Pediatrics, Obstetrics & Gynecology, Fetal Medicine, 4D Ultrasonography, General Surgery, Dermatology, Cardiology, Orthopedics, ENT, Neurology & Psychiatry, Urology, Laboratory Services, Emergency Care, and Tourist Medical Care.",
  },
  {
    question: "Do you provide emergency medical services?",
    answer:
      "Yes. We provide urgent medical consultations, emergency assessment, IV therapy, wound care, and fast medical support whenever needed.",
  },
  {
    question: "Do you provide healthcare support for hotel guests?",
    answer:
      "Yes. We offer medical assistance for tourists staying in Hurghada hotels with professional communication and coordination.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-5xl px-6">


        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>


          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Common Questions About Our Medical Services in Hurghada
          </h2>


          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-gray-600">
            Learn more about appointments, insurance support, tourist
            healthcare, women's health services, 4D ultrasound, and medical
            specialties available at The Vitality Clinics.
          </p>

        </div>



        <div className="mt-14 space-y-6">

          {faqs.map((faq) => (

            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200 bg-slate-50 p-7 transition hover:shadow-md"
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