import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    country: "United Kingdom",
    text: "Excellent medical service. The doctors were professional and the clinic was very clean and welcoming.",
  },
  {
    name: "Mark T.",
    country: "Germany",
    text: "Very helpful team during my holiday in Hurghada. Fast response and great medical care.",
  },
  {
    name: "Emma R.",
    country: "France",
    text: "Professional doctors, modern clinic, and excellent patient experience.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-gradient-to-b from-white to-slate-50 py-24"
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">

          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Patient Reviews
          </span>


          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            What Our Patients Say
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Trusted healthcare experiences from residents, expatriates, and
            international visitors.
          </p>

        </div>



        <div className="mt-16 grid gap-8 md:grid-cols-3">


          {reviews.map((review, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex gap-1 text-yellow-500">

                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    fill="currentColor"
                  />
                ))}

              </div>


              <p className="mt-6 leading-7 text-gray-600">
                "{review.text}"
              </p>


              <div className="mt-6">

                <h3 className="font-bold text-slate-900">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-500">
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