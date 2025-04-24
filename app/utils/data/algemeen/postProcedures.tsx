import React from 'react';
import { InfoCardDetail } from '../../types';

export const postProceduresDetail: InfoCardDetail = {
  id: 'post-procedures',
  title: 'Post Openen en Sluiten',
  description: 'Procedures voor het correct openen en sluiten van een reddingspost. Checklists voor alle taken en meldplichten.',
  icon: 'fas fa-door-open',
  category: 'algemeen',
  intro: 'Deze checklist geeft een overzicht van de basisactiviteiten die worden verwacht van een lifeguard of postmedewerker bij het openen en sluiten van een reddingspost. Let op: per reddingspost kunnen aanvullende handelingen gelden.',
  sections: [
    {
      title: 'Checklist Openen Post',
      icon: 'fas fa-door-open',
      cards: [
        {
          title: 'Algemene handelingen',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Vlag van de reddingsbrigade hijsen</li>
                <li>Gele vlag hijsen bij Oostenwind en melding maken bij de rotonde</li>
                <li>Computer opstarten</li>
                <li>RHR-dagrapport openen</li>
                <li>Presentielijst invullen</li>
                <li>Getijtabel instellen op actuele waterstand</li>
                <li>Beide mobilofoons aanzetten en inmelden</li>
                <li>Weerbericht controleren op bijzonderheden</li>
                <li>EHBO-ruimte controleren en zo nodig aanvullen</li>
                <li>Containers en opslaghokken openen</li>
                <li>Eventueel strand of boulevard afzetten met pionnen of ketting</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Controleer altijd of alle apparatuur (portofoons, AED's, etc.) volledig is opgeladen en correct functioneert.</p>
              </div>
            </>
          )
        },
        {
          title: 'Bij voldoende bezetting',
          icon: 'fas fa-users',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Inmelden via C2000 (voertuig)</li>
                <li>Inmelden bij de Kustwacht via het kustwachttool</li>
              </ul>
              
              <p>Een goede start van de dag zorgt voor een effectieve strandwacht. Zorg dat alle teamleden op de hoogte zijn van de post-procedures.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Checklist Afsluiten Post',
      icon: 'fas fa-door-closed',
      cards: [
        {
          title: 'Algemene afsluitprocedures',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Controleren of alle rapporten volledig zijn ingevuld</li>
                <li>Dagrapport afsluiten</li>
                <li>Boten en voertuigen afspuiten en bijtanken</li>
                <li>Containers en hokken afsluiten</li>
                <li>EHBO-ruimte controleren en eventueel aanvullen</li>
                <li>Post (binnen & buiten) opruimen en schoonmaken</li>
                <li>Vlag(gen) neerhalen</li>
                <li>Afmelden via C2000 (voertuig)</li>
                <li>Afmelden bij de Kustwacht</li>
                <li>Beide mobilofoons eerst uitmelden, dan uitschakelen</li>
                <li>Computer afsluiten</li>
                <li>Luiken sluiten (Post Noord) of ramen dicht (Post Zuid)</li>
                <li>Buitenschijnwerpers controleren (uit)</li>
                <li>Deuren afsluiten</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Zorg ervoor dat alle apparatuur is opgeruimd en opgeladen voor gebruik de volgende dag.</p>
              </div>
            </>
          )
        },
        {
          title: 'Extra aandachtspunten',
          icon: 'fas fa-exclamation-circle',
          content: (
            <>
              <ul className="info-list">
                <li>Iedereen ruimt zijn of haar gebruikte spullen zelf op</li>
                <li>Bijzonderheden worden gemeld bij de Senior Lifeguard van de dag of bij de Postcommandant</li>
              </ul>
              
              <p>Een zorgvuldige afsluiting van de post is essentieel voor de veiligheid en gereedheid voor de volgende operationele dag.</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Strandveilig - Kustwacht Meldingen',
      icon: 'fas fa-broadcast-tower',
      cards: [
        {
          title: 'Belang van Aan- en Afmelden bij Kustwacht',
          icon: 'fas fa-exclamation-triangle',
          content: (
            <>
              <p>Het is essentieel dat elke post zich aan- en afmeldt bij de Kustwacht via het Strandveilig portaal. Dit stelt de Kustwacht in staat om in geval van nood direct te weten welke posten bemand zijn en welke eenheden beschikbaar zijn.</p>
              
              <h4>Strandveilig Procedure:</h4>
              <ol className="info-list numbered">
                <li>Login op het <a href="https://www.strandveilig.nl/beschikbaar/#/login" target="_blank" rel="noopener noreferrer">Strandveilig portaal</a></li>
                <li>Selecteer de juiste post (Noord of Zuid)</li>
                <li>Geef aan of de post bemand is (aanwezig of afwezig)</li>
                <li>Geef de status van de vlag aan:<br />
                  - Geen vlag<br />
                  - Gele vlag<br />
                  - Rode vlag (alleen na overleg met burgemeester/gemeente)</li>
                <li>Bevestig de aanmelding</li>
              </ol>
              
              <p>Bij het afsluiten van de post voer je dezelfde procedure uit, maar geef je aan dat de post niet meer bemand is.</p>
              
              <div className="important-note">
                <p><strong>Belangrijk:</strong> Het vergeten van aan- of afmelden kan ernstige gevolgen hebben voor de coördinatie van reddingsoperaties. Zorg er daarom voor dat dit altijd nauwkeurig gebeurt.</p>
              </div>
            </>
          )
        },
        {
          title: 'Brondocument',
          icon: 'fas fa-file-pdf',
          content: (
            <>
              <div className="document-container pdf-document">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>Checklist: Openen en Sluiten van Strandposten ZRB</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie:</strong> 2.0 - 2019</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/open?id=1taE6qGieYApjdB3nRckzl6X7aEfevOsg&usp=drive_copy" 
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