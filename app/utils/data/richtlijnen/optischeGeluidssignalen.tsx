import React from 'react';
import { InfoCardDetail } from '../../types';

export const optischeGeluidssignalenDetail: InfoCardDetail = {
  id: 'brancherichtlijn-og',
  title: 'Brancherichtlijn Optische- en Geluidssignalen Reddingsbrigade 2024',
  description: 'Richtlijnen voor het gebruik van optische- en geluidssignalen door reddingsbrigade voertuigen bij dringende taken.',
  icon: 'fas fa-siren-on',
  category: 'richtlijnen',
  intro: 'Reddingsbrigade Nederland is een aangewezen hulpverleningsdienst volgens de Regeling optische- en geluidssignalen 2009. Dit betekent dat onder voorwaarden reddingsbrigadechauffeurs optische- en geluidssignalen mogen voeren bij een "dringende taak". Deze brancherichtlijn (inwerkingtreding: 1 juli 2024) is wettelijk verplicht en richt zich op de omstandigheden waaronder deze signalen gebruikt mogen worden.',
  sections: [
    {
      title: 'Algemene Informatie',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Inleiding',
          icon: 'fas fa-paragraph',
          content: (
            <>
              <p>Reddingsbrigade Nederland is een aangewezen hulpverleningsdienst (volgens artikel 1, lid 2, sub k van de Regeling optische- en geluidssignalen 2009). Dit betekent dat onder voorwaarden reddingsbrigadechauffeurs optische- en geluidssignalen mogen voeren bij een 'dringende taak'.</p>
              
              <p>Deze brancherichtlijn is wettelijk verplicht (artikel 3, lid 2 van de regeling) en richt zich op de omstandigheden waaronder deze signalen gebruikt mogen worden. Ondanks de signalen blijven chauffeurs volledig strafrechtelijk verantwoordelijk voor hun rijgedrag.</p>
              
              <div className="document-info">
                <p><strong>Versie vastgesteld:</strong> 17 juni 2024</p>
                <p><strong>Inwerkingtreding:</strong> 1 juli 2024</p>
                <p><strong>Vervangt versie:</strong> 1 oktober 2019</p>
              </div>
            </>
          )
        },
        {
          title: 'Wet- en Regelgeving',
          icon: 'fas fa-gavel',
          content: (
            <>
              <p>De basis ligt in de Regeling optische- en geluidssignalen 2009 en het Reglement verkeersregels en verkeerstekens 1990 (RVV 1990).</p>
              <p>Belangrijke artikelen zijn onder andere:</p>
              
              <ul className="info-list bullet">
                <li><strong>Artikel 29 RVV:</strong> Blauw zwaai-, flits- of knipperlicht en tweetonige hoorn</li>
                <li><strong>Artikel 30 RVV:</strong> Geel of groen licht bij waarschuwingsdoeleinden</li>
                <li><strong>Artikel 50 RVV:</strong> Weggebruikers moeten voorrangsvoertuigen voorrang verlenen</li>
              </ul>
              
              <div className="external-links">
                <p><strong>Relevante bronnen:</strong></p>
                <ul className="info-list link-list">
                  <li>
                    <a href="https://www.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Reddingsbrigade Nederland
                    </a>
                  </li>
                  <li>
                    <a href="https://wetten.overheid.nl/BWBR0006622/2024-06-19" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Wegenverkeerswet 1994
                    </a>
                  </li>
                  <li>
                    <a href="https://wetten.overheid.nl/BWBR0025357/2021-01-05" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Regeling optische- en geluidssignalen 2009
                    </a>
                  </li>
                  <li>
                    <a href="https://wetten.overheid.nl/BWBR0004825/2024-07-01" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Reglement verkeersregels en verkeerstekens 1990 (RVV 1990)
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Toepassingen en Voorwaarden',
      icon: 'fas fa-clipboard-list',
      cards: [
        {
          title: 'Toepassingsbereik en Aanwijzing',
          icon: 'fas fa-car-side',
          content: (
            <>
              <ul className="info-list info">
                <li>Geldt voor reddingsbrigadevoertuigen bij 'dringende taak'</li>
                <li>Ook van toepassing bij opleidingen en strandritten</li>
                <li>Per 1 januari 2025 wordt aanwijzing per brigade gedaan i.p.v. generiek</li>
                <li>Besturen wijzen schriftelijk bevoegde chauffeurs aan en houden een register bij</li>
              </ul>
            </>
          )
        },
        {
          title: 'Dringende Taak & Prioritering',
          icon: 'fas fa-exclamation-triangle',
          content: (
            <>
              <div className="important-note">
                <p><strong>Wat is een 'dringende taak'?</strong></p>
                <ul className="info-list bullet">
                  <li>Levensbedreigende situatie voor mensen</li>
                  <li>Voorkomen van levensbedreiging of ernstige schade aan gebouwen/goederen</li>
                </ul>
              </div>
              
              <div className="priority-levels">
                <h4>Urgentieniveaus:</h4>
                <div className="priority-item priority-1">
                  <h5>Prioriteit 1</h5>
                  <p>Dringende taak – met toestemming gebruik van signalen</p>
                </div>
                <div className="priority-item priority-2">
                  <h5>Prioriteit 2</h5>
                  <p>Snelle reactie nodig, maar geen directe levensbedreiging – géén signalen tenzij omgezet</p>
                </div>
                <div className="priority-item priority-3">
                  <h5>Prioriteit 3</h5>
                  <p>Geen spoed – regulier verkeer, zonder signalen</p>
                </div>
              </div>
            </>
          )
        },
        {
          title: 'Toestemming en Registratie',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <ul className="info-list info">
                <li>Toestemming voor signalen via centralist van centrale post of meldkamer</li>
                <li>Alleen bij prioriteit 1</li>
                <li>Bij wijziging in de situatie: signalen uitschakelen en gewoon verkeer hervatten</li>
                <li>Registratie van inzet en toestemming verplicht</li>
              </ul>
            </>
          )
        },
        {
          title: 'Overige Signalen',
          icon: 'fas fa-lightbulb',
          content: (
            <>
              <p>Naast blauw licht ook mogelijk:</p>
              
              <ul className="info-list bullet">
                <li><strong>Geel zwaai-/flitslicht:</strong> bij risico dat voertuig niet tijdig wordt opgemerkt</li>
                <li><strong>Knipperende koplampen:</strong> alleen overdag</li>
                <li><strong>Groen licht:</strong> niet van toepassing op reddingsbrigades</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Gedragscode & Opleiding',
      icon: 'fas fa-user-shield',
      cards: [
        {
          title: 'Gedragscode (Veilig Rijgedrag)',
          icon: 'fas fa-road',
          content: (
            <>
              <div className="important-note">
                <p><strong>Belangrijkste richtlijnen:</strong></p>
                <ul className="info-list checkmark">
                  <li>Voorspelbaarheid en veiligheid gaan boven snelheid</li>
                  <li>Bij kruispunten: altijd voorzichtig en indien nodig stoppen</li>
                  <li>Rood licht: langzaam (max. 20 km/u), niet door brug of spoor</li>
                  <li>Vluchtstrook: max. 50 km/u</li>
                  <li>Snelheid op rijbaan: max. 40 km/u boven toegestane limiet</li>
                  <li>Tegen verkeer inrijden: alleen bij noodzaak, met zicht & controle</li>
                  <li>Strand, duin, bos: rekening houden met recreanten en natuur</li>
                  <li>Met trailer: max. +20 km/u bij prioriteit 1, normaal 90 km/u</li>
                  <li>Slachtoffervervoer: snelheid in overleg met ambulancepersoneel</li>
                </ul>
              </div>
            </>
          )
        },
        {
          title: 'Opleiding, Bekwaamheid en Bijscholing',
          icon: 'fas fa-graduation-cap',
          content: (
            <>
              <p>Opleiding via reddingsbrigade of Reddingsbrigade Nederland</p>
              
              <div className="requirements-box">
                <h4>Eisen:</h4>
                <ul className="info-list checkmark">
                  <li>Rijbewijs B (min. 1 jaar)</li>
                  <li>Diploma's: Lifeguard & Lifeguard Chauffeur</li>
                  <li>Proeve van bekwaamheid O&G</li>
                  <li>EHBO-diploma</li>
                  <li>Periodieke bijscholing vereist</li>
                </ul>
              </div>
            </>
          )
        },
        {
          title: 'Afstemming en Inwerkingtreding',
          icon: 'fas fa-calendar-check',
          content: (
            <>
              <ul className="info-list info">
                <li>Afgestemd op IFV-richtlijnen 2015</li>
                <li>Geldt voor alle aangesloten reddingsbrigades</li>
                <li>Inwerking per 1 juli 2024</li>
              </ul>
              
              <div className="external-links">
                <p><strong>IFV-document:</strong></p>
                <ul className="info-list link-list">
                  <li>
                    <a href="https://archief.nipv.nl/wp-content/uploads/sites/2/2022/03/20151218-IFV-Brancherichtlijn-gezamenlijke-tekstdelen-inclusief-Nota-van-toelichting.pdf" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Brancherichtlijn gezamenlijke tekstdelen IFV (PDF)
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )
        },
        {
          title: 'Origineel Document',
          icon: 'fas fa-file-pdf',
          content: (
            <>
              <div className="document-container pdf-document">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>Brancherichtlijn Optische- en Geluidssignalen Reddingsbrigade 2024</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie vastgesteld:</strong> 17 juni 2024</p>
                  <p><strong>Inwerkingtreding:</strong> 1 juli 2024</p>
                  <p><strong>Vervangt versie:</strong> 1 oktober 2019</p>
                </div>
                
                <div className="button-container">
                  <a href="https://bondsinfo.reddingsbrigade.nl/servicedesk/docs/brancherichtlijn_o_g_rb_2024.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open Origineel Document
                  </a>
                </div>
              </div>
            </>
          )
        }
      ]
    }
  ]
}; 