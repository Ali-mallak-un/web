import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 md:py-32 text-center bg-cover bg-center" 
             style={{backgroundImage: "url('/images/group-people-social-media-icons-background-internet-modern-technology-concept_48369-13273 (1).jpg')"}}>
      <div className="container mx-auto px-4 bg-gray-900 bg-opacity-75 rounded-xl p-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          هر ایده‌ای که داری رو اینجا عملی کن
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
          ما ابزارهای لازم برای ساختن سایت خفن شما رو داریم.
        </p>
        <Link href="/login" 
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
          شروع کن!
        </Link>
      </div>
    </section>
  )
}