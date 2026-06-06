import FeaturedPostCard from "./components/FeaturedPostCard";
import BlogPostCard from "./components/BlogPostCard";
import { blogPosts } from "../../data/BlogData";

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
            Furyz Blog
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Insights, gear guides, and gaming setup inspiration
          </h1>

          <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
            Explore the latest articles on gaming accessories, desk setups,
            performance tips, and product knowledge.
          </p>
        </div>

        {featuredPost ? (
          <div className="mt-10">
            <FeaturedPostCard {...featuredPost} />
          </div>
        ) : null}

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {regularPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </main>
  );
}
