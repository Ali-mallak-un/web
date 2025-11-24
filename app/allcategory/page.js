'use client'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function AllCategory() {
  const router = useRouter()

  const categories = [
    {
      name: 'هوش مصنوعی و یادگیری ماشین',
      slug: 'ai-ml',
      image: 'https://placehold.co/100x100/3B82F6/F9FAFB?text=AI',
    },
    {
      name: 'ابزارهای توسعه‌دهندگان',
      slug: 'developer-tools',
      image: 'https://placehold.co/100x100/10B981/F9FAFB?text=کد',
    },
    {
      name: 'طراحی و گرافیک',
      slug: 'design-graphics',
      image: 'https://placehold.co/100x100/EF4444/F9FAFB?text=گرافیک',
    },
    {
      name: 'ابزارهای ویدیو و صدا',
      slug: 'video-audio',
      image: 'https://placehold.co/100x100/EAB308/F9FAFB?text=مدیا',
    },
    {
      name: 'شبکه‌های اجتماعی',
      slug: 'social-media',
      image: 'https://placehold.co/100x100/EC4899/F9FAFB?text=شبکه',
    },
    {
      name: 'سئو و ابزارهای وب',
      slug: 'seo-web',
      image: 'https://placehold.co/100x100/F97316/F9FAFB?text=SEO',
    },
    // ... بقیه دسته‌بندی‌ها با slug
  ]

  const handleCategoryClick = (slug) => {
    router.push(`/category/${slug}`)
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500">
      <Header />
      
      {/* محتوای اصلی صفحه دسته‌بندی */}
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
            دسته‌بندی ابزارها
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            مجموعه‌ای کامل از ابزارهای آنلاین در دسته‌بندی‌های متنوع.
          </p>

          {/* شبکه دسته‌بندی‌ها */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.slug)}
                className="group block w-full aspect-square bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl hover:shadow-2xl dark:hover:shadow-teal-500/30 transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <div className="flex flex-col items-center justify-center h-full p-4 text-gray-900 dark:text-gray-100">
                  <Image 
                    src={category.image} 
                    alt={`آیکون ${category.name}`}
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2 rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="font-bold text-xs sm:text-sm text-center leading-tight">
                    {category.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}