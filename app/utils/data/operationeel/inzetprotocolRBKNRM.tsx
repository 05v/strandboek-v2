import React from 'react';
import { InfoCardDetail } from '../../types';

export const inzetprotocolRBKNRMDetail: InfoCardDetail = {
  id: 'inzetprotocol-rb-knrm',
  title: 'Inzetprotocol Reddingsbrigades & KNRM Lifeguards',
  description: 'Samenwerkingsprotocol tussen Reddingsbrigades, KNRM Lifeguards en het Kustwachtcentrum voor alarmeringen en inzetten.',
  icon: 'fas fa-life-ring',
  category: 'operationeel',
  intro: 'Dit protocol beschrijft de werkwijze voor inzet van Reddingsbrigades en KNRM Lifeguards bij watergerelateerde incidenten. Het omvat afspraken over alarmering, communicatie, en taken en verantwoordelijkheden in samenwerking met het Kustwachtcentrum (KWC).',
  sections: [
    {
      title: 'Documentgegevens',
      icon: 'fas fa-file-alt',
      cards: [
        {
          title: 'Inzetprotocol Reddingsbrigades & KNRM Lifeguards',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <div className="document-info">
                <p><strong>Titel:</strong> Inzetprotocol Reddingsbrigades & KNRM Lifeguards</p>
                <p><strong>Opgesteld door:</strong> Kustwachtcentrum, Reddingsbrigade Nederland, KNRM</p>
                <p><strong>Versie:</strong> 2021-1.0</p>
                <p><strong>Datum:</strong> 21 maart 2021</p>
                <p><strong>Contact:</strong> info@reddingsbrigade.nl | Piket RN: 06-12392283 | KNRM Lifeguards: 06-10703411</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Inleiding & Achtergrond',
      icon: 'fas fa-book',
      cards: [
        {
          title: 'Achtergrond',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <p>Het inzetprotocol regelt:</p>
              <ul className="info-list">
                <li>Toezicht op stranden in zomer door Reddingsbrigades en KNRM Lifeguards (hierna: RB).</li>
                <li>Alarmploegen & KNRM-boten zijn 365 dagen per jaar, 24/7 inzetbaar.</li>
              </ul>
              
              <p><strong>Incidentmeldingen kunnen binnenkomen via:</strong></p>
              <ul className="info-list">
                <li>Strandbezoekers → Regionale Meldkamer (RMK)</li>
                <li>Kustwachtcentrum (KWC) Den Helder</li>
              </ul>
              
              <p>Inzet RB's is sneller dan KNRM bij incidenten dichtbij kustlijn.</p>
            </>
          )
        },
        {
          title: 'Samenwerkende partijen',
          icon: 'fas fa-handshake',
          content: (
            <>
              <ul className="info-list">
                <li>Reddingsbrigade Nederland (RN)</li>
                <li>KNRM Reddingstations</li>
                <li>KNRM Lifeguards</li>
                <li>Kustwachtcentrum (KWC)</li>
              </ul>
            </>
          )
        },
        {
          title: 'Evaluatie',
          icon: 'fas fa-sync-alt',
          content: (
            <>
              <p>Jaarlijkse evaluatie van:</p>
              <ul className="info-list">
                <li>In-/uitmelden</li>
                <li>Werkwijze & organisatie</li>
                <li>Alarmeringsprioriteiten (bijv. kitesurfers)</li>
                <li>Communicatie</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Inzetwerkwijzen',
      icon: 'fas fa-bell',
      cards: [
        {
          title: 'Wanneer wordt gealarmeerd',
          icon: 'fas fa-stopwatch',
          content: (
            <>
              <ul className="info-list">
                <li>Bij aanwezigheid strandploeg: reactietijd max. 2 min.</li>
                <li>Bij alleen alarmploeg: reactietijd max. 10 min.</li>
                <li>Geen RB beschikbaar? → KNRM + buurgemeente-RB wordt gealarmeerd.</li>
              </ul>
            </>
          )
        },
        {
          title: 'Waarvoor wordt gealarmeerd',
          icon: 'fas fa-water',
          content: (
            <>
              <ul className="info-list">
                <li>Alleen voor watergerelateerde incidenten (zwemmers, drijvers, surfers).</li>
                <li>Incidenten op strand (EHBO etc.) gaan naar Regionale Meldkamer.</li>
                <li>Inzetgebied RB: tot max. 1 km uit de kust, volgens gemeentelijke indeling.</li>
                <li>Bij grotere vaartuigen of onduidelijkheid → altijd ook KNRM alarmeren.</li>
              </ul>
            </>
          )
        },
        {
          title: 'Hoe wordt gealarmeerd',
          icon: 'fas fa-broadcast-tower',
          content: (
            <>
              <p>Via Vision-systeem KWC met geprogrammeerde capcodes.</p>
              
              <p><strong>Alarmeringsteksten bevatten:</strong></p>
              <ul className="info-list">
                <li>Incidenttype</li>
                <li>Prioriteit (Prio 1 t/m 3)</li>
                <li>Eenheidscodes (bijv. ZVTrbs = Zandvoort strandploeg)</li>
              </ul>
              
              <p>Capcodebeheer via KNRM.</p>
              
              <p><strong>Prio-categorieën:</strong></p>
              <ul className="info-list">
                <li>Prio 1: Levensbedreigend / ernstige schade</li>
                <li>Prio 2: Spoed, maar niet levensbedreigend</li>
                <li>Prio 3: Oefeningen, afmeldingen, waarschuwen</li>
              </ul>
            </>
          )
        },
        {
          title: 'Voorbeelden alarmering',
          icon: 'fas fa-comment-dots',
          content: (
            <>
              <ul className="info-list">
                <li>PRIO 2, AFGEDREVEN DRIJVEND OBJECT, ZVTrbs</li>
                <li>PRIO 1, ZWEMMER IN PROBLEMEN, NAZrba / KAZrba / NAZ / KAZ</li>
                <li>PRIO 1, VAARTUIG MOTOR / STUUR PROBLEMEN, VLI</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Communicatie & Statusrapportage',
      icon: 'fas fa-broadcast-tower',
      cards: [
        {
          title: 'Aanwezigheid doorgeven',
          icon: 'fas fa-calendar-check',
          content: (
            <>
              <p>Via:</p>
              <ul className="info-list">
                <li>www.strandveilig.nl</li>
                <li>Telefoon: 088-9584000 (bgg: 0900-0111)</li>
                <li>Marifoon (kanaal 16)</li>
              </ul>
              
              <p>Bij afwijkingen (buiten bloktijden) altijd melden</p>
            </>
          )
        },
        {
          title: 'Alarmering & statusupdates',
          icon: 'fas fa-bullhorn',
          content: (
            <>
              <p><strong>Inmelden via:</strong></p>
              <ul className="info-list">
                <li>Marifoon kanaal 16 (voorkeur)</li>
                <li>Telefoon: 0223-542300</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Bij geen reactie binnen 2 min → KWC alarmeert andere eenheid</p>
              </div>
              
              <p><strong>Statusmeldingen aan KWC:</strong></p>
              <ul className="info-list">
                <li>Status 1 = Onderweg</li>
                <li>Status 2 = Ter plaatse</li>
                <li>Status 3 = Afgehandeld</li>
              </ul>
              
              <p><strong>SitRap's (situatierapportages) periodiek via:</strong></p>
              <ul className="info-list">
                <li>Marifoon / telefoon</li>
                <li>OSC (On Scene Coördinator)</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Aanvang & voorwaarden',
      icon: 'fas fa-clipboard-check',
      cards: [
        {
          title: 'Voorwaarden deelname',
          icon: 'fas fa-check',
          content: (
            <>
              <p>Start zomerseizoen: jaarlijks op 1 juni</p>
              
              <p><strong>RB moet voldoen aan:</strong></p>
              <ul className="info-list">
                <li>Structureel toezicht op kustgebied</li>
                <li>Aansluiting bij afspraken inzetprotocol</li>
                <li>Minimaal 1 natte inzetbare eenheid beschikbaar</li>
              </ul>
            </>
          )
        },
        {
          title: 'Kwaliteit & audits',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <p>Werkbezoeken door Kustwacht in zomerperiode</p>
              
              <p><strong>Evaluatiepunten:</strong></p>
              <ul className="info-list">
                <li>Bezetting, materieel, communicatie, opleiding & veiligheid</li>
                <li>Jaarlijkse audit door RN & KNRM bij KWC</li>
              </ul>
              
              <p><strong>Inzetgegevens na incident door RB:</strong></p>
              <ul className="info-list">
                <li>In eigen registratiesysteem</li>
                <li>Terugkoppeling aan KWC (Duty/Watch Officer)</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Quickguide - Praktisch Overzicht',
      icon: 'fas fa-list-alt',
      cards: [
        {
          title: 'Samenvatting inzetstappen',
          icon: 'fas fa-check-square',
          content: (
            <>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Stap</th>
                    <th>Actie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Inmelden</td>
                    <td>www.strandveilig.nl of telefonisch</td>
                  </tr>
                  <tr>
                    <td>Uitmelden</td>
                    <td>Bij einde dienst of onvoldoende bezetting</td>
                  </tr>
                  <tr>
                    <td>Voldoende bezetting</td>
                    <td>Minimaal 1 natte inzetbare eenheid</td>
                  </tr>
                  <tr>
                    <td>Alarmering</td>
                    <td>Binnen 2 min inmelden via marifoon of telefoon</td>
                  </tr>
                  <tr>
                    <td>Tijdens incident</td>
                    <td>Regelmatig SitRap's via marifoon of telefoon</td>
                  </tr>
                  <tr>
                    <td>Afloop incident</td>
                    <td>Telefonisch melden aan KWC</td>
                  </tr>
                  <tr>
                    <td>Persvoorlichting</td>
                    <td>Alleen na overleg met KWC, RN en KNRM</td>
                  </tr>
                </tbody>
              </table>
            </>
          )
        }
      ]
    },
    {
      title: 'Bijlagen',
      icon: 'fas fa-paperclip',
      cards: [
        {
          title: 'Overzicht bijlagen',
          icon: 'fas fa-list',
          content: (
            <>
              <ul className="info-list">
                <li>Bijlage 1: Deelnemende reddingsbrigades</li>
                <li>Bijlage 2: Capcode-overzicht (separaat)</li>
                <li>Bijlage 3: Aanwezigheidsafspraken</li>
                <li>Bijlage 4: Alarmeringsteksten & afkortingen</li>
                <li>Bijlage 5: Quickguide inzetprotocol</li>
                <li>Bijlage 6: Aandachtspunten samenwerking 2021</li>
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
                <h4>Inzetprotocol Reddingsbrigades & KNRM Lifeguards (Kustwachtcentrum)</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern Google Document</p>
                  <p><strong>Gebruik:</strong> Protocollair document voor kustwachtgerelateerde inzetten</p>
                </div>
                
                <div className="button-container">
                  <a href="https://docs.google.com/document/d/1K67tPh62Rrqaid3sCDind1ECzymsr0pf/edit?tab=t.0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open Origineel Document
                  </a>
                </div>
              </div>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Deze pagina bevat een samenvatting van het inzetprotocol. Voor de meest actuele informatie raadpleeg altijd het originele document via bovenstaande link.</p>
              </div>
            </>
          )
        }
      ]
    }
  ]
}; 