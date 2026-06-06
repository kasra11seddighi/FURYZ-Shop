import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SectionTitleRow({
  title,
  actionLabel,
  onAction,
  className = "",

  // optional nav buttons
  onPrev,        // اگر پاس داده شود دکمه قبلی نمایش داده می‌شود
  onNext,        // اگر پاس داده شود دکمه بعدی نمایش داده می‌شود
  navClassName = "",
}) {
  const showAction = Boolean(actionLabel && onAction);
  const showNav = Boolean(onPrev || onNext);

  return (
    <div className={`flex items-center justify-between gap-4 ${className}`}>
      {/* left: title */}
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-lime-400" />
        <h2 className="text-white font-bold uppercase tracking-wide text-sm sm:text-base">
          {title}
        </h2>
      </div>

      {/* right: action + nav */}
      {(showAction || showNav) ? (
        <div className="flex items-center gap-3 sm:gap-4">
          {showAction ? (
            <button
              type="button"
              onClick={onAction}
              className="text-white/70 hover:text-lime-400 transition inline-flex items-center gap-2 text-xs sm:text-sm"
            >
              {actionLabel}
              {/* فلش سبز مثل عکس */}
              <ChevronRight className="h-4 w-4 text-lime-400" />
            </button>
          ) : null}

          {showNav ? (
            <div className={`flex items-center gap-2 ${navClassName}`}>
              {onPrev ? (
                <button
                  type="button"
                  onClick={onPrev}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-lime-400/40 hover:text-white"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              ) : null}

              {onNext ? (
                <button
                  type="button"
                  onClick={onNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-lime-400/40 hover:text-white"
                  aria-label="Next"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
