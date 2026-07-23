import {
  ShieldCheck,
  FileText,
  Globe2,
  Headset,
} from "lucide-react";

const insuranceFeatures = [
  {
    icon: ShieldCheck,
    title: "International Insurance Assistance",
    text:
      "We support international patients with insurance procedures, approvals, and coordination with insurance providers.",
  },
  {
    icon: FileText,
    title: "Medical Reports & Documentation",
    text:
      "Professional medical reports, invoices, and required documents prepared according to insurance requirements.",
  },
  {
    icon: Globe2,
    title: "Healthcare For Tourists & Expats",
    text:
      "Dedicated medical support for tourists, expatriates, and international visitors during their stay in Hurghada.",
  },
  {
    icon: Headset,
    title: "24/7 Medical Coordination",
    text:
      "Continuous communication and healthcare coordination for urgent and routine medical needs.",
  },
];

export default function Insurance() {
  return (
    <section
      id="insurance"
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
            International Insurance
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
            Healthcare Support For International Patients
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
            The Vitality Clinics provides professional medical assistance for
            tourists, expatriates, and international patients with smooth
            communication, insurance support, and complete healthcare
            coordination in Hurghada.
          </p>


        </div>





        <div
          className="
            mt-16
            grid
            gap-7
            md:grid-cols-2
            lg:grid-cols-4
          "
        >

          {insuranceFeatures.map((item,index)=>{

            const Icon = item.icon;

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
                    mb-6
                    inline-flex
                    rounded-2xl
                    bg-emerald-500/20
                    p-5
                    text-emerald-400
                    transition
                    duration-500
                    group-hover:bg-emerald-600
                    group-hover:text-white
                  "
                >
                  <Icon size={36}/>
                </div>




                <h3
                  className="
                    text-xl
                    font-extrabold
                    text-white
                  "
                >
                  {item.title}
                </h3>




                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-300
                  "
                >
                  {item.text}
                </p>


              </div>

            );

          })}

        </div>


      </div>

    </section>
  );
}