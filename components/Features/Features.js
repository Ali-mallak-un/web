export default function Features() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">چرا ما؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center h-16 w-16 bg-teal-500 rounded-full mx-auto mb-6">
              <i className="fas fa-gem text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">طراحی مدرن</h3>
            <p className="text-center text-gray-400">از آخرین متدها و اصول طراحی روز دنیا استفاده می‌کنیم تا سایت شما همیشه به‌روز باشه.</p>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center h-16 w-16 bg-teal-500 rounded-full mx-auto mb-6">
              <i className="fas fa-rocket text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">سرعت بالا</h3>
            <p className="text-center text-gray-400">بهینه‌سازی کامل برای بهترین عملکرد و تجربه کاربری بدون هیچ تأخیری.</p>
          </div>
          
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center h-16 w-16 bg-teal-500 rounded-full mx-auto mb-6">
              <i className="fas fa-check-circle text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">پشتیبانی همه‌جانبه</h3>
            <p className="text-center text-gray-400">تیم پشتیبانی ما همیشه کنار شماست تا از موفقیت پروژه شما مطمئن بشه.</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}