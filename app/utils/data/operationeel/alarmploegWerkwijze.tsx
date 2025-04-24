import React from 'react';
import { InfoCardDetail } from '../../types';

export const alarmploegWerkwijzeDetail: InfoCardDetail = {
  id: 'werkwijze-alarmploeg',
  title: 'Alarmploeg & Opgeschaalde Hulpverlening',
  description: 'Beleid, procedures en werkinstructies voor de inzet van de alarmploeg bij acute en opgeschaalde noodsituaties.',
  icon: 'fas fa-bell',
  category: 'operationeel',
  intro: 'De ZRB beschikt over een vrijwillige alarmploeg, 24/7 inzetbaar bij acute of opgeschaalde noodsituaties. Deze pagina beschrijft het beleid, de samenstelling, werkwijze en procedures rond de inzet van de alarmploeg.',
  sections: [
    {
      title: 'Basisinformatie',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Inleiding',
          icon: 'fas fa-compass',
          content: (
            <>
              <p>De ZRB beschikt over een vrijwillige alarmploeg, 24/7 inzetbaar bij acute of opgeschaalde noodsituaties. Deze documenten beschrijven het beleid, de samenstelling, werkwijze en procedures rond de inzet van de alarmploeg.</p>
            </>
          )
        },
        {
          title: 'Missie van de Alarmploeg',
          icon: 'fas fa-bullseye',
          content: (
            <>
              <p>De alarmploeg is ingericht om:</p>
              
              <ul className="info-list checkmark">
                <li>Binnen 15 minuten inzetgereed te zijn vanaf de kazerne of reddingspost</li>
                <li>Zowel mono- als multidisciplinair te kunnen optreden</li>
                <li>Ingezet te worden bij:
                  <ul>
                    <li>Operationele inzet buiten reguliere openingstijden</li>
                    <li>Opschaling vanuit reguliere postbezetting</li>
                    <li>Bijstand buiten Zandvoort (bijv. via de Nationale Reddingsvloot)</li>
                  </ul>
                </li>
              </ul>
            </>
          )
        },
        {
          title: 'Uitgangspunten',
          icon: 'fas fa-cogs',
          content: (
            <>
              <h4>Eisen aan leden:</h4>
              <ul className="info-list checkmark">
                <li>Minimaal 18 jaar oud</li>
                <li>Lid van ZRB</li>
                <li>In het bezit van minimaal het diploma Junior Lifeguard</li>
                <li>Voldaan aan de eisen uit de ZRB-matrix</li>
              </ul>
              
              <h4>Primaire alarmering:</h4>
              <ul className="info-list checkmark">
                <li>Via P2000 (voor mono- en multidisciplinaire inzet)</li>
                <li>Secundaire alarmering mogelijk via WhatsApp 'operationeel'</li>
              </ul>
              
              <h4>Samenstelling alarmploeg (bij volledige inzet):</h4>
              <ul className="info-list checkmark">
                <li><strong>Voertuigenbemanning:</strong> 1 OGS-chauffeur, 1 chauffeur, 2 (junior) lifeguards</li>
                <li><strong>Vaartuigbemanning:</strong> 1 schipper, 1 (junior) lifeguard</li>
                <li><strong>Kazernepost:</strong> 1 lifeguard</li>
                <li><strong>Coördinatie:</strong> 1 senior lifeguard</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Organisatie & Structuur',
      icon: 'fas fa-sitemap',
      cards: [
        {
          title: 'Coördinator & Toewijzing',
          icon: 'fas fa-user-tie',
          content: (
            <>
              <h4>Coördinator Alarmploeg</h4>
              <p>Is verantwoordelijk voor:</p>
              <ul className="info-list checkmark">
                <li>Operationele aansturing</li>
                <li>Selectie & toewijzing van teamleden</li>
                <li>Afstemming met ketenpartners (bijv. NRV)</li>
              </ul>
              
              <h4>Toewijzing</h4>
              <p>Leden worden benoemd door de coördinator, in overleg met postcommandanten en bestuursleden.</p>
            </>
          )
        },
        {
          title: 'Overlegstructuur (koude fase)',
          icon: 'fas fa-users',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Minimaal twee keer per jaar overleg</li>
                <li>Doel: evalueren, voorbereiden en signaleren van impact op teamleden</li>
              </ul>
            </>
          )
        },
        {
          title: 'Terminologie',
          icon: 'fas fa-language',
          content: (
            <>
              <div className="contact-table">
                <table className="info-table">
                  <thead>
                    <tr>
                      <th>Term</th>
                      <th>Betekenis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Acute situatie</td>
                      <td>Acuut optreden nodig (bijv. verdrinking, reanimatie)</td>
                    </tr>
                    <tr>
                      <td>Noodsituatie</td>
                      <td>Dreiging waarbij hulp nodig is (bijv. brand strandtent, overstroming)</td>
                    </tr>
                    <tr>
                      <td>Opgeschaalde hulpverlening</td>
                      <td>Situatie vereist structurele coördinatie boven reguliere inzet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Werkinstructie & Inzetprocedure',
      icon: 'fas fa-tasks',
      cards: [
        {
          title: 'Stap 1: Eerste contact',
          icon: 'fas fa-headset',
          content: (
            <>
              <p>Eerste aanwezige lifeguard (of senior lifeguard) neemt contact op met de meldkamer.</p>
            </>
          )
        },
        {
          title: 'Stap 2: Inzetplan',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <p>De senior lifeguard stelt een inzetplan op:</p>
              <ul className="info-list checkmark">
                <li>Eerste inschatting op basis van de melding</li>
                <li>Taakverdeling onder aanwezige leden</li>
                <li>Plan wordt mondeling gecommuniceerd</li>
              </ul>
            </>
          )
        },
        {
          title: 'Stap 3: Meldkamer & vertrek',
          icon: 'fas fa-broadcast-tower',
          content: (
            <>
              <p>Geen voertuig of vaartuig vertrekt zonder actieve eigen meldkamer.</p>
              <p>Deze meldkamer:</p>
              <ul className="info-list checkmark">
                <li>Functioneert als meldpunt, coördinatie- en informatiecentrum</li>
                <li>Stuurt alle communicatie aan, tenzij anders opgenomen in het inzetplan</li>
              </ul>
            </>
          )
        },
        {
          title: 'Meldkamer & Communicatie',
          icon: 'fas fa-phone-alt',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Alle communicatie verloopt centraal via de eigen meldkamer</li>
                <li>Alleen bij afwijkende afspraken (in inzetplan) kan hiervan worden afgeweken</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Brondocumenten',
      icon: 'fas fa-file-pdf',
      cards: [
        {
          title: 'Documentatie',
          icon: 'fas fa-book',
          content: (
            <>
              <div className="document-container pdf-document">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>Basisdocument Alarmploeg & Opgeschaalde Hulpverlening</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie basisdocument:</strong> 1.0 - 2 januari 2022</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/open?id=1EvlWMQlo17OA3GbOlbxSydxOpgBMPYZ_&usp=drive_copy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open Basisdocument
                  </a>
                </div>
              </div>
              
              <div className="document-container pdf-document mt-4">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>Werkinstructie Inzet Alarmploeg</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie werkinstructie:</strong> 1.0 - 9 februari 2022</p>
                  <p><strong>Versiehouder:</strong> Lars Carree</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1ImOuJKqOhQlViEfEkqDa8m0LX1et1M11/view" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open Werkinstructie
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