const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">

      {/* Logo / Brand */}
      <h1 className="text-4xl font-bold tracking-widest mb-8 animate-pulse">
        FURYZ
      </h1>

      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-6 text-gray-400 text-sm tracking-wide">
        Loading your experience...
      </p>

    </div>
  );
};

export default LoadingScreen;
