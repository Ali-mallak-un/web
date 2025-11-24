'use client'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')

  // داده‌های بلاگ
  const blogPosts = [
    {
      id: 1,
      title: "آموزش گام به گام استفاده از یک API جدید",
      content: "در این مطلب به صورت کامل و دقیق نحوه استفاده از یک API کاربردی را آموزش می‌دهیم.",
      date: "۱۴۰۳/۰۴/۲۴",
      image: "https://placehold.co/600x350/0F766E/FFFFFF?text=آموزش+فوق‌العاده",
      slug: "api-tutorial",
      category: "ابزارها و APIها"
    },
    {
      id: 2,
      title: "ترفندهای کاربردی برای بهینه‌سازی کد",
      content: "با این ترفندهای ساده، سرعت و کارایی کدهای خود را چندین برابر کنید.",
      date: "۱۴۰۳/۰۴/۲۳",
      image: "https://placehold.co/600x350/0D9488/FFFFFF?text=ترفندهای+برنامه‌نویسی",
      slug: "code-optimization",
      category: "ترفندها و آموزش‌ها"
    },
    {
      id: 3,
      title: "جدیدترین اخبار از دنیای تکنولوژی",
      content: "به بررسی آخرین ابزارها و فناوری‌های روز در حوزه برنامه‌نویسی می‌پردازیم.",
      date: "۱۴۰۳/۰۴/۲۲",
      image: "https://placehold.co/600x350/2DD4BF/FFFFFF?text=اخبار+تکنولوژی",
      slug: "tech-news",
      category: "اخبار تکنولوژی"
    },
    {
      id: 4,
      title: "مقدمه‌ای بر برنامه‌نویسی برای مبتدیان",
      content: "اگر به دنیای برنامه‌نویسی علاقه‌مندید، این مطلب را از دست ندهید!",
      date: "۱۴۰۳/۰۴/۲۱",
      image: "https://placehold.co/600x350/14B8A6/FFFFFF?text=مقدمه‌ای+بر+برنامه‌نویسی",
      slug: "programming-intro",
      category: "آموزش‌ها"
    }
  ]

  const featuredPost = {
    id: 0,
    title: "عنوان جذاب مطلب ویژه اینجاست",
    content: "این یک خلاصه کوتاه از مطلب ویژه است. در اینجا درباره موضوعی مهم در حوزه ابزارها یا APIها صحبت کرده‌ایم و توضیحاتی برای آشنایی بیشتر ارائه داده‌ایم.",
    date: "۱۴۰۳/۰۴/۲۴",
    image: "https://placehold.co/400x250/14B8A6/FFFFFF?text=مطلب+ویژه",
    slug: "featured-post",
    category: "ویژه"
  }

  const categories = [
    { name: 'ابزارها و APIها', count: 5 },
    { name: 'ترفندها و آموزش‌ها', count: 7 },
    { name: 'اخبار تکنولوژی', count: 3 },
    { name: 'نقد و بررسی', count: 2 }
  ]

  const recentPosts = [
    { title: 'آموزش کار با یک ابزار جدید', date: '۲ ساعت پیش', image: 'https://placehold.co/80x80/2DD4BF/FFFFFF?text=عکس+۱' },
    { title: 'ترفندهایی برای برنامه‌نویسان', date: '۱ روز پیش', image: 'https://placehold.co/80x80/0F766E/FFFFFF?text=عکس+۲' },
    { title: 'معرفی ۵ API کاربردی', date: '۳ روز پیش', image: 'https://placehold.co/80x80/14B8A6/FFFFFF?text=عکس+۳' }
  ]

  // فیلتر کردن مطالب بر اساس جستجو
  const filteredPosts = blogPosts.filter(post =>
    post.title.includes(searchQuery) || post.content.includes(searchQuery)
  )

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto p-4 lg:p-8 mt-8">
        <section className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-teal-600 dark:text-teal-400 mb-10 text-center">بلاگ</h1>
          
          {/* Blog Layout: Sidebar + Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Sidebar Section */}
            <div className="lg:col-span-1">
              {/* Search Bar */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">جستجو در بلاگ</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="جستجو..." 
                    className="w-full rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100 transition-colors duration-200"
                  />
                  <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300"></i>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">دسته‌بندی‌ها</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors duration-200">
                        <i className="fas fa-folder-open ml-2"></i> {category.name} ({category.count})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">آخرین مطالب</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={80}
                        height={80}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div>
                        <Link href="#" className="text-gray-800 dark:text-gray-200 hover:text-teal-500 font-semibold transition-colors duration-200">
                          {post.title}
                        </Link>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Main Blog Posts Section */}
            <div className="lg:col-span-2">
              
              {/* Featured Post */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={400}
                  height={250}
                  className="rounded-xl w-full md:w-1/3 object-cover h-48"
                />
                <div className="flex-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">تاریخ: {featuredPost.date}</span>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-2 mb-2">{featuredPost.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
                    {featuredPost.content}
                  </p>
                  <Link href={`/blog/${featuredPost.slug}`} className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                    ادامه مطلب <i className="fas fa-arrow-left mr-2"></i>
                  </Link>
                </div>
              </div>

              {/* Post Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={350}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-xs text-gray-500 dark:text-gray-400">تاریخ: {post.date}</span>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-2 mb-2">{post.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
                        {post.content}
                      </p>
                      <Link href={`/blog/${post.slug}`} className="text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                        بیشتر بخوانید <i className="fas fa-arrow-left mr-2"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}