'use client'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import { useState } from 'react'
import Image from 'next/image'

export default function About() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto p-4 lg:p-8 mt-8">
        <section className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-teal-600 dark:text-teal-400 mb-10 text-center">درباره ما</h1>
          
          {/* Section 1: Introduction to Rabo */}
          <div className="flex flex-col lg:flex-row items-center lg:gap-10 mb-16">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">ربو، جایی برای ایده‌ها و ابزارها</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                ربو جاییه که ایده‌ها و ابزارهای متنوع کنار هم جمع شدن تا مسیر کار و خلاقیت رو برای همه ساده‌تر کنن. از سرویس‌ها و APIهای کاربردی گرفته تا ابزارهای ترند و روز، همه در یک محیط منظم و کاربرپسند گردآوری شدن تا با چند کلیک، چیزی که دنبالش هستید رو پیدا کنید.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://grabthesite.in/gts/wp-content/uploads/2021/07/358-3580921_web-design-clipart-png-transparent-png.png"
                alt="تصویر ابزارهای متنوع و خلاقیت"
                width={600}
                height={400}
                quality={100}
                loading="eager"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Section 2: Empowering Developers */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:gap-10 mb-16">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">نمایش خلاقیت و نوآوری</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                ما محیطی طراحی کردیم که توسعه‌دهنده‌ها و افراد خلاق بتونن محصولاتشون رو معرفی کنن، با توضیحات دقیق، پیش‌نمایش و دسته‌بندی‌های مشخص. ساختار پلتفرم طوریه که ارزش کارها حفظ بشه و کاربران با اطمینان از کیفیت و اصالت خدمات استفاده کنن.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pr-10">
              <Image
                src="https://www.aceinfoway.com/blog/wp-content/uploads/2020/05/Website-Design-Trends-2020_2.jpg"
                alt="تصویر نمایش محصولات توسعه دهندگان"
                width={600}
                height={400}
                quality={100}
                loading="eager"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Section 3: Community & Growth */}
          <div className="flex flex-col lg:flex-row items-center lg:gap-10">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">فراتر از یک بازارچه</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                ربو فقط یک بازارچه نیست؛ اینجا مسابقات و چالش‌های هیجان‌انگیز داریم، ایده‌ها و تجربیات به اشتراک گذاشته میشه و یک جامعه فعال شکل می‌گیره که با هم رشد می‌کنه. ما هر روز در حال گسترش و پیشرفتیم تا تجربه‌ای بهتر برای همه فراهم کنیم.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/dynamic-inbound-marketing-photo-featuring_1127216-4443.jpg"
                alt="تصویر جامعه و چالش‌ها"
                width={600}
                height={400}
                quality={100}
                loading="eager"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <p className="text-xl font-bold text-center text-teal-600 dark:text-teal-400 mt-12">
            امیدوارم همگی موفق باشید.😎
          </p>
        </section>

        {/* Feedback Form Section */}
        <section className="mt-12 bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-xl">
          <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-6 text-center">ارسال نظرات</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
            خوشحال می‌شیم اگر ایده، نظر یا انتقادی راجع به کارمون یا سایت یا هر چیز دیگه‌ای که توی ذهنتون هست، با ما به اشتراک بگذارید تا ما بتونیم به شما کاربران عزیز خدمت کنیم. شما می‌تونید نظرات خودتون رو از طریق فرم زیر برای ما ارسال کنید و در اسرع وقت به ایمیل‌های شما پاسخ داده خواهد شد.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">اسم شما :</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200" 
                placeholder="نام خود را وارد کنید" 
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">موضوع :</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200" 
                placeholder="موضوع پیام شما" 
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">متن پیام :</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200" 
                placeholder="پیام خود را اینجا بنویسید"
                required
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                ارسال پیام
              </button>
            </div>
          </form>

          <div 
            className={`fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl transition-all duration-500 ease-in-out ${
              showSuccess 
                ? 'transform scale-100 opacity-100 pointer-events-auto' 
                : 'transform scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex items-center space-x-4 space-x-reverse">
              <span>✅</span>
              <span>پیام شما با موفقیت ارسال شد!</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}