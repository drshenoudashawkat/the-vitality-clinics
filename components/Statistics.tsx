"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Users,
  CalendarCheck,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 2000,
    suffix: "+",
    title: "Patients Treated",
  },
  {
    icon: CalendarCheck,
    value: null,
    text: "24/7",
    title: "Emergency Medical Support",
  },
  {
    icon: Stethoscope,
    value: 15,
    suffix: "+",
    title: "Medical Specialties",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    title: "Patient Satisfaction",
  },
];

export default function Statistics() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="statistics"
      ref={ref}
      className="
        bg-gradient-to-r
        from-[#0B3C5D]
        via-[#163A4A]
        to-[#0097A7]
        py-24
      "
    >

      <div className="mx-auto max-w-7xl px-6">


        <div className="text-center">

          <span className="
            inline-block
            rounded-full
            bg-white/20
            px-5
            py-2
            text-sm
            font-semibold
            text-white
          ">
            The Vitality Clinics in Hurghada
          </span>


          <h2 className="
            mt-6
            text-4xl
            font-extrabold
            text-white
          ">
            Trusted Healthcare For Residents, Tourists & International Patients
          </h2>


        </div>



        <div className="
          mt-14
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        ">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                  rounded-3xl
                  bg-white/95
                  p-8
                  text-center
                  shadow-xl
                  transition
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >

                <div className="flex justify-center">

                  <Icon
                    size={38}
                    className="text-[#0097A7]"
                  />

                </div>


                <h3 className="
                  mt-6
                  text-4xl
                  font-extrabold
                  text-[#0B3C5D]
                ">

                  {item.value !== null ? (
                    <>
                      {inView && (
                        <CountUp
                          start={0}
                          end={item.value}
                          duration={2.4}
                          separator=","
                        />
                      )}
                      {item.suffix}
                    </>
                  ) : (
                    item.text
                  )}

                </h3>


                <p className="
                  mt-3
                  text-lg
                  font-medium
                  text-gray-600
                ">
                  {item.title}
                </p>


              </div>

            );

          })}


        </div>


      </div>

    </section>
  );
}