import React from 'react';
import { InfoCardDetail } from '../../types';

export const watersportZoneringDetail: InfoCardDetail = {
  id: 'watersport-zonering',
  title: 'Nota Watersportzonering Zandvoort – 2020',
  description: 'Gemeentelijke richtlijnen voor watersportzones, veiligheid en gedragsregels voor alle strandgebruikers.',
  icon: 'fas fa-water',
  category: 'handleiding',
  intro: 'De Nota Watersportzonering Zandvoort 2020 definieert de zonering van het strand en kustwateren voor diverse watersporten, gericht op veiligheid en het ontwikkelen van Zandvoort als "durfspot".',
  sections: [
    {
      title: 'Doelstelling & Context',
      icon: 'fas fa-bullseye',
      cards: [
        {
          title: 'Doelstelling',
          icon: 'fas fa-flag',
          content: (
            <>
              <p>De nota heeft als doel een nieuwe, heldere en handhaafbare zonering van het strand en de kustwateren te realiseren, gericht op:</p>
              <ul className="info-list checkmark">
                <li>Groeiende diversiteit van watersporten</li>
                <li>Veiligheid voor alle strandgebruikers</li>
                <li>Ontwikkeling van Zandvoort als 'durfspot': een toplocatie voor extreme en reguliere watersporten</li>
              </ul>
            </>
          )
        },
        {
          title: 'Context & Urgentie',
          icon: 'fas fa-exclamation-triangle',
          content: (
            <>
              <ul className="info-list alert">
                <li>Huidige zonering is vooral gericht op kitesurfen, andere sporten zijn niet goed gereguleerd</li>
                <li>Er is sprake van groeiend aanbod, toename van incidenten, én onduidelijke communicatie over de regels</li>
                <li>Zandvoort is door de provincie Noord-Holland erkend als één van de drie officiële 'durfspot'-locaties</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Categorieën & Zonemodel',
      icon: 'fas fa-th-large',
      cards: [
        {
          title: 'Categorieën Watersport',
          icon: 'fas fa-list',
          content: (
            <>
              <div className="mb-4">
                <h4 className="font-medium text-blue-800">Langzame watersporten:</h4>
                <p>Suppen, zeekajakken, golfsurfen, wedstrijdzwemmen</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Snelle watersporten:</h4>
                <p>Windsurfen, kiten, foilen, catamarans</p>
                <p className="text-sm italic mt-1">Snelle watersporten vragen vanwege hun snelheid en impact om aparte zones en extra veiligheidsmaatregelen.</p>
              </div>
            </>
          )
        },
        {
          title: 'Nieuw Zonemodel',
          icon: 'fas fa-map-marked-alt',
          content: (
            <>
              <p className="mb-3">Twee hoofdtypen zones:</p>
              
              <div className="bg-blue-100 p-3 rounded-md mb-4">
                <h4 className="font-medium text-blue-800">Zwemzones (blauw):</h4>
                <ul className="info-list">
                  <li>Zwemmen, strandrecreatie, langzame watersporters te gast</li>
                  <li>Snelle watersport pas toegestaan vanaf 150 meter uit de kustlijn</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 p-3 rounded-md mb-4">
                <h4 className="font-medium text-gray-800">Watersportzones (zwart):</h4>
                <ul className="info-list">
                  <li>Specifiek voor afvaren/aanlanden van snelle watersporters</li>
                  <li>Ook langzame watersporters welkom</li>
                  <li>Zwemmen wordt afgeraden</li>
                  <li>Lesgroepen toegestaan</li>
                </ul>
              </div>
              
              <div className="bg-yellow-100 p-3 rounded-md">
                <h4 className="font-medium text-yellow-800">Dynamische toepassing:</h4>
                <p>Alleen actief tussen 15 april en 1 oktober. Buiten deze periode is de gehele kust vrij toegankelijk voor niet-gemotoriseerde watersporters.</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Specifieke Zones & Regels',
      icon: 'fas fa-map-signs',
      cards: [
        {
          title: 'Aangewezen Zones',
          icon: 'fas fa-map-pin',
          content: (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">Zone</th>
                      <th className="border border-gray-300 px-4 py-2">Locatieomschrijving</th>
                      <th className="border border-gray-300 px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">Paal 63.10–63.30</td>
                      <td className="border border-gray-300 px-4 py-2">Bestaande zone (grens kampeerverenigingen Helios/Kampeergenoegen)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">Paal 64.20–64.40</td>
                      <td className="border border-gray-300 px-4 py-2">Bestaande zone (grens kampeerverenigingen Amsterdam/Voorwaarts)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">3</td>
                      <td className="border border-gray-300 px-4 py-2">Paal 64.85–65.00</td>
                      <td className="border border-gray-300 px-4 py-2">Bestaande zone (bij The Spot)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">4</td>
                      <td className="border border-gray-300 px-4 py-2">Paal 66.90–67.10</td>
                      <td className="border border-gray-300 px-4 py-2">Bestaande zone (bij Watersportvereniging Zandvoort, mogelijk verbreding)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">5</td>
                      <td className="border border-gray-300 px-4 py-2">Paal 67.50–67.80</td>
                      <td className="border border-gray-300 px-4 py-2">Nieuwe zone (zuidelijk van Havana aan Zee)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">6</td>
                      <td className="border border-gray-300 px-4 py-2">Paal 68.20–68.40</td>
                      <td className="border border-gray-300 px-4 py-2">Bestaande zone op zuiderstrand</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm italic mt-3">Zie bijlage 9.2 van de originele nota voor gedetailleerde kaarten.</p>
            </>
          )
        },
        {
          title: 'Gedragsregels & Prioriteiten',
          icon: 'fas fa-list-ol',
          content: (
            <>
              <p className="mb-2">Voorrangsregels watersportgebruikers (van hoog naar laag):</p>
              <ol className="list-decimal list-inside mb-4 pl-2">
                <li>Zwemmers</li>
                <li>Surfers en suppers</li>
                <li>Windsurfers</li>
                <li>Kiters</li>
                <li>Foilers</li>
                <li>Catamarans</li>
                <li>Motorboten</li>
              </ol>
              <p>Toezichthouders, reddingsbrigade en watersportaanbieders zijn verantwoordelijk voor handhaving, informatievoorziening en toezicht. De gemeente past de APV aan om de zonering en gedragsregels juridisch te borgen.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Implementatie & Vervolg',
      icon: 'fas fa-check-circle',
      cards: [
        {
          title: 'Kwaliteitsborging & Veiligheid',
          icon: 'fas fa-shield-alt',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Meldplicht voor commerciële watersportaanbieders</li>
                <li>Certificering verplicht (zoals ISA, HSA, IKO, Watersportverbond)</li>
                <li>Gedragsregels actief communiceren via meertalige borden, strandfolders, QR-codes, apps</li>
                <li>Naleving wordt per zone en per dagtype (risicodagen) afgestemd</li>
              </ul>
            </>
          )
        },
        {
          title: 'Communicatie & Vervolg',
          icon: 'fas fa-bullhorn',
          content: (
            <>
              <ul className="info-list">
                <li>Communicatiestrategie wordt ontwikkeld met provincie Noord-Holland</li>
                <li>Jaarlijkse evaluatie van zones en afspraken (pilotstatus)</li>
                <li>Ontwikkeling van Zandvoort als Durfspot en mogelijk regionaal trainingscentrum</li>
                <li>Integratie in het Omgevingsplan Strand</li>
              </ul>
              
              <div className="bg-blue-100 p-3 rounded-md mt-4">
                <h4 className="font-medium text-blue-800">Volledige documentatie:</h4>
                <p>De complete Nota Watersportzonering Zandvoort 2020 is beschikbaar via de link bij deze kaart.</p>
              </div>
            </>
          )
        }
      ]
    }
  ]
}; 