import { Truck, ShieldCheck, Headset } from "lucide-react";

const features = [
  { title: "Fast Delivery", desc: "2-3 business days", Icon: Truck },
  { title: "Secure Payment", desc: "100% protected", Icon: ShieldCheck },
  { title: "Support", desc: "24/7 customer care", Icon: Headset },
];

export default function HeroRight() {
  return (
    <div className="flex w-full justify-start lg:justify-end">
      {/* 
        در موبایل: ستونی تمام‌عرض
        در تبلت: ردیفی کنار هم برای بهینه‌سازی فضا (sm:flex-row)
        در دسکتاپ: ستونی در سمت راست (lg:flex-col)
      */}
      <div className="w-full sm:w-auto flex flex-col sm:flex-row lg:flex-col gap-4 lg:gap-3.5">
        {features.map(({ title, desc, Icon }) => (
          <div
            key={title}
            className="
              w-full sm:w-[240px] lg:w-[250px]
              rounded-2xl border border-white/10
              bg-black/45 backdrop-blur-xl
              px-4 py-4
              transition-all duration-300 hover:border-lime-400/30
            "
          >
            <div className="flex items-start gap-3">
              {/* shrink-0 برای جلوگیری از دفرمه شدن آیکون در سایزهای کوچک */}
              <div className="mt-0.5 grid place-items-center rounded-xl bg-lime-400/10 border border-lime-400/25 p-2 shrink-0">
                <Icon className="h-5 w-5 text-lime-400" />
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm leading-none">{title}</p>
                <p className="mt-1.5 text-white/70 text-xs leading-normal">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
