import React from 'react';
import { InfoCardDetail } from '../../types';

export const waarschuwingsvlaggenDetail: InfoCardDetail = {
  id: 'waarschuwingsvlaggen',
  title: 'Waarschuwingsvlaggen Strand',
  description: 'Informatie over de gele en rode waarschuwingsvlaggen aan het strand van Zandvoort.',
  icon: 'fas fa-flag',
  category: 'operationeel',
  intro: 'Het waarschuwingssysteem met vlaggen is een internationaal afgesproken middel om strandbezoekers te informeren over gevaren in zee. In Zandvoort wordt dit systeem toegepast via de gele en rode vlag. Het gebruik van deze vlaggen is opgenomen in de Algemene Plaatselijke Verordening (APV).',
  sections: [
    {
      title: 'Waarschuwingsvlaggen aan het strand',
      icon: 'fas fa-flag',
      cards: [
        {
          title: 'Gele vlag – Waarschuwing',
          icon: 'fas fa-exclamation-triangle',
          content: (
            <>
              <div className="flag-indicator warning">
                <div className="flag yellow-flag"></div>
                <div className="flag-info">
                  <h4>Gele vlag – Waarschuwing</h4>
                  <p><strong>Betekenis:</strong> Baden en zwemmen is gevaarlijk. Extra oplettendheid is vereist.</p>
                </div>
              </div>
              
              <h4>Situaties waarbij de gele vlag gehesen wordt:</h4>
              <ul className="info-list">
                <li><strong>Oostenwind (aflandige wind):</strong> Altijd gele vlag – extra gevaarlijk i.c.m. opblaasobjecten</li>
                <li>Hoge golven / veel stroming bij goed weer</li>
                <li>Sterk stromende muien (getijstroom)</li>
                <li>Watersportevenementen dichtbij de kust</li>
                <li>Op inschatting van de Reddingsbrigade, Politie, Brandweer of gemeente</li>
              </ul>
              
              <h4>Procedure:</h4>
              <ol className="info-list numbered">
                <li>Reddingsbrigade overlegt met EHBO-post de Rotonde.</li>
                <li>EHBO-post belt de strandpaviljoens (met rood/witte vlaggenmast).</li>
                <li>Gele vlag wordt gehesen voor die dag en 's avonds weer binnengehaald.</li>
              </ol>
            </>
          )
        },
        {
          title: 'Rode vlag – Verbod',
          icon: 'fas fa-times-circle',
          content: (
            <>
              <div className="flag-indicator danger">
                <div className="flag red-flag"></div>
                <div className="flag-info">
                  <h4>Rode vlag – Verbod</h4>
                  <p><strong>Betekenis:</strong> Baden en zwemmen is verboden.</p>
                </div>
              </div>
              
              <h4>Gebruik:</h4>
              <p>Wordt alleen gehesen in extreme situaties op formeel besluit van de burgemeester. In de praktijk komt dit in Zandvoort zelden voor.</p>
              
              <h4>Voorbeelden waarbij de rode vlag kan worden gehesen:</h4>
              <ul className="info-list">
                <li>Plotseling gevaarlijk weer (bliksem, storm, onweer)</li>
                <li>Milieuvervuiling met gezondheidsrisico's</li>
                <li>Zandopspuiting, explosieven, wrakdelen</li>
              </ul>
            </>
          )
        },
        {
          title: 'Verantwoordelijkheden en aanvullende maatregelen',
          icon: 'fas fa-tasks',
          content: (
            <>
              <h4>Strandpachter</h4>
              <ul className="info-list">
                <li>Belangrijke schakel in het waarschuwingssysteem</li>
                <li>Verantwoordelijk voor het hijsen en binnenhalen van de vlag</li>
                <li>Belinstructie: EHBO-post de Rotonde belt indien vlag gehesen moet worden</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong></p>
                <ul className="info-list alert">
                  <li>Hang geen andere vlaggen (zoals reclame) in de rood/witte mast</li>
                  <li>Haal vlag 's avonds altijd binnen</li>
                </ul>
              </div>
              
              <h4>Reddingsbrigade</h4>
              <p>Kan aanvullend besluiten tot:</p>
              <ul className="info-list checkmark">
                <li>Plaatsing van muienborden</li>
                <li>Afzetting van delen van de zee</li>
                <li>Waarschuwingen via social media of pers</li>
              </ul>
            </>
          )
        },
        {
          title: 'Meer informatie',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <p>Veiligheidstips voor bezoekers: <a href="https://www.zrb.info/veilig" target="_blank" rel="noopener noreferrer">www.zrb.info/veilig</a></p>
              
              <h4>Vragen? Neem contact op met:</h4>
              <ul className="info-list">
                <li>Reddingspost Noord: <a href="tel:023-5712376">023-5712376</a></li>
                <li>Reddingspost Zuid: <a href="tel:023-5712687">023-5712687</a></li>
                <li>EHBO-post de Rotonde: <a href="tel:023-5714445">023-5714445</a></li>
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
                <i className="fas fa-file-alt pdf-icon"></i>
                <h4>ZRB Gele vlag strandpaviljoens extern</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern Google Document</p>
                  <p><strong>Gebruik:</strong> Officiële informatie over het waarschuwingsvlaggensysteem aan het strand van Zandvoort</p>
                </div>
                
                <div className="button-container">
                  <a href="https://docs.google.com/document/d/12LfW2_7CQzh1hvNnYwye0SoXrF-8bi1G/edit?tab=t.0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open Origineel Document
                  </a>
                </div>
              </div>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Deze pagina bevat een samenvatting van het officiële waarschuwingsvlaggenprotocol. Voor de meest actuele informatie raadpleeg altijd het originele document via bovenstaande link.</p>
              </div>
            </>
          )
        }
      ]
    }
  ]
}; 