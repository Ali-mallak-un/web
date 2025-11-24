import Image from 'next/image'

export default function Blog() {
  return (
    <section id="blog-section" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">وبلاگ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/7-Best-AI-Tools-for-UX-Designers.jpg" 
              alt="7 ابزار هوش مصنوعی برای طراحان وب" 
              width={400}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">7 ابزار هوش مصنوعی برای طراحان وب</h3>
              <p className="text-gray-400 text-sm mb-4">با این ابزارهای شگفت‌انگیز سرعت طراحی خود را چند برابر کنید.</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/TOP-15-FUTURE-PROGRAMMING-LANGUAGES-.png" 
              alt="آینده 15 زبان برنامه‌نویسی" 
              width={400}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">آینده 15 زبان برنامه‌نویسی با تکنولوژی‌های جدید</h3>
              <p className="text-gray-400 text-sm mb-4">مروری بر زبان‌های برنامه‌نویسی و فریم‌ورک‌های آینده‌دار.</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/Layer 1.png" 
              alt="آموزش گام به گام Python" 
              width={400}
              height={192}
              className="w-full h-48 object-cover image-scale-mobile"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">آموزش گام به گام Python</h3>
              <p className="text-gray-400 text-sm mb-4">یک راهنمای کامل برای شروع کار با فریم‌ورک Python</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}