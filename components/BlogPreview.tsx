const articles = [
  {
    title: "How Often Should You Have a General Health Check-Up?",
    description:
      "Discover why regular medical check-ups are essential for early disease detection and long-term health.",
  },
  {
    title: "Benefits of 4D Ultrasound During Pregnancy",
    description:
      "Learn how advanced 4D ultrasonography enhances pregnancy monitoring and fetal assessment.",
  },
  {
    title: "Understanding Infertility: When Should You Seek Medical Advice?",
    description:
      "Early fertility assessment can improve treatment planning and increase the chances of successful pregnancy.",
  },
];

export default function BlogPreview() {
  return (
    <section
      id="blog"
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
              bg-[#0097A7]/20
              px-5
              py-2
              text-sm
              font-semibold
              text-[#8DE0E8]
            "
          >
            Medical Blog
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
            Health Articles & Medical Insights
          </h2>



          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            Read trusted medical information written to help patients better
            understand common health conditions, pregnancy care, fertility,
            preventive medicine, and healthy living.
          </p>


        </div>




        <div className="mt-16 grid gap-8 lg:grid-cols-3">


          {articles.map((article) => (

            <div
              key={article.title}
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


              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {article.title}
              </h3>



              <p
                className="
                  mt-5
                  leading-7
                  text-slate-300
                "
              >
                {article.description}
              </p>



              <button
                className="
                  mt-8
                  rounded-xl
                  bg-[#0097A7]
                  px-5
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  transition
                  hover:bg-[#007C89]
                "
              >
                Read More
              </button>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}