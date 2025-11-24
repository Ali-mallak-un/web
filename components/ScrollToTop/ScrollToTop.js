'use client'
import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // چک کن ببین کاربر اسکرول کرده یا نه
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // اسکرول به بالای صفحه
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-teal-500 hover:bg-teal-600 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="اسکرول به بالا"
        >
          <i className="fas fa-chevron-up text-lg"></i>
        </button>
      )}
    </>
  )
}