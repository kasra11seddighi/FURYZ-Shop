export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 rounded-lg font-bold transition ${
            currentPage === page
              ? "bg-lime-400 text-black"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
