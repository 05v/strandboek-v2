'use client'

import { useState, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import '../styles/pages/documenten.css'

// Document data interface
interface Document {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  type: 'pdf' | 'word' | 'link';
}

// Document data - moved outside component to prevent recreation on each render
const documents: Document[] = [
  // Reddingsbrigade categorie
  
  {
    id: 'brancherichtlijn-og',
    title: 'Brancherichtlijn O&G 2013',
    description: 'Officiële brancherichtlijn voor operationele procedures.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/brancherichtlijn_o_g2013.pdf',
    category: 'reddingsbrigade',
    type: 'pdf'
  },
  {
    id: 'calamiteitenplan',
    title: 'Calamiteitenplan',
    description: 'Protocol voor handelen bij calamiteiten en grote incidenten.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Calamiteitenplan%202.1.pdf',
    category: 'reddingsbrigade',
    type: 'pdf'
  },
  {
    id: 'aanname-melding',
    title: 'Aanname van een melding',
    description: 'Procedure voor het aannemen en verwerken van meldingen.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Aanname%20van%20een%20melding.pdf',
    category: 'reddingsbrigade',
    type: 'pdf'
  },
  {
    id: 'registratie-incident',
    title: 'Registratie incident',
    description: 'Formulieren en richtlijnen voor incidentregistratie.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/REGISTRATIE%20INCIDENT.pdf',
    category: 'reddingsbrigade',
    type: 'pdf'
  },
  {
    id: 'telefoonboek-kustbrigades',
    title: 'Telefoonboek kustbrigades',
    description: 'Contactgegevens van alle kustbrigades in Nederland.',
    url: 'http://bondsinfo.reddingsbrigade.nl/overredned/reddingsbrigades',
    category: 'reddingsbrigade',
    type: 'link'
  },
  
  // EHBO categorie
  {
    id: 'brandwondenprotocol',
    title: 'Brandwondenprotocol',
    description: 'Protocol voor eerste hulp bij brandwonden.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Brandwondenprotocol%202010[1].pdf',
    category: 'ehbo',
    type: 'pdf'
  },
  {
    id: 'doorverwijzing-seh',
    title: 'Doorverwijzing SEH / HAP',
    description: 'Richtlijnen voor doorverwijzing naar spoedeisende hulp of huisartsenpost.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Doorverwijzing%20naar%20ziekenhuis%202016.pdf',
    category: 'ehbo',
    type: 'pdf'
  },
  {
    id: 'infectieziekten',
    title: 'Infectieziekten',
    description: 'Informatie over infectieziekten en voorzorgsmaatregelen.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/infectieziekten2002.pdf',
    category: 'ehbo',
    type: 'pdf'
  },
  {
    id: 'overplaatsingsformulier-brandwonden',
    title: 'Overplaatsingsformulier Brandwonden',
    description: 'Formulier voor overplaatsing van patiënten met brandwonden.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Overplaatsingsformulier%20brandwondenpatienten[1].pdf',
    category: 'ehbo',
    type: 'pdf'
  },
  {
    id: 'drugs-info',
    title: 'Drugs info',
    description: 'Informatiedocument over drugsherkenning en eerste hulp.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/drugs%20info.pdf',
    category: 'ehbo',
    type: 'pdf'
  },
  
  // Water categorie
  {
    id: 'inzetprotocol-kustwacht',
    title: 'Inzetprotocol Kustwacht',
    description: 'Protocol voor samenwerking met Kustwachtcentrum.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Inzetprotocol%20RB%20en%20KWC%20Kustwachtgebied%20versie%2005a.pdf',
    category: 'water',
    type: 'pdf'
  },
  {
    id: 'hulp-zeehonden',
    title: 'Hulp aan Zeehonden',
    description: 'Richtlijnen voor het verlenen van hulp aan zeehonden op het strand.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Eerste%20hulp%20aan%20zeehonden%20door%20reddingsbrigades.pdf',
    category: 'water',
    type: 'pdf'
  },
  {
    id: 'registratie-kadaver',
    title: 'Registratie kadaver zoogdier',
    description: 'Procedure voor registratie van kadavers van zeezoogdieren.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Registratiekadaverszeezoogdierenbriefgemeenten_VERSTUURD241110.pdf',
    category: 'water',
    type: 'pdf'
  },
  
  // Land categorie
  {
    id: 'explosievenkaart',
    title: 'Explosievenkaart',
    description: 'Informatie over explosievenherkenning en veiligheidsmaatregelen.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/explosieven.pdf',
    category: 'land',
    type: 'pdf'
  },
  {
    id: 'gevaarlijke-stoffen',
    title: 'Gevaarlijke stoffen',
    description: 'Overzicht van etikettering van gevaarlijke stoffen.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/etiketten%20gevaarlijke%20stoffen.pdf',
    category: 'land',
    type: 'pdf'
  },
  {
    id: 'herkennen-gevaarlijke-stoffen',
    title: 'Herkennen van Gevaarlijke stoffen',
    description: 'Handleiding voor het herkennen van gevaarlijke stoffen.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Herkennen%20van%20gevaarlijke%20stoffen.pdf',
    category: 'land',
    type: 'pdf'
  },
  {
    id: 'incident-management',
    title: 'Incident management',
    description: 'Protocol voor incident management op de openbare weg.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Incident%20management%20openbare%20weg.pdf',
    category: 'land',
    type: 'pdf'
  },
  
  // Overige categorie
  {
    id: 'alarmeringskaart',
    title: 'Alarmeringskaart',
    description: 'Overzicht van alarmeringsprocedures en contactnummers.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Alarmeringskaart.pdf',
    category: 'overige',
    type: 'pdf'
  },
  {
    id: 'protocol-blauwe-vlag',
    title: 'Protocol Blauwe vlag',
    description: 'Leidraad voor Blauwe Vlag strandcriteria.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Leidraad_Blauwe_Vlag_Strandcriteria_2011%20(1).pdf',
    category: 'overige',
    type: 'pdf'
  },
  {
    id: 'informatie-afzetlinten',
    title: 'Informatie afzetlinten',
    description: 'Informatie over verschillende afzetlinten en hun gebruik.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/infoafzetlinten.pdf',
    category: 'overige',
    type: 'pdf'
  },
  {
    id: 'inzetcriteria-mmt',
    title: 'Inzetcriteria MMT',
    description: 'Criteria voor inzet van Mobiel Medisch Team.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Inzet-_en_cancelcriteria_MMT_-_LNAZ-AZN.pdf',
    category: 'overige',
    type: 'pdf'
  },
  {
    id: 'landingsplaats-mmt',
    title: 'Landingsplaats MMT',
    description: 'Informatie over landingsplaatsen voor het Mobiel Medisch Team.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Landingsplaats%20Mobiel%20Medisch%20Team.pdf',
    category: 'overige',
    type: 'pdf'
  },
  {
    id: 'registratie-spoedrit',
    title: 'Registratie Spoedrit',
    description: 'Formulier voor registratie van spoedeisende ritten met optische en geluidssignalen.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Registratie%20spoedrit%20met%20OenG.docx',
    category: 'overige',
    type: 'word'
  },
  {
    id: 'slachtoffer-registratie',
    title: 'Slachtoffer registratie',
    description: 'Formulier voor registratie van slachtoffers bij incidenten.',
    url: 'https://www.reddingsbrigade-meldkamer.nl/Slachtoffer%20registratie%20formulier-%20print%20versie%202.2docx.pdf',
    category: 'overige',
    type: 'pdf'
  }
];

export default function DocumentenPage() {
  // State
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>(documents);

  // Filter documents when active category or search term changes
  useEffect(() => {
    let filtered = [...documents];
    
    // Apply category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(doc => doc.category === activeCategory);
    }
    
    // Apply search filter if there is a search term
    if (searchTerm.trim() !== '') {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(doc => 
        doc.title.toLowerCase().includes(searchLower) || 
        doc.description.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredDocuments(filtered);
  }, [activeCategory, searchTerm]);

  // Function to get icon based on document type
  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return 'fas fa-file-pdf';
      case 'word':
        return 'fas fa-file-word';
      case 'link':
        return 'fas fa-link';
      default:
        return 'fas fa-file';
    }
  };

  // Function to clear all filters
  const resetFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
  };

  return (
    <MainLayout
      hero={{
        title: 'Documenten',
        subtitle: 'Alle documenten en protocollen voor de Reddingsbrigade',
      }}
    >
      <section className="content-section">
        <div className="container">
          <div className="documents-intro">
            <h2 className="section-title">
              <i className="fas fa-file-alt"></i>
              <span>Documentenbibliotheek</span>
            </h2>
            <p className="section-intro">
              Hieronder vind je een georganiseerd overzicht van alle belangrijke documenten, protocollen, en richtlijnen voor de Reddingsbrigade.
              De documenten zijn ingedeeld in categorieën voor eenvoudige toegang. Klik op een document om het te openen.
            </p>
          </div>

          {/* Search bar */}
          <div className="document-search-bar">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input 
                type="text" 
                placeholder="Zoek document..." 
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

          {/* Document categories tabs */}
          <div className="document-categories">
            <div className="category-tabs">
              <button 
                className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`} 
                onClick={() => setActiveCategory('all')}
              >
                Alle documenten
              </button>
              <button 
                className={`category-tab ${activeCategory === 'reddingsbrigade' ? 'active' : ''}`} 
                data-category="reddingsbrigade"
                onClick={() => setActiveCategory('reddingsbrigade')}
              >
                Reddingsbrigade
              </button>
              <button 
                className={`category-tab ${activeCategory === 'ehbo' ? 'active' : ''}`} 
                data-category="ehbo"
                onClick={() => setActiveCategory('ehbo')}
              >
                EHBO
              </button>
              <button 
                className={`category-tab ${activeCategory === 'water' ? 'active' : ''}`} 
                data-category="water"
                onClick={() => setActiveCategory('water')}
              >
                Water
              </button>
              <button 
                className={`category-tab ${activeCategory === 'land' ? 'active' : ''}`} 
                data-category="land"
                onClick={() => setActiveCategory('land')}
              >
                Land
              </button>
              <button 
                className={`category-tab ${activeCategory === 'overige' ? 'active' : ''}`} 
                data-category="overige"
                onClick={() => setActiveCategory('overige')}
              >
                Overige
              </button>
            </div>
          </div>

          {/* Results counter */}
          <div className="results-counter">
            <p>{filteredDocuments.length} van {documents.length} documenten</p>
          </div>

          {/* Documents grid */}
          {filteredDocuments.length > 0 ? (
            <div className="documents-grid">
              {filteredDocuments.map(doc => (
                <div className="document-item" key={doc.id}>
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="document-card" data-category={doc.category}>
                    <div className="document-icon">
                      <i className={getDocumentIcon(doc.type)}></i>
                    </div>
                    <div className="document-info">
                      <h3>{doc.title}</h3>
                      <p className="document-description">{doc.description}</p>
                      <span className={`document-category ${doc.category}`}>{doc.category}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ) : (
            // Empty state when no results
            <div className="empty-state">
              <i className="fas fa-search"></i>
              <h3>Geen documenten gevonden</h3>
              <p>Probeer een andere zoekterm of categorie.</p>
              <button className="reset-button" onClick={resetFilters}>
                Filters resetten
              </button>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
} 