import { Link } from "react-router";

export default function BlogPostCard({
  slug,
  title,
  excerpt,
  image,
  category,
  author,
  date,
  readTime,
}) {
  return (
    <Link to={`/blog/${slug}`} className="block">
      <article
        className="group overflow-hidden rounded-2xl border border-lime-400/10 bg-[#111111]
                   transition hover:border-lime-400/30 hover:bg-[#151515]"
      >
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <span className="inline-flex rounded-full bg-lime-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-lime-400">
            {category}
          </span>

          <h3 className="mt-4 text-lg font-extrabold leading-7 text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/60">
            {excerpt}
          </p>

          <div className="mt-5 flex items-center justify-between text-xs text-white/45">
            <span>{author}</span>
            <span>{date}</span>
          </div>

          <p className="mt-2 text-xs font-medium text-white/50">
            {readTime}
          </p>
        </div>
      </article>
    </Link>
  );
}
