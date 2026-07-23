export default function SectionDivider() {
  return (
    <div className="py-5 sm:py-7">

      {/* Brand signature */}
      <div className="mb-2 flex justify-end pr-10 sm:pr-20">

        <span
          className="
            font-serif
            text-[9px]
            italic
            tracking-[0.35em]
            text-black/30
            sm:text-[10px]
          "
        >
          Vitality Medical Care Group
        </span>

      </div>


      {/* Divider */}
      <div className="flex items-center">

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-200 to-gray-200" />


        <div className="mx-5 flex items-center gap-2">

          <span className="h-1 w-1 rounded-full bg-emerald-500/60" />

          <span
            className="
              h-2.5
              w-2.5
              rounded-full
              border
              border-emerald-500/50
              bg-white
            "
          />

          <span className="h-1 w-1 rounded-full bg-red-400/60" />

        </div>


        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-emerald-200 to-gray-200" />

      </div>

    </div>
  );
}