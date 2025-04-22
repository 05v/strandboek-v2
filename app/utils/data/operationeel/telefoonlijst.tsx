import React from 'react';
import { InfoCardDetail } from '../../types';

export const telefoonlijstDetail: InfoCardDetail = {
  id: 'telefoonlijst',
  title: 'Verkorte Telefoonlijst',
  description: 'Belangrijke telefoonnummers van posten, hulpdiensten en meldkamers.',
  icon: 'fas fa-phone-alt',
  category: 'operationeel',
  intro: 'Deze pagina bevat een link naar de verkorte telefoonlijst met alle belangrijke contactgegevens voor de Reddingsbrigade Zandvoort en relevante diensten. Deze lijst is essentieel voor snelle communicatie tijdens operationele inzetten.',
  sections: [
    {
      title: 'Externe Documentatie',
      icon: 'fas fa-file-pdf',
      cards: [
        {
          title: 'Verkorte Telefoonlijst (PDF)',
          icon: 'fas fa-phone-alt',
          content: (
            <>
              <div className="document-container pdf-document">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>Reddingsbrigade Zandvoort – Verkorte Telefoonlijst</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Externe PDF</p>
                  <p><strong>Gebruik:</strong> Bewaar bij alle communicatiemiddelen voor snelle toegang</p>
                  <p><strong>Inhoud:</strong> Telefoonnummers van posten, hulpdiensten, ziekenhuizen en externe meldkamers</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1Rv9TyQ5kkSKSgLVF4P_V0hCiDctUSD5a/view" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open PDF Document
                  </a>
                  
                  <a href="https://drive.google.com/uc?export=download&id=1Rv9TyQ5kkSKSgLVF4P_V0hCiDctUSD5a" 
                    className="button secondary download-button"
                    download="ZRB_Verkorte_Telefoonlijst.pdf">
                    <i className="fas fa-download"></i> Download PDF
                  </a>
                </div>
              </div>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Dit is een externe PDF die opent in Google Drive. Zorg ervoor dat je bent ingelogd met een Google-account als je toegangsproblemen ondervindt.</p>
              </div>
              
              <h4>Telefoonnummers in deze lijst:</h4>
              <ul className="info-list">
                <li><strong>Reddingsbrigade Zandvoort:</strong> Posten en contactgegevens</li>
                <li><strong>Regio Reddingsbrigades:</strong> IJmuiden, Bloemendaal, Noordwijk</li>
                <li><strong>KNRM:</strong> Redschuur, Aerdenhout-Pier, Wipper</li>
                <li><strong>Huisartsenposten & Ziekenhuizen</strong></li>
                <li><strong>Meldkamers & Handhaving</strong></li>
                <li><strong>C2000 nummers voor communicatie met hulpdiensten</strong></li>
                <li><strong>Online meldkamersystemen</strong></li>
              </ul>
              
              <h4>Aanbevolen gebruik:</h4>
              <ol className="info-list numbered">
                <li>Download de PDF en print deze uit</li>
                <li>Bewaar exemplaren bij alle communicatiemiddelen</li>
                <li>Zorg dat de lijst altijd up-to-date is</li>
                <li>Gebruik de lijst alleen voor dienstgerelateerde communicatie</li>
              </ol>
            </>
          )
        }
      ]
    }
  ]
}; 