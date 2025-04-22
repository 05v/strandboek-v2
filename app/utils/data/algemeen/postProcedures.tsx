import React from 'react';
import { InfoCardDetail } from '../../types';

export const postProceduresDetail: InfoCardDetail = {
  id: 'post-procedures',
  title: 'Post Openen en Sluiten',
  description: 'Procedures voor het correct openen en sluiten van een reddingspost. Checklists voor alle taken en meldplichten.',
  icon: 'fas fa-door-open',
  category: 'algemeen',
  intro: 'Voor een consistente en veilige operatie is het belangrijk dat alle reddingsposten volgens dezelfde procedures worden geopend en gesloten. De onderstaande checklists helpen om te zorgen dat alle belangrijke taken worden uitgevoerd bij het openen en sluiten van een post. Let op: het openen van een post is in principe de omgekeerde volgorde van het sluiten.',
  sections: [
    {
      title: 'Checklist Openen Post',
      icon: 'fas fa-door-open',
      cards: [
        {
          title: 'Checklist Openen Post',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <ul className="info-list">
                <li>Deuren ontgrendelen</li>
                <li>Verlichting aandoen indien nodig</li>
                <li>Luiken omhoog</li>
                <li>Andere post informeren over opening (evt. in app groep operationeel)</li>
                <li>C2000 apparatuur inschakelen en controleren</li>
                <li>Dagrapport openen</li>
                <li>Melding maken bij Postcommandant van eventuele bijzonderheden</li>
                <li><a href="https://www.strandveilig.nl/beschikbaar/#/login" target="_blank" rel="noopener noreferrer">Strandveilig aanmelden</a> (Kustwacht) via Strandveilig portaal</li>
                <li>Schoonmaak uitvoeren/controleren van toiletten, kleedhokken, keuken en dagverblijf</li>
                <li>Buitenverlichting controleren en uitzetten</li>
                <li>Vlaggen uithangen</li>
                <li>Containers openen</li>
                <li>Pionnen uitzetten</li>
                <li>Muiborden/vlaggen plaatsen</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Controleer altijd of alle apparatuur (portofoons, AED's, etc.) volledig is opgeladen en correct functioneert.</p>
              </div>
            </>
          )
        },
        {
          title: 'Belangrijke aandachtspunten',
          icon: 'fas fa-exclamation-triangle',
          content: (
            <>
              <p>Bij het openen van de post, let extra op de volgende belangrijke aspecten:</p>
              <ul className="info-list">
                <li><strong>Veiligheid:</strong> Controleer of alle veiligheidsmateriaal aanwezig en functioneel is</li>
                <li><strong>Communicatie:</strong> Zorg dat alle communicatiemiddelen werkend zijn</li>
                <li><strong>Registratie:</strong> Start het <a href="https://rhr.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">RHR-systeem</a> op en log de openingstijd</li>
                <li><strong>Kustwacht informeren:</strong> Vergeet niet om aan te melden bij de kustwacht via het <a href="https://www.strandveilig.nl/beschikbaar/#/login" target="_blank" rel="noopener noreferrer">Strandveilig portaal</a></li>
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
          title: 'Checklist Afsluiten Post',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <ul className="info-list">
                <li>Muiborden/vlaggen ophalen</li>
                <li>Pionnen binnenhalen</li>
                <li>Containers afsluiten</li>
                <li>Vlaggen binnenhalen</li>
                <li>Buitenverlichting controleren</li>
                <li>Vuilniszakken legen</li>
                <li>Toiletten, kleedhokken, keuken, dagverblijf schoonmaken</li>
                <li><a href="https://www.strandveilig.nl/beschikbaar/#/login" target="_blank" rel="noopener noreferrer">Strandveilig afmelden</a> (Kustwacht) via Strandveilig portaal</li>
                <li>Bijzonderheden melden aan Postcommandant</li>
                <li><a href="https://rhr.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">Dagrapport afsluiten</a></li>
                <li>C2000 apparatuur uitschakelen</li>
                <li>Andere post inlichten over sluiting (evt. in app groep operationeel)</li>
                <li>Luiken naar beneden</li>
                <li>Verlichting uit</li>
                <li>Deuren afsluiten</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Zorg ervoor dat alle apparatuur is opgeruimd en opgeladen voor gebruik de volgende dag.</p>
              </div>
            </>
          )
        },
        {
          title: 'Eindcontrole',
          icon: 'fas fa-check-circle',
          content: (
            <>
              <p>Voordat je de post definitief verlaat, controleer:</p>
              <ul className="info-list">
                <li>Zijn alle elektrische apparaten uitgeschakeld?</li>
                <li>Zijn alle porto's aan de lader gekoppeld?</li>
                <li>Zijn voertuigen aan de acculader aangesloten?</li>
                <li>Is alle apparatuur schoongemaakt en opgeborgen?</li>
                <li>Is de afmelding in het <a href="https://rhr.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">RHR-systeem</a> voltooid?</li>
                <li>Is de afmelding bij de <a href="https://www.strandveilig.nl/beschikbaar/#/login" target="_blank" rel="noopener noreferrer">Kustwacht via Strandveilig</a> gedaan?</li>
                <li>Zijn alle ramen en deuren gesloten en vergrendeld?</li>
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
          title: 'Belangrijke Links',
          icon: 'fas fa-link',
          content: (
            <>
              <div className="link-item">
                <h4><i className="fas fa-external-link-alt"></i> Strandveilig Portaal</h4>
                <p>Voor aan- en afmelden bij de Kustwacht:</p>
                <a href="https://www.strandveilig.nl/beschikbaar/#/login" target="_blank" rel="noopener noreferrer" className="button secondary">
                  <i className="fas fa-sign-in-alt"></i> Strandveilig Login
                </a>
                <p className="hint">Login-gegevens verkrijgbaar bij je postcommandant</p>
              </div>
              
              <div className="link-item">
                <h4><i className="fas fa-external-link-alt"></i> RHR Systeem</h4>
                <p>Voor dagrapportage en incidentregistratie:</p>
                <a href="https://rhr.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer" className="button secondary">
                  <i className="fas fa-clipboard-list"></i> RHR Systeem
                </a>
                <p className="hint">Login met je persoonlijke RHR-account</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Dagrapport',
      icon: 'fas fa-file-alt',
      cards: [
        {
          title: 'Vastleggen van Dagrapport',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <p>Het dagrapport wordt bijgehouden in het <a href="https://rhr.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">RHR systeem</a> (Reddingsbrigade Hulpverlening Registratie). In dit systeem worden alle activiteiten, incidenten en bijzonderheden van de dag doorlopend vastgelegd.</p>
              
              <ul className="info-list">
                <li>Aanwezige bemanning</li>
                <li>Weersomstandigheden</li>
                <li>Uitgevoerde patrouilles</li>
                <li>EHBO-handelingen</li>
                <li>Reddingsacties</li>
                <li>Bijzondere waarnemingen of voorvallen</li>
                <li>Materiaalstatus</li>
              </ul>
              
              <p>Gedurende de dag worden alle meldingen en activiteiten direct in het RHR systeem ingevoerd. Bij het afsluiten van de post dient het RHR te worden afgesloten, waarmee het dagrapport wordt voltooid.</p>
            </>
          )
        },
        {
          title: 'Tips voor effectieve registratie',
          icon: 'fas fa-lightbulb',
          content: (
            <>
              <ul className="info-list">
                <li><strong>Real-time registreren:</strong> Voer incidenten direct in na afhandeling</li>
                <li><strong>Volledigheid:</strong> Registreer alle relevante details, ook kleine incidenten</li>
                <li><strong>Duidelijke beschrijvingen:</strong> Wees specifiek in beschrijvingen van incidenten</li>
                <li><strong>Fotoregistratie:</strong> Voeg indien nodig foto's toe van bijzondere situaties</li>
                <li><strong>Locatie vermelding:</strong> Geef duidelijk aan waar incidenten hebben plaatsgevonden</li>
                <li><strong>Apparatuur problemen:</strong> Meld eventuele defecten aan materiaal of voertuigen</li>
              </ul>
              
              <p>Een goede registratie in het <a href="https://rhr.reddingsbrigade.nl" target="_blank" rel="noopener noreferrer">RHR systeem</a> is niet alleen belangrijk voor de dagelijkse operatie, maar ook voor verbetering van processen, trainingen en materiaalbehoeften.</p>
            </>
          )
        }
      ]
    }
  ]
}; 