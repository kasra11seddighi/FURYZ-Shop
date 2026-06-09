// src/components/ui/Skeleton.jsx

const Skeleton = ({ className, variant = "rectangle" }) => {
  // کلاس‌های پایه برای انیمیشن و رنگ
  const baseClasses = "animate-pulse bg-gray-300 dark:bg-gray-700";
  
  // تعیین شکل اسکلت
  const variants = {
    circle: "rounded-full",
    rectangle: "rounded-md",
    text: "rounded h-3 w-full mb-2", // تنظیمات پیش‌فرض برای متن
  };

  return (
    <div 
      className={`${baseClasses} ${variants[variant]} ${className}`} 
    />
  );
};

export default Skeleton;
