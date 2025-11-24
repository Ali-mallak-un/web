export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 px-6 lg:px-12 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-right">
          
          {/* موقعیت ما */}
          <div className="transition-colors duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">موقعیت ما</h3>
            <div className="rounded-lg overflow-hidden w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.9540051287953!2d51.38508931526462!3d35.75330398017997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e02d0a0d6f4d5%3A0x67a9a101f3f9829!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1677278077587!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="نقشه موقعیت ما"
              >
              </iframe>
            </div>
          </div>

          {/* ارتباط با ما */}
          <div className="transition-colors duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">ارتباط با ما</h3>
            <p className="text-sm mb-4">آدرس: تهران، خیابان آزادی، پلاک ۱۲۳</p>
            <p className="text-sm mb-4">ایمیل: example@email.com</p>
            <p className="text-sm mb-6">تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 transform hover:scale-110">
                <i className="fab fa-telegram-plane text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 transform hover:scale-110">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 transform hover:scale-110">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200 transform hover:scale-110">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>

          {/* روش‌های پرداخت */}
          <div className="transition-colors duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">روش‌های پرداخت</h3>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-32 h-32 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">Zarinpal</span>
              </div>
              <div className="w-32 h-32 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">Plisio</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* کپی رایت */}
        <div className="mt-12 pt-6 border-t border-gray-300 dark:border-gray-700 text-center text-sm">
          <p>&copy; ۱۴۰۳ تمامی حقوق برای <a href="#" className="hover:text-teal-500 transition-colors duration-200">سایت خفن من</a> محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}