import React from 'react';
import { InfoCardDetail } from '../../types';

export const evaluatiemethodeInzetDetail: InfoCardDetail = {
  id: 'protocol-evaluatiemethode-inzet',
  title: 'Protocol Evaluatiemethode Inzet',
  description: 'Gestructureerde methode voor het evalueren van inzetten en hulpverleningen van de Zandvoortse Reddingsbrigade.',
  icon: 'fas fa-clipboard-check',
  category: 'richtlijnen',
  intro: 'Dit protocol beschrijft de CSCATTT-methode die de Zandvoortse Reddingsbrigade (ZRB) gebruikt voor het evalueren van inzetten en hulpverleningen, gericht op het verbeteren van procedures en leren van ervaringen.',
  sections: [
    {
      title: 'Basisfuncties Protocol',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Toepassing',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <p>Dit protocol is van toepassing op het evalueren van inzetten en hulpverleningen uitgevoerd door vrijwilligers van de ZRB.</p>
              <p>Een protocol werkt alleen als alle vrijwilligers het bestaan kennen en begrijpen. Daarom wordt deze evaluatiemethode jaarlijks opnieuw besproken binnen de vereniging.</p>
            </>
          )
        },
        {
          title: 'Doel',
          icon: 'fas fa-bullseye',
          content: (
            <>
              <p>Het doel van dit protocol is:</p>
              <ul className="info-list checkmark">
                <li>Het bieden van een eenduidige en gestructureerde methode voor evaluatie binnen de ZRB</li>
                <li>Het bevorderen van transparantie, leervermogen en teamontwikkeling na inzetten</li>
              </ul>
            </>
          )
        },
        {
          title: 'Uitgangspunten',
          icon: 'fas fa-compass',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Evaluatie vindt bij voorkeur binnen 24 uur plaats, en uiterlijk binnen 72 uur na de inzet.</li>
                <li>Evaluaties vinden primair binnen de eigen vereniging plaats, tenzij het bestuur of de leiding anders beslist.</li>
                <li>Evaluaties zijn alleen bedoeld voor incidenten die plaatsvinden tijdens het vrijwilligerswerk voor de ZRB.</li>
              </ul>
            </>
          )
        },
        {
          title: 'Wanneer wordt er geëvalueerd?',
          icon: 'fas fa-question-circle',
          content: (
            <>
              <p>Evaluatie vindt plaats:</p>
              <ul className="info-list checkmark">
                <li>Als de verantwoordelijk leidinggevende dit nodig acht</li>
                <li>Op verzoek van direct betrokken vrijwilligers</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'De CSCATTT-Methode',
      icon: 'fas fa-tasks',
      cards: [
        {
          title: 'Over de CSCATTT-methode',
          icon: 'fas fa-info',
          content: (
            <>
              <p>De ZRB maakt gebruik van de CSCATTT-methode, een gestructureerd evaluatiemodel afkomstig uit de Major Incident Medical Management and Support (MIMMS).</p>
              <p>Deze methode biedt een systematische aanpak voor het analyseren van een incident of inzet met duidelijke categorieën.</p>
            </>
          )
        },
        {
          title: 'Command & Control (C)',
          icon: 'fas fa-user-tie',
          content: (
            <>
              <p><strong>Leiderschapsevaluatie</strong></p>
              <p>Evaluatiepunten:</p>
              <ul className="info-list">
                <li>Wie had de leiding?</li>
                <li>Was dit duidelijk voor alle betrokkenen?</li>
                <li>Was de coördinatie goed geregeld?</li>
                <li>Was de leidinggevende bereikbaar voor het team?</li>
              </ul>
            </>
          )
        },
        {
          title: 'Safety (S)',
          icon: 'fas fa-shield-alt',
          content: (
            <>
              <p><strong>Veiligheidsevaluatie</strong></p>
              <p>Evaluatiepunten:</p>
              <ul className="info-list">
                <li>Was er gezorgd voor eigen veiligheid (PBM)?</li>
                <li>Was de veiligheid op de locatie gewaarborgd?</li>
                <li>Was de veiligheid voor slachtoffers gegarandeerd?</li>
                <li>Zijn alle veiligheidsvoorschriften nageleefd?</li>
              </ul>
            </>
          )
        },
        {
          title: 'Communication (C)',
          icon: 'fas fa-comments',
          content: (
            <>
              <p><strong>Communicatie-evaluatie</strong></p>
              <p>Evaluatiepunten:</p>
              <ul className="info-list">
                <li>Waren de communicatielijnen intern (mono) duidelijk en afgesproken?</li>
                <li>Waren de communicatielijnen extern (multi) duidelijk en afgesproken?</li>
                <li>Was de centrale post of GMK goed geïnformeerd?</li>
              </ul>
            </>
          )
        },
        {
          title: 'Assessment (A)',
          icon: 'fas fa-search',
          content: (
            <>
              <p><strong>Situatiebeoordeling</strong></p>
              <p>Evaluatiepunten:</p>
              <ul className="info-list">
                <li>Was er een goed beeld van de situatie?</li>
                <li>Is er een risicoanalyse uitgevoerd?</li>
                <li>Was de inzetopdracht helder?</li>
                <li>Waren alle benodigde disciplines en getraind personeel aanwezig?</li>
              </ul>
            </>
          )
        },
        {
          title: 'Triage (T)',
          icon: 'fas fa-balance-scale',
          content: (
            <>
              <p><strong>Prioriteitenstelling</strong></p>
              <p>Evaluatiepunten:</p>
              <ul className="info-list">
                <li>Zijn de juiste keuzes en prioriteiten gesteld?</li>
                <li>Door wie werden deze keuzes gemaakt?</li>
                <li>Waren de gestelde prioriteiten passend bij de situatie?</li>
              </ul>
            </>
          )
        },
        {
          title: 'Treatment (T)',
          icon: 'fas fa-first-aid',
          content: (
            <>
              <p><strong>Hulpverlening</strong></p>
              <p>Evaluatiepunten:</p>
              <ul className="info-list">
                <li>Is de hulpverlening goed uitgevoerd?</li>
                <li>Heeft iedereen zijn taak kunnen uitvoeren?</li>
                <li>Was de hulpverlening effectief?</li>
              </ul>
            </>
          )
        },
        {
          title: 'Transport (T)',
          icon: 'fas fa-ambulance',
          content: (
            <>
              <p><strong>Vervoersevaluatie</strong></p>
              <p>Evaluatiepunten:</p>
              <ul className="info-list">
                <li>Was er voldoende transportcapaciteit?</li>
                <li>Waren de routes vrij?</li>
                <li>Klopten de alarmeringstijden?</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Proces en Verantwoordelijkheid',
      icon: 'fas fa-users-cog',
      cards: [
        {
          title: 'Evaluatieproces',
          icon: 'fas fa-project-diagram',
          content: (
            <>
              <p>Evaluaties worden gecoördineerd door de leidinggevende van de inzet of een aangewezen evaluatiebegeleider.</p>
              <p>Het bestuurslid operationele zaken wordt altijd geïnformeerd over de uitkomsten van een evaluatie.</p>
              <p><strong>Het doel is leren, verbeteren en versterken van inzetstructuren.</strong></p>
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
                <h4>Protocol Evaluatiemethode Inzet ZRB</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie:</strong> 1.0 – 1 juni 2015</p>
                  <p><strong>Gebaseerd op:</strong> Reader Waterhulpverlening van Reddingsbrigade Nederland</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/open?id=19Qi-MD2Q_kfv3wN0BTTeZmr62ymkRR3G&usp=drive_copy" 
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