import {
  Plane,
  Hotel,
  Stethoscope,
  Ambulance,
  Languages,
  HeartHandshake,
} from "lucide-react";

const touristServices = [
  {
    icon: <Ambulance size={40} />,
    title: "Urgent Medical Care",
    text: "Fast medical assistance for tourists with sudden health problems during their stay.",
  },
  {
    icon: <Hotel size={40} />,
    title: "Hotel Medical Support",
    text: "Medical services designed for hotel guests and visitors in Hurghada.",
  },
  {
    icon: <Stethoscope size={40} />,
    title: "Doctor Consultation",
    text: "Professional consultations with experienced physicians and specialists.",
  },
  {
    icon: <Languages size={40} />,
    title: "Multilingual Assistance",
    text: "Comfortable communication and support for international visitors.",
  },
  {
    icon: <Plane size={40} />,
    title: "Travel Health Services",
    text: "Healthcare solutions for tourists before, during, and after their trip.",
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "Patient Care Support",
    text: "Compassionate care with continuous follow-up when needed.",
  },
];

export default function Tourists() {
  return (
    <section
      id="tourists"
      className="bg-white py-24"
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Tourist Medical Care
          </span>


          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Healthcare Support For Visitors
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Reliable medical services for tourists, hotel guests, and
            international visitors in Hurghada with professional care and
            quick assistance.
          </p>

        </div>



        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


          {touristServices.map((service, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-emerald-50 p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="inline-flex rounded-2xl bg-emerald-600 p-5 text-white transition group-hover:scale-110">

                {service.icon}

              </div>


              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>


              <p className="mt-4 leading-7 text-gray-600">
                {service.text}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}