// src/data/flashDealsData.js

export const flashDealsData = {
  title: "FLASH DEALS",
  subtitle: "Limited time offer on top-performance gear!",
  
  // تنظیم زمان پایان برای 7 روز آینده (مطابق تصویر)
  // می‌توانی به صورت دستی هم تاریخ بدهی: "2026-06-10T23:59:59"
  endsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), 

  cta: {
    label: "SHOP THE DEALS",
    href: "/sale",
  }
};
