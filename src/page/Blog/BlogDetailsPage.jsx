import { Link, useParams } from "react-router";
import { blogPosts } from "../../data/BlogData";

export default function BlogDetailsPage() {
  const { slug } = useParams();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-black px-4 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
            Article Not Found
          </p>
          <h1 className="mt-4 text-4xl font-extrabold">
            This article does not exist.
          </h1>
          <p className="mt-4 text-white/60">
            The article you are looking for may have been removed or the link is incorrect.
          </p>

          <Link
            to="/blog"
            className="mt-8 inline-flex rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex text-sm font-medium text-lime-400 transition hover:text-lime-300"
        >
          ← Back to Blog
        </Link>

        <div className="mt-6">
          <span className="inline-flex rounded-full bg-lime-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-lime-400">
            {post.category}
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/45">
            <span>{post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
          <img
            src={post.image}
            alt={post.title}
            className="h-[260px] w-full object-cover sm:h-[380px]"
          />
        </div>

        <div className="prose prose-invert mt-10 max-w-none prose-p:text-white/75 prose-p:leading-8">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
