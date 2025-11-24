'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      <header className="p-4 bg-white dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">ربو</Link>
            <nav className="space-x-4 hidden md:flex">
              <Link href="/services" className="nav-link">خدمات</Link>
              <a href="#portfolio-section" className="nav-link">نمونه کارها</a>
              <Link href="/about" className="nav-link">درباره ما</Link>
              <Link href="/blog" className="nav-link">بلاگ</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="icon-button">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            <button onClick={toggleTheme} className="icon-button">
              {theme === 'dark' ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden icon-button">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 md:hidden overflow-y-auto">
          <div className="flex justify-between p-4">
            <button onClick={() => setIsMobileMenuOpen(false)} className="icon-button text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 mt-12 pb-8">
            <Link href="/services" className="mobile-nav-link">خدمات</Link>
            <a href="#portfolio-section" className="mobile-nav-link">نمونه کارها</a>
            <Link href="/about" className="mobile-nav-link">درباره ما</Link>
            <Link href="/blog" className="mobile-nav-link">بلاگ</Link>
          </nav>
        </div>
      )}
    </>
  )
}