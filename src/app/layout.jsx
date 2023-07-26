import '@styles/globals.scss'
import { Inter } from 'next/font/google'

import Header from '@components/navbar/index.jsx'
import Footer from '@components/footer/index.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sissa Monitoring Integral',
  description: 'SISSA Monitoring Integral SAPI de CV. Soluciones integrales en el campo de las tecnologías de la información y seguridad electrónica.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <div className='children-container'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
