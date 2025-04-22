import React from 'react';
import { InfoCardDetail } from '../../types';

export const helikopterSOPDetail: InfoCardDetail = {
  id: 'helikopter-sop',
  title: 'SOP WHV 005 – Kustwachthelikopter',
  description: 'Werkafspraak voor landing Kustwachthelikopter Bristow SAR op het strand.',
  icon: 'fas fa-helicopter',
  category: 'operationeel',
  intro: 'Deze Standaard Operationele Procedure (SOP) beschrijft de werkafspraken rond de landing van de Kustwachthelikopter van Bristow SAR. Het biedt een duidelijk stappenplan voor veilige en efficiënte samenwerking tussen reddingsbrigades en de Kustwachthelikopter.',
  sections: [
    {
      title: 'Documentgegevens',
      icon: 'fas fa-file-alt',
      cards: [
        {
          title: 'SOP WHV 005 – Werkafspraak Landing Kustwachthelikopter',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <div className="document-info">
                <p><strong>Naam:</strong> Werkafspraak landing Kustwachthelikopter – Bristow SAR</p>
                <p><strong>Onderdeel van:</strong> WHV – Partners</p>
                <p><strong>Doelgroep:</strong> (Kust)reddingsbrigade lifeguards</p>
                <p><strong>Versie:</strong> 1.1</p>
                <p><strong>Datum:</strong> 14 februari 2024</p>
                <p><strong>Status:</strong> Gepubliceerd</p>
                <p><strong>Opstellers:</strong> JK, JZ, TdJ, MEg</p>
                <p><strong>Herziening:</strong> Bij wijziging afspraken met Bristow SAR</p>
                <p><strong>Contact:</strong> info@reddingsbrigade.nl t.a.v. afdeling Waterhulpverlening</p>
              </div>
              
              <div className="version-history">
                <h4>Wijzigingshistorie:</h4>
                <ul className="info-list">
                  <li>1.0 – 22 maart 2023 (conceptversie)</li>
                  <li>1.1 – 14 februari 2024 (herzien)</li>
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
              <p>De Kustwachthelikopter van Bristow SAR wordt ingezet bij:</p>
              <ul className="info-list">
                <li>Redding & transport van drenkelingen</li>
                <li>Waterhulpverlening, zoekacties, overstromingen</li>
                <li>Onbereikbare locaties & grootschalige incidenten</li>
              </ul>
              
              <p>Helikopters zijn uitgerust met o.a.:</p>
              <ul className="info-list">
                <li>Warmtebeeldcamera, zoeklicht, dubbele hoist, search radar</li>
              </ul>
              
              <p>Bemanning: 2 piloten, 1 winch operator, 1 winchman, 1 SAR-verpleegkundige</p>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Downwash van helikopter kan gevaarlijk zijn (tot windkracht 12). Zorg voor goede voorbereiding.</p>
              </div>
            </>
          )
        },
        {
          title: 'Doel',
          icon: 'fas fa-compass',
          content: (
            <>
              <p>Een duidelijk protocol beschrijven voor veilige en efficiënte samenwerking tussen reddingsbrigades en de Kustwachthelikopter van Bristow SAR.</p>
            </>
          )
        },
        {
          title: 'Beleid',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <p>Werkafspraak opgesteld tussen Reddingsbrigade Nederland en Bristow SAR.</p>
              <p>Doel: schade voorkomen, risico's vermijden, veiligheid waarborgen.</p>
            </>
          )
        },
        {
          title: 'Verantwoordelijkheden',
          icon: 'fas fa-user-shield',
          content: (
            <>
              <ul className="info-list">
                <li><strong>Kustwachtcentrum:</strong> verantwoordelijk voor inzet helikopter.</li>
                <li><strong>Piloot:</strong> beslist over landingslocatie.</li>
                <li><strong>Reddingsbrigade:</strong> ondersteunt, voert werkafspraak correct uit en communiceert met partners.</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Procedure',
      icon: 'fas fa-helicopter',
      cards: [
        {
          title: '1. Communicatie',
          icon: 'fas fa-broadcast-tower',
          content: (
            <>
              <p>Stem communicatiemiddel af met de Kustwacht:</p>
              <ul className="info-list">
                <li>RedNed-kanalen, marifoon, C2000, telefoon</li>
              </ul>
            </>
          )
        },
        {
          title: '2. Landingslocatie',
          icon: 'fas fa-map-marker-alt',
          content: (
            <>
              <p><strong>Piloot bepaalt locatie</strong></p>
              <p>Landingsruimte vrijmaken:</p>
              <ul className="info-list">
                <li>Minimaal 100 meter afstand in alle richtingen</li>
                <li>Materialen vastzetten, deuren sluiten, mensen laten afwenden en schrap zetten</li>
                <li>Geen afzetlint gebruiken</li>
              </ul>
              <p>Als voldoende brigadeleden aanwezig: beman de hoeken van de landingsplek</p>
            </>
          )
        },
        {
          title: '3. Strandbezoekers informeren',
          icon: 'fas fa-bullhorn',
          content: (
            <>
              <p>Met megafoon strandbezoekers informeren:</p>
              <ul className="info-list">
                <li><strong>Recreanten:</strong> parasols inklappen, spullen opruimen, kinderen onder toezicht</li>
                <li><strong>Ruiters:</strong> afstappen, paarden wegleiden</li>
                <li><strong>Hondenbezitters:</strong> hond aanlijnen en verwijderen</li>
                <li><strong>(Kite)surfers:</strong> stoppen en afstand houden</li>
                <li><strong>Drone/vliegeraars:</strong> vlieger binnenhalen, drone landen</li>
              </ul>
            </>
          )
        },
        {
          title: '4. Landing',
          icon: 'fas fa-plane-arrival',
          content: (
            <>
              <ul className="info-list">
                <li>Helikopter landt zoveel mogelijk tegen de wind in</li>
                <li>Vanaf 30 meter hoogte voelbare downwash → kan oplopen tot windkracht 12</li>
                <li>Sta met rug naar helikopter bij landing (tegen zand in ogen)</li>
              </ul>
              <div className="important-note">
                <p><strong>Let op:</strong> De downwash van een helikopter kan zeer krachtig zijn en gevaar opleveren voor personen en losliggende objecten!</p>
              </div>
            </>
          )
        },
        {
          title: '5. Benaderen helikopter',
          icon: 'fas fa-walking',
          content: (
            <>
              <div className="important-note">
                <p><strong>Let op:</strong> Rotors blijven vaak draaien na landing!</p>
              </div>
              <ul className="info-list">
                <li>Wacht op toestemming bemanning (duim omhoog)</li>
                <li>Benader alleen onder begeleiding</li>
                <li>Benader alleen schuin van voren (tussen 1 en 3 uur of tussen 11 en 9 uur)</li>
                <li><strong>NOOIT</strong> van achteren benaderen (staartrotor!)</li>
                <li>Houd rekening met rotorbladen als je met voertuig nadert</li>
              </ul>
              <div className="approach-diagram">
                <div className="helicopter-diagram">
                  <div className="helicopter-icon"><i className="fas fa-helicopter"></i></div>
                  <div className="approach-zone safe">Veilige zone</div>
                  <div className="approach-zone danger">GEVAAR</div>
                </div>
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
              <p>Bristow Nederland (z.d.) – Informatie Kustwachthelikopter</p>
              <p>Beschikbaar via interne SharePoint:</p>
              <p className="reference">Team site - Informatie Kustwachthelikopter.pdf - Alle documenten (sharepoint.com)</p>
              <p className="note">(Let op: enkel toegankelijk met gemachtigde SharePoint-login)</p>
            </>
          )
        },
        {
          title: 'Bijlagen',
          icon: 'fas fa-paperclip',
          content: (
            <>
              <ul className="info-list">
                <li>Informatiekaart benadering helikopter (o.a. hoekbenadering)</li>
                <li>Procedurekaarten landingsruimte</li>
                <li>Visuele weergave downwashzones (niet in deze tekst bijgevoegd)</li>
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
                <h4>SOP WHV 005 – Werkafspraak Landing Kustwachthelikopter</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Gebruik:</strong> Standaard Operationele Procedure voor helikopterlandingen</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1DN_uwA1lWi8XitUfsMJzfY48kkJFjxUK/view" 
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