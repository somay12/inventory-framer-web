import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/content'
import { Img } from '@/components/ui/Img'

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog – Inventory</title>
        <meta name="description" content="Latest insights on inventory management, ERP, and business optimization." />
      </Helmet>
      <ScrollProgress />
      <Navbar />
      <main className="pt-20">
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-16">
              <h1 className="font-heading text-heading-xl text-text-primary mb-4">Blog</h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Latest insights, tips, and news about inventory management and business optimization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-surface border border-border rounded-card overflow-hidden hover:shadow-glow-brand hover:border-brand-500/30 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <Img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      fallback="bg-gradient-to-br from-subtle to-border"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-text-muted mb-2">{post.date}</p>
                    <h3 className="font-heading text-xl font-semibold text-text-primary mb-3 group-hover:text-brand-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-brand-600 font-medium text-sm">
                      Read more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
