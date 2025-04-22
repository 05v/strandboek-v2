'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import '../styles/components/header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on navigation or window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 576 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMenuOpen && !target.closest('.main-nav') && !target.closest('.menu-toggle')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Add body class to prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <Link href="/">
            <Image 
              src="/Logo.png" 
              alt="Reddingsbrigade Zandvoort Logo" 
              className="logo" 
              width={50} 
              height={50} 
              priority
            />
          </Link>
          <div className="site-title">
            <h1>Strandboek</h1>
            <p>Reddingsbrigade Zandvoort</p>
          </div>
        </div>
        <nav className="main-nav">
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            aria-label="Menu openen"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link href="/" className={pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/informatie" className={pathname === '/informatie' || pathname.startsWith('/informatie/') ? 'active' : ''}>
                Informatie
              </Link>
            </li>
            <li>
              <Link href="/inzetvoorstellen" className={pathname === '/inzetvoorstellen' ? 'active' : ''}>
                Inzetvoorstellen
              </Link>
            </li>
            <li>
              <Link href="/documenten" className={pathname === '/documenten' ? 'active' : ''}>
                Documenten
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 