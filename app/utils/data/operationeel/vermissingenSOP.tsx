import React from 'react';
import { InfoCardDetail } from '../../types';

export const vermissingenSOPDetail: InfoCardDetail = {
  id: 'vermissingen-sop',
  title: 'SOP WHV 006 – Vermissingen',
  description: 'Standaard Operationele Procedure voor vermissingen op het strand en in recreatiegebieden.',
  icon: 'fas fa-search',
  category: 'operationeel',
  intro: 'Deze Standaard Operationele Procedure (SOP) beschrijft de werkafspraken rond vermissingen op het strand en in recreatiegebieden. Het biedt een duidelijk stappenplan en taakverdeling tussen de Reddingsbrigade en politie om snel en effectief te handelen bij vermissingen.',
  sections: [
    {
      title: 'Documentgegevens',
      icon: 'fas fa-file-alt',
      cards: [
        {
          title: 'SOP WHV 006 – Vermissingen Strand en Recreatiegebieden',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <div className="document-info">
                <p><strong>Naam:</strong> Standaard Operationele Procedure – Werkafspraak Vermissingen strand en recreatiegebieden</p>
                <p><strong>Onderdeel:</strong> WHV – Partners</p>
                <p><strong>Doelgroep:</strong> Operationele reddingsbrigade lifeguards</p>
                <p><strong>Versie:</strong> 1.2</p>
                <p><strong>Datum:</strong> 14 februari 2024</p>
                <p><strong>Status:</strong> Gepubliceerd</p>
                <p><strong>Opstellers:</strong> JK, JZ, MEg</p>
                <p><strong>Herziening:</strong> Jaarlijks</p>
                <p><strong>Contact:</strong> info@reddingsbrigade.nl t.a.v. afdeling Waterhulpverlening</p>
              </div>
              
              <div className="version-history">
                <h4>Vorige versies:</h4>
                <ul className="info-list">
                  <li>1.1 – 23 mei 2023</li>
                </ul>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Achtergrond, Doel en Beleid',
      icon: 'fas fa-bullseye',
      cards: [
        {
          title: 'Achtergrond',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <ul className="info-list">
                <li>Vermissingen betreffen vaak kinderen onder de 13 jaar.</li>
                <li>Oorzaken: drukte op het strand, tijdelijk uit zicht.</li>
                <li>Politie behandelt deze vermissingen als urgent.</li>
                <li>Deze SOP biedt een stappenplan en duidelijke taakverdeling met waterhulpverleningspartners.</li>
              </ul>
            </>
          )
        },
        {
          title: 'Doel',
          icon: 'fas fa-compass',
          content: (
            <>
              <p>Een helder overzicht geven van de werkafspraak bij vermissingen, waarin staat:</p>
              <ul className="info-list">
                <li>Welke stappen de Reddingsbrigade neemt.</li>
                <li>Hoe capaciteit en inzet worden verdeeld tussen brigade en politie.</li>
              </ul>
            </>
          )
        },
        {
          title: 'Beleid',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <p>Samenwerking tussen:</p>
              <ul className="info-list">
                <li>Reddingsbrigade Nederland (RN)</li>
                <li>Koninklijke Nederlandse Redding Maatschappij (KNRM)</li>
                <li>Politie</li>
              </ul>
              <p>Gericht op eenduidige werkwijze en het voorkomen van onnodige opschaling.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Verantwoordelijkheden en Procedure',
      icon: 'fas fa-tasks',
      cards: [
        {
          title: 'Verantwoordelijkheden',
          icon: 'fas fa-user-shield',
          content: (
            <>
              <ul className="info-list">
                <li>Degene die de melding als eerste ontvangt (politie of brigade) is in eerste instantie verantwoordelijk.</li>
                <li>Zodra politie geïnformeerd is, neemt zij de procesverantwoordelijkheid.</li>
                <li>Brigade mag altijd de politie verzoeken de verantwoordelijkheid over te nemen bij twijfel over veiligheid.</li>
                <li>Politie is verplicht dit verzoek op te volgen.</li>
              </ul>
            </>
          )
        },
        {
          title: 'Procedure - Directe acties',
          icon: 'fas fa-bell',
          content: (
            <>
              <h4>Schaal op naar "urgente vermissing" en alarmeer:</h4>
              <ul className="info-list">
                <li>Kustwacht of brandweer bij (mogelijke) watervermissing.</li>
                <li>Politie bij vermisten met:
                  <ul>
                    <li>Verstandelijke/lichamelijke beperking</li>
                    <li>Medische zorgbehoefte</li>
                    <li>Suïcidaal gedrag</li>
                    <li>Onrustwekkende toestand</li>
                  </ul>
                </li>
              </ul>
              
              <h4>Vul intakeformulier volledig in</h4>
              <p>Vraag waar mogelijk een digitale foto.</p>
              <div className="link-button">
                <a href="https://www.reddingsbrigade.nl/StippWebDLL/Resources/Handlers/DownloadBestand.ashx?ID=1000008397" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <i className="fas fa-file-download"></i> Download Intakeformulier
                </a>
              </div>
            </>
          )
        },
        {
          title: 'Procedure - Zoekactie',
          icon: 'fas fa-search',
          content: (
            <>
              <h4>Start zoekactie:</h4>
              <p>Gebruik het tijdstip van laatste waarneming als uitgangspunt.</p>
              
              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-marker">0<br/>min</div>
                  <div className="timeline-content">
                    <p><strong>Start</strong> - Begin zoekactie met beschikbare middelen</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker">30<br/>min</div>
                  <div className="timeline-content">
                    <p><strong>Informeer en overleg</strong> met de politie</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker">60<br/>min</div>
                  <div className="timeline-content">
                    <p><strong>Herbeoordeel</strong> samen met de politie</p>
                    <p>Politie treedt volledig in werking volgens standaard vermissingsprotocol</p>
                    <p>Reddingsbrigade blijft ondersteunen waar nodig</p>
                  </div>
                </div>
              </div>
              
              <h4>Evaluatie en nazorg:</h4>
              <p>Evalueer inzet en bepaal of nazorg nodig is.</p>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Tijden in deze SOP zijn indicatief.</p>
                <p>Bij twijfel over veiligheid of ernst: altijd overdragen aan de politie.</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Referenties en Bijlagen',
      icon: 'fas fa-book',
      cards: [
        {
          title: 'Referenties',
          icon: 'fas fa-link',
          content: (
            <>
              <ul className="info-list">
                <li>
                  Reddingsbrigade Nederland (2023). Vermissingen op het strand en bij recreatieplassen – werkafspraak.
                  <br />
                  <a href="https://bondsinfo.reddingsbrigade.nl/servicedesk/kennisbank/367" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    https://bondsinfo.reddingsbrigade.nl/servicedesk/kennisbank/367
                  </a>
                </li>
                <li>
                  Intakeformulier (PDF-download):
                  <br />
                  <a href="https://www.reddingsbrigade.nl/StippWebDLL/Resources/Handlers/DownloadBestand.ashx?ID=1000008397" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    https://www.reddingsbrigade.nl/StippWebDLL/Resources/Handlers/DownloadBestand.ashx?ID=1000008397
                  </a>
                </li>
              </ul>
            </>
          )
        },
        {
          title: 'Bijlagen',
          icon: 'fas fa-paperclip',
          content: (
            <>
              <ul className="info-list">
                <li>Intakeformulier</li>
                <li>Eventuele stroomschema's en statusformulieren (niet meegeleverd in deze tekst)</li>
              </ul>
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
                <h4>SOP WHV 006 – Vermissingen Strand en Recreatiegebieden</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Gebruik:</strong> Standaard Operationele Procedure voor vermissingen</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1aDjIecyVvuGdV4_fm57tIBpbqjrjvoH9/view" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open Origineel Document
                  </a>
                </div>
              </div>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Deze pagina bevat een samenvatting van de SOP. Voor de meest actuele informatie raadpleeg altijd het originele document via bovenstaande link.</p>
              </div>
            </>
          )
        }
      ]
    }
  ]
}; 