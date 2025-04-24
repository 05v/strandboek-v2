import React from 'react';
import { InfoCardDetail } from '../../types';

export const inzetprotocolRBKNRMDetail: InfoCardDetail = {
  id: 'inzetprotocol-rb-knrm',
  title: 'Inzetprotocol Reddingsbrigades en KNRM Lifeguards',
  description: 'Protocol voor alarmering en samenwerking tussen Kustwachtcentrum, Reddingsbrigades en KNRM Lifeguards bij incidenten aan de Nederlandse kust.',
  icon: 'fas fa-life-ring',
  category: 'operationeel',
  intro: 'Dit protocol regelt de alarmering en samenwerking tussen het Kustwachtcentrum (KWC), Reddingsbrigades (via Reddingsbrigade Nederland, RN) en KNRM Lifeguards voor incidenten op en nabij de Nederlandse kust.',
  sections: [
    {
      title: 'Basisinformatie Protocol',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Doel en Toepassing',
          icon: 'fas fa-bullseye',
          content: (
            <>
              <p>Het protocol regelt de alarmering en samenwerking tussen het Kustwachtcentrum (KWC), Reddingsbrigades (via Reddingsbrigade Nederland, RN) en KNRM Lifeguards voor incidenten op en nabij de Nederlandse kust.</p>
              
              <p>Het betreft:</p>
              <ul className="info-list checkmark">
                <li>Toezicht door reddingsbrigades op stranden</li>
                <li>Alarmering bij watergerelateerde incidenten (tot 1 km uit de kust)</li>
                <li>Inzet van alarmploegen buiten reguliere bezettingstijden</li>
                <li>Samenwerking met KNRM Reddingstations</li>
              </ul>
            </>
          )
        },
        {
          title: 'Samenwerkende Partners',
          icon: 'fas fa-handshake',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Kustwachtcentrum (KWC)</li>
                <li>Reddingsbrigade Nederland (RN)</li>
                <li>KNRM (Reddingstations en Lifeguards)</li>
              </ul>
            </>
          )
        },
        {
          title: 'Evaluatie & Aandachtspunten',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <p>Jaarlijkse evaluatie van de samenwerking en inzet. In 2023 o.a. aandacht voor:</p>
              
              <ul className="info-list checkmark">
                <li>In-/uitmelden</li>
                <li>Correcte werkwijze alarmering (pagers, geen telefoon)</li>
                <li>Betere registratie van incidenten en leermomenten</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Inzet & Alarmering',
      icon: 'fas fa-bell',
      cards: [
        {
          title: 'Wanneer wordt gealarmeerd?',
          icon: 'fas fa-question-circle',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Reddingsbrigade is ingemeld via <a href="https://www.strandveilig.nl" target="_blank" rel="noopener noreferrer">www.strandveilig.nl</a> of telefonisch/marifoon</li>
                <li>Alarmploegen zijn 24/7 beschikbaar (mits ingericht)</li>
                <li>Bloktijden: vaste periodes met gegarandeerde bezetting</li>
              </ul>
            </>
          )
        },
        {
          title: 'Waarvoor wordt gealarmeerd?',
          icon: 'fas fa-exclamation-triangle',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Incidenten tot 1 km uit de kust: zwemmer in problemen, afgedreven voorwerpen, etc.</li>
                <li>EHBO-gevallen op strand: via de regionale meldkamer</li>
                <li>Burenhulp: brigades ondersteunen elkaar bij nood</li>
              </ul>
            </>
          )
        },
        {
          title: 'Hoe wordt gealarmeerd?',
          icon: 'fas fa-broadcast-tower',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Via pagers (met capcodes van zowel meldkamer als KWC)</li>
                <li>Gebruik van systeem Vision door KWC</li>
                <li>Vaste alarmeringsteksten en afkortingen zoals:
                  <ul>
                    <li>ZVTrbs = Zandvoort, strandploeg</li>
                    <li>NAZrba = Noordwijk, alarmploeg</li>
                    <li>VLI = KNRM Vlieland</li>
                  </ul>
                </li>
              </ul>
              
              <p><strong>Bij alarm:</strong> binnen 2 minuten contact opnemen met KWC via marifoonkanaal 16 of telefoon: <a href="tel:0223-542300">0223-542300</a> (bij geen gehoor: <a href="tel:0900-0111">0900-0111</a>)</p>
            </>
          )
        },
        {
          title: 'Prioriteitcodes',
          icon: 'fas fa-sort-numeric-down',
          content: (
            <>
              <ul className="info-list">
                <li><strong>PRIO 1:</strong> Levensbedreigend of gevaar voor schade – directe inzet KNRM + Reddingsbrigade</li>
                <li><strong>PRIO 2:</strong> Niet direct levensbedreigend, wel snelle actie nodig</li>
                <li><strong>PRIO 3:</strong> Oefening, afmelding, waarschuwen, etc.</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Communicatie & Voorwaarden',
      icon: 'fas fa-comments',
      cards: [
        {
          title: 'Communicatie & Statussen',
          icon: 'fas fa-exchange-alt',
          content: (
            <>
              <p><strong>Statusupdates aan KWC:</strong></p>
              <ul className="info-list">
                <li><strong>Status 1:</strong> Onderweg</li>
                <li><strong>Status 2:</strong> Ter plaatse</li>
                <li><strong>Status 3:</strong> Afgehandeld</li>
              </ul>
              
              <p>Tijdens inzet: SitRep (situatierapporten) om de 15 minuten</p>
              <p>Afmelden na afloop via marifoon of telefoon</p>
            </>
          )
        },
        {
          title: 'Voorwaarden voor deelname',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <p>Reddingsbrigades moeten:</p>
              <ul className="info-list checkmark">
                <li>Structureel toezicht houden in kustgebied</li>
                <li>Voldoen aan de eisen in dit protocol</li>
              </ul>
              
              <p><strong>Wekelijks proefalarm (capcode 1735000):</strong> elke woensdag ±18:30</p>
            </>
          )
        },
        {
          title: 'Kwaliteit & Audits',
          icon: 'fas fa-certificate',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Zomerwerkbezoeken door Kustwacht: controle op bezetting, materieel, communicatie, veiligheid</li>
                <li>RN en KNRM voeren audits uit op het systeem en evalueren samen met het KWC</li>
              </ul>
            </>
          )
        },
        {
          title: 'Quickguide',
          icon: 'fas fa-file-alt',
          content: (
            <>
              <ul className="info-list">
                <li><strong>Inmelden:</strong> via <a href="https://strandveilig.nl" target="_blank" rel="noopener noreferrer">strandveilig.nl</a> of telefoon/marifoon</li>
                <li><strong>Uitmelden:</strong> idem bij dienstafsluiting</li>
                <li><strong>Reactietijd:</strong>
                  <ul>
                    <li>Strandploeg: 2 minuten</li>
                    <li>Alarmploeg: 10 minuten</li>
                  </ul>
                </li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Contactgegevens & Document',
      icon: 'fas fa-phone-alt',
      cards: [
        {
          title: 'Persvoorlichting',
          icon: 'fas fa-newspaper',
          content: (
            <>
              <p>Alleen in overleg tussen:</p>
              <ul className="info-list checkmark">
                <li>Betrokken reddingsbrigade</li>
                <li>Reddingsbrigade Nederland</li>
                <li>KNRM</li>
                <li>Kustwachtcentrum</li>
              </ul>
            </>
          )
        },
        {
          title: 'Contactgegevens',
          icon: 'fas fa-address-card',
          content: (
            <>
              <div className="contact-table">
                <table className="info-table">
                  <thead>
                    <tr>
                      <th>Organisatie</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reddingsbrigade Nederland</td>
                      <td>
                        <p><i className="fas fa-envelope"></i> <a href="mailto:info@reddingsbrigade.nl">info@reddingsbrigade.nl</a></p>
                        <p><i className="fas fa-phone"></i> <a href="tel:06-12392283">06-12392283</a> (Operationeel Coördinator)</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Kustwachtcentrum</td>
                      <td>
                        <p><i className="fas fa-phone"></i> <a href="tel:0223-542300">0223-542300</a></p>
                      </td>
                    </tr>
                    <tr>
                      <td>KNRM Lifeguards</td>
                      <td>
                        <p><i className="fas fa-mobile-alt"></i> <a href="tel:06-10703411">06-10703411</a> (Coördinator)</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )
        },
        {
          title: 'Brondocument',
          icon: 'fas fa-file-pdf',
          content: (
            <>
              <div className="document-container pdf-document">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>Inzetprotocol Reddingsbrigades en KNRM Lifeguards</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie:</strong> 1.1 – 2023</p>
                  <p><strong>Opgesteld door:</strong> Kustwachtcentrum, Reddingsbrigade Nederland, KNRM</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/open?id=1a0Gf_mcOS4Ll6h7UWyedAx9T0aKdwO3-&usp=drive_copy" 
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