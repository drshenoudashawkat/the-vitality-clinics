import Image from "next/image";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function Gallery() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Gallery
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Explore Our Medical Facilities
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Take a closer look at our modern clinic, consultation rooms,
            diagnostic equipment, and patient-centered healthcare environment.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image}
                alt={`The Vitality Clinics ${index + 1}`}
                width={600}
                height={450}
                className="h-72 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}