import { ChevronRight } from "lucide-react";

export default function CategoryCard({ title, description, icon: Icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group w-full rounded-lg border border-white/10 bg-[#111111]
        p-4 transition hover:border-lime-400/60
        flex items-center justify-between gap-3 text-left
      "
    >
      <div className="flex items-center gap-3">
        <div className="shrink-0 text-lime-400">
          {Icon ? <Icon className="h-10 w-10" /> : null}
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">
            {title}
          </h3>
          <p className="mt-1 max-w-[180px] text-xs text-white/60">
            {description}
          </p>
        </div>
      </div>

      <div
        className="
          flex h-9 w-9 shrink-0 items-center justify-center
          rounded-md border border-white/10 text-white/70 transition
          group-hover:border-lime-400/60 group-hover:text-lime-400
        "
      >
        <ChevronRight className="h-4 w-4" />
      </div>
    </button>
  );
}
