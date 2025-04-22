import React from 'react';
import { InfoCardDetail } from '../../types';

export const roepnummersDetail: InfoCardDetail = {
  id: 'roepnummers',
  title: 'Roepnummers',
  description: 'Roepnummerplan per 31 maart 2025',
  icon: 'fas fa-broadcast-tower',
  category: 'algemeen',
  intro: 'Vanaf 31 maart 2025 zijn er nieuwe roepnummers in gebruik genomen voor alle eenheden van de Reddingsbrigade Zandvoort. Hieronder vind je een compleet overzicht van alle roepnummers per locatie. Het is belangrijk dat iedereen bekend is met deze nummers voor een efficiënte communicatie tijdens operationele inzet. Belangrijk: bij het gebruik van de roepnummers spreek je alleen de 4 cijfers na de "36-" uit.',
  sections: [
    {
      title: 'Nieuwe Roepnummers',
      icon: 'fas fa-list-ol',
      cards: [
        {
          title: 'Kazerne',
          icon: 'fas fa-building',
          content: (
            <>
              <div className="table-responsive">
                <table className="info-table">
                  <thead>
                    <tr>
                      <th>Eenheid</th>
                      <th>ZVT-nummer*</th>
                      <th>Roepnummer†</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Kazerne</td>
                      <td>ZVT-131</td>
                      <td>36-2931</td>
                    </tr>
                    <tr>
                      <td>Vlet</td>
                      <td>ZVT-118</td>
                      <td>36-2918</td>
                    </tr>
                    <tr>
                      <td>Vlet</td>
                      <td>ZVT-128</td>
                      <td>36-2928</td>
                    </tr>
                    <tr>
                      <td>Hulpverlenings-/oefenboot</td>
                      <td>ZVT-119</td>
                      <td>36-2919</td>
                    </tr>
                    <tr>
                      <td>Hulpverlenings-/oefenboot</td>
                      <td>ZVT-159</td>
                      <td>36-2929</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )
        },
        {
          title: 'Zuidpost',
          icon: 'fas fa-compass',
          content: (
            <>
              <div className="table-responsive">
                <table className="info-table">
                  <thead>
                    <tr>
                      <th>Eenheid</th>
                      <th>ZVT-nummer*</th>
                      <th>Roepnummer†</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Zuidpost</td>
                      <td>ZVT-111</td>
                      <td>36-2911</td>
                    </tr>
                    <tr>
                      <td>Strandambulance</td>
                      <td>ZVT-130</td>
                      <td>36-2910</td>
                    </tr>
                    <tr>
                      <td>Waterscooter</td>
                      <td>ZVT-149</td>
                      <td>36-2917</td>
                    </tr>
                    <tr>
                      <td>Snelle hulpverleningsboot</td>
                      <td>ZVT-139</td>
                      <td>36-2939</td>
                    </tr>
                    <tr>
                      <td>Snelle hulpverleningsboot</td>
                      <td>ZVT-129</td>
                      <td>36-2949</td>
                    </tr>
                    <tr>
                      <td>Fiets</td>
                      <td>ZVT-113</td>
                      <td>36-2913</td>
                    </tr>
                    <tr>
                      <td>Voetpatrouille</td>
                      <td>ZVT-112</td>
                      <td>36-2912</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )
        },
        {
          title: 'Noordpost',
          icon: 'fas fa-compass',
          content: (
            <>
              <div className="table-responsive">
                <table className="info-table">
                  <thead>
                    <tr>
                      <th>Eenheid</th>
                      <th>ZVT-nummer*</th>
                      <th>Roepnummer†</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Noordpost</td>
                      <td>ZVT-121</td>
                      <td>36-2921</td>
                    </tr>
                    <tr>
                      <td>Strandambulance</td>
                      <td>ZVT-120</td>
                      <td>36-2920</td>
                    </tr>
                    <tr>
                      <td>Waterscooter</td>
                      <td>ZVT-189</td>
                      <td>36-2927</td>
                    </tr>
                    <tr>
                      <td>Snelle hulpverleningsboot</td>
                      <td>ZVT-179</td>
                      <td>36-2959</td>
                    </tr>
                    <tr>
                      <td>Snelle hulpverleningsboot</td>
                      <td>ZVT-169</td>
                      <td>36-2969</td>
                    </tr>
                    <tr>
                      <td>Fiets</td>
                      <td>ZVT-123</td>
                      <td>36-2923</td>
                    </tr>
                    <tr>
                      <td>Voetpatrouille</td>
                      <td>ZVT-122</td>
                      <td>36-2922</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="note-container">
                <p className="note"><strong>*</strong> ZVT-nummers zijn de oude nummering en worden vervangen door de nieuwe roepnummers.</p>
                <p className="note"><strong>†</strong> Bij mondelinge communicatie spreek je alleen de 4 cijfers na de "36-" uit, bijvoorbeeld: "2931" in plaats van "36-2931".</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Nieuwe Communicatie Structuur',
      icon: 'fas fa-exchange-alt',
      cards: [
        {
          title: 'Wijzigingen in de Roepnummer Structuur',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <p>Op verzoek van het NIPV vervalt de eerdere splitsing van roepnummers bij opsplitsing van een eenheid. Dit betekent dat er geen aparte roepnummers meer worden toegewezen aan bijrijders of opstappers (zoals dat ook bij de collega hulpdiensten het geval is).</p>
              
              <p>Om uniformiteit binnen de reddingsbrigades te waarborgen, is er een nieuwe identificatie-structuur geïntroduceerd via digitale communicatie.</p>
              
              <h4>Nieuwe structuur voor identificatie via digitale communicatie:</h4>
              <ul className="info-list">
                <li>Elk voertuig en vaartuig behoudt zijn hoofdroepnummer.</li>
                <li>Communicatie via de mobilofoon of portofoon voegt een extra aanduiding toe:
                  <ul>
                    <li><strong>M1</strong> - Mobilofoon van het voertuig of vaartuig</li>
                    <li><strong>P1</strong> - Portofoon chauffeur of opstapper</li>
                    <li><strong>P2</strong> - Portofoon bijrijder</li>
                  </ul>
                </li>
              </ul>
            </>
          )
        },
        {
          title: 'Voorbeelden',
          icon: 'fas fa-sticky-note',
          content: (
            <>
              <h4>Een strandambulance met roepnummer 36-2920 (spreek uit als: "2920")</h4>
              <ul className="info-list">
                <li><strong>36-2920 M1</strong> - Via de mobilofoon in het voertuig</li>
                <li><strong>36-2920 P1</strong> - Portofoon chauffeur</li>
                <li><strong>36-2920 P2</strong> - Portofoon bijrijder</li>
              </ul>
              
              <h4>Een waterscooter met roepnummer 36-2917 (spreek uit als: "2917")</h4>
              <ul className="info-list">
                <li><strong>36-2917 M1</strong> - Mobilofoon op de waterscooter</li>
                <li><strong>36-2917 P1</strong> - Portofoon</li>
              </ul>
              
              <p>Je kunt dus, indien gewenst, nog steeds zien met wie je contact hebt. Het verschil is dat er niet meer ter plekke extra roepnummers worden gecreëerd. In plaats daarvan wordt het roepnummer van de eenheid behouden, met automatische toevoeging van M1, P1 of P2 via de digitale communicatie.</p>
              
              <div className="important-note">
                <p><strong>Belangrijk:</strong> Je hoeft jezelf niet te identificeren als M1, P1, etc.</p>
              </div>
              
              <p>De toevoegingen M1, P1, en P2 worden automatisch door het systeem weergegeven. Dit betekent dat je tijdens het communiceren alleen je roepnummer hoeft te gebruiken.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Voordelen & Weergave',
      icon: 'fas fa-check-circle',
      cards: [
        {
          title: 'Voordelen van de nieuwe structuur',
          icon: 'fas fa-thumbs-up',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Duidelijke en uniforme werkwijze binnen alle reddingsbrigades.</li>
                <li>Geen verwarring door wisselende roepnummers bij opsplitsing.</li>
                <li>Direct zichtbaar met wie je communiceert via de digitale identificatie.</li>
              </ul>
            </>
          )
        },
        {
          title: 'Huidige weergave in voertuigen',
          icon: 'fas fa-tablet-alt',
          content: (
            <>
              <p>Op het moment dat dit document wordt opgesteld, tonen de mobilofoons in beide voertuigen nog niet het roepnummer van de eenheid in het display. In plaats daarvan wordt de unieke ID van de randapparatuur weergegeven, en niet de alias (het roepnummer).</p>
              
              <p>Dit komt doordat deze mobilofoons een ouder model zijn en de functie voor het weergeven van een alias niet ondersteunen. Vanaf de mobilofoons op alle posten kun je echter wel zien welke eenheid er spreekt.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Communicatieprotocol',
      icon: 'fas fa-comments',
      cards: [
        {
          title: 'Richtlijnen voor effectieve communicatie',
          icon: 'fas fa-list-ul',
          content: (
            <>
              <ul className="info-list checkmark">
                <li><strong>Begin altijd met het roepnummer</strong> van degene die je wilt bereiken, gevolgd door je eigen roepnummer</li>
                <li>Je hoeft het voorvoegsel "36-" <strong>niet</strong> uit te spreken</li>
                <li><strong>Voorbeeld:</strong> "2921 hier de 2920, over" (auto roept de noordpost op)</li>
                <li>Houd berichten kort en bondig</li>
                <li>Bevestig ontvangst met "Begrepen"</li>
              </ul>
            </>
          )
        },
        {
          title: 'Tips voor duidelijke communicatie',
          icon: 'fas fa-lightbulb',
          content: (
            <>
              <div className="important-note">
                <p><strong>Belangrijk:</strong> Spreek altijd duidelijk en rustig, vooral in noodsituaties.</p>
              </div>
              
              <ul className="info-list">
                <li>Vermijd achtergrondlawaai tijdens communicatie</li>
                <li>Wacht tot het kanaal vrij is voordat je begint te spreken</li>
                <li>Houd de portofoon op ongeveer 5-10 cm van je mond</li>
                <li>Denk na over wat je wilt zeggen voordat je de zendknop indrukt</li>
                <li>Gebruik standaard terminologie waar mogelijk</li>
              </ul>
            </>
          )
        }
      ]
    }
  ]
}; 