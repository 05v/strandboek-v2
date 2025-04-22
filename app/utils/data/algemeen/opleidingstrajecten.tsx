import React from 'react';
import { InfoCardDetail } from '../../types';

export const opleidingstrajectenDetail: InfoCardDetail = {
  id: 'opleidingstrajecten',
  title: 'Opleidingstrajecten',
  description: 'Informatie over de verschillende opleidingstrajecten binnen de Reddingsbrigade Zandvoort',
  icon: 'fas fa-graduation-cap',
  category: 'algemeen',
  intro: 'Hieronder vind je een samenvatting van de verschillende opleidingstrajecten en aanstellingsrichtlijnen binnen de Zandvoortse Reddingsbrigade (ZRB). Deze informatie is gebaseerd op de Aanstellingsrichtlijn van juni 2023 (vastgesteld in juli 2023). Voor de volledige en meest actuele informatie verwijzen we je naar het officiële document dat te vinden is via de link onderaan deze pagina.',
  sections: [
    {
      title: 'Algemene informatie',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Belangrijke opmerkingen',
          icon: 'fas fa-exclamation-circle',
          content: (
            <>
              <div className="important-note">
                <p><strong>Let op:</strong> Deze pagina bevat een samenvatting van de aanstellingsrichtlijn. Voor volledige en actuele informatie raadpleeg altijd het <a href="https://drive.google.com/file/d/1iXaeF-Y3MvL0WBbqx8NcS1TZEhxWppQh/view" target="_blank" rel="noopener noreferrer">officiële document</a>.</p>
              </div>
              
              <ul className="info-list alert">
                <li>Aanstellingen worden altijd door het bestuur gedaan.</li>
                <li>Trainers en postcommandanten hebben uitsluitend een adviserende rol.</li>
                <li>Diploma's voor EHBO en AED moeten voldoen aan de eisen in het meest recente OER van <a href="https://www.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Reddingsbrigade Nederland</a>.</li>
                <li>De vrijstellingsverklaring EHBO/AED moet in duplicaat bij het secretariaat worden gearchiveerd.</li>
              </ul>
            </>
          )
        },
        {
          title: 'Specialisaties binnen de ZRB',
          icon: 'fas fa-user-shield',
          content: (
            <>
              <div className="specialisaties-container">
                <div className="specialisatie-item">
                  <i className="fas fa-swimmer"></i>
                  <h4>Lifeguard</h4>
                </div>
                <div className="specialisatie-item">
                  <i className="fas fa-truck-medical"></i>
                  <h4>Chauffeur</h4>
                </div>
                <div className="specialisatie-item">
                  <i className="fas fa-ship"></i>
                  <h4>Schipper</h4>
                </div>
                <div className="specialisatie-item">
                  <i className="fas fa-water"></i>
                  <h4>Schipper RWC (Waterscooter)</h4>
                </div>
                <div className="specialisatie-item">
                  <i className="fas fa-user-graduate"></i>
                  <h4>Senior Lifeguard</h4>
                </div>
              </div>
              
              <p>Het document beschrijft de richtlijnen voor het aanstellen van actieve leden met ervaring van buitenaf. De onderstaande secties bevatten informatie over de vereisten voor elke specialisatie.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Lifeguard Beach',
      icon: 'fas fa-swimmer',
      cards: [
        {
          title: 'Voorwaarden voor aanstelling',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <h4>Benodigdheden:</h4>
              <ul className="info-list">
                <li>Lid worden van de ZRB</li>
                <li>Bezit van:
                  <ul>
                    <li>EHBO*-diploma</li>
                    <li>Diploma Lifeguard Beach</li>
                  </ul>
                </li>
              </ul>
              
              <h4>Procedure:</h4>
              <ul className="info-list">
                <li>Directe aanstelling mogelijk bij tonen van geldige diploma's.</li>
                <li>Eerste zomermaand: beoordeling door postcommandanten op kennis van ZRB-protocollen.</li>
                <li>Onvoldoende kennis = startbekwaam status met toezicht & begeleiding.</li>
                <li>Geen diploma's = eerst behalen vóór aanstelling mogelijk is.</li>
              </ul>
              
              <p className="note">* EHBO-diploma moet voldoen aan de eisen in het meest recente OER van <a href="https://www.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Reddingsbrigade Nederland</a>.</p>
            </>
          )
        },
        {
          title: 'Wanneer startbekwaam',
          icon: 'fas fa-hourglass-start',
          content: (
            <>
              <p>Een lid wordt als startbekwaam aangemerkt wanneer:</p>
              <ul className="info-list">
                <li>De benodigde diploma's aanwezig zijn, maar</li>
                <li>Er onvoldoende kennis is van de ZRB-specifieke protocollen</li>
              </ul>
              
              <p>In de startbekwame fase:</p>
              <ul className="info-list checkmark">
                <li>Werkt het lid onder toezicht van een volledig bekwaam lid</li>
                <li>Krijgt het lid begeleiding om de protocollen te leren</li>
                <li>Wordt het lid na de eerste zomermaand beoordeeld op voortgang</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Chauffeur (O&G)',
      icon: 'fas fa-truck-medical',
      cards: [
        {
          title: 'Voorwaarden voor aanstelling',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <h4>Benodigdheden:</h4>
              <ul className="info-list">
                <li>Geldig EHBO*-diploma</li>
                <li>Diploma Lifeguard Beach</li>
                <li>Diploma Lifeguard Chauffeur</li>
                <li>Schriftelijke toets O&G (behaald)</li>
                <li>Praktijksessie O&G (binnen 3 jaar behaald)</li>
              </ul>
              
              <h4>Procedure:</h4>
              <ul className="info-list">
                <li>Minimaal 3 uur mee met chauffeurs-trainer voor beoordeling op:
                  <ul>
                    <li>Autokennis</li>
                    <li>Gebiedskennis</li>
                    <li>ZRB-protocollen</li>
                    <li>Rijvaardigheid</li>
                  </ul>
                </li>
                <li>Positief advies = start als chauffeur zonder O&G</li>
                <li>Bij goede beoordeling én recente praktijksessie kan eerder volledige aanstelling plaatsvinden.</li>
                <li>Onvoldoende kennis (behalve rijvaardigheid) = startbekwaam chauffeur zonder O&G</li>
                <li>Na 1 jaar: herbeoordeling door bestuur op advies van trainers/postcommandanten.</li>
              </ul>
              
              <p className="note">* EHBO-diploma moet voldoen aan de eisen in het meest recente OER van <a href="https://www.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Reddingsbrigade Nederland</a>.</p>
            </>
          )
        },
        {
          title: 'Toelichting O&G',
          icon: 'fas fa-lightbulb',
          content: (
            <>
              <p>O&G staat voor Optische en Geluidssignalen (zwaailichten en sirene). Voor het rijden met O&G gelden aanvullende eisen:</p>
              
              <ul className="info-list">
                <li>Schriftelijke toets over de brancherichtlijnen</li>
                <li>Praktijksessie (niet ouder dan 3 jaar)</li>
                <li>Voldoende ervaring als chauffeur zonder O&G</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Het bestuur beslist over de aanstelling als chauffeur met O&G, op basis van advies van trainers en postcommandanten.</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Schipper Beach',
      icon: 'fas fa-ship',
      cards: [
        {
          title: 'Voorwaarden voor aanstelling',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <h4>Benodigdheden:</h4>
              <ul className="info-list">
                <li>Geldig EHBO*-diploma</li>
                <li>Vaarbewijs 1</li>
                <li>Diploma Lifeguard Beach</li>
                <li>Diploma Lifeguard Schipper Beach</li>
              </ul>
              
              <h4>Procedure:</h4>
              <ul className="info-list">
                <li>Minimaal 3 uur varen onder toezicht trainer</li>
                <li>Beoordeling op:
                  <ul>
                    <li>Protocollen</li>
                    <li>Botenkennis</li>
                    <li>Gebiedskennis Zandvoortse kust</li>
                    <li>Praktijk (lanceren, oplieren, varen)</li>
                  </ul>
                </li>
                <li>Positief advies + juiste papieren = directe aanstelling</li>
                <li>Geen papieren = eerst opleiding volgen via <a href="https://www.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Reddingsbrigade Nederland</a></li>
                <li>Alleen onvoldoende gebiedskennis = startbekwaam schipper</li>
                <li>Overige tekorten = 1 jaar leerperiode, daarna herbeoordeling</li>
              </ul>
              
              <p className="note">* EHBO-diploma moet voldoen aan de eisen in het meest recente OER van <a href="https://www.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Reddingsbrigade Nederland</a>.</p>
            </>
          )
        },
        {
          title: 'Beoordeling praktijk',
          icon: 'fas fa-tasks',
          content: (
            <>
              <p>De praktijkbeoordeling voor Schipper Beach richt zich op:</p>
              
              <ul className="info-list checkmark">
                <li><strong>Lanceren van de boot:</strong> Veiligheid, communicatie met bemanning, uitvoering</li>
                <li><strong>Oplieren van de boot:</strong> Techniek, coordinatie met team</li>
                <li><strong>Vaarvaardigheden:</strong> Navigatie, maneuvreren, omgaan met verschillende zeeomstandigheden</li>
                <li><strong>Gebiedskennis:</strong> Bekendheid met de Zandvoortse kust, ondieptes, stromingen</li>
                <li><strong>Protocollen:</strong> Kennis en correct toepassen van ZRB-specifieke vaarprotocollen</li>
              </ul>
              
              <p>Bij alleen onvoldoende gebiedskennis wordt iemand aangesteld als startbekwaam schipper, en is extra begeleiding nodig om de lokale omstandigheden te leren kennen.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Schipper RWC (Waterscooter)',
      icon: 'fas fa-water',
      cards: [
        {
          title: 'Voorwaarden voor aanstelling',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <h4>Benodigdheden:</h4>
              <ul className="info-list">
                <li>Geldig EHBO*-diploma</li>
                <li>Diploma Lifeguard Beach</li>
                <li>Vaarbewijs 1</li>
                <li>Diploma Lifeguard Schipper Beach</li>
                <li>Diploma Lifeguard Schipper RWC</li>
              </ul>
              
              <h4>Procedure:</h4>
              <ul className="info-list">
                <li>Minimaal 3 uur praktijkbeoordeling onder trainer op:
                  <ul>
                    <li>Waterscooterkennis</li>
                    <li>Gebiedskennis</li>
                    <li>Praktijk (lanceren, oplieren, varen)</li>
                  </ul>
                </li>
                <li>Positief advies = directe aanstelling</li>
                <li>Geen diploma's = minimaal 1 jaar actief lid zijn, dan opleiding volgen via <a href="https://www.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Reddingsbrigade Nederland</a></li>
                <li>Alleen onvoldoende gebiedskennis = startbekwaam schipper RWC</li>
                <li>Overige tekorten = 1 jaar leerperiode, daarna herbeoordeling</li>
              </ul>
              
              <p className="note">* EHBO-diploma moet voldoen aan de eisen in het meest recente OER van <a href="https://www.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Reddingsbrigade Nederland</a>.</p>
            </>
          )
        },
        {
          title: 'RWC specifieke vaardigheden',
          icon: 'fas fa-tachometer-alt',
          content: (
            <>
              <p>Voor het besturen van een RWC (Rescue Water Craft / Waterscooter) zijn specifieke vaardigheden nodig:</p>
              
              <ul className="info-list">
                <li>Beheersing van de speciale vaartechniek die hoort bij een waterscooter</li>
                <li>Gevoel voor balans en gewichtsverdeling</li>
                <li>Veilig kunnen optreden in branding en bij hoge golven</li>
                <li>Snel kunnen reageren op veranderende omstandigheden</li>
                <li>Kennis van de specifieke reddingstechnieken met een RWC</li>
              </ul>
              
              <p>Deze specialisatie vereist voorafgaande ervaring als Schipper Beach, omdat dit de basis vormt voor de meer geavanceerde RWC-technieken.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Senior Lifeguard',
      icon: 'fas fa-user-graduate',
      cards: [
        {
          title: 'Voorwaarden voor aanstelling',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <h4>Voorwaarden:</h4>
              <ul className="info-list">
                <li>Minimaal 1 jaar actief lid van de ZRB</li>
                <li>Kennis opdoen van alle ZRB-protocollen en werking van de posten</li>
              </ul>
              
              <h4>Benodigdheden bij aanstelling:</h4>
              <ul className="info-list">
                <li>Geldig EHBO*-diploma</li>
                <li>Diploma Lifeguard Beach</li>
                <li>Minimaal 1 specialisatie-diploma (Schipper of Chauffeur)</li>
                <li>Diploma Senior Lifeguard</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Voor de rol van Senior Lifeguard is minimaal 1 jaar actieve ervaring binnen de ZRB vereist, ook voor leden die van buitenaf komen met eerdere ervaring. Dit is essentieel om alle ZRB-specifieke protocollen en werkwijzen goed te leren kennen.</p>
              </div>
              
              <p className="note">* EHBO-diploma moet voldoen aan de eisen in het meest recente OER van <a href="https://www.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Reddingsbrigade Nederland</a>.</p>
            </>
          )
        },
        {
          title: 'Rol en verantwoordelijkheden',
          icon: 'fas fa-sitemap',
          content: (
            <>
              <p>De Senior Lifeguard heeft een leidinggevende functie binnen de reddingsbrigade. Taken omvatten onder andere:</p>
              
              <ul className="info-list checkmark">
                <li>Coördinatie van hulpverleningsacties</li>
                <li>Aansturing van andere lifeguards</li>
                <li>Besluitvorming over inzet van middelen en mensen</li>
                <li>Communicatie met andere hulpdiensten</li>
                <li>Verantwoordelijkheid voor de veiligheid op het strand</li>
              </ul>
              
              <p>Vanwege deze verantwoordelijkheden is de eis van minimaal één jaar ervaring binnen de ZRB cruciaal, omdat kennis van de specifieke werkwijzen en protocollen van de organisatie essentieel is voor deze rol.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Officieel document',
      icon: 'fas fa-file-pdf',
      cards: [
        {
          title: 'Aanstellingsrichtlijn ZRB',
          icon: 'fas fa-link',
          content: (
            <>
              <div className="document-container">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>Aanstellingsrichtlijn Zandvoortse Reddingsbrigade</h4>
                <p>Versie: juni 2023 – vastgesteld in juli 2023 (door MK)</p>
                <p>Doel: Richtlijn voor de aanstelling van actieve leden met ervaring van buitenaf.</p>
                <a href="https://drive.google.com/file/d/1iXaeF-Y3MvL0WBbqx8NcS1TZEhxWppQh/view" target="_blank" rel="noopener noreferrer" className="button secondary">
                  <i className="fas fa-external-link-alt"></i> Bekijk het volledige document
                </a>
              </div>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Deze pagina bevat een samenvatting van de aanstellingsrichtlijn. Voor volledige en actuele informatie raadpleeg altijd het originele document via bovenstaande link.</p>
              </div>
            </>
          )
        },
        {
          title: 'Meer informatie',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <p>Voor meer informatie over opleidingen en cursussen kun je terecht bij:</p>
              
              <ul className="info-list">
                <li><a href="https://www.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Reddingsbrigade Nederland</a> - voor alle landelijke diploma's en opleidingen</li>
                <li>De opleidingscoördinator van de ZRB - voor ZRB-specifieke trainingen</li>
              </ul>
              
              <p>Heb je vragen over je eigen traject of mogelijkheden? Neem dan contact op met:</p>
              <ul className="info-list">
                <li>De postcommandant (voor operationele vragen)</li>
                <li>De opleidingscoördinator (voor opleidingsvragen)</li>
                <li>Het secretariaat (voor administratieve vragen)</li>
              </ul>
            </>
          )
        }
      ]
    }
  ]
}; 