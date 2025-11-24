'use client'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import { useRouter } from 'next/navigation'

export default function Services() {
  const router = useRouter()

  const handleDeveloperClick = () => {
    alert('شما گزینه توسعه‌دهنده را انتخاب کردید.')
  }

  const handleNormalUserClick = () => {
    router.push('/allcategory')
  }

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />
      
      {/* بخش اصلی خدمات */}
      <main className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
            خدمات ما
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            کدام یک از خدمات ما برای شما مناسب‌تر است؟
            <br className="hidden sm:block" />
            لطفاً انتخاب کنید تا بتوانیم بهترین پیشنهادها را به شما ارائه دهیم.
          </p>

          {/* بخش انتخاب کاربر */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
            
            {/* کارت برای "کاربر عادی" */}
            <div className="flex flex-col items-center p-8 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
              {/* آیکون کاربر */}
              <svg className="h-20 w-20 text-teal-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <h3 className="text-2xl font-bold mb-2">کاربر عادی</h3>
              <p className="text-gray-400 mb-6 text-center">
                اگر به دنبال استفاده از خدمات آماده ما هستید، این بخش برای شماست.
              </p>
              <button 
                onClick={handleNormalUserClick}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-center"
              >
                ادامه
              </button>
            </div>

            {/* کارت برای "توسعه‌دهنده" */}
            <div className="flex flex-col items-center p-8 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
              {/* آیکون توسعه‌دهنده */}
              <svg className="h-20 w-20 text-teal-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              <h3 className="text-2xl font-bold mb-2">توسعه‌دهنده</h3>
              <p className="text-gray-400 mb-6 text-center">
                اگر نیاز به مستندات API یا ابزارهای توسعه‌دهندگان دارید، اینجا را انتخاب کنید.
              </p>
              <button 
                onClick={handleDeveloperClick}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 text-center"
              >
                ادامه
              </button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}