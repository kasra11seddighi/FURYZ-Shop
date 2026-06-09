// src/components/ui/Skeleton.jsx

const Skeleton = ({ className = "", variant = "rectangle" }) => {
  const baseClasses = "animate-pulse bg-gray-300 dark:bg-gray-700";

  const variants = {
    circle: "rounded-full",
    rectangle: "rounded-md",
    text: "rounded h-3 w-full mb-2",
  };

  if (variant === "spinner") {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="h-8 w-8 border-4 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`} />
  );
};

export default Skeleton;

