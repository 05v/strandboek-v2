'use client'

import Link from 'next/link'
import MainLayout from './layouts/MainLayout'
import './styles/pages/error.css'

export default function NotFound() {
  return (
    <MainLayout
      hero={{
        title: '404 - Pagina niet gevonden',
        subtitle: 'De pagina die je zoekt bestaat niet of is verplaatst',
      }}
    >
      <section className="content-section">
        <div className="container">
          <div className="error-container">
            <div className="error-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h2>Pagina niet gevonden</h2>
            <p>
              De pagina die je probeert te bezoeken bestaat niet of is verplaatst. 
              Controleer of de URL correct is of ga terug naar de homepagina.
            </p>
            <div className="error-actions">
              <Link href="/" className="error-button primary">
                <i className="fas fa-home"></i> Terug naar Home
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="error-button secondary"
              >
                <i className="fas fa-arrow-left"></i> Ga terug
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 