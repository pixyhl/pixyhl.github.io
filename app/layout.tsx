import '../styles/globals.css'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
      <link rel="icon" type="image/x-icon" href="/images/favicon.png"></link>
      <title> Free content, tips, tutorials, and updates!</title>
      </head>
      <body>
        <Header />
        <div className="px-6">{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
