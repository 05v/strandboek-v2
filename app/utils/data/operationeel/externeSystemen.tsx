import React from 'react';
import { InfoCardDetail } from '../../types';

export const externeSystemenDetail: InfoCardDetail = {
  id: 'externe-systemen',
  title: 'Externe Systemen',
  description: 'Informatie over externe systemen zoals Meldkamer en Kustwacht In/Uitmelden.',
  icon: 'fas fa-external-link-alt',
  category: 'operationeel',
  intro: 'Naast het RHR-systeem gebruikt de Reddingsbrigade Zandvoort verschillende externe systemen voor communicatie met andere diensten. Deze pagina bevat alle informatie over deze systemen inclusief inloggegevens.',
  sections: [
    {
      title: 'Externe Systemen',
      icon: 'fas fa-globe',
      cards: [
        {
          title: 'Meldkamer Systeem',
          icon: 'fas fa-headset',
          content: (
            <>
              <h4>Meldkamer Systeem</h4>
              <ul className="info-list">
                <li><strong>URL:</strong> <a href="http://www.reddingsbrigade-meldkamer.nl" target="_blank" rel="noopener noreferrer">http://www.reddingsbrigade-meldkamer.nl</a></li>
                <li><strong>Inlog:</strong> kazerne@zrb.info</li>
                <li><strong>Wachtwoord:</strong> zvt131</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Dit systeem wordt gebruikt voor communicatie met de centrale meldkamer van de reddingsbrigades.</p>
              </div>
            </>
          )
        },
        {
          title: 'Kustwacht In/Uitmelden',
          icon: 'fas fa-ship',
          content: (
            <>
              <h4>Kustwacht In/Uitmelden</h4>
              <ul className="info-list">
                <li><strong>URL:</strong> <a href="https://www.strandveilig.nl/beschikbaar" target="_blank" rel="noopener noreferrer">https://www.strandveilig.nl/beschikbaar</a></li>
                <li><strong>Username:</strong> ZRB</li>
                <li><strong>Password:</strong> zvt131</li>
              </ul>
              
              <h4>Werkwijze:</h4>
              <ul className="info-list checkmark">
                <li>Zet schuifje onder kaart naar rechts/groen om in te melden</li>
                <li>Zet naar links/grijs om af te melden</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Per brigade 1 entry → eerste open post meldt aan, laatste post meldt ZRB af (check dit onderling)</p>
              </div>
            </>
          )
        }
      ]
    }
  ]
}; 