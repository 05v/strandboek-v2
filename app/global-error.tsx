'use client'

import { useEffect } from 'react'
import './styles/pages/error.css'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error)
  }, [error])

  return (
    <html lang="nl">
      <head>
        <title>Onverwachte fout - Reddingsbrigade Zandvoort</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        <div className="global-error-page">
          <div className="global-error-container">
            <div className="global-error-logo">
              <img src="/Logo.png" alt="Reddingsbrigade Zandvoort Logo" />
            </div>
            <div className="global-error-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <h1>500 - Serverfout</h1>
            <p>
              Er is een kritieke fout opgetreden in de applicatie.
              Onze technische team is op de hoogte gebracht.
            </p>
            <div className="global-error-actions">
              <button 
                onClick={() => reset()} 
                className="global-error-button"
              >
                <i className="fas fa-sync-alt"></i> Opnieuw proberen
              </button>
              <a href="/" className="global-error-button secondary">
                <i className="fas fa-home"></i> Terug naar Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
} 