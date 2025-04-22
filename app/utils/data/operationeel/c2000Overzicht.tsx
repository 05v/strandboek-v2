import React from 'react';
import { InfoCardDetail } from '../../types';

export const c2000OverzichtDetail: InfoCardDetail = {
  id: 'c2000-overzicht',
  title: 'C2000 Verkort Overzicht',
  description: 'Overzicht van C2000 communicatieprotocollen en statuscodes voor de Zandvoortse Reddingsbrigade.',
  icon: 'fas fa-broadcast-tower',
  category: 'operationeel',
  intro: 'C2000 is het communicatienetwerk voor de Nederlandse hulpdiensten. Dit overzicht bevat de belangrijkste informatie over het gebruik van C2000 voor leden van de Zandvoortse Reddingsbrigade.',
  sections: [
    {
      title: 'C2000 Communicatie',
      icon: 'fas fa-satellite-dish',
      cards: [
        {
          title: 'Algemeen',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <div className="important-note">
                <p><strong>Sinds 14 mei 2019</strong> verlopen alle alarmeringen via de brandweercentralisten – ook voor medische inzetten.</p>
              </div>
              
              <ul className="info-list">
                <li>In de voertuigen en op beide meldkamers ligt de Fleetmap (printversie) van alle C2000-gespreksgroepen.</li>
                <li>Bij aanwezigheid van een ingemeld RB-voertuig wordt de 'strandploeg' gealarmeerd.</li>
                <li>Zijn beide voertuigen buiten dienst, dan wordt de 'alarmploeg' gealarmeerd.</li>
                <li>Beide capcodes zijn zichtbaar op de pagers.</li>
              </ul>
            </>
          )
        },
        {
          title: 'Normale stranddag procedure',
          icon: 'fas fa-umbrella-beach',
          content: (
            <>
              <div className="c2000-procedure">
                <div className="procedure-item">
                  <div className="procedure-icon"><i className="fas fa-door-open"></i></div>
                  <div className="procedure-text">
                    <p><strong>Post open?</strong> → Voertuig in dienst zetten met Status 5</p>
                  </div>
                </div>
                
                <div className="procedure-item">
                  <div className="procedure-icon"><i className="fas fa-door-closed"></i></div>
                  <div className="procedure-text">
                    <p><strong>Post sluiten?</strong> → Voertuig buiten dienst met Status 6</p>
                  </div>
                </div>
              </div>
              
              <div className="important-note">
                <p><strong>Belangrijk:</strong> Postmobilofoons geven geen status door → altijd 'in dienst'</p>
              </div>
            </>
          )
        },
        {
          title: 'Basis Inzetprotocol na alarmering (A1 of P1)',
          icon: 'fas fa-bell',
          content: (
            <>
              <h4>Na alarmering:</h4>
              <ul className="info-list numbered">
                <li>Meld je op RMG05 of op de meegegeven gespreksgroep via pager.</li>
                <li>Brandweercentralist geeft inzetinformatie door.</li>
              </ul>
              
              <h4>Voertuigstatussen:</h4>
              <div className="status-codes">
                <div className="status-code">
                  <span>1</span> Onderweg
                </div>
                <div className="status-code">
                  <span>2</span> Ter plaatse
                </div>
                <div className="status-code">
                  <span>4</span> Beschikbaar na inzet
                </div>
                <div className="status-code">
                  <span>5</span> Terug op de post
                </div>
              </div>
              
              <h4>SitRep geven:</h4>
              <ul className="info-list">
                <li>Gebruik <strong>Status 8</strong> = Spraakaanvraag</li>
                <li>Gebruik <strong>Status 9</strong> = Urgente spraakaanvraag</li>
                <li>Wordt opgepakt door de brandweer</li>
              </ul>
              
              <div className="info-note">
                <p>Hulpdiensten worden gekoppeld aan dezelfde RMG-groep (Ambu, MMT, Politie, Brandweer).</p>
                <p>Gebruik 'Push to Talk' voor direct contact</p>
              </div>
              
              <h4>Overleg met Ambulance-meldkamer?</h4>
              <p>Alleen via telefoon: <a href="tel:088-0613976">088-0613976</a> (info/overleg)</p>
              
              <h4>Na inzet:</h4>
              <ul className="info-list numbered">
                <li>Voertuig meldt Status 4 (beschikbaar)</li>
                <li>Bij terugkomst: Status 5 (op de post)</li>
                <li>Zowel voertuig als post schakelen terug naar RMG05</li>
              </ul>
            </>
          )
        },
        {
          title: 'Zelf ambulance aanvragen',
          icon: 'fas fa-ambulance',
          content: (
            <>
              <p>Alleen telefonisch bij directe nood op de post</p>
              
              <p className="emergency-number">Bel: <a href="tel:088-0613962">088-0613962</a> (Ambulance spoedlijn)</p>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Zorg voor volledige incidentgegevens bij hand</p>
              </div>
            </>
          )
        },
        {
          title: 'Hulpmiddelen & Locaties',
          icon: 'fas fa-toolbox',
          content: (
            <>
              <h4>Fleetmap (volledig overzicht gespreksgroepen):</h4>
              <p>Beschikbaar op de posten én in voertuigen</p>
              
              <h4>Zonneklep (passagierszijde) voertuigen:</h4>
              <p>Verkort overzicht: statuscodes, gespreksgroepen, verkorte codes, belangrijke telefoonnummers</p>
              
              <h4>Verkorte telefoonlijst posten:</h4>
              <p>Belangrijkste gespreksgroepen, verkorte codes en telefoonnummers</p>
              
              <div className="info-note">
                <p><strong>Bijlage 1:</strong> Statusverloop (welke status wanneer gebruiken)</p>
                <p><strong>Bijlage 2:</strong> Zonneklepkaart (verkort overzicht in voertuigen)</p>
              </div>
            </>
          )
        },
        {
          title: 'Feedback na inzet met C2000',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <p>Na elke inzet waarbij C2000 is gebruikt, dient onderstaand formulier ingevuld te worden:</p>
              
              <div className="link-container">
                <h4>Feedbackformulier:</h4>
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=5YvVUrRpG0KDbrktvgsGfVCAEf-MlehFvUrvAd4QfnxURDNENTAwR0hUMkhGOVlXQlFRUkxLUlkyTC4u" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button primary">
                  <i className="fas fa-external-link-alt"></i> Open Feedbackformulier
                </a>
              </div>
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
                <h4>C2000 Verkort Overzicht – Zandvoortse Reddingsbrigade</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Gebruik:</strong> Verkort overzicht van C2000 communicatie voor de Zandvoortse Reddingsbrigade</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/10TG9kewdYs3OplSYJTWguelm3sCI6cN8/view" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open Origineel Document
                  </a>
                </div>
              </div>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Deze pagina bevat een samenvatting van het C2000 protocol. Voor de meest actuele informatie raadpleeg altijd het originele document via bovenstaande link.</p>
              </div>
            </>
          )
        }
      ]
    }
  ]
}; 