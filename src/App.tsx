import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import Contact from '@/pages/Contact'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import Terms from '@/pages/Terms'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-use" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
