import React from 'react';
import { InfoCardDetail } from '../../types';

export const mtbParcoursDetail: InfoCardDetail = {
  id: 'mtb-parcours',
  title: 'Toegang MTB-parcours Zandvoort',
  description: 'Informatie over toegang en aanrijpunten naar het Mountainbikeparcours Zandvoort.',
  icon: 'fas fa-biking',
  category: 'operationeel',
  intro: 'Bij een incident op of rond het MTB-parcours kan de Zandvoortse Reddingsbrigade (ZRB) worden ingeschakeld via de meldkamer. In beide voertuigen (ZVT120 & ZVT130) ligt een sleutel voor toegang tot het afgesloten MTB-parcours.',
  sections: [
    {
      title: 'Toegang tot het Mountainbikeparcours',
      icon: 'fas fa-biking',
      cards: [
        {
          title: 'Bij incident op het MTB-parcours',
          icon: 'fas fa-exclamation-triangle',
          content: (
            <>
              <div className="important-note">
                <p><strong>Bij incident op of rond het MTB-parcours:</strong></p>
                <ul className="info-list alert">
                  <li>De Zandvoortse Reddingsbrigade (ZRB) kan worden ingeschakeld via de meldkamer.</li>
                  <li>In beide voertuigen (ZVT120 & ZVT130) ligt een sleutel voor toegang tot het afgesloten MTB-parcours.</li>
                </ul>
              </div>
            </>
          )
        },
        {
          title: 'Aanrijpunt A (voorkeursroute)',
          icon: 'fas fa-route',
          content: (
            <>
              <div className="route-container primary-route">
                <div className="route-header">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Aanrijpunt A</h4>
                </div>
                <p><strong>Locatie:</strong> Eind van parkeerplaats A, achter de hoofdtribune van het circuit.</p>
                
                <h4>Routebeschrijving:</h4>
                <ol className="info-list numbered">
                  <li>Rij via de hoofdingang van Circuit Zandvoort naar binnen.</li>
                  <li>Voor de tunnel linksaf slaan.</li>
                  <li>Volg de weg achter de hoofdtribune langs.</li>
                  <li>Rijd helemaal door naar het einde van de parkeerplaats.</li>
                </ol>
                <p className="note">Dit is het standaard aanrijpunt bij open toegang.</p>
              </div>
            </>
          )
        },
        {
          title: 'Aanrijpunt C (alternatieve route)',
          icon: 'fas fa-route',
          content: (
            <>
              <div className="route-container alternative-route">
                <div className="route-header">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Aanrijpunt C</h4>
                </div>
                <p><strong>Locatie:</strong> Ingang bij Parking C, naast de slipschool.</p>
                
                <h4>Routebeschrijving:</h4>
                <ol className="info-list numbered">
                  <li>Gebruik de ingang naast de slipschool.</li>
                  <li>Trek een parkeerkaartje bij de slagboom om naar binnen te rijden.</li>
                  <li>Betalen is niet nodig – de slagboom bij de hoofdingang gaat automatisch open bij vertrek via die kant.</li>
                </ol>
                <p className="note">Gebruik deze route als de hoofdingang gesloten is.</p>
              </div>
            </>
          )
        },
        {
          title: 'Sleutel MTB-hekken',
          icon: 'fas fa-key',
          content: (
            <>
              <h4>Sleutel aanwezig in voertuigen:</h4>
              <ul className="info-list checkmark">
                <li>ZVT120</li>
                <li>ZVT130</li>
              </ul>
            </>
          )
        },
        {
          title: 'Contactpersoon circuit',
          icon: 'fas fa-phone-alt',
          content: (
            <>
              <p><strong>Conciërge Circuit Zandvoort:</strong></p>
              <p className="contact-number"><a href="tel:06-31534634">06-31534634</a></p>
            </>
          )
        },
        {
          title: 'Bron Document',
          icon: 'fas fa-file-alt',
          content: (
            <>
              <div className="document-container pdf-document">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>Toegang tot het Mountainbikeparcours Zandvoort</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Gebruik:</strong> Informatie over toegang en aanrijpunten naar het MTB-parcours Zandvoort</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1Qk9kWf57F2wPWlGIve9gX4Bs1fOmKxoN/view" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open Origineel Document
                  </a>
                </div>
              </div>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Deze pagina bevat een samenvatting van de toegangsinformatie. Voor de meest actuele informatie raadpleeg altijd het originele document via bovenstaande link.</p>
              </div>
            </>
          )
        }
      ]
    }
  ]
}; 