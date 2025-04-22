'use client'

import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import '../styles/pages/inzetvoorstellen.css'

// Interfaces for protocol types
interface Protocol {
  id: string;
  title: string;
  category: string;
  url: string;
}

type CategoryKey = 'ehbo' | 'baderZwemmer' | 'vaartuig' | 'kitesurfer' | 'surfer' | 'vermistAangebracht' | 'dienstverlening' | 'dier';

interface CategoryInfo {
  title: string;
  icon: string;
}

// Protocol data organized by category
const protocolData: Record<CategoryKey, Protocol[]> = {
  ehbo: [
    { id: 'ehbo-waardering', title: 'Waardering EHBO melding', url: 'https://www.reddingsbrigade-meldkamer.nl/Aannemen en waarderen EHBO melding.pdf', category: 'ehbo' },
    { id: 'ehbo-ademhaling', title: 'Ademhalingsproblemen', url: 'https://www.reddingsbrigade-meldkamer.nl/EHBO - ademhalingsproblemen -.pdf', category: 'ehbo' },
    { id: 'ehbo-ademhaling-kind', title: 'Ademhalingsproblemen kind', url: 'https://www.reddingsbrigade-meldkamer.nl/EHBO - ademhalingsproblemen kind -.pdf', category: 'ehbo' },
    { id: 'ehbo-allergie', title: 'Allergische reactie', url: 'https://www.reddingsbrigade-meldkamer.nl/EHBO - allergische reactie -.pdf', category: 'ehbo' },
    { id: 'ehbo-bedelving', title: 'Bedelving', url: 'https://www.reddingsbrigade-meldkamer.nl/EHBO - bedelving -.pdf', category: 'ehbo' },
    { id: 'ehbo-brandwonden', title: 'Brandwonden', url: 'https://www.reddingsbrigade-meldkamer.nl/EHBO - brandwonden -.pdf', category: 'ehbo' },
    { id: 'ehbo-hersenbloeding', title: 'Hersenbloeding', url: 'https://www.reddingsbrigade-meldkamer.nl/EHBO - hersenbloeding -.pdf', category: 'ehbo' },
    { id: 'ehbo-intoxicatie', title: 'Intoxicatie', url: 'https://www.reddingsbrigade-meldkamer.nl/EHBO - intoxicatie -.pdf', category: 'ehbo' },
    { id: 'ehbo-luxatie', title: 'Luxatie / distorsie', url: 'https://www.reddingsbrigade-meldkamer.nl/EHBO - luxatie distorsie -.pdf', category: 'ehbo' },
    { id: 'ehbo-reanimatie', title: 'Reanimatie', url: 'https://www.reddingsbrigade-meldkamer.nl/EHBO - reanimatie -.pdf', category: 'ehbo' },
    { id: 'ehbo-valpartij', title: 'Valpartij', url: 'https://www.reddingsbrigade-meldkamer.nl/EHBO - valpartij -.pdf', category: 'ehbo' },
    { id: 'ehbo-verkeersongeval', title: 'Verkeersongeval', url: 'https://www.reddingsbrigade-meldkamer.nl/EHBO - verkeersongeval -.pdf', category: 'ehbo' }
  ],
  baderZwemmer: [
    { id: 'bader-problemen', title: 'Persoon in problemen', url: 'https://www.reddingsbrigade-meldkamer.nl/Bader zwemmer - in problemen -.pdf', category: 'baderZwemmer' },
    { id: 'bader-vermist', title: 'Persoon vermist', url: 'https://www.reddingsbrigade-meldkamer.nl/Bader zwemmer - vermist -.pdf', category: 'baderZwemmer' },
    { id: 'bader-drenkeling', title: 'Drenkeling', url: 'https://www.reddingsbrigade-meldkamer.nl/Bader zwemmer - drenkeling -.pdf', category: 'baderZwemmer' },
    { id: 'bader-drenkeling-reanimatie', title: 'Drenkeling reanimatie', url: 'https://www.reddingsbrigade-meldkamer.nl/Bader zwemmer - drenkeling - reanimatie.pdf', category: 'baderZwemmer' }
  ],
  vaartuig: [
    { id: 'vaartuig-brand', title: 'Brand / Explosie', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende boot - brand explosie aan boord -.pdf', category: 'vaartuig' },
    { id: 'vaartuig-mob', title: 'Man overboord', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende boot - man overboord -.pdf', category: 'vaartuig' },
    { id: 'vaartuig-noodsignaal', title: 'Noodsignaal waargenomen', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende boot - noodsignaal waargenomen -.pdf', category: 'vaartuig' },
    { id: 'vaartuig-omgeslagen', title: 'Omgeslagen', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende boot - omgeslagen -.pdf', category: 'vaartuig' },
    { id: 'vaartuig-gezonken', title: 'Vaartuig gezonken', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende boot - vaartuig gezonken -.pdf', category: 'vaartuig' }
  ],
  kitesurfer: [
    { id: 'kitesurfer-problemen', title: 'In problemen', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende kitesurfer - in problemen -.pdf', category: 'kitesurfer' },
    { id: 'kitesurfer-gevonden', title: 'Uitrusting gevonden', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende kitesurfer - uitrusting gevonden -.pdf', category: 'kitesurfer' },
    { id: 'kitesurfer-verloren', title: 'Uitrusting verloren', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende kitesurfer - uitrusting verloren -.pdf', category: 'kitesurfer' },
    { id: 'kitesurfer-vermist', title: 'Vermist', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende kitesurfer - vermist -.pdf', category: 'kitesurfer' }
  ],
  surfer: [
    { id: 'surfer-problemen', title: 'In problemen', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende surfer - in problemen -.pdf', category: 'surfer' },
    { id: 'surfer-gevonden', title: 'Uitrusting gevonden', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende surfer - uitrusting gevonden -.pdf', category: 'surfer' },
    { id: 'surfer-verloren', title: 'Uitrusting verloren', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende surfer - uitrusting verloren -.pdf', category: 'surfer' },
    { id: 'surfer-vermist', title: 'Vermist', url: 'https://www.reddingsbrigade-meldkamer.nl/Opvarende surfer - vermist -.pdf', category: 'surfer' }
  ],
  vermistAangebracht: [
    { id: 'vermissing-aangebracht', title: 'Aangebracht', url: 'https://www.reddingsbrigade-meldkamer.nl/Vermissing aangebracht.pdf', category: 'vermistAangebracht' },
    { id: 'vermissing-persoon', title: 'Vermist', url: 'https://www.reddingsbrigade-meldkamer.nl/Vermissing -persoon-.pdf', category: 'vermistAangebracht' }
  ],
  dienstverlening: [
    { id: 'dienst-explosieven', title: 'Aantreffen explosieven', url: 'https://www.reddingsbrigade-meldkamer.nl/Dienstverlening - aantreffen explosieven -.pdf', category: 'dienstverlening' },
    { id: 'dienst-brand-gerucht', title: 'Brand gerucht', url: 'https://www.reddingsbrigade-meldkamer.nl/Dienstverlening - BRAND gerucht -.pdf', category: 'dienstverlening' },
    { id: 'dienst-brand-huisje', title: 'Brand strandhuisje', url: 'https://www.reddingsbrigade-meldkamer.nl/Dienstverlening - BRAND in Strandhuisje.pdf', category: 'dienstverlening' },
    { id: 'dienst-brand-paviljoen', title: 'Brand strandpaviljoen', url: 'https://www.reddingsbrigade-meldkamer.nl/Dienstverlening - BRAND in Strandpaviljoen.pdf', category: 'dienstverlening' },
    { id: 'dienst-lijkvinding-land', title: 'Lijkvinding land', url: 'https://www.reddingsbrigade-meldkamer.nl/Dienstverlening - Stoffelijk overschot aan land -.pdf', category: 'dienstverlening' },
    { id: 'dienst-lijkvinding-water', title: 'Lijkvinding water', url: 'https://www.reddingsbrigade-meldkamer.nl/Dienstverlening - Stoffelijk overschot in het water -.pdf', category: 'dienstverlening' },
    { id: 'dienst-meteo', title: 'Meteo alarm', url: 'https://www.reddingsbrigade-meldkamer.nl/Dienstverlening - METEO extreem weer -.pdf', category: 'dienstverlening' },
    { id: 'dienst-politie', title: 'Politie bijstand', url: 'https://www.reddingsbrigade-meldkamer.nl/Dienstverlening - Politie bijstand -.pdf', category: 'dienstverlening' },
    { id: 'dienst-voertuig', title: 'Voertuig berging', url: 'https://www.reddingsbrigade-meldkamer.nl/Dienstverlening - voertuig berging -.pdf', category: 'dienstverlening' }
  ],
  dier: [
    { id: 'dier-aangebracht', title: 'Aangebracht', url: 'https://www.reddingsbrigade-meldkamer.nl/Dier - aangebracht -.pdf', category: 'dier' },
    { id: 'dier-bruinvis', title: 'Bruinvis', url: 'https://www.reddingsbrigade-meldkamer.nl/Dier - bruinvis dolfijn in problemen -.pdf', category: 'dier' },
    { id: 'dier-dood', title: 'Dood dier', url: 'https://www.reddingsbrigade-meldkamer.nl/Dier - dood -.pdf', category: 'dier' },
    { id: 'dier-zeehond', title: 'Zeehond', url: 'https://www.reddingsbrigade-meldkamer.nl/Dier - zeehond in problemen -.pdf', category: 'dier' }
  ]
};

// Category titles and icons for display
const categoryInfo: Record<CategoryKey, CategoryInfo> = {
  ehbo: { title: "EHBO", icon: "fas fa-first-aid" },
  baderZwemmer: { title: "Bader / Zwemmer", icon: "fas fa-swimmer" },
  vaartuig: { title: "Vaartuig", icon: "fas fa-ship" },
  kitesurfer: { title: "Kitesurfer", icon: "fas fa-wind" },
  surfer: { title: "Surfer", icon: "fas fa-water" },
  vermistAangebracht: { title: "Persoon vermist / aangebracht", icon: "fas fa-search" },
  dienstverlening: { title: "Dienstverlening", icon: "fas fa-hands-helping" },
  dier: { title: "Dier", icon: "fas fa-paw" }
};

export default function InzetvoorstellenPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Create a flat array of all protocols for search
  const allProtocols = Object.entries(protocolData).flatMap(([category, protocols]) => 
    protocols.map(protocol => ({
      ...protocol,
      category
    }))
  );
  
  // Filter protocols based on search term
  const getFilteredProtocols = () => {
    if (!searchTerm.trim()) return null; // Return null when no search term to show all categories
    
    return allProtocols.filter(protocol => 
      protocol.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  const filteredProtocols = getFilteredProtocols();
  
  // Count total protocols for the counter
  const totalProtocols = allProtocols.length;
  
  // Count filtered protocols
  const filteredCount = filteredProtocols ? filteredProtocols.length : totalProtocols;

  return (
    <MainLayout
      hero={{
        title: 'Inzetvoorstellen',
        subtitle: 'Zandvoortse Reddingsbrigade',
      }}
    >
      <section className="content-section">
        <div className="container">
          <div className="inzet-section">
            <div className="inzet-header">
              <i className="fas fa-clipboard-list"></i>
              <h2>Inzetvoorstellen</h2>
            </div>
            <div className="inzet-content">
              <div className="inzet-intro">
                <p>Op deze pagina vind je een verzameling van inzetprotocollen voor verschillende scenario's. 
                Alle protocollen zijn afkomstig van de officiële <a href="https://www.reddingsbrigade-meldkamer.nl/Inzetvoorstellen.html" target="_blank" rel="noopener noreferrer">Reddingsbrigade Meldkamer</a> website. 
                Klik op een protocol om het bijbehorende PDF-document te openen.</p>
              </div>
              
              {/* Search bar */}
              <div className="inzet-search-bar">
                <div className="search-box">
                  <i className="fas fa-search"></i>
                  <input 
                    type="text" 
                    placeholder="Zoek protocol..." 
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
              </div>
              
              {/* Results counter */}
              <div className="results-counter">
                <p>{filteredCount} van {totalProtocols} protocollen</p>
              </div>
              
              {/* Display protocols based on search state */}
              {!filteredProtocols ? (
                // Show all categories when no search term
                Object.entries(protocolData).map(([categoryKey, protocols]) => (
                  <div className="category-container" key={categoryKey}>
                    <div className="category-title">
                      <i className={categoryInfo[categoryKey as CategoryKey].icon}></i>
                      {categoryInfo[categoryKey as CategoryKey].title}
                    </div>
                    <div className="protocols-grid">
                      {protocols.map(protocol => (
                        <a 
                          href={protocol.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`protocol-card ${categoryKey}`}
                          key={protocol.id}
                        >
                          {protocol.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))
              ) : filteredProtocols.length > 0 ? (
                // Group and show filtered protocols by category
                Object.entries(
                  filteredProtocols.reduce<Record<string, Protocol[]>>((acc, protocol) => {
                    if (!acc[protocol.category]) {
                      acc[protocol.category] = [];
                    }
                    acc[protocol.category].push(protocol);
                    return acc;
                  }, {})
                ).map(([categoryKey, protocols]) => (
                  <div className="category-container" key={categoryKey}>
                    <div className="category-title">
                      <i className={categoryInfo[categoryKey as CategoryKey].icon}></i>
                      {categoryInfo[categoryKey as CategoryKey].title}
                    </div>
                    <div className="protocols-grid">
                      {protocols.map(protocol => (
                        <a 
                          href={protocol.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`protocol-card ${categoryKey}`}
                          key={protocol.id}
                        >
                          {protocol.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                // Empty state when no search results
                <div className="empty-state">
                  <i className="fas fa-search"></i>
                  <h3>Geen protocollen gevonden</h3>
                  <p>Probeer een andere zoekterm.</p>
                  <button className="reset-button" onClick={() => setSearchTerm('')}>
                    Zoekterm wissen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 