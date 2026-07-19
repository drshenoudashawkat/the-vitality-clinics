import {
  Baby,
  HeartPulse,
  ScanLine,
  ShieldCheck,
} from "lucide-react";

const womenServices = [
  {
    icon: <Baby size={42} />,
    title: "Pregnancy Follow-up",
    text: "Complete antenatal care and pregnancy monitoring with experienced specialists.",
  },
  {
    icon: <ScanLine size={42} />,
    title: "Advanced 4D Ultrasound",
    text: "Modern ultrasound technology for detailed pregnancy imaging and assessment.",
  },
  {
    icon: <HeartPulse size={42} />,
    title: "Women's Healthcare",
    text: "Comprehensive gynecology consultations and women's health services.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Privacy & Comfort",
    text: "Professional medical care in a comfortable and private environment.",
  },
];

export default function WomenHealth() {
  return (
    <section
      id="women-health"
      className="bg-gradient-to-br from-pink-50 via-white to-emerald-50 py-24"
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="grid items-center gap-14 lg:grid-cols-2">


          <div>

            <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-semibold text-pink-700">
              Women's Health & 4D Ultrasound
            </span>


            <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">

              Specialized Care For

              <span className="block text-emerald-600">
                Women & Mothers
              </span>

            </h2>


            <p className="mt-7 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides comprehensive women's healthcare
              services including pregnancy follow-up, gynecology consultations,
              and advanced ultrasound examinations in Hurghada.
            </p>



            <div className="mt-10 grid gap-5">


              {womenServices.map((item, index) => (

                <div
                  key={index}
                  className="flex gap-5 rounded-2xl bg-white p-5 shadow-md"
                >

                  <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                    {item.icon}
                  </div>


                  <div>

                    <h3 className="font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-gray-600">
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}


            </div>


          </div>



          <div className="relative">


            <div className="rounded-[40px] bg-white p-8 shadow-2xl">


              <div className="flex h-[500px] items-center justify-center rounded-[30px] bg-gradient-to-br from-emerald-100 to-pink-100">


                <div className="text-center">


                  <ScanLine
                    size={90}
                    className="mx-auto text-emerald-600"
                  />


                  <h3 className="mt-6 text-3xl font-bold text-slate-900">
                    4D Ultrasound
                  </h3>


                  <p className="mt-3 text-gray-600">
                    Advanced Pregnancy Imaging
                  </p>


                </div>


              </div>


            </div>


          </div>


        </div>


      </div>

    </section>
  );
}