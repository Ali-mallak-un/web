import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Team from '../components/Team/Team'
import Portfolio from '../components/Portfolio/Portfolio'
import Blog from '../components/Blog/Blog'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <Header />
      <Hero />
      <Features />
      <Team />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}