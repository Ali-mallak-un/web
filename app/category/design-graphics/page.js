'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import ScrollToTop from '../../../components/ScrollToTop/ScrollToTop'
import Image from 'next/image'
import { useState } from 'react'

export default function CategoryTools() {
  const params = useParams()
  const categoryName = params.categoryName

  const [filters, setFilters] = useState({
    toolType: [],
    connection: [],
    vpnRequired: [],
    paymentType: [],
    rating: ''
  })

  const [sortBy, setSortBy] = useState('newest')
  const [searchTerm, setSearchTerm] = useState('')

  // داده‌های نمونه برای ابزارها
  const toolsData = [
    {
      id: 1,
      name: 'ابزار عالی یک',
      description: 'توضیحات کوتاه درباره قابلیت‌ها و کاربرد این ابزار',
      image: 'https://placehold.co/80x80/6D28D9/FFFFFF?text=Abzar+1',
      category: 'طراحی گرافیک',
      price: 'رایگان',
      type: 'ویرایش تصویر',
      connection: 'آنلاین',
      vpnRequired: false,
      rating: 5
    },
    {
      id: 2,
      name: 'ابزار کاربردی دو',
      description: 'توضیحات کوتاه درباره قابلیت‌ها و کاربرد این ابزار',
      image: 'https://placehold.co/80x80/A855F7/FFFFFF?text=Abzar+2',
      category: 'ویرایش تصویر',
      price: 'پولی',
      type: 'ویرایش تصویر',
      connection: 'آفلاین',
      vpnRequired: true,
      rating: 4
    },
    {
      id: 3,
      name: 'ابزار حرفه‌ای سه',
      description: 'توضیحات کوتاه درباره قابلیت‌ها و کاربرد این ابزار',
      image: 'https://placehold.co/80x80/C026D3/FFFFFF?text=Abzar+3',
      category: 'طراحی لوگو',
      price: 'رایگان',
      type: 'طراحی لوگو',
      connection: 'آنلاین',
      vpnRequired: false,
      rating: 5
    },
    {
      id: 4,
      name: 'ابزار قدرتمند چهار',
      description: 'توضیحات کوتاه درباره قابلیت‌ها و کاربرد این ابزار',
      image: 'https://placehold.co/80x80/2DD4BF/FFFFFF?text=Abzar+4',
      category: 'انیمیشن‌سازی',
      price: 'پولی',
      type: 'انیمیشن‌سازی',
      connection: 'آفلاین',
      vpnRequired: true,
      rating: 3
    },
    {
      id: 5,
      name: 'ابزار ساده پنج',
      description: 'توضیحات کوتاه درباره قابلیت‌ها و کاربرد این ابزار',
      image: 'https://placehold.co/80x80/FBBF24/1F2937?text=Abzar+5',
      category: 'ویرایش تصویر',
      price: 'رایگان',
      type: 'ویرایش تصویر',
      connection: 'آنلاین',
      vpnRequired: false,
      rating: 4
    }
  ]

  // تابع برای مدیریت فیلترهای چک‌باکس
  const handleCheckboxChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }))
  }

  // تابع برای مدیریت فیلترهای رادیو
  const handleRadioChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  // فیلتر کردن ابزارها بر اساس فیلترهای انتخاب شده
  const filteredTools = toolsData.filter(tool => {
    // فیلتر جستجو
    if (searchTerm && !tool.name.includes(searchTerm) && !tool.description.includes(searchTerm)) {
      return false
    }

    // فیلتر نوع ابزار
    if (filters.toolType.length > 0 && !filters.toolType.includes(tool.type)) {
      return false
    }

    // فیلتر وضعیت اتصال
    if (filters.connection.length > 0 && !filters.connection.includes(tool.connection)) {
      return false
    }

    // فیلتر نیاز به فیلترشکن
    if (filters.vpnRequired.length > 0) {
      const vpnStatus = tool.vpnRequired ? 'بله' : 'خیر'
      if (!filters.vpnRequired.includes(vpnStatus)) {
        return false
      }
    }

    // فیلتر نوع پرداخت
    if (filters.paymentType.length > 0 && !filters.paymentType.includes(tool.price)) {
      return false
    }

    // فیلتر امتیاز
    if (filters.rating) {
      const minRating = parseInt(filters.rating)
      if (tool.rating < minRating) {
        return false
      }
    }

    return true
  })

  // مرتب‌سازی ابزارها
  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.id - a.id
      case 'popular':
        return b.rating - a.rating
      case 'relevant':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />

      {/* محتوای اصلی */}
      <main className="py-12 md:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-teal-400">صفحه اصلی</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/services" className="hover:text-teal-400">خدمات</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-gray-100">{categoryName}</span>
          </nav>

          {/* Layout اصلی */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* سایدبار فیلترها */}
            <aside className="lg:col-span-1 lg:sticky lg:top-8 h-fit p-6 bg-gray-800 rounded-2xl shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-teal-400">فیلترها</h2>

              {/* فیلتر نوع ابزار */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 text-gray-200">نوع ابزار</h3>
                <div className="flex flex-col space-y-2">
                  {['ویرایش تصویر', 'طراحی لوگو', 'انیمیشن‌سازی'].map(type => (
                    <label key={type} className="inline-flex items-center text-gray-300 cursor-pointer text-base">
                      <input
                        type="checkbox"
                        checked={filters.toolType.includes(type)}
                        onChange={() => handleCheckboxChange('toolType', type)}
                        className="rounded border-gray-600 text-teal-500 focus:ring-teal-500 bg-gray-700"
                      />
                      <span className="mr-3">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* فیلتر وضعیت اتصال */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 text-gray-200">وضعیت اتصال</h3>
                <div className="flex flex-col space-y-2">
                  {['آنلاین', 'آفلاین'].map(connection => (
                    <label key={connection} className="inline-flex items-center text-gray-300 cursor-pointer text-base">
                      <input
                        type="checkbox"
                        checked={filters.connection.includes(connection)}
                        onChange={() => handleCheckboxChange('connection', connection)}
                        className="rounded border-gray-600 text-teal-500 focus:ring-teal-500 bg-gray-700"
                      />
                      <span className="mr-3">{connection}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* فیلتر نیاز به فیلترشکن */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 text-gray-200">نیاز به فیلترشکن</h3>
                <div className="flex flex-col space-y-2">
                  {['بله', 'خیر'].map(vpn => (
                    <label key={vpn} className="inline-flex items-center text-gray-300 cursor-pointer text-base">
                      <input
                        type="checkbox"
                        checked={filters.vpnRequired.includes(vpn)}
                        onChange={() => handleCheckboxChange('vpnRequired', vpn)}
                        className="rounded border-gray-600 text-teal-500 focus:ring-teal-500 bg-gray-700"
                      />
                      <span className="mr-3">{vpn}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* فیلتر نوع پرداخت */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 text-gray-200">نوع پرداخت</h3>
                <div className="flex flex-col space-y-2">
                  {['رایگان', 'پولی'].map(payment => (
                    <label key={payment} className="inline-flex items-center text-gray-300 cursor-pointer text-base">
                      <input
                        type="checkbox"
                        checked={filters.paymentType.includes(payment)}
                        onChange={() => handleCheckboxChange('paymentType', payment)}
                        className="rounded border-gray-600 text-teal-500 focus:ring-teal-500 bg-gray-700"
                      />
                      <span className="mr-3">{payment}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* فیلتر امتیاز کاربران */}
              <div className="mb-0">
                <h3 className="font-bold text-lg mb-3 text-gray-200">امتیاز کاربران</h3>
                <div className="flex flex-col space-y-2">
                  {[
                    { value: '5', label: '⭐ ۵ ستاره' },
                    { value: '4', label: '⭐ ۴ ستاره و بالاتر' },
                    { value: '3', label: '⭐ ۳ ستاره و بالاتر' }
                  ].map(rating => (
                    <label key={rating.value} className="inline-flex items-center text-gray-300 cursor-pointer text-base">
                      <input
                        type="radio"
                        name="rating"
                        value={rating.value}
                        checked={filters.rating === rating.value}
                        onChange={(e) => handleRadioChange('rating', e.target.value)}
                        className="text-teal-500 bg-gray-700 border-gray-600 focus:ring-teal-500 rounded-full"
                      />
                      <span className="mr-3">{rating.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* محتوای اصلی */}
            <div className="lg:col-span-3">
              {/* نوار جستجو */}
              <div className="relative mb-6">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="جستجو بین ابزارها..."
                  className="w-full pr-12 pl-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
                />
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"></i>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-center mb-6">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                  {categoryName}
                </h1>

                {/* مرتب‌سازی */}
                <div className="flex flex-wrap gap-3 text-sm font-medium items-center">
                  <span className="text-gray-400">مرتب‌سازی بر اساس:</span>
                  {[
                    { value: 'newest', label: 'جدیدترین' },
                    { value: 'popular', label: 'پرکاربردترین' },
                    { value: 'relevant', label: 'مرتبط‌ترین' }
                  ].map(sort => (
                    <button
                      key={sort.value}
                      onClick={() => setSortBy(sort.value)}
                      className={`px-3 py-1 rounded-xl transition-colors duration-200 ${sortBy === sort.value
                          ? 'bg-teal-500 text-gray-900'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                    >
                      {sort.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* شبکه ابزارها */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedTools.map(tool => (
                  <Link
                    key={tool.id}
                    href="#"
                    className="p-4 bg-gray-800 rounded-xl shadow-lg flex items-start gap-4 hover:bg-gray-700 transition-colors duration-300"
                  >
                    <div className="shrink-0">
                      <Image
                        src={tool.image}
                        alt={`آیکون ${tool.name}`}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-1 hover:text-teal-400 transition-colors duration-300">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">
                        {tool.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                          {tool.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full ${tool.price === 'رایگان'
                            ? 'bg-teal-500 text-gray-900'
                            : 'bg-gray-700 text-gray-300'
                          }`}>
                          {tool.price}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* پیام زمانی که ابزاری پیدا نمی‌شود */}
              {sortedTools.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">هیچ ابزاری با فیلترهای انتخاب شده یافت نشد.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}