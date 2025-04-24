import React from 'react';
import { InfoCardDetail } from '../../types';

export const convenantVRKDetail: InfoCardDetail = {
  id: 'convenant-vrk',
  title: 'Convenant VRK – Reddingsbrigades in Kennemerland',
  description: 'Samenwerkingsafspraken tussen Veiligheidsregio Kennemerland en reddingsbrigades voor reguliere en grootschalige hulpverlening.',
  icon: 'fas fa-handshake',
  category: 'richtlijnen',
  intro: 'Dit convenant beschrijft de samenwerkingsafspraken tussen de Veiligheidsregio Kennemerland (VRK) en de reddingsbrigades in de regio Kennemerland. Het document legt de basis voor samenwerking bij zowel reguliere als grootschalige hulpverlening en definieert de verantwoordelijkheden en communicatiestructuren tussen de betrokken partijen.',
  sections: [
    {
      title: 'Partijen en Overwegingen',
      icon: 'fas fa-users',
      cards: [
        {
          title: 'Betrokken Partijen',
          icon: 'fas fa-handshake',
          content: (
            <>
              <p>De volgende organisaties zijn partij in dit convenant:</p>
              
              <ul className="info-list">
                <li><strong>Veiligheidsregio Kennemerland</strong> – Vertegenwoordigd door de heer A.F.M. Schippers MPA</li>
                <li><strong>Coöperatie Regionale Ambulancevoorziening Kennemerland (RAV)</strong> – Vertegenwoordigd door de heer A. van de Velden</li>
                <li><strong>Meldkamer Noord-Holland</strong> – Vertegenwoordigd door mevrouw drs. A. Kortenray</li>
                <li><strong>Regionale Voorziening Reddingsbrigades (RVR)</strong> – Vertegenwoordigd door de heer J. Abelman, namens:
                  <ul>
                    <li>Reddingsbrigade Heemskerk</li>
                    <li>Reddingsbrigade Wijk aan Zee</li>
                    <li>Reddingsbrigade IJmuiden</li>
                    <li>Reddingsbrigade Haarlem</li>
                    <li>Reddingsbrigade Bloemendaal</li>
                    <li>Reddingsbrigade Zandvoort</li>
                    <li>Reddingsbrigade Heemstede</li>
                  </ul>
                </li>
              </ul>
            </>
          )
        },
        {
          title: 'Overwegingen',
          icon: 'fas fa-balance-scale',
          content: (
            <>
              <ul className="info-list">
                <li>Reddingsbrigades spelen een essentiële rol in hulpverlening rond kust en binnenwateren</li>
                <li>Samenwerking versterkt structurele en toekomstgerichte hulpverlening</li>
                <li>Het convenant richt zich op reguliere én grootschalige hulpverlening</li>
                <li>Er bestaan aanvullende werkafspraken en aparte afspraken met o.a. politie en gemeenten</li>
                <li>Dit convenant vervangt geen bestaande afspraken maar biedt structureel kader</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Uitgangspunten en Doelstellingen',
      icon: 'fas fa-bullseye',
      cards: [
        {
          title: 'Artikel 1 – Uitgangspunten',
          icon: 'fas fa-file-contract',
          content: (
            <>
              <ul className="info-list">
                <li>Samenwerking moet leiden tot geoptimaliseerde voorbereiding en uitvoering van hulpverlening</li>
                <li>Reddingsbrigades worden erkend als aanvulling op professionele diensten</li>
                <li>Toezicht en preventie (zoals op evenementen) vallen buiten de scope</li>
                <li>Aparte afspraken rond de Nationale Reddingsvloot (NRV) vallen buiten dit convenant</li>
              </ul>
            </>
          )
        },
        {
          title: 'Artikel 2 – Doel',
          icon: 'fas fa-bullseye',
          content: (
            <>
              <p>Het convenant legt afspraken vast over:</p>
              <ul className="info-list">
                <li>Samenwerking</li>
                <li>Communicatie</li>
                <li>Verantwoordelijkheden bij reguliere en grootschalige hulpverlening</li>
              </ul>
            </>
          )
        },
        {
          title: 'Artikel 3 – Citeertitel',
          icon: 'fas fa-quote-right',
          content: "Convenant VRK – Reddingsbrigades 2020"
        }
      ]
    },
    {
      title: 'Operationele Afspraken',
      icon: 'fas fa-cogs',
      cards: [
        {
          title: 'Preparatie - Vertegenwoordiging',
          icon: 'fas fa-users-cog',
          content: (
            <>
              <p><strong>Artikel 4 – Vertegenwoordiging vanuit veiligheidsdiensten</strong></p>
              <ul className="info-list">
                <li>Elk onderdeel wijst een aanspreekpunt aan voor reddingsbrigades</li>
                <li>Het veiligheidsbureau wijst een accounthouder reddingsbrigades aan</li>
              </ul>
              
              <p><strong>Artikel 5 – Vertegenwoordiging door reddingsbrigades</strong></p>
              <ul className="info-list">
                <li>Een centrale vertegenwoordiger namens alle brigades wordt aangewezen</li>
                <li>Deze persoon neemt deel aan relevante projecten en werkgroepen</li>
              </ul>
            </>
          )
        },
        {
          title: 'Preparatie - Planvorming en Oefenen',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <p><strong>Artikel 6 – Planvorming</strong></p>
              <ul className="info-list">
                <li>Gegevens en plannen worden onderling afgestemd</li>
                <li>Meldkamer ontvangt actuele alarmeringsinformatie van brigades</li>
              </ul>
              
              <p><strong>Artikel 7 – Opleiden, trainen, oefenen</strong></p>
              <ul className="info-list">
                <li>Elke partij traint en oefent intern, maar werkt ook gezamenlijk aan scenario's en oefeningen</li>
              </ul>
            </>
          )
        },
        {
          title: 'Repressie - Reguliere Inzet',
          icon: 'fas fa-truck-moving',
          content: (
            <>
              <p><strong>Artikel 8 – Reguliere inzet</strong></p>
              <ul className="info-list">
                <li>Alarmering van brigades gebeurt via meldkamer of Kustwacht</li>
                <li>Reddingsbrigades zijn C2000-gebruikers</li>
                <li>Gebruik van optische en geluidssignalen volgens landelijke brancherichtlijn</li>
                <li>Veiligheidsregio en RAV kunnen materieel beschikbaar stellen</li>
                <li>Mono-inzet: gecoördineerd door leidende discipline</li>
                <li>Multidisciplinair (GRIP): vertegenwoordiging in crisisteams mogelijk via liaison</li>
              </ul>
            </>
          )
        },
        {
          title: 'Nazorg en Afronding',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <p><strong>Artikel 9 – Nazorg</strong></p>
              <p>Nazorg wordt geregeld in de werkafspraken</p>
              
              <p><strong>Artikel 10 – Beheer</strong></p>
              <ul className="info-list">
                <li>Convenant wordt beheerd door het veiligheidsbureau</li>
                <li>Bijlagen en werkafspraken vallen onder het convenant</li>
              </ul>
              
              <p><strong>Artikel 11 – Werkafspraken</strong></p>
              <p>Worden opgesteld, geëvalueerd en aangepast door betrokken partijen (brandweer, GHOR, RAV, meldkamer)</p>
            </>
          )
        }
      ]
    },
    {
      title: 'Juridische Bepalingen',
      icon: 'fas fa-gavel',
      cards: [
        {
          title: 'Looptijd & Beëindiging',
          icon: 'fas fa-hourglass-end',
          content: (
            <>
              <p><strong>Artikel 12 – Inwerkingtreding</strong></p>
              <ul className="info-list">
                <li>Geldt na ondertekening voor onbepaalde tijd</li>
                <li>Opzegging met 8 weken opzegtermijn</li>
              </ul>
              
              <p><strong>Artikel 13 – Wijziging of beëindiging</strong></p>
              <ul className="info-list">
                <li>Overleg verplicht bij wens tot wijziging</li>
                <li>Geen overeenstemming binnen 4 weken → schriftelijke opzegging mogelijk</li>
              </ul>
            </>
          )
        },
        {
          title: 'Geschillen',
          icon: 'fas fa-balance-scale',
          content: (
            <>
              <p><strong>Artikel 14</strong></p>
              <ul className="info-list">
                <li>Geschillen eerst voorleggen aan commissie van vertegenwoordigers</li>
                <li>Daarna naar de bevoegde rechter te Haarlem, indien geen oplossing</li>
              </ul>
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
                <h4>Convenant VRK – Reddingsbrigades in Kennemerland</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Datum:</strong> 2020</p>
                  <p><strong>Onderwerp:</strong> Samenwerking bij reguliere en grootschalige hulpverlening</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1f8tcIUbEjrJBAFLFBCmHBjUzwy66JSuH/view" 
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