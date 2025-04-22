'use client'

import MainLayout from './layouts/MainLayout'
import Link from 'next/link'
import './styles/pages/home.css'

export default function HomePage() {
  return (
    <MainLayout
      hero={{
        title: 'Reddingsbrigade Zandvoort',
        subtitle: 'Informatieportaal voor leden',
      }}
    >
      <section className="content-section">
        <div className="container">
          <div className="quick-links-section">
            <h2><i className="fas fa-tools"></i> Operationele Zaken</h2>
            <div className="quick-links-grid">
              <a href="https://docs.google.com/spreadsheets/d/1O2L3smO6H-ynq7jUALZv0sUoP6hS9MTO8WM_0glDJ8U/edit?gid=2115702717#gid=2115702717" className="quick-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-calendar-alt"></i>
                <h3>Rooster Aanmelden</h3>
              </a>
              <Link href="/telefoonlijst" className="quick-link">
                <i className="fas fa-phone-alt"></i>
                <h3>Verkorte Telefoonlijst</h3>
              </Link>
              <Link href="/strandpaviljoens" className="quick-link">
                <i className="fas fa-umbrella-beach"></i>
                <h3>Strandpaviljoens & Aanrijroutes</h3>
              </Link>
              <a href="https://rhr.reddingsbrigade.nl/" className="quick-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-clipboard-list"></i>
                <h3>RHR Registratie</h3>
              </a>
              <a href="https://www.reddingsbrigade-meldkamer.nl/" className="quick-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-broadcast-tower"></i>
                <h3>Meldkamer Tool</h3>
              </a>
              <a href="https://www.strandveilig.nl/beschikbaar/#/login" className="quick-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-water"></i>
                <h3>Kustwacht in/uit melden</h3>
              </a>
              <a href="https://www.zrb.info/" className="quick-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-info-circle"></i>
                <h3>ZRB.info</h3>
              </a>
            </div>
          </div>

          <div className="quick-links-section">
            <h2><i className="fas fa-file-alt"></i> Documentatie & Algemene Zaken</h2>
            <div className="quick-links-grid">
              <a href="https://drive.google.com/drive/u/0/folders/1NjUtPkaUbsPnyybq-ITAbZ_lN_hmXzvj" className="quick-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-book"></i>
                <h3>Strandboek Mappen</h3>
              </a>
              <a href="https://calendar.google.com/calendar/u/0/embed?color=%23f83a22&src=info@zrb.info" className="quick-link" target="_blank" rel="noopener noreferrer">
                <i className="far fa-calendar-alt"></i>
                <h3>Agenda ZRB.info</h3>
              </a>
              <a href="https://drive.google.com/drive/u/0/folders/1ejugPvGoTCcFGkh3zdPpi3BKnpLIDkwn" className="quick-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-clipboard-check"></i>
                <h3>Operationele Documenten</h3>
              </a>
              <a href="https://drive.google.com/drive/u/0/folders/1A1od_Lp4pTzfn9C4ymD153yBXc511nmt" className="quick-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-clipboard"></i>
                <h3>Richtlijnen en Protocollen</h3>
              </a>
              <a href="https://drive.google.com/drive/u/0/folders/1yEi0O0H1I7OGgtVNaBpXJ1UJc1vSyKrT" className="quick-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-hands-helping"></i>
                <h3>Handleiding/Naslag</h3>
              </a>
              <a href="https://drive.google.com/drive/u/0/folders/1oVD-Cbc8W2xVXYS8eFHoPvQeHExP2SJ1" className="quick-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-signature"></i>
                <h3>Formulieren</h3>
              </a>
            </div>
          </div>

          <div className="quick-links-section">
            <h2><i className="fas fa-users"></i> Contact Personen</h2>
            <div className="contact-persons-grid">
              <div className="contact-person-card">
                <i className="fas fa-building"></i>
                <h3>Zandvoortse Reddingsbrigade</h3>
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Linnaeusstraat 2, 2041 BR</span>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:bestuur@zrb.info">bestuur@zrb.info</a>
                </p>
                <p>
                  <i className="fas fa-globe"></i>
                  <a href="https://www.zrb.info" target="_blank" rel="noopener noreferrer">www.zrb.info</a>
                </p>
              </div>
              
              <div className="contact-person-card">
                <i className="fas fa-shield-alt"></i>
                <h3>Operationeel</h3>
                <p>
                  <i className="fas fa-user"></i>
                  <span>Pieter Winkel</span>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:operationeel@zrb.info">operationeel@zrb.info</a>
                </p>
              </div>
              
              <div className="contact-person-card">
                <i className="fas fa-newspaper"></i>
                <h3>Pers &amp; Media</h3>
                <p>
                  <i className="fas fa-user"></i>
                  <span>Ernst Brokmeier</span>
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  <a href="tel:+31619442879">06-1944 2879</a>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:pr@zrb.info">pr@zrb.info</a>
                </p>
              </div>
              
              <div className="contact-person-card">
                <i className="fas fa-user-friends"></i>
                <h3>Vertrouwenscontact</h3>
                <p>
                  <i className="fas fa-users"></i>
                  <span>Annemarie, Nora &amp; Oscar</span>
                </p>
                <p>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:vcp@zrb.info">vcp@zrb.info</a>
                </p>
                <p>
                  <i className="fas fa-external-link-alt"></i>
                  <Link href="/contact">Meer contactgegevens</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 