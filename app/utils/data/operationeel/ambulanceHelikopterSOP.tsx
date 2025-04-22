import React from 'react';
import { InfoCardDetail } from '../../types';

// Add the NRVStyles component for consistent list styling
const NRVStyles = () => (
  <style jsx global>{`
    .nrv-list {
      counter-reset: item;
      list-style-type: none;
      padding-left: 0;
      margin-left: 1.25rem;
    }
    .nrv-list li {
      counter-increment: item;
      position: relative;
      padding-left: 2rem;
      margin-bottom: 0.5rem;
    }
    .nrv-list li:last-child {
      margin-bottom: 0;
    }
    .nrv-list li::before {
      content: counter(item) ".";
      position: absolute;
      left: 0;
      color: #666;
      font-weight: 500;
    }
  `}</style>
);

export const ambulanceHelikopterSOPDetail: InfoCardDetail = {
  id: 'ambulancehelikopter-sop',
  title: 'SOP WHV 004 – Werkafspraak Trauma- en Ambulancehelikopters (ANWB MMT)',
  description: 'Werkafspraak voor trauma- en ambulancehelikopters (ANWB MMT) op het strand.',
  icon: 'fas fa-helicopter',
  category: 'operationeel',
  intro: 'Deze Standaard Operationele Procedure (SOP) beschrijft de werkafspraken voor inzet van trauma- en ambulancehelikopters van het ANWB Mobiel Medisch Team. Het biedt een stappenplan voor effectieve en veilige samenwerking bij landingen op strand of recreatiegebied.',
  sections: [
    {
      title: 'Documentgegevens',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Document informatie',
          icon: 'fas fa-file-alt',
          content: (
            <div>
              <NRVStyles />
              <p className="mb-1"><span className="font-medium">Naam:</span> Werkafspraak trauma- en ambulancehelikopters (ANWB MMT)</p>
              <p className="mb-1"><span className="font-medium">Onderdeel van:</span> WHV – Partners</p>
              <p className="mb-1"><span className="font-medium">Doelgroep:</span> Operationele reddingsbrigade lifeguards</p>
              <p className="mb-1"><span className="font-medium">Versie:</span> 1.0</p>
              <p className="mb-1"><span className="font-medium">Datum:</span> 29 november 2023</p>
              <p className="mb-1"><span className="font-medium">Status:</span> Gepubliceerd</p>
              <p className="mb-1"><span className="font-medium">Opstellers:</span> JKm, JZw, MEg</p>
              <p className="mb-1"><span className="font-medium">Herziening:</span> Bij wijziging van afspraken met ANWB MMT</p>
              <p><span className="font-medium">Contact:</span> <a href="mailto:info@reddingsbrigade.nl" className="text-orange-500 hover:underline">info@reddingsbrigade.nl</a> t.a.v. afdeling Waterhulpverlening</p>
            </div>
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
            <div>
              <p className="mb-4">ANWB MMT-helikopters ondersteunen reguliere ambulancezorg, meestal bij spoedeisende inzet.</p>
              
              <p className="mb-2"><span className="font-medium">Twee typen helikopters:</span></p>
              <ol className="nrv-list mb-4">
                <li><span className="font-medium">Traumahelikopter:</span> piloot, arts, verpleegkundige</li>
                <li><span className="font-medium">Ambulancehelikopter:</span> piloot, HEMS crew member, verpleegkundige</li>
              </ol>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-sm text-red-700">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  <span className="font-bold">Let op!</span> Downwash (luchtverplaatsing) bij landing is zeer krachtig (kan tot windkracht 12 genereren). 
                  Dit vormt een risico op letsel of schade aan mensen, dieren en objecten.
                </p>
              </div>
            </div>
          )
        },
        {
          title: 'Doel',
          icon: 'fas fa-bullseye',
          content: (
            <div>
              <p className="mb-4">
                Duidelijke werkwijze en rolverdeling voor reddingsbrigades bij inzet van ANWB MMT helikopters.
              </p>
              <p>
                Veiligheid, efficiëntie en risicobeperking bij landingen op strand of recreatiegebied.
              </p>
            </div>
          )
        },
        {
          title: 'Beleid',
          icon: 'fas fa-clipboard-list',
          content: (
            <div>
              <p className="mb-1"><span className="font-medium">Opgesteld door:</span> Reddingsbrigade Nederland en ANWB MMT</p>
              <p><span className="font-medium">Doel:</span> Eenduidige, veilige samenwerking tussen lifeguards en het Mobiel Medisch Team (MMT)</p>
            </div>
          )
        },
        {
          title: 'Verantwoordelijkheden',
          icon: 'fas fa-user-shield',
          content: (
            <div>
              <p className="mb-2"><span className="font-medium">Piloot:</span> eindverantwoordelijk voor de landing.</p>
              
              <p className="mb-2"><span className="font-medium">Reddingsbrigade lifeguards:</span></p>
              <ol className="nrv-list">
                <li>Begeleiden strandbezoekers</li>
                <li>Beveiligen landingsplek</li>
                <li>Uitvoeren van deze procedure</li>
                <li>Bij afwezigheid van piloot: bewaken van de helikopter (op verzoek)</li>
              </ol>
            </div>
          )
        }
      ]
    },
    {
      title: 'Procedure (stapsgewijs)',
      icon: 'fas fa-tasks',
      cards: [
        {
          title: '1. Locatie bepalen',
          icon: 'fas fa-map-marker-alt',
          content: (
            <div>
              <ol className="nrv-list">
                <li><span className="font-medium">Voorkeurslocatie:</span> droog zand, net boven de vloedlijn</li>
                <li><span className="font-medium">Nooit</span> direct bij slachtoffer laten landen</li>
                <li>Houd minimaal 100 meter afstand tot helikopter vrij</li>
              </ol>
            </div>
          )
        },
        {
          title: '2. Strandbezoekers informeren',
          icon: 'fas fa-bullhorn',
          content: (
            <div>
              <p className="mb-2">Met megafoon strandbezoekers informeren:</p>
              <ol className="nrv-list">
                <li><span className="font-medium">Recreanten:</span> parasols inklappen, spullen opbergen, kinderen onder toezicht</li>
                <li><span className="font-medium">Ruiters:</span> afstappen, paard wegleiden</li>
                <li><span className="font-medium">Hondenbezitters:</span> hond aanlijnen en wegleiden</li>
                <li><span className="font-medium">(Kite)surfers:</span> stoppen, afstand tot kustlijn nemen</li>
                <li><span className="font-medium">Drone/vliegeraars:</span> vlieger binnenhalen, drone landen</li>
              </ol>
            </div>
          )
        },
        {
          title: '3. Landingsruimte vrijmaken',
          icon: 'fas fa-expand',
          content: (
            <div>
              <ol className="nrv-list mb-4">
                <li><span className="font-medium">Minimale ruimte:</span> 100m x 100m</li>
                <li>Objecten vastzetten, deuren sluiten</li>
                <li>Hoeken bemannen (indien genoeg personeel)</li>
              </ol>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                <p className="text-sm text-yellow-700">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  <span className="font-bold">Let op:</span> geen afzetlint gebruiken!
                </p>
              </div>
            </div>
          )
        },
        {
          title: '4. Landing',
          icon: 'fas fa-plane-arrival',
          content: (
            <div>
              <ol className="nrv-list mb-4">
                <li>Helikopter landt altijd tegen de wind in</li>
                <li>Downwash voelbaar vanaf ±50 meter hoogte</li>
                <li>Sta met rug naar helikopter bij landing (bescherming tegen zand)</li>
              </ol>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-sm text-red-700">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  <span className="font-bold">Let op!</span> De downwash van een helikopter kan zeer krachtig zijn en gevaar opleveren voor personen en losliggende objecten!
                </p>
              </div>
            </div>
          )
        },
        {
          title: '5. Helikopter benaderen',
          icon: 'fas fa-walking',
          content: (
            <div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-sm text-red-700">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  <span className="font-bold">Let op:</span> Niet benaderen als rotoren draaien!
                </p>
              </div>
              
              <ol className="nrv-list">
                <li>Wacht tot volledige bemanning uitgestapt is</li>
                <li>Benader alleen op aanwijzing van bemanning</li>
              </ol>
            </div>
          )
        },
        {
          title: '6. Uitstappen bemanning',
          icon: 'fas fa-users',
          content: (
            <div>
              <ol className="nrv-list">
                <li>Eerst arts of verpleegkundige</li>
                <li>Daarna tweede bemanningslid</li>
                <li>Piloot blijft bij toestel, tenzij anders afgesproken</li>
                <li>Lifeguard kan gevraagd worden om toestel te bewaken</li>
              </ol>
            </div>
          )
        },
        {
          title: '7. Werkcirkel',
          icon: 'fas fa-circle',
          content: (
            <div>
              <ol className="nrv-list">
                <li>Houd omstanders minimaal 10 meter van helikopter én patiënt</li>
                <li>Zorg voor privacy patiënt bij transport per helikopter</li>
                <li>Garandeer voldoende werkruimte voor hulpverleners</li>
              </ol>
            </div>
          )
        },
        {
          title: '8. Vertrek helikopter',
          icon: 'fas fa-plane-departure',
          content: (
            <div>
              <ol className="nrv-list">
                <li>Dirigeer omstanders weg uit zone van 100m x 100m tot helikopter vertrokken is</li>
                <li>Bescherm jezelf en omstanders tegen windkracht en opwaaiend zand</li>
              </ol>
            </div>
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
            <div>
              <p className="mb-2">Werkafspraak trauma- en ambulancehelikopters (PDF):</p>
              <p className="mb-4"><a href="https://bondsinfo.reddingsbrigade.nl/servicedesk/docs/werkafspraak_trauma__en_ambulancehelikopters.pdf" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">https://bondsinfo.reddingsbrigade.nl/servicedesk/docs/werkafspraak_trauma__en_ambulancehelikopters.pdf</a></p>
              
              <p className="mb-2">ANWB Vliegoperatie (info):</p>
              <p><a href="https://www.anwb.nl/maa/vliegoperatie" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">https://www.anwb.nl/maa/vliegoperatie</a></p>
            </div>
          )
        },
        {
          title: 'Bijlagen',
          icon: 'fas fa-paperclip',
          content: (
            <div>
              <ol className="nrv-list mb-4">
                <li>Bijlage 1: Afbeeldingen van de ANWB-MMT helikopter</li>
                <li>Instructies visueel weergegeven (niet bijgevoegd in deze tekst)</li>
              </ol>
            </div>
          )
        },
        {
          title: 'Bron Document',
          icon: 'fas fa-file-alt',
          content: (
            <div>
              <div className="bg-gray-50 border rounded-lg p-4 mb-4">
                <div className="flex items-center mb-3">
                  <i className="fas fa-file-pdf text-red-500 text-2xl mr-2"></i>
                  <h4 className="font-bold text-lg">SOP WHV 004 – Werkafspraak Trauma- en Ambulancehelikopters</h4>
                </div>
                
                <div className="mb-4">
                  <p className="mb-1"><span className="font-medium">Type document:</span> Extern PDF Document</p>
                  <p><span className="font-medium">Gebruik:</span> Standaard Operationele Procedure voor ANWB MMT helikopterlandingen</p>
                </div>
                
                <a 
                  href="https://drive.google.com/file/d/1lskD4wJCH8g7t36aQJmABLwH4BAxiwlu/view" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
                >
                  <i className="fas fa-external-link-alt mr-2"></i> Open Origineel Document
                </a>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-yellow-700">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  <span className="font-bold">Let op:</span> Deze pagina bevat een samenvatting van de SOP. Voor de meest actuele informatie raadpleeg altijd het originele document via bovenstaande link.
                </p>
              </div>
            </div>
          )
        }
      ]
    }
  ],
}; 