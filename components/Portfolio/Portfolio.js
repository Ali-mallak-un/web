import Image from 'next/image'

export default function Portfolio() {
  return (
    <section id="portfolio-section" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">نمونه کارها</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gray-700 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/ryse-marketing-website-template.jpg" 
              alt="وب‌سایت تجارت الکترونیک" 
              width={400}
              height={192}
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">وب‌سایت تجارت الکترونیک</h3>
              <p className="text-gray-400">یک پلتفرم فروشگاهی مدرن با رابط کاربری ساده و جذاب.</p>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/New Project.jpg" 
              alt="طراحی اپلیکیشن موبایل" 
              width={400}
              height={192}
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">طراحی اپلیکیشن موبایل</h3>
              <p className="text-gray-400">طراحی و توسعه یک اپلیکیشن موبایل کاربردی برای مدیریت زمان.</p>
            </div>
          </div>
          
          <div className="bg-gray-700 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/maxresdefault.jpg" 
              alt="ساخت پورتفولیو هنری" 
              width={400}
              height={192}
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">ساخت پورتفولیو هنری</h3>
              <p className="text-gray-400">نمایش آثار هنری به صورت تعاملی و با طراحی مینیمال.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}