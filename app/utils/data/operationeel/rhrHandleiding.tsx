import React from 'react';
import { InfoCardDetail } from '../../types';

export const rhrHandleidingDetail: InfoCardDetail = {
  id: 'rhr-handleiding',
  title: 'RHR Handleiding',
  description: 'Volledige handleiding voor het Reddingsbrigade Hulpverleningsregistratie (RHR) systeem inclusief inloggegevens.',
  icon: 'fas fa-clipboard-list',
  category: 'operationeel',
  intro: 'Het Reddingsbrigade Hulpverleningsregistratie (RHR) systeem wordt gebruikt om alle hulpverleningen, dagjournaals, en aanwezigheid van strandwachten te registreren. Deze pagina bevat alle informatie om het RHR te gebruiken, inclusief inloggegevens voor de verschillende locaties.',
  sections: [
    {
      title: 'Inloggegevens RHR',
      icon: 'fas fa-sign-in-alt',
      cards: [
        {
          title: 'RHR Toegang',
          icon: 'fas fa-door-open',
          content: (
            <>
              <p>De RHR is toegankelijk via de volgende links:</p>
              <ul className="info-list">
                <li><a href="https://rhr.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Inlogpagina RHR</a> - Live omgeving</li>
                <li><a href="http://testrhr.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Oefenomgeving RHR</a> - Voor training en testen</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Voor elke locatie zijn er specifieke inloggegevens. Gebruik de juiste opstartcode voor de post waar je werkzaam bent.</p>
              </div>
            </>
          )
        },
        {
          title: 'Post Zuid',
          icon: 'fas fa-map-marker-alt',
          content: (
            <>
              <h4>Post Zuid</h4>
              <ul className="info-list">
                <li><strong>Opstartcode:</strong> pczvt-zuid</li>
                <li><strong>Wachtwoord:</strong> zvt111</li>
                <li><strong>Beperkte versie:</strong> zvt-zuid (alleen voor tweede pc, mist o.a. dagrapport sluiten, statistieken)</li>
              </ul>
              
              <p>Voor de volledige documentatie over RHR Zuid, bekijk het <a href="https://docs.google.com/document/d/1DDhqnTb1fydsxDAMhYhG6KUcdZbgUvxO/edit?tab=t.0" target="_blank" rel="noopener noreferrer">officiële document</a>.</p>
            </>
          )
        },
        {
          title: 'Post Noord',
          icon: 'fas fa-map-marker-alt',
          content: (
            <>
              <h4>Post Noord</h4>
              <ul className="info-list">
                <li><strong>Opstartcode:</strong> pczvt-noord</li>
                <li><strong>Wachtwoord:</strong> zvt121</li>
                <li><strong>Beperkte versie:</strong> zvt-noord (alleen voor tweede pc)</li>
              </ul>
              
              <p>Voor de volledige documentatie over RHR Noord, bekijk het <a href="https://docs.google.com/document/d/1bgqdmuIsqb7rnyjToE0bT4CQnudguPnl/edit?tab=t.0" target="_blank" rel="noopener noreferrer">officiële document</a>.</p>
            </>
          )
        },
        {
          title: 'Kazerne',
          icon: 'fas fa-building',
          content: (
            <>
              <h4>Kazerne</h4>
              <ul className="info-list">
                <li><strong>Opstartcode:</strong> pczvt-kazerne</li>
                <li><strong>Wachtwoord:</strong> zvt131</li>
                <li><strong>Beperkte versie:</strong> zvt-kazerne (alleen voor tweede pc)</li>
              </ul>
              
              <p>Voor de volledige documentatie over RHR Kazerne, bekijk het <a href="https://docs.google.com/document/d/114zTjZqZdjOs4TEOw-vfXHl2XWBYlxg9/edit?tab=t.0" target="_blank" rel="noopener noreferrer">officiële document</a>.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Standaard Werkwijze',
      icon: 'fas fa-tasks',
      cards: [
        {
          title: '1. Dagrapport starten',
          icon: 'fas fa-play',
          content: (
            <>
              <p>Rechtsboven: klik op "dagrapport starten" als er nog geen dagrapport actief is.</p>
              <p className="note">Dit is de eerste stap bij het openen van een post en moet worden uitgevoerd voordat andere acties kunnen worden ondernomen.</p>
            </>
          )
        },
        {
          title: '2. Centralist aanmelden',
          icon: 'fas fa-user-check',
          content: (
            <>
              <p>Typ je naam, klik op "centralist aanmelden"</p>
              <p className="note">Standaardpost: Post Zuid</p>
            </>
          )
        },
        {
          title: '3. Vlaggen en getijden',
          icon: 'fas fa-flag',
          content: (
            <>
              <p>Gebruik tabbladen 'Vlaggen' en 'Getijden & Weer' in het menu om actuele situatie in te vullen.</p>
              <div className="important-note">
                <p><strong>Let op:</strong> Het is belangrijk om deze informatie correct en tijdig bij te werken, zodat iedereen over de juiste informatie beschikt.</p>
              </div>
            </>
          )
        },
        {
          title: '4. Aan-/Afmelden strandwacht',
          icon: 'fas fa-user-plus',
          content: (
            <>
              <p><strong>Aanmelden:</strong></p>
              <p>Typ je naam in het veld 'meld je aan' en klik op "{'>'}"</p>
              
              <p><strong>Afmelden:</strong></p>
              <p>Klik op kruisje achter je naam.</p>
            </>
          )
        },
        {
          title: '5. Hulpverlening starten',
          icon: 'fas fa-first-aid',
          content: (
            <>
              <p>Startpagina → 'Nieuwe hulpverlening' of 'Kleine EHBO'</p>
              
              <p><strong>Bij 'Hulpverlening':</strong></p>
              <p>Kies categorieën → opslaan → formulier invullen</p>
              
              <p><strong>Bij 'Kleine EHBO':</strong></p>
              <p>Formulier direct invullen en opslaan</p>
            </>
          )
        },
        {
          title: '6. Hulpverlening afsluiten',
          icon: 'fas fa-check-circle',
          content: (
            <>
              <p>Voeg verslag of aandachtspunt toe bij afronding.</p>
              
              <ul className="info-list">
                <li><strong>Intern verslag</strong> = 'aanvullende informatie (intern)'</li>
                <li><strong>Extern verslag</strong> = veld onder "verslag van inzet" → zichtbaar voor Reddingsbrigade Nederland</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> afgeronde verslagen zijn niet meer te bewerken.</p>
              </div>
            </>
          )
        },
        {
          title: '7. Dagjournaal afsluiten',
          icon: 'fas fa-book-reader',
          content: (
            <>
              <p>Tabblad 'dagjournaal' → vul kort verslag in</p>
              <p>Geef aan bij welke externe dienst post is aangemeld (postniveau)</p>
            </>
          )
        },
        {
          title: '8. Ledenlijst',
          icon: 'fas fa-users',
          content: (
            <>
              <p>Tabblad 'Leden' bevat info van strandwachten</p>
              <p>Onjuiste/missende info? → mail Theo of Ernst voor aanpassing</p>
            </>
          )
        }
      ]
    }
  ]
}; 