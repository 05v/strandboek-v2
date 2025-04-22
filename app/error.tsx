'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import MainLayout from './layouts/MainLayout'
import './styles/pages/error.css'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <MainLayout
      hero={{
        title: 'Er is iets misgegaan',
        subtitle: 'We hebben een onverwachte fout aangetroffen',
      }}
    >
      <section className="content-section">
        <div className="container">
          <div className="error-container">
            <div className="error-icon">
              <i className="fas fa-bug"></i>
            </div>
            <h2>Fout {error.digest ? `(${error.digest})` : ''}</h2>
            <p>
              Er is een onverwachte fout opgetreden bij het laden van deze pagina.
              Dit kan worden veroorzaakt door een tijdelijk probleem met onze servers.
            </p>
            <div className="error-message">
              <code>{error.message || 'Onbekende fout'}</code>
            </div>
            <div className="error-actions">
              <button 
                onClick={() => reset()} 
                className="error-button primary"
              >
                <i className="fas fa-sync-alt"></i> Opnieuw proberen
              </button>
              <Link href="/" className="error-button secondary">
                <i className="fas fa-home"></i> Terug naar Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 