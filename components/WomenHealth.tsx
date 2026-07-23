import {
  Baby,
  HeartPulse,
  ScanLine,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const womenServices = [
  {
    icon: Baby,
    title: "Pregnancy Follow-up & Antenatal Care",
    text: "Complete pregnancy monitoring from early pregnancy to delivery with regular check-ups, fetal assessment, and personalized maternity care.",
  },
  {
    icon: ScanLine,
    title: "Advanced 4D Ultrasound & Fetal Medicine",
    text: "High-quality 4D ultrasound examinations and detailed fetal assessments using advanced imaging technology.",
  },
  {
    icon: HeartPulse,
    title: "Gynecology & Women's Health",
    text: "Comprehensive gynecology consultations, routine examinations, reproductive health care, and treatment of women's health conditions.",
  },
  {
    icon: Stethoscope,
    title: "Normal & Cesarean Delivery Care",
    text: "Professional maternity care including natural childbirth and cesarean delivery with complete medical supervision.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Women's Medical Examinations",
    text: "Full medical evaluation and follow-up for women of all ages in a private, comfortable, and professional environment.",
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
              Obstetrics & Gynecology Services
            </span>


            <h2 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900">

              Complete Women's Healthcare

              <span className="block text-emerald-600">
                Pregnancy & Maternity Care
              </span>

            </h2>


            <p className="mt-7 text-lg leading-8 text-gray-600">
              The Vitality Clinics provides comprehensive women's healthcare
              services in Hurghada, including gynecology consultations,
              pregnancy follow-up, fetal medicine, advanced 4D ultrasound,
              and complete maternity care. Our female specialist doctor
              provides professional and compassionate care for every stage
              of a woman's health journey.
            </p>


            <div className="mt-10 grid gap-5">

              {womenServices.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-5 rounded-2xl bg-white p-5 shadow-md"
                  >

                    <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                      <Icon size={32} />
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
                );

              })}

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
                    Advanced 4D Ultrasound
                  </h3>


                  <p className="mt-3 text-gray-600">
                    Fetal Medicine & Pregnancy Assessment
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