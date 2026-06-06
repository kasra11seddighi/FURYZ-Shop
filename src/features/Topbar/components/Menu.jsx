// src/features/Topbar/components/Menu.jsx
import React from "react";
import { NavLink } from "react-router";
import topbarMenu from "../../../data/menu";

export default function Menu({ variant = "desktop", onNavigate } = {}) {
  const items = topbarMenu?.[0]?.items ?? [];
  const isMobile = variant === "mobile";

  return (
    <nav>
      <ul
        className={
          isMobile
            ? "flex flex-col gap-2 list-none p-0 m-0"
            : "flex justify-center gap-8 list-none p-0 m-0"
        }
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.id}>
              <NavLink
                to={item.href}
                className="block"
                onClick={() => onNavigate?.()}
              >
                {({ isActive }) => (
                  <div
                    className={[
                      "relative cursor-pointer transition-colors group flex items-center gap-2",
                      isMobile
                        ? "px-3 py-3 rounded-xl border border-white/10 hover:border-white/20"
                        : "py-2",
                      isActive ? "text-white" : "text-gray-400 hover:text-white",
                    ].join(" ")}
                  >
                    {Icon ? <Icon className="text-lg" /> : null}
                    <span className={isMobile ? "text-base" : "text-sm font-medium"}>
                      {item.title}
                    </span>

                    {/* underline فقط برای دسکتاپ */}
                    {!isMobile && (
                      <span
                        className={[
                          "absolute bottom-0 left-0 h-[2px] bg-[#a3ff12] transition-all duration-300",
                          isActive ? "w-full" : "w-0 group-hover:w-full",
                        ].join(" ")}
                      />
                    )}
                  </div>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
