import React from 'react';
import { InfoCardDetail } from '../../types';

export const actiefLidDetail: InfoCardDetail = {
  id: 'actief-lid',
  title: 'Werkafspraak – Actief Lid bij de ZRB',
  description: 'Criteria en richtlijnen voor het actief lidmaatschap bij de Zandvoortse Reddingsbrigade.',
  icon: 'fas fa-user-check',
  category: 'richtlijnen',
  intro: 'Binnen de Zandvoortse Reddingsbrigade (ZRB) gebruiken we de term "actief lid" om leden aan te duiden die een aantoonbare en structurele bijdrage leveren aan de werkzaamheden en activiteiten van de vereniging. Deze leden vormen de ruggengraat van de organisatie en worden op basis van hun inzet erkend en betrokken bij bepaalde privileges, voorzieningen en vervolgmogelijkheden.',
  sections: [
    {
      title: 'Betekenis en Voordelen',
      icon: 'fas fa-star',
      cards: [
        {
          title: 'Wat houdt het in om actief lid te zijn?',
          icon: 'fas fa-medal',
          content: (
            <>
              <p>Een actief lid komt in aanmerking voor:</p>
              
              <ul className="info-list checkmark">
                <li>Deelname aan bepaalde activiteiten (zoals teamuitjes, evenementen of specialistische trainingen)</li>
                <li>Gebruik van bepaalde faciliteiten en materialen, waaronder ZRB-kleding</li>
                <li>Toegang tot vervolg- en herhalingsopleidingen via de ZRB</li>
              </ul>
            </>
          )
        },
        {
          title: 'Doel van deze werkafspraak',
          icon: 'fas fa-bullseye',
          content: (
            <>
              <p>Deze definitie is opgesteld om uniformiteit te creëren binnen de organisatie en helderheid te verschaffen over wie als actief lid wordt beschouwd. Dit helpt bij:</p>
              
              <ul className="info-list checkmark">
                <li>Interne communicatie</li>
                <li>Registratie en administratie van inzet</li>
                <li>Gelijke behandeling bij het toekennen van rechten en faciliteiten</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Criteria voor actief lidmaatschap',
      icon: 'fas fa-clipboard-list',
      cards: [
        {
          title: 'Overzicht Criteria',
          icon: 'fas fa-list-check',
          content: (
            <>
              <p>Een ZRB-lid wordt als actief lid beschouwd als deze voldoet aan <strong>minimaal één</strong> van de volgende drie criteria:</p>
              
              <ul className="info-list numbered">
                <li>Operationeel inzetbaar lid</li>
                <li>Instructeur of kaderlid</li>
                <li>Bestuurs- of commissielid</li>
              </ul>
              
              <p className="important-note">De onderstaande kaarten beschrijven elk criterium in detail.</p>
            </>
          )
        },
        {
          title: '1. Operationeel inzetbaar lid',
          icon: 'fas fa-life-ring',
          content: (
            <>
              <div className="criteria-box">
                <p>Het lid:</p>
                <ul className="info-list checkmark">
                  <li>Neemt aantoonbaar deel aan operationele taken op of vanuit een van de posten van de ZRB</li>
                  <li>Heeft in het betreffende kalenderjaar minimaal 32 uur operationele inzet</li>
                  <li>Is ten minste 15 jaar oud</li>
                  <li>Beschikt over een geldig EHBO-diploma, of een door de ZRB erkend gelijkwaardig certificaat</li>
                </ul>
              </div>
            </>
          )
        },
        {
          title: '2. Instructeur of kaderlid',
          icon: 'fas fa-chalkboard-teacher',
          content: (
            <>
              <div className="criteria-box">
                <p>Het lid:</p>
                <ul className="info-list checkmark">
                  <li>Wordt ingezet als instructeur of kaderlid binnen de ZRB</li>
                  <li>Levert minimaal 32 uur inzet per jaar in deze rol</li>
                </ul>
              </div>
            </>
          )
        },
        {
          title: '3. Bestuurs- of commissielid',
          icon: 'fas fa-users-cog',
          content: (
            <>
              <div className="criteria-box">
                <p>Het lid:</p>
                <ul className="info-list checkmark">
                  <li>Is bestuurslid of commissielid van de ZRB</li>
                  <li>Is formeel aangewezen door het bestuur</li>
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
                <h4>Werkafspraak – Actief Lid bij de Zandvoortse Reddingsbrigade</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/open?id=1OZJKm1L9KWCT5ZhLjhSskboTDuDd2nf3&usp=drive_copy" 
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