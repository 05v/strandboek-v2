'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../styles/components/footer.css'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <Link href="/">
              <Image 
                src="/Logo.png" 
                alt="Reddingsbrigade Zandvoort Logo" 
                className="footer-logo" 
                width={50} 
                height={50}
              />
            </Link>
            <p>Reddingsbrigade Zandvoort</p>
          </div>
          <div className="copyright">
            <p>&copy; {currentYear} Reddingsbrigade Zandvoort. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 