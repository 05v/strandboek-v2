import React from 'react';
import { InfoCardDetail } from '../../types';

export const psychosocialeOndersteuningDetail: InfoCardDetail = {
  id: 'protocol-psychosociale-ondersteuning',
  title: 'Protocol Psychosociale Ondersteuning',
  description: 'Protocol voor psychosociale ondersteuning na schokkende gebeurtenissen bij de Zandvoortse Reddingsbrigade.',
  icon: 'fas fa-heart',
  category: 'richtlijnen',
  intro: 'Dit protocol beschrijft hoe de Zandvoortse Reddingsbrigade (ZRB) psychosociale ondersteuning biedt aan vrijwilligers die in de uitoefening van hun functie geconfronteerd worden met een ingrijpende of schokkende gebeurtenis.',
  sections: [
    {
      title: 'Basisfuncties Protocol',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Toepassing',
          icon: 'fas fa-users',
          content: (
            <>
              <p>Dit protocol is van toepassing op alle vrijwilligers van de ZRB die in de uitoefening van hun functie geconfronteerd worden met een ingrijpende of schokkende gebeurtenis.</p>
              <p>Het is essentieel dat alle medewerkers het protocol kennen. Jaarlijks wordt het daarom opnieuw besproken binnen de vereniging.</p>
              <p>Het protocol is gebaseerd op de Richtlijn Psychosociale Ondersteuning voor Geüniformeerden.</p>
            </>
          )
        },
        {
          title: 'Doelstellingen',
          icon: 'fas fa-bullseye',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Adequate ondersteuning bieden aan vrijwilligers na een ingrijpend incident.</li>
                <li>Tijdige signalering van verwerkingsproblematiek en doorverwijzing naar gespecialiseerde zorg.</li>
                <li>Versterken van het veiligheidsgevoel onder vrijwilligers.</li>
              </ul>
            </>
          )
        },
        {
          title: 'Uitgangspunten',
          icon: 'fas fa-compass',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Ondersteuning vindt bij voorkeur binnen 24 uur, uiterlijk binnen 72 uur plaats.</li>
                <li>Ondersteuning volgt het vier-stappen-plan.</li>
                <li>Eerste opvang gebeurt binnen de eigen vereniging, tenzij het bestuur of het team psychosociale ondersteuning anders beslist.</li>
                <li>Vrijwilligers en leidinggevenden blijven ook na een doorverwijzing betrokken bij het herstelproces.</li>
                <li>Het protocol geldt alleen voor incidenten tijdens het vrijwilligerswerk bij de ZRB.</li>
                <li>Bij vrijwilligers onder de 18 jaar worden ouders/verzorgers altijd geïnformeerd.</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Inzet Psychosociale Ondersteuning',
      icon: 'fas fa-hands-helping',
      cards: [
        {
          title: 'Wanneer wordt ondersteuning ingezet?',
          icon: 'fas fa-exclamation-triangle',
          content: (
            <>
              <p>Ondersteuning wordt overwogen bij:</p>
              
              <ul className="info-list checkmark">
                <li>Ernstig letsel, reanimatie of overlijden (vooral van kinderen of collega's)</li>
                <li>Betrokkenheid van familieleden of collega's</li>
                <li>Geweld tegen hulpverleners</li>
                <li>Gevoel van machteloosheid of bizarre situaties</li>
                <li>Ernstige misdrijven</li>
                <li>Indien een vrijwilliger zelf aangeeft behoefte te hebben aan ondersteuning</li>
              </ul>
            </>
          )
        },
        {
          title: 'Het Vier-Stappen-Plan',
          icon: 'fas fa-tasks',
          content: (
            <>
              <h4>Stap 1 & 2: Signalering & Initiatie</h4>
              <p>Iedere vrijwilliger kan deze stappen zetten:</p>
              <ul className="info-list">
                <li>Signaleren dat er psychosociale ondersteuning nodig is</li>
                <li>Contact opnemen met het team psychosociale ondersteuning</li>
              </ul>
              
              <h4>Coördinatie per inzettype:</h4>
              <ul className="info-list">
                <li><strong>Repressieve inzet:</strong> Postcommandant / Dagcommandant</li>
                <li><strong>Evenementen:</strong> RB-coördinator</li>
                <li><strong>Preventieve inzet:</strong> Postcommandant / Dagcommandant</li>
                <li><strong>Opleidingen en trainingen:</strong> Oefenstaf</li>
              </ul>
              <p><em>Het bestuurslid Operationele Zaken wordt bij opstart altijd geïnformeerd.</em></p>
            </>
          )
        },
        {
          title: 'Collegiale Ondersteuning en Doorverwijzing',
          icon: 'fas fa-user-friends',
          content: (
            <>
              <h4>Stap 3: Georganiseerde Collegiale Ondersteuning</h4>
              <p>Door het team psychosociale ondersteuning.<br/>
              Doel: ondersteuning bieden, signaleren, doorverwijzen indien nodig.</p>
              
              <p><strong>Taken:</strong></p>
              <ul className="info-list checkmark">
                <li>Luisterend oor & praktische hulp</li>
                <li>Stimuleren gezonde verwerking</li>
                <li>Psycho-educatie en informatie</li>
                <li>Begeleiding bij sociale reacties en netwerken</li>
                <li>Signaleren van zorgelijke symptomen</li>
              </ul>
              
              <p><strong>Aantal gesprekken (aanbevolen maximum):</strong></p>
              <ul className="info-list">
                <li>Enkele dagen na het incident</li>
                <li>Tussen week 4-6</li>
                <li>Rond maand 3</li>
              </ul>
              
              <p><em>Belangrijk: ondersteuning is tijdelijk en mag niet blijven 'vasthouden'.</em></p>
              
              <h4>Stap 4: Doorverwijzing naar professionele hulp</h4>
              <p>Indien blijkt dat professionele psychologische of medische hulp nodig is, wordt geadviseerd om contact op te nemen met gespecialiseerde hulpverlening (zoals de GGZ).</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Symptomen en Team',
      icon: 'fas fa-clipboard-check',
      cards: [
        {
          title: 'Signalen van verstoorde verwerking',
          icon: 'fas fa-exclamation-circle',
          content: (
            <>
              <p>Mogelijke signalen die doorverwijzing nodig maken:</p>
              
              <ul className="info-list warning">
                <li>Flashbacks of verontrustende dromen</li>
                <li>Lichamelijke stressreacties</li>
                <li>Vermijdingsgedrag of verzuim</li>
                <li>Slaapproblemen</li>
                <li>Prikkelbaarheid of agressie</li>
                <li>Angstgevoelens of constante waakzaamheid</li>
                <li>Stemmingswisselingen of depressieve klachten</li>
                <li>Alcohol-/drugsmisbruik</li>
                <li>Problemen in functioneren (werk of privé)</li>
                <li>Gevoelens van schuld of schaamte</li>
              </ul>
              
              <p><strong>Actie:</strong> Bij meerdere signalen – doorverwijzen wordt dringend geadviseerd.</p>
            </>
          )
        },
        {
          title: 'Team Psychosociale Ondersteuning',
          icon: 'fas fa-user-md',
          content: (
            <>
              <p>Binnen de ZRB is een gespecialiseerd team aangesteld voor het uitvoeren van dit protocol. De lijst met namen van teamleden wordt jaarlijks als bijlage geüpdatet.</p>
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
                <h4>Protocol Psychosociale Ondersteuning ZRB</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie:</strong> 1.0 – 1 juni 2015</p>
                  <p><strong>Versiehouder:</strong> Lars Carree</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/open?id=1HewFMn7guDfNfrFKxaz-n2R0YFTbMLPm&usp=drive_copy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open Origineel Document
                  </a>
                </div>
              </div>
              
              <p>Deze richtlijn is gebaseerd op:</p>
              <ul className="info-list link-list">
                <li>
                  <a href="https://www.nivel.nl/nl/publicatie/richtlijn-psychosociale-ondersteuning-geuniformeerden" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Richtlijn Psychosociale Ondersteuning Geüniformeerden
                  </a>
                </li>
              </ul>
            </>
          )
        }
      ]
    }
  ]
}; 