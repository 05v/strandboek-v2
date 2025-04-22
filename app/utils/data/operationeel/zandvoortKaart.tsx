import React from 'react';
import { InfoCardDetail } from '../../types';

export const zandvoortKaartDetail: InfoCardDetail = {
  id: 'zandvoort-kaart',
  title: 'Plattegrond Zandvoort & Boulevard',
  description: 'Schematische plattegrond van Zandvoort & Boulevard, te gebruiken in de zonneklep van voertuigen.',
  icon: 'fas fa-map',
  category: 'operationeel',
  intro: 'Deze pagina bevat een link naar de schematische plattegrond van Zandvoort & Boulevard. Dit document is bedoeld om in de zonneklep van de voertuigen te leggen voor snelle oriëntatie tijdens inzetten.',
  sections: [
    {
      title: 'Externe Documentatie',
      icon: 'fas fa-file-pdf',
      cards: [
        {
          title: 'Plattegrond Zandvoort & Boulevard (PDF)',
          icon: 'fas fa-map-marked-alt',
          content: (
            <>
              <div className="document-container pdf-document">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>Overzicht Zandvoort & Boulevard - Schematische Plattegrond</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Externe PDF</p>
                  <p><strong>Gebruik:</strong> Bedoeld om in de zonneklep van de auto's te leggen voor snelle oriëntatie</p>
                  <p><strong>Laatst bijgewerkt:</strong> Raadpleeg document voor actuele datum</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1or9JjvYjEzHI1R1QDFxXlXTjT18RU6MS/view" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open PDF Document
                  </a>
                  
                  <a href="https://drive.google.com/uc?export=download&id=1or9JjvYjEzHI1R1QDFxXlXTjT18RU6MS" 
                    className="button secondary download-button"
                    download="Zandvoort_Boulevard_Plattegrond.pdf">
                    <i className="fas fa-download"></i> Download PDF
                  </a>
                </div>
              </div>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Dit is een externe PDF die opent in Google Drive. Zorg ervoor dat je bent ingelogd met een Google-account als je toegangsproblemen ondervindt.</p>
              </div>
              
              <h4>Aanbevolen gebruik:</h4>
              <ol className="info-list numbered">
                <li>Download de PDF en print deze uit</li>
                <li>Lamineer de uitgeprinte kaart indien mogelijk</li>
                <li>Plaats de gelamineerde kaart in de zonneklep van het voertuig</li>
                <li>Controleer regelmatig of er updates beschikbaar zijn van deze kaart</li>
              </ol>
            </>
          )
        }
      ]
    }
  ]
}; 