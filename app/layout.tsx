import type { Metadata, Viewport } from 'next'
import './styles/globals.css'
import './styles/criticalStyles.css'  // Import critical styles

export const metadata: Metadata = {
  title: 'Strandboek - Reddingsbrigade Zandvoort',
  description: 'Informatieportaal voor leden van de Reddingsbrigade Zandvoort',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        {/* Preload fonts to avoid layout shifts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Pre-load critical CSS */}
        <link rel="preload" href="/styles/criticalStyles.css" as="style" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 