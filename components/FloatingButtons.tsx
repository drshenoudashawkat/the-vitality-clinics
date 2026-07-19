export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      <a
        href="https://wa.me/201281270005"
        target="_blank"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:scale-110"
        aria-label="WhatsApp"
      >
        WhatsApp
      </a>

      <a
        href="tel:+201281270005"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-xl transition hover:scale-110"
        aria-label="Call"
      >
        Call
      </a>

    </div>
  );
}