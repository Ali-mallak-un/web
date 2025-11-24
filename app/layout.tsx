import './globals.css'
import { Vazirmatn } from 'next/font/google'
import AuthProvider from '../components/AuthProvider/AuthProvider';


const vazir = Vazirmatn({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'سایت خفن من',
  description: 'هر ایده‌ای که داری رو اینجا عملی کن',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        {children}
      </body>
    </html>
  )
}