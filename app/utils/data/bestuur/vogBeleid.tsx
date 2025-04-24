import React from 'react';
import { InfoCardDetail } from '../../types';

export const vogBeleidDetail: InfoCardDetail = {
  id: 'vog-beleid',
  title: 'VOG-beleid bij de ZRB',
  description: 'Informatie over de Verklaring Omtrent het Gedrag (VOG) voor leden van de Reddingsbrigade Zandvoort.',
  icon: 'fas fa-shield-alt',
  category: 'richtlijnen',
  intro: 'Een VOG, ofwel Verklaring Omtrent het Gedrag, is een belangrijk onderdeel van het veiligheidsbeleid van de Zandvoortse Reddingsbrigade. Dit document (Versie 1.0 – januari 2021) beschrijft hoe de VOG-procedure werkt en welke leden een VOG moeten aanvragen.',
  sections: [
    {
      title: 'Basisinformatie VOG',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Wat is een VOG?',
          icon: 'fas fa-question-circle',
          content: (
            <>
              <p>Een VOG, ofwel Verklaring Omtrent het Gedrag, is een officieel overheidsdocument waarmee wordt aangetoond dat je gedrag in het verleden geen bezwaar vormt voor het vrijwilligerswerk dat je wilt gaan doen.</p>
              
              <p>Bij de Zandvoortse Reddingsbrigade (ZRB) staat veiligheid voorop – voor vrijwilligers, jeugdleden en hulpontvangers. Het vragen van een VOG is een preventieve maatregel om een zo veilig mogelijke omgeving te creëren.</p>
            </>
          )
        },
        {
          title: 'Wat staat er in een VOG?',
          icon: 'fas fa-file-alt',
          content: (
            <>
              <p>Een VOG vermeldt in formele bewoording of er bezwaren zijn tegen iemands inzet bij de ZRB, gebaseerd op:</p>
              
              <ul className="info-list checkmark">
                <li>Risico's voor de samenleving</li>
                <li>Belangen van de organisatie en de vrijwilliger</li>
              </ul>
              
              <p>De VOG is gebaseerd op artikel 28 van de Wet justitiële en strafvorderlijke gegevens.</p>
              <p>Controle op echtheidskenmerken wordt geadviseerd.</p>
            </>
          )
        },
        {
          title: 'Sinds wanneer werkt de ZRB met een VOG?',
          icon: 'fas fa-history',
          content: (
            <>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-date">2016</div>
                  <div className="timeline-content">Invoering voor bestuursleden en instructeurs</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2020</div>
                  <div className="timeline-content">Verenigingsbreed ingevoerd na goedkeuring in de ledenvergadering</div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Aanvraagprocedure',
      icon: 'fas fa-tasks',
      cards: [
        {
          title: 'Hoe wordt een VOG aangevraagd?',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <div className="process-steps">
                <ol className="info-list numbered">
                  <li>Het secretariaat van de ZRB verzorgt de aanvraag via Justis, onderdeel van het Ministerie van Justitie en Veiligheid.</li>
                  <li>Hiervoor is alleen het e-mailadres van het lid nodig.</li>
                  <li>Het secretariaat zet de aanvraag klaar voor het profiel:
                    <ul className="info-list">
                      <li><strong>Vrijwilliger bij de Zandvoortse Reddingsbrigade</strong></li>
                      <li><strong>Screeningsprofiel:</strong> Gezondheidszorg en welzijn van mens en dier</li>
                    </ul>
                  </li>
                  <li>Het lid ontvangt vervolgens een e-mail van Justis met een uitnodiging om de aanvraag te voltooien.</li>
                </ol>
              </div>
            </>
          )
        },
        {
          title: 'Wie krijgt een verzoek om een VOG aan te vragen?',
          icon: 'fas fa-user-check',
          content: (
            <>
              <p>Het ZRB-secretariaat stemt dit af met postcommandanten en/of het bestuur. Het gaat hierbij om:</p>
              
              <ul className="info-list checkmark">
                <li>Actieve leden op de post</li>
                <li>Instructeurs en begeleiders bij opleidingen of zwembadactiviteiten</li>
                <li>Bestuursleden</li>
              </ul>
            </>
          )
        },
        {
          title: 'Wie krijgt géén verzoek?',
          icon: 'fas fa-user-times',
          content: (
            <>
              <ul className="info-list cross">
                <li>Leden onder de 18 jaar</li>
                <li>Donateurs</li>
                <li>Volwassen leden zonder actieve taak</li>
              </ul>
            </>
          )
        },
        {
          title: 'Wat moet je doen als je de VOG hebt ontvangen?',
          icon: 'fas fa-envelope-open-text',
          content: (
            <>
              <ol className="info-list numbered">
                <li>Je ontvangt de VOG per post, binnen 1 tot 4 weken.</li>
                <li>Informeer het secretariaat per e-mail dat je de VOG hebt ontvangen.</li>
                <li>Er wordt een moment afgesproken om:
                  <ul className="info-list">
                    <li>De echtheid van het document te controleren</li>
                    <li>De afgiftedatum en het documentnummer op te nemen in de ledenadministratie</li>
                  </ul>
                </li>
                <li>Het originele document blijft in jouw bezit.</li>
              </ol>
            </>
          )
        }
      ]
    },
    {
      title: 'Praktische Informatie',
      icon: 'fas fa-cog',
      cards: [
        {
          title: 'Geldigheid van de VOG',
          icon: 'fas fa-clock',
          content: (
            <>
              <ul className="info-list info">
                <li>Een VOG heeft geen vaste geldigheidstermijn</li>
                <li>De ZRB hanteert het beleid dat iedere vijf jaar een nieuwe VOG moet worden aangevraagd</li>
                <li>Het secretariaat en de ledenadministratie initiëren dit proces</li>
              </ul>
            </>
          )
        },
        {
          title: 'Wat zijn de kosten?',
          icon: 'fas fa-euro-sign',
          content: (
            <>
              <div className="cost-info">
                <p><strong>Voor vrijwilligers bij de ZRB zijn er géén kosten verbonden aan de VOG-aanvraag</strong></p>
              </div>
            </>
          )
        },
        {
          title: 'Meer informatie',
          icon: 'fas fa-external-link-alt',
          content: (
            <>
              <div className="external-links">
                <ul className="info-list link-list">
                  <li>
                    <a href="https://www.justis.nl/producten/vog/vrijwilligers-en-vrijwilligersorganisaties.aspx" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Justis – VOG voor vrijwilligersorganisaties
                    </a>
                  </li>
                  <li>
                    <a href="https://nocnsf.nl/wat-doet-nocnsf/sport-en-maatschappij/verklaring-omtrent-gedrag-aanvragen" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> NOC*NSF – VOG aanvragen voor sportverenigingen
                    </a>
                  </li>
                  <li>
                    <a href="https://www.reddingsbrigade.nl/wij/privacyverklaring-en-cookies/privacyverklaring/" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Privacyverklaring Reddingsbrigade Nederland
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )
        },
        {
          title: 'Origineel Document',
          icon: 'fas fa-file-pdf',
          content: (
            <>
              <div className="document-container pdf-document">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>VOG-beleid bij de ZRB</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie:</strong> 1.0 – januari 2021</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1RM5p48zk6FFDVquqwRP6Oqj2XbMRkiVn/view" 
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