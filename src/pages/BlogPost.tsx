import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/content'
import { Img } from '@/components/ui/Img'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Post not found – Inventory</title>
        </Helmet>
        <ScrollProgress />
        <Navbar />
        <main className="pt-20">
          <section className="py-24 md:py-32">
            <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
              <h1 className="font-heading text-heading-xl text-text-primary mb-4">Post not found</h1>
              <Link to="/blog" className="text-brand-600 font-medium hover:underline">
                Back to blog
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{post.title} – Inventory</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <section className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-600 font-medium mb-8 hover:underline">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to blog
            </Link>
            <Img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-card mb-8"
              fallback="bg-gradient-to-br from-subtle to-border"
            />
            <p className="text-sm text-text-muted mb-4">{post.date}</p>
            <h1 className="font-heading text-heading-xl text-text-primary mb-6 text-balance">{post.title}</h1>
            <div className="prose prose-lg text-text-secondary leading-relaxed space-y-6">
              <p>{post.excerpt}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
