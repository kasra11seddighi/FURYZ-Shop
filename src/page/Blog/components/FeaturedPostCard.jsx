import { Link } from "react-router";

export default function FeaturedPostCard({
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
        className="grid overflow-hidden rounded-3xl border border-lime-400/15 bg-[#101010]
                   transition hover:border-lime-400/30 lg:grid-cols-[1.2fr_1fr]"
      >
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full min-h-[320px] w-full object-cover transition duration-500 hover:scale-[1.02]"
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:p-8">
          <span className="inline-flex w-fit rounded-full bg-lime-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-lime-400">
            {category}
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/65">
            {excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/45">
            <span>{author}</span>
            <span>{date}</span>
            <span>{readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
