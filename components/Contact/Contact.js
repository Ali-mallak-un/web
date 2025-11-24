'use client'
import { useState } from 'react'

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <section id="contact-section" className="py-16 bg-gray-800 relative min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">تماس با ما</h2>
        <div className="max-w-xl mx-auto p-8 bg-gray-700 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">نام :</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="p-3 mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-teal-500 focus:border-teal-500 transition-colors duration-300"
                placeholder="نام خود را وارد کنید" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">ایمیل :</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="p-3 mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-teal-500 focus:border-teal-500 transition-colors duration-300"
                placeholder="ایمیل خود را وارد کنید" 
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">پیام :</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                className="p-3 mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-teal-500 focus:border-teal-500 transition-colors duration-300"
                placeholder="پیام خود را بنویسید" 
                required
              ></textarea>
            </div>
            <div>
              <button 
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                ارسال پیام
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* پیغام موفقیت */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl transition-all duration-500 ease-in-out">
          <div className="flex items-center space-x-4 space-x-reverse">
            <i className="fas fa-check-circle text-lg"></i>
            <span>پیام شما با موفقیت ارسال شد!</span>
          </div>
        </div>
      )}
    </section>
  )
}