export default function SectionDivider() {
  return (
    <div className="py-3 sm:py-4">

      {/* Brand signature */}
      <div className="mb-1 flex justify-end pr-6 sm:pr-16">

        <span
          className="
            font-serif
            text-[8px]
            italic
            tracking-[0.45em]
            text-slate-400/70
            sm:text-[9px]
          "
        >
          Vitality Medical Care Group (VMCG)
        </span>

      </div>


      {/* Luxury Medical Divider */}

      <div className="flex items-center">

        <div
          className="
            h-px
            flex-1
            bg-gradient-to-r
            from-transparent
            via-emerald-300/60
            to-slate-200
          "
        />


        <div className="mx-4 flex items-center gap-2">

          {/* ECG style pulse */}
          <span
            className="
              h-px
              w-5
              bg-emerald-400/60
            "
          />

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-emerald-500
              shadow-sm
            "
          />

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-yellow-500/70
            "
          />

          <span
            className="
              h-2
              w-2
              rounded-full
              border
              border-emerald-400/50
              bg-white
            "
          />

          <span
            className="
              h-px
              w-5
              bg-emerald-400/60
            "
          />

        </div>


        <div
          className="
            h-px
            flex-1
            bg-gradient-to-l
            from-transparent
            via-emerald-300/60
            to-slate-200
          "
        />

      </div>

    </div>
  );
}