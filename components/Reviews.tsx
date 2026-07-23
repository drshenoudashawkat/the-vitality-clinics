import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    country: "United Kingdom",
    text:
      "Professional medical clinic in Hurghada. The doctors were caring, knowledgeable, and explained everything clearly. Excellent healthcare experience during my stay.",
  },
  {
    name: "Mark T.",
    country: "Germany",
    text:
      "I received fast and professional medical assistance during my holiday in Hurghada. The team was helpful, friendly, and provided excellent patient care.",
  },
  {
    name: "Emma R.",
    country: "France",
    text:
      "A modern clinic with professional doctors and a comfortable environment. Communication was easy and the medical service was excellent.",
  },
  {
    name: "James W.",
    country: "United Kingdom",
    text:
      "Very efficient healthcare support for international visitors. The staff provided quick assistance and excellent follow-up.",
  },
  {
    name: "Anna K.",
    country: "Poland",
    text:
      "Great medical experience in Hurghada. Professional doctors, clean facilities, and a caring team that made me feel comfortable.",
  },
  {
    name: "Michael R.",
    country: "Netherlands",
    text:
      "Highly recommended medical clinic for tourists and residents. The doctors are experienced and provide clear explanations and professional treatment.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="
        bg-gradient-to-br
        from-[#0F172A]
        via-[#163A4A]
        to-[#0B3C5D]
        py-24
      "
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">


          <span
            className="
              inline-block
              rounded-full
              bg-yellow-400/20
              px-5
              py-2
              text-sm
              font-semibold
              text-yellow-300
            "
          >
            Patient Reviews & Experiences
          </span>



          <h2
            className="
              mt-6
              text-4xl
              font-extrabold
              text-white
              md:text-5xl
            "
          >
            Trusted Healthcare Experiences in Hurghada
          </h2>



          <p
            className="
              mx-auto
              mt-6
              max-w-4xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            Discover healthcare experiences from residents, expatriates, and
            international visitors who received professional medical services
            at The Vitality Clinics in Hurghada.
          </p>


        </div>





        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >


          {reviews.map((review, index) => (

            <div
              key={index}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/10
                p-8
                backdrop-blur-xl
                shadow-xl
                transition
                duration-300
                hover:-translate-y-2
                hover:bg-white/15
              "
            >


              <div className="flex gap-1 text-yellow-400">

                {[1,2,3,4,5].map((star) => (

                  <Star
                    key={star}
                    size={20}
                    fill="currentColor"
                  />

                ))}

              </div>




              <p className="mt-6 leading-7 text-slate-200">
                "{review.text}"
              </p>





              <div className="mt-6 border-t border-white/20 pt-5">


                <h3 className="font-bold text-white">
                  {review.name}
                </h3>


                <p className="text-sm text-slate-300">
                  {review.country}
                </p>


              </div>



            </div>

          ))}



        </div>


      </div>


    </section>
  );
}