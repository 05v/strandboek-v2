import React from 'react';
import { InfoCardDetail } from '../../types';

export const socialeMediaRichtlijnenDetail: InfoCardDetail = {
  id: 'sociale-media-richtlijnen',
  title: 'Richtlijnen Gebruik Sociale Media',
  description: 'Richtlijnen voor het gebruik van sociale media door leden van de Reddingsbrigade Zandvoort.',
  icon: 'fas fa-hashtag',
  category: 'richtlijnen',
  intro: 'Sociale media bieden kansen om de Reddingsbrigade te profileren en informatie te verspreiden. Tegelijkertijd brengt dit risico\'s met zich mee. Deze richtlijnen (Versie 1.0 - Augustus 2013) helpen vrijwilligers om bewust, correct en verantwoordelijk om te gaan met sociale media.',
  sections: [
    {
      title: 'Algemene Richtlijnen',
      icon: 'fas fa-check-circle',
      cards: [
        {
          title: '1. Eigen verantwoordelijkheid',
          icon: 'fas fa-user-check',
          content: (
            <>
              <p>Iedere vrijwilliger is zelf verantwoordelijk voor wat hij of zij plaatst. Denk na over de inhoud, de toon, de gevolgen, en wees je bewust van je online aanwezigheid.</p>
              
              <div className="advice-block">
                <p><strong>Bij twijfel:</strong> Plaats niets en vraag advies bij de Werkgroep Communicatie.</p>
              </div>
            </>
          )
        },
        {
          title: '2. Leden als ambassadeur',
          icon: 'fas fa-globe',
          content: (
            <>
              <p>Je bent als vrijwilliger ook een vertegenwoordiger van de ZRB. Vermijd uitlatingen die het imago kunnen schaden. Gedraag je online zoals van je verwacht wordt binnen de vereniging.</p>
              
              <div className="warning-note">
                <p><strong>Verboden uitingen:</strong> seksistisch, discriminerend of beledigend gedrag.</p>
              </div>
            </>
          )
        },
        {
          title: '3. Verenigingsinformatie',
          icon: 'fas fa-lock',
          content: (
            <>
              <p>Plaats nooit:</p>
              
              <ul className="info-list cross">
                <li>Vertrouwelijke of gevoelige informatie</li>
                <li>Meldkamerinformatie</li>
                <li>Persoonsgegevens</li>
              </ul>
            </>
          )
        },
        {
          title: '4. Privépersoon of vrijwilliger?',
          icon: 'fas fa-user-friends',
          content: (
            <>
              <p>Werk en privé lopen online makkelijk door elkaar. Persoonlijke meningen kunnen conflicteren met de belangen van de vereniging.</p>
              
              <div className="important-note">
                <p><strong>Belangrijk:</strong> Wat je post, blijft vindbaar – ook als je het verwijdert.</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Communicatie & Media',
      icon: 'fas fa-comments',
      cards: [
        {
          title: '5. Contact met de pers',
          icon: 'fas fa-newspaper',
          content: (
            <>
              <div className="important-note">
                <p>Alle communicatie richting pers (ook via sociale media) verloopt via de Commissaris PR & Communicatie.</p>
              </div>
              
              <p>Het telefoonnummer en e-mailadres zijn beschikbaar in de radiokamer op beide posten.</p>
            </>
          )
        },
        {
          title: '6. Beheer van sociale media-accounts',
          icon: 'fas fa-users-cog',
          content: (
            <>
              <ul className="info-list info">
                <li>Alle groepaccounts (bijv. Twitter, Facebook, Instagram, etc.) worden beheerd door de Werkgroep Communicatie.</li>
                <li>Aanvragen voor andere accounts (bijv. voor dagcommandanten) moeten eerst worden goedgekeurd.</li>
              </ul>
            </>
          )
        },
        {
          title: '7. Crisiscommunicatie',
          icon: 'fas fa-exclamation-triangle',
          content: (
            <>
              <div className="important-note">
                <p><strong>Belangrijk:</strong> Alle communicatie tijdens of na een crisis is exclusief voorbehouden aan de commissaris PR & Communicatie.</p>
                <p>Vrijwilligers mogen hierover geen berichten plaatsen.</p>
              </div>
            </>
          )
        },
        {
          title: '8. Reageren op berichten',
          icon: 'fas fa-reply-all',
          content: (
            <>
              <p>Niet publiek reageren op kritiek of meningen om discussies te vermijden.</p>
              
              <div className="advice-block">
                <p>Signaleer wél complimenten, kritiek en belangrijke berichten en geef die door aan de Werkgroep Communicatie.</p>
              </div>
            </>
          )
        },
        {
          title: '9. Auteursrecht',
          icon: 'fas fa-copyright',
          content: (
            <>
              <ul className="info-list info">
                <li>Gebruik geen afbeeldingen of teksten zonder toestemming van de rechthebbende.</li>
                <li>Vraag toestemming voor het plaatsen van beeldmateriaal waarop collega's zichtbaar zijn.</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Samenvatting - Do\'s & Don\'ts',
      icon: 'fas fa-list-ul',
      cards: [
        {
          title: '✅ Do\'s',
          icon: 'fas fa-check',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Lees en volg de richtlijnen.</li>
                <li>Spreek in de ik-vorm bij persoonlijke meningen.</li>
                <li>Wees respectvol.</li>
                <li>Denk na over de gevolgen van beeldmateriaal.</li>
                <li>Verwijs persverzoeken altijd door naar de commissaris PR & Communicatie.</li>
              </ul>
            </>
          )
        },
        {
          title: '❌ Don\'ts',
          icon: 'fas fa-times',
          content: (
            <>
              <ul className="info-list cross">
                <li>Spreek niet namens de ZRB als dat niet je taak is.</li>
                <li>Deel geen details over incidenten.</li>
                <li>Verspreid geen interne informatie die niet openbaar is.</li>
                <li>Publiceer geen beeldmateriaal van incidenten of slachtoffers zonder toestemming.</li>
                <li>Gebruik geen teksten/foto's van derden zonder hun toestemming (collega's, hulpdiensten, slachtoffers).</li>
              </ul>
            </>
          )
        },
        {
          title: 'Bij twijfel?',
          icon: 'fas fa-question-circle',
          content: (
            <>
              <div className="advice-block">
                <p>Neem contact op met de Werkgroep Communicatie.</p>
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
                <h4>Richtlijnen Gebruik Sociale Media</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie:</strong> 1.0 - Augustus 2013</p>
                  <p><strong>Versiehouder:</strong> Marjon Huibers</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/open?id=1f504ZqaSfWxFlbsRGTW761L6jr4aiZKh&usp=drive_copy" 
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