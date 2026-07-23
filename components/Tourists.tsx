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
    icon: Ambulance,
    title: "Urgent Medical Care",
    text:
      "Fast medical assistance for tourists experiencing sudden illness, infections, injuries, or urgent health concerns in Hurghada.",
  },
  {
    icon: Hotel,
    title: "Hotel & Resort Medical Support",
    text:
      "Professional doctor visits and medical assistance for hotel guests and international visitors throughout their stay.",
  },
  {
    icon: Stethoscope,
    title: "Specialist Consultations",
    text:
      "Access to experienced physicians and medical specialists with clear communication and personalized care.",
  },
  {
    icon: Languages,
    title: "Multilingual Healthcare Support",
    text:
      "Comfortable medical communication and assistance for international patients from different countries.",
  },
  {
    icon: Plane,
    title: "Travel Healthcare Services",
    text:
      "Medical solutions for tourists before, during, and after their trip with reliable healthcare support.",
  },
  {
    icon: HeartHandshake,
    title: "Complete Patient Assistance",
    text:
      "Continuous follow-up, medical coordination, and compassionate support whenever needed.",
  },
];

export default function Tourists() {
  return (
    <section
      id="tourists"
      className="
        relative
        overflow-hidden
        bg-slate-900
        py-24
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-slate-900
          via-slate-800
          to-slate-900
        "
      />


      <div className="relative mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-4xl text-center">


          <span
            className="
              inline-flex
              rounded-full
              bg-emerald-500/20
              px-5
              py-2
              text-sm
              font-bold
              text-emerald-400
            "
          >
            Tourist Healthcare Services
          </span>



          <h2
            className="
              mt-6
              text-4xl
              font-extrabold
              leading-tight
              text-white
              sm:text-5xl
            "
          >
            Medical Care For Tourists In Hurghada
          </h2>



          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            The Vitality Clinics provides reliable healthcare services for
            tourists, hotel guests, and international visitors in Hurghada,
            with professional doctors, fast medical assistance, and
            patient-centered care.
          </p>


        </div>





        <div
          className="
            mt-16
            grid
            gap-7
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {touristServices.map((service,index)=>{

            const Icon = service.icon;

            return (

              <div
                key={index}
                className="
                  group
                  rounded-[32px]
                  border
                  border-slate-700
                  bg-slate-800
                  p-8
                  shadow-md
                  transition
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-2xl
                "
              >


                <div
                  className="
                    inline-flex
                    rounded-2xl
                    bg-emerald-500/20
                    p-5
                    text-emerald-400
                    transition
                    duration-500
                    group-hover:bg-emerald-600
                    group-hover:text-white
                    group-hover:scale-110
                  "
                >
                  <Icon size={40}/>
                </div>





                <h3
                  className="
                    mt-6
                    text-2xl
                    font-extrabold
                    text-white
                  "
                >
                  {service.title}
                </h3>





                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-300
                  "
                >
                  {service.text}
                </p>


              </div>

            );

          })}


        </div>


      </div>

    </section>
  );
}