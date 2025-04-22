'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/layouts/mainLayout.css'

interface MainLayoutProps {
  children: React.ReactNode
  hero?: {
    title: string
    subtitle?: string
  }
}

export default function MainLayout({ children, hero }: MainLayoutProps) {
  return (
    <div className="main-layout">
      <Header />
      <main>
        {hero && (
          <section className="hero">
            <div className="container">
              <h1>{hero.title}</h1>
              {hero.subtitle && <p>{hero.subtitle}</p>}
            </div>
          </section>
        )}
        {children}
      </main>
      <Footer />
    </div>
  )
} 