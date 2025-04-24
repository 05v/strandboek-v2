'use client'

import { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import '../styles/pages/informatie.css'
import Link from 'next/link'
import { infoCards } from '../utils/data/infoCards'

export default function InformatiePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Laden van CSS direct bij component mount
  useEffect(() => {
    // Functie om CSS te laden
    const loadCSS = () => {
      const infoCSS = document.createElement('link');
      infoCSS.rel = 'stylesheet';
      infoCSS.href = '/styles/pages/informatie.css';
      document.head.appendChild(infoCSS);
    };
    
    // CSS direct laden
    loadCSS();
  }, []);

  // Filter de kaarten op basis van zoekterm en categorie
  const filteredCards = infoCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          card.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || card.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Groepeer kaarten per categorie
  const algemeneInfoCards = filteredCards.filter(card => card.category === 'algemeen');
  const operationeelCards = filteredCards.filter(card => card.category === 'operationeel');
  const richtlijnenCards = filteredCards.filter(card => card.category === 'richtlijnen');
  const duingebiedCards = filteredCards.filter(card => card.category === 'duingebied');
  const handleidingCards = filteredCards.filter(card => card.category === 'handleiding');
  const factsheetsCards = filteredCards.filter(card => card.category === 'factsheets');
  const formulierenCards = filteredCards.filter(card => card.category === 'formulieren');

  return (
    <MainLayout
      hero={{
        title: 'Informatie',
        subtitle: 'Kennisbank voor leden van de Reddingsbrigade Zandvoort',
      }}
    >
      <section className="content-section">
        <div className="container">
          <div className="info-section">
            <h2 className="section-title">
              <i className="fas fa-info-circle"></i>
              <span>Informatieoverzicht</span>
            </h2>
            <p className="section-intro">
              Op deze pagina vind je een overzicht van alle belangrijke informatie voor leden van de Reddingsbrigade Zandvoort.
              Gebruik de filters hieronder om specifieke informatie te vinden.
            </p>

            {/* Zoek- en filter sectie */}
            <div className="search-filter-bar">
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input 
                  type="text" 
                  placeholder="Zoek informatie..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="clear-search" 
                    onClick={() => setSearchTerm('')}
                    aria-label="Zoekopdracht wissen"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
              
              <div className="category-filter">
                <button 
                  className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('all')}
                >
                  Alle categorieën
                </button>
                <button 
                  className={`filter-btn ${activeCategory === 'algemeen' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('algemeen')}
                >
                  <i className="fas fa-info-circle"></i> Algemene informatie
                </button>
                <button 
                  className={`filter-btn ${activeCategory === 'operationeel' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('operationeel')}
                >
                  <i className="fas fa-cogs"></i> Operationeel
                </button>
                <button 
                  className={`filter-btn ${activeCategory === 'richtlijnen' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('richtlijnen')}
                >
                  <i className="fas fa-file-alt"></i> Richtlijnen
                </button>
                <button 
                  className={`filter-btn ${activeCategory === 'duingebied' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('duingebied')}
                >
                  <i className="fas fa-mountain"></i> Inzet duingebied
                </button>
                <button 
                  className={`filter-btn ${activeCategory === 'handleiding' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('handleiding')}
                >
                  <i className="fas fa-book"></i> Handleiding/naslag
                </button>
                <button 
                  className={`filter-btn ${activeCategory === 'factsheets' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('factsheets')}
                >
                  <i className="fas fa-file-invoice"></i> Factsheets
                </button>
                <button 
                  className={`filter-btn ${activeCategory === 'formulieren' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('formulieren')}
                >
                  <i className="fas fa-clipboard"></i> Formulieren
                </button>
              </div>
            </div>

            {/* Resultaten teller */}
            <div className="results-counter">
              <p>{filteredCards.length} van {infoCards.length} informatiekaarten</p>
            </div>

            {/* Algemene Informatie sectie */}
            {(activeCategory === 'all' || activeCategory === 'algemeen') && algemeneInfoCards.length > 0 && (
              <>
                <div className="section-divider">
                  <h2><i className="fas fa-info-circle"></i> Algemene informatie</h2>
                </div>
                
                <div className="info-cards-grid">
                  {algemeneInfoCards.map(card => {
                    // Check if URL is external
                    const isExternalUrl = card.url.startsWith('http://') || card.url.startsWith('https://');
                    
                    return isExternalUrl ? (
                      <a href={card.url} className="info-card" key={card.id} target="_blank" rel="noopener noreferrer">
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Open document <i className="fas fa-external-link-alt"></i></p>
                        </div>
                      </a>
                    ) : (
                      <Link href={card.url} className="info-card" key={card.id}>
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Meer informatie <i className="fas fa-arrow-right"></i></p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
            
            {/* Operationeel sectie */}
            {(activeCategory === 'all' || activeCategory === 'operationeel') && operationeelCards.length > 0 && (
              <>
                <div className="section-divider">
                  <h2><i className="fas fa-cogs"></i> Operationeel</h2>
                </div>
                
                <div className="info-cards-grid">
                  {operationeelCards.map(card => {
                    // Check if URL is external
                    const isExternalUrl = card.url.startsWith('http://') || card.url.startsWith('https://');
                    
                    return isExternalUrl ? (
                      <a href={card.url} className="info-card" key={card.id} target="_blank" rel="noopener noreferrer">
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Open document <i className="fas fa-external-link-alt"></i></p>
                        </div>
                      </a>
                    ) : (
                      <Link href={card.url} className="info-card" key={card.id}>
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Meer informatie <i className="fas fa-arrow-right"></i></p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
            
            {/* Richtlijnen en protocollen sectie */}
            {(activeCategory === 'all' || activeCategory === 'richtlijnen') && richtlijnenCards.length > 0 && (
              <>
                <div className="section-divider">
                  <h2><i className="fas fa-file-alt"></i> Richtlijnen en protocollen</h2>
                </div>
                
                <div className="info-cards-grid">
                  {richtlijnenCards.map(card => {
                    // Check if URL is external
                    const isExternalUrl = card.url.startsWith('http://') || card.url.startsWith('https://');
                    
                    return isExternalUrl ? (
                      <a href={card.url} className="info-card" key={card.id} target="_blank" rel="noopener noreferrer">
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Open document <i className="fas fa-external-link-alt"></i></p>
                        </div>
                      </a>
                    ) : (
                      <Link href={card.url} className="info-card" key={card.id}>
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Meer informatie <i className="fas fa-arrow-right"></i></p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
            
            {/* Inzet duingebied sectie */}
            {(activeCategory === 'all' || activeCategory === 'duingebied') && duingebiedCards.length > 0 && (
              <>
                <div className="section-divider">
                  <h2><i className="fas fa-mountain"></i> Inzet duingebied</h2>
                </div>
                
                <div className="info-cards-grid">
                  {duingebiedCards.map(card => {
                    // Check if URL is external
                    const isExternalUrl = card.url.startsWith('http://') || card.url.startsWith('https://');
                    
                    return isExternalUrl ? (
                      <a href={card.url} className="info-card" key={card.id} target="_blank" rel="noopener noreferrer">
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Open document <i className="fas fa-external-link-alt"></i></p>
                        </div>
                      </a>
                    ) : (
                      <Link href={card.url} className="info-card" key={card.id}>
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Meer informatie <i className="fas fa-arrow-right"></i></p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
            
            {/* Handleiding/naslag sectie */}
            {(activeCategory === 'all' || activeCategory === 'handleiding') && handleidingCards.length > 0 && (
              <>
                <div className="section-divider">
                  <h2><i className="fas fa-book"></i> Handleiding/naslag</h2>
                </div>
                
                <div className="info-cards-grid">
                  {handleidingCards.map(card => {
                    // Check if URL is external
                    const isExternalUrl = card.url.startsWith('http://') || card.url.startsWith('https://');
                    
                    return isExternalUrl ? (
                      <a href={card.url} className="info-card" key={card.id} target="_blank" rel="noopener noreferrer">
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Open document <i className="fas fa-external-link-alt"></i></p>
                        </div>
                      </a>
                    ) : (
                      <Link href={card.url} className="info-card" key={card.id}>
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Meer informatie <i className="fas fa-arrow-right"></i></p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
            
            {/* Factsheets sectie */}
            {(activeCategory === 'all' || activeCategory === 'factsheets') && factsheetsCards.length > 0 && (
              <>
                <div className="section-divider">
                  <h2><i className="fas fa-file-invoice"></i> Factsheets</h2>
                </div>
                
                <div className="info-cards-grid">
                  {factsheetsCards.map(card => {
                    // Check if URL is external
                    const isExternalUrl = card.url.startsWith('http://') || card.url.startsWith('https://');
                    
                    return isExternalUrl ? (
                      <a href={card.url} className="info-card" key={card.id} target="_blank" rel="noopener noreferrer">
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Open document <i className="fas fa-external-link-alt"></i></p>
                        </div>
                      </a>
                    ) : (
                      <Link href={card.url} className="info-card" key={card.id}>
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Meer informatie <i className="fas fa-arrow-right"></i></p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
            
            {/* Formulieren sectie */}
            {(activeCategory === 'all' || activeCategory === 'formulieren') && formulierenCards.length > 0 && (
              <>
                <div className="section-divider">
                  <h2><i className="fas fa-clipboard"></i> Formulieren</h2>
                </div>
                
                <div className="info-cards-grid">
                  {formulierenCards.map(card => {
                    // Check if URL is external
                    const isExternalUrl = card.url.startsWith('http://') || card.url.startsWith('https://');
                    
                    return isExternalUrl ? (
                      <a href={card.url} className="info-card" key={card.id} target="_blank" rel="noopener noreferrer">
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Open document <i className="fas fa-external-link-alt"></i></p>
                        </div>
                      </a>
                    ) : (
                      <Link href={card.url} className="info-card" key={card.id}>
                        <div className="info-card-header">
                          <i className={card.icon}></i>
                          <h3>{card.title}</h3>
                        </div>
                        <div className="info-content">
                          <p>{card.description}</p>
                          <p className="read-more">Meer informatie <i className="fas fa-arrow-right"></i></p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}

            {/* Empty state wanneer er geen resultaten zijn */}
            {filteredCards.length === 0 && (
              <div className="empty-state">
                <i className="fas fa-search"></i>
                <h3>Geen informatie gevonden</h3>
                <p>Probeer andere zoektermen of reset de filters.</p>
                <button className="reset-button" onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}>
                  Filters resetten
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 