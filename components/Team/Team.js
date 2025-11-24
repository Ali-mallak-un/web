import Image from 'next/image'

export default function Team() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">تیم ما</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="https://event.sisoog.com/wp-content/uploads/2018/12/photo_2024-11-02_22-02-18-e1730735273437.jpg" 
              alt="جادی میرمیرانی" 
              width={96}
              height={96}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
            />
            <h3 className="text-lg font-semibold text-white">جادی میرمیرانی</h3>
            <p className="text-gray-400">هک و امنیت</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/wmremove-transformed (1).jpeg" 
              alt="سارا احمدی" 
              width={96}
              height={96}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
            />
            <h3 className="text-lg font-semibold text-white">سارا احمدی</h3>
            <p className="text-gray-400">طراح رابط کاربری</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="https://studio.sms.ir/wp-content/uploads/2021/02/%D9%85%DB%8C%D9%84%D8%A7%D8%AF-%D9%86%D9%88%D8%B1%DB%8C.jpg.webp" 
              alt="میلاد نوری" 
              width={96}
              height={96}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
            />
            <h3 className="text-lg font-semibold text-white">میلاد نوری</h3>
            <p className="text-gray-400">مهندس شبکه</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/jooel.jpg" 
              alt="Joeel" 
              width={96}
              height={96}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
            />
            <h3 className="text-lg font-semibold text-white">Joeel</h3>
            <p className="text-gray-400">Programmer</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}
