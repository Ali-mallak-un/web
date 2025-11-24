'use client';
import { signIn, getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [isEmailForm, setIsEmailForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // چک کردن اگر کاربر از قبل لاگین کرده
    getSession().then(session => {
      if (session) {
        router.push('/');
      }
    });
  }, [router]);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn('google', { 
        callbackUrl: '/',
        redirect: false 
      });
      
      if (result?.ok) {
        router.push('/');
      }
    } catch (error) {
      console.error('خطا در ورود با گوگل:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 glowing-bg">
      {/* هدر */}
      <header className="p-4 bg-white dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 space-x-reverse">
            <Link href="/" className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">ربو</Link>
          </div>
        </div>
      </header>

      {/* بخش اصلی لاگین */}
      <main className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-gray-200 dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-sm transition-colors duration-300">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-teal-600 dark:text-teal-400 tracking-wide">ربو</h1>
          </div>

          {/* لاگین با شبکه‌های اجتماعی */}
          {!isEmailForm ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center justify-center p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer w-full"
                >
                  <i className="fab fa-google text-2xl text-red-500"></i>
                  <span className="mr-3 font-semibold text-gray-800 dark:text-gray-200">ورود با گوگل</span>
                </button>
                
                {/* سایر دکمه‌های شبکه‌های اجتماعی */}
                <button className="flex items-center justify-center p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                  <i className="fab fa-microsoft text-2xl text-blue-500"></i>
                  <span className="mr-3 font-semibold text-gray-800 dark:text-gray-200">ورود با مایکروسافت</span>
                </button>
                
                <button className="flex items-center justify-center p-3 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                  <i className="fab fa-github text-2xl text-gray-800 dark:text-gray-200"></i>
                  <span className="mr-3 font-semibold text-gray-800 dark:text-gray-200">ورود با گیت‌هاب</span>
                </button>
              </div>
              
              <p 
                onClick={() => setIsEmailForm(true)}
                className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 cursor-pointer hover:text-teal-500 transition-colors duration-200"
              >
                اگر قبلاً ثبت‌نام کرده‌اید، اینجا کلیک کنید تا وارد شوید.
              </p>
            </div>
          ) : (
            /* فرم ایمیل/پسورد */
            <div className="space-y-4">
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    رمز عبور
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  ورود
                </button>
              </form>
              <p 
                onClick={() => setIsEmailForm(false)}
                className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 cursor-pointer hover:text-teal-500 transition-colors duration-200"
              >
                اگر قبلا ثبت‌نام نکرده‌اید، اینجا کلیک کنید.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}