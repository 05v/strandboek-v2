import React from 'react';
import { InfoCardDetail } from '../../types';

export const kustwachtgebiedSOPDetail: InfoCardDetail = {
  id: 'kustwachtgebied-sop',
  title: 'SOP WHV 003 – Werkafspraak Kustwachtgebied',
  description: 'Standaard Operationele Procedure voor reddingsbrigades in het kustwachtgebied.',
  icon: 'fas fa-ship',
  category: 'operationeel',
  intro: 'Deze Standaard Operationele Procedure (SOP) beschrijft de werkafspraken voor reddingsbrigades die actief zijn in het kustwachtgebied. Het biedt een duidelijk stappenplan voor effectieve samenwerking tussen reddingsbrigades, Kustwacht en KNRM.',
  sections: [
    {
      title: 'Documentgegevens',
      icon: 'fas fa-file-alt',
      cards: [
        {
          title: 'SOP WHV 003 – Werkafspraak Kustwachtgebied',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <div className="document-info">
                <p><strong>Naam:</strong> Werkafspraak Kustwachtgebied</p>
                <p><strong>Onderdeel van:</strong> WHV – Partners</p>
                <p><strong>Doelgroep:</strong> Reddingsbrigades (inclusief alarmploegen)</p>
                <p><strong>Versie:</strong> 1.0</p>
                <p><strong>Datum:</strong> 29 november 2023</p>
                <p><strong>Status:</strong> Gepubliceerd</p>
                <p><strong>Opstellers:</strong> JKm, JZw, MEg</p>
                <p><strong>Herziening:</strong> Jaarlijks</p>
                <p><strong>Contact:</strong> info@reddingsbrigade.nl t.a.v. afdeling Waterhulpverlening</p>
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
              <p>Reddingsbrigades kunnen door het Kustwachtcentrum (KWC) gealarmeerd worden voor:</p>
              <ul className="info-list">
                <li>Incidenten op zee</li>
                <li>SAR-acties</li>
                <li>Ondersteuning bij calamiteiten</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Alarmploegen zijn 24/7 inzetbaar. Posten moeten hun aanwezigheidsstatus actueel houden via Strandveilig.nl.</p>
              </div>
            </>
          )
        },
        {
          title: 'Doel',
          icon: 'fas fa-compass',
          content: (
            <>
              <p>Het beschrijven van het inzetprotocol kustwachtgebied en het bevorderen van eenduidige samenwerking tussen:</p>
              <ul className="info-list">
                <li>Reddingsbrigades</li>
                <li>Kustwacht (KW)</li>
                <li>KNRM</li>
              </ul>
            </>
          )
        },
        {
          title: 'Beleid',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <p>Afspraak tussen:</p>
              <ul className="info-list">
                <li>Kustwachtcentrum (KWC)</li>
                <li>Reddingsbrigade Nederland (RN)</li>
                <li>Koninklijke Nederlandse Redding Maatschappij (KNRM)</li>
              </ul>
              <p>Gericht op duidelijkheid, continuïteit en verantwoordelijkheid.</p>
            </>
          )
        },
        {
          title: 'Verantwoordelijkheden',
          icon: 'fas fa-user-shield',
          content: (
            <>
              <p><strong>KWC:</strong></p>
              <ul className="info-list">
                <li>Alarmeert RB's via C2000</li>
                <li>Verantwoordelijk voor melding en inzetcoördinatie</li>
              </ul>
              
              <p><strong>Reddingsbrigade (RB):</strong></p>
              <ul className="info-list">
                <li>Zorgt voor actueel aanwezigheidsbeheer via www.strandveilig.nl</li>
                <li>Verantwoordelijk voor eigen uitrukprocedures</li>
                <li>Regelt eigen piepers</li>
              </ul>
              
              <p><strong>Reddingsbrigade Nederland (RN):</strong></p>
              <ul className="info-list">
                <li>Jaarlijkse inventarisatie deelname, inzetbaarheid en samenwerking</li>
                <li>Actualiseren inzetprotocol</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Procedure',
      icon: 'fas fa-life-ring',
      cards: [
        {
          title: '1. Aanwezigheid melden',
          icon: 'fas fa-calendar-check',
          content: (
            <>
              <ul className="info-list">
                <li><strong>Via webapplicatie:</strong> www.strandveilig.nl</li>
                <li><strong>Bij storing:</strong> telefonisch 088-9584000 (bgg 0900-0111)</li>
              </ul>
              
              <p>Melding bij:</p>
              <ul className="info-list">
                <li>Aanvang dienst</li>
                <li>Voldoende bezetting (minimaal 1 natte inzetbare eenheid)</li>
                <li>Einde dienst</li>
              </ul>
            </>
          )
        },
        {
          title: '2. Alarmering',
          icon: 'fas fa-bell',
          content: (
            <>
              <ol className="nrv-list mb-4">
                <li>Primair via marifoon (voor waarnemer aan boord)</li>
                <li>Kustwacht VHF-kanaal 16</li>
                <li>Via C2000 indien bereik (voor officier op de wal)</li>
                <li>Telefonisch indien nodig: <a href="tel:0900-0111" className="text-orange-500 hover:underline">0900-0111</a></li>
              </ol>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Geen melding? → KWC alarmeert volgende beschikbare eenheid</p>
              </div>
              
              <p>Alarmploegen hebben 10 min om zich te melden</p>
            </>
          )
        },
        {
          title: '3. Tijdens incident',
          icon: 'fas fa-running',
          content: (
            <>
              <p>RB geeft status door aan KWC:</p>
              <ul className="info-list">
                <li><strong>Status 1:</strong> Onderweg</li>
                <li><strong>Status 2:</strong> Ter plaatse</li>
                <li><strong>Status 3:</strong> Afgehandeld</li>
              </ul>
              
              <p>Communicatie via:</p>
              <ul className="info-list">
                <li>Marifoon, C2000, telefoon, analoog of lokaal afgesproken methode</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Elke 15 min Situatie Rapportage (SitRap) via On Scene Coördinator (OSC)</p>
              </div>
            </>
          )
        },
        {
          title: '4. Afhandeling',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <ul className="info-list">
                <li>Incident registreren in eigen systeem</li>
                <li>Terugkoppeling aan Watch Officer KWC / CCC</li>
                <li>Evaluatie & inschakeling psychosociale nazorg indien nodig</li>
              </ul>
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
              <p>Inzetprotocol kustwachtgebied (2020):</p>
              <p className="reference">https://bondsinfo.reddingsbrigade.nl/servicedesk/kennisbank/273</p>
              
              <p>Feedbackformulier incidenten en alarmering (Google Form):</p>
              <p className="reference">https://forms.office.com/Pages/ResponsePage.aspx?id=35ZY75C1eEuMiGGSrtTYoXCtFz_EWsRErsaULssQ3xxUMlQ4STVUUlBYVElER1lKWFYyNlNGWDlIWS4u</p>
            </>
          )
        },
        {
          title: 'Bijlage 1 – Alarmeringsteksten',
          icon: 'fas fa-comment-dots',
          content: (
            <>
              <div className="alert-texts">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Incidenttype</th>
                      <th>Voorbeeldmeldingen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Persoon</td>
                      <td>Zwemmer vermist, Surfer in problemen, Persoon vermist duingebied</td>
                    </tr>
                    <tr>
                      <td>Vaartuig</td>
                      <td>Vaartuig gezonken, omgeslagen, brand, motorproblemen</td>
                    </tr>
                    <tr>
                      <td>Hulpverlening</td>
                      <td>Medevac, Assistentie ambulance, Duiker in problemen</td>
                    </tr>
                    <tr>
                      <td>Overige</td>
                      <td>Vuurpijl waargenomen, Gmdss alert, Oefening</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )
        },
        {
          title: 'Bijlage 2 – Afkortingen & Locaties',
          icon: 'fas fa-map-marker-alt',
          content: (
            <>
              <p>Afkortingen van RB's en KNRM-stations langs de Nederlandse kust:</p>
              <table className="custom-table location-table">
                <thead>
                  <tr>
                    <th>Locatie</th>
                    <th>Reddingsbrigade</th>
                    <th>KNRM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Zandvoort</td>
                    <td>ZVT</td>
                    <td>ZVT</td>
                  </tr>
                  <tr>
                    <td>IJmuiden</td>
                    <td>IJM</td>
                    <td>IJM</td>
                  </tr>
                  <tr>
                    <td>Noordwijk</td>
                    <td>NAZ</td>
                    <td>NAZ</td>
                  </tr>
                  <tr>
                    <td>Texel De Koog</td>
                    <td>TXK</td>
                    <td>TXK</td>
                  </tr>
                </tbody>
              </table>
              <p className="note">Volledige lijst is opgenomen in het originele document.</p>
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
                <h4>SOP WHV 003 – Werkafspraak Kustwachtgebied</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Gebruik:</strong> Standaard Operationele Procedure voor reddingsbrigades in kustwachtgebied</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1dQnzghpuL4Xb63lga79ayT0m4zfBkY8B/view" 
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