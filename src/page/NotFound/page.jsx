import { useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/", { replace: true });
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl text-center">
        <p className="text-lime-400 text-sm font-bold tracking-[0.3em] uppercase">
          Error 404
        </p>

        <h1 className="mt-4 text-5xl md:text-6xl font-extrabold">
          Page Not Found
        </h1>

        <p className="mt-4 text-white/65 text-sm md:text-base leading-7">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleGoBack}
            className="inline-flex items-center justify-center rounded-xl
                       border border-lime-400/30 bg-lime-400 px-5 py-3
                       text-sm font-bold text-black transition
                       hover:bg-lime-300"
          >
            Go Back
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center rounded-xl
                       border border-white/15 bg-white/5 px-5 py-3
                       text-sm font-bold text-white transition
                       hover:bg-white/10"
          >
            Home
          </button>
        </div>
      </div>
    </section>
  );
}
