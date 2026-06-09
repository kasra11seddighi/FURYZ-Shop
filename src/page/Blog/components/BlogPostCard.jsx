import { Link } from "react-router";
import { useState } from "react";
import Skeleton from "../../../components/common/ui/Skeleton";

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
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link to={`/blog/${slug}`} className="block">
      <article
        className="group overflow-hidden rounded-2xl border border-lime-400/10 bg-[#111111]
                   transition hover:border-lime-400/30 hover:bg-[#151515]"
      >
        <div className="relative overflow-hidden h-56 w-full">

          {!isLoaded && (
            <Skeleton className="absolute inset-0 h-full w-full" />
          )}

          <img
            src={image}
            alt={title}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`h-full w-full object-cover transition duration-500 group-hover:scale-105
            ${isLoaded ? "opacity-100" : "opacity-0"}`}
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
