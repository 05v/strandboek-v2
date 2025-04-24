import React from 'react';
import { InfoCardDetail } from '../../types';

export const functieprofielPostcommandantDetail: InfoCardDetail = {
  id: 'functieprofiel-postcommandant',
  title: 'Functieprofiel: Postcommandant',
  description: 'Beschrijving van de rol, verantwoordelijkheden en vereiste competenties voor de functie van Postcommandant binnen de ZRB.',
  icon: 'fas fa-user-tie',
  category: 'algemeen',
  intro: 'Dit document beschrijft de functie van Postcommandant binnen de Zandvoortse Reddingsbrigade (ZRB). De Postcommandant is verantwoordelijk voor de algemene gang van zaken op de reddingsposten en vormt een belangrijke schakel tussen het bestuur en de operationele teams.',
  sections: [
    {
      title: 'Algemene Informatie',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Algemene Beschrijving',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <p>De Postcommandant is verantwoordelijk voor de algemene gang van zaken op de reddingsposten van de ZRB. De postcommandant:</p>
              
              <ul className="info-list">
                <li>Rapporteert aan het bestuurslid operationele zaken</li>
                <li>Heeft geen directe operationele aansturing over de posters; dit wordt gedaan door de Senior Lifeguard van Dienst</li>
              </ul>
              
              <p>De postcommandant:</p>
              
              <ul className="info-list">
                <li>Is minimaal 21 jaar oud</li>
                <li>Heeft aantoonbaar draagvlak binnen de ploeg</li>
                <li>Wordt formeel aangesteld door het bestuur</li>
              </ul>
            </>
          )
        },
        {
          title: 'Organisatiestructuur',
          icon: 'fas fa-sitemap',
          content: (
            <>
              <p>Versimpeld overzicht van de organisatiestructuur:</p>
              
              <div className="organizational-chart">
                <ul>
                  <li>
                    <span>Bestuurslid operationele zaken</span>
                    <ul>
                      <li>
                        <span>Postcommandant</span>
                        <ul>
                          <li>
                            <span>Senior Lifeguard van de Dienst (Post Noord & Zuid)</span>
                            <ul>
                              <li><span>Senior Lifeguard</span></li>
                              <li><span>Lifeguard</span></li>
                              <li><span>Junior Lifeguard</span></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span>Coördinator Alarmploeg (in apart document uitgewerkt)</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <p className="note">De structuur is versimpeld weergegeven. De Coördinator Alarmploeg wordt in een apart document beschreven.</p>
            </>
          )
        },
        {
          title: 'Document Informatie',
          icon: 'fas fa-file-alt',
          content: (
            <>
              <div className="document-info">
                <p><strong>Functie:</strong> Postcommandant</p>
                <p><strong>Organisatie:</strong> Zandvoortse Reddingsbrigade (ZRB)</p>
                <p><strong>Versie:</strong> April 2022</p>
                <p><strong>Opgesteld door:</strong> L. Carree, R. van Caspel, B. Kemperman en P. Winkel</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Verantwoordelijkheden en Bevoegdheden',
      icon: 'fas fa-tasks',
      cards: [
        {
          title: 'Verantwoordelijkheden',
          icon: 'fas fa-clipboard-check',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Opstellen van het rooster voor Senior Lifeguards van Dienst</li>
                <li>Registreren en opvolgen van meldingen over materiaalschade of gebreken</li>
                <li>Beheer van het proviandbudget</li>
                <li>Analyseren en bewaken van taken Senior van Dienst</li>
                <li>Informatieoverdracht tussen bestuur en ploeg/Senior van Dienst faciliteren</li>
                <li>Voorzitterschap bij teamoverleggen met Senior Lifeguards</li>
                <li>Structureel overleg met het bestuurslid operationele zaken</li>
                <li>Toezien op passende nazorg bij calamiteiten</li>
                <li>Fungeren als aanspreekpunt voor Senior Lifeguards en eventueel posters, mits nodig</li>
              </ul>
            </>
          )
        },
        {
          title: 'Bevoegdheden',
          icon: 'fas fa-gavel',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Coachen van Senior Lifeguards</li>
                <li>Bezit de (nood)bevoegdheid om leden tijdelijk te schorsen, mits dit z.s.m. wordt gemeld aan het bestuurslid operationele zaken</li>
                <li>Is volwaardig gesprekspartner voor zowel bestuur als Senior Lifeguards</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Vereiste Competenties',
      icon: 'fas fa-check-circle',
      cards: [
        {
          title: 'Besluitvaardigheid',
          icon: 'fas fa-gavel',
          content: 'Kan zelfstandig knopen doorhakken, ook bij onzekerheid of risico. Is aanspreekbaar op keuzes.'
        },
        {
          title: 'Coachen',
          icon: 'fas fa-comments',
          content: 'Stimuleert posters in hun ontwikkeling, signaleert leervragen en ondersteunt actief.'
        },
        {
          title: 'Bestuurlijke Sensitiviteit',
          icon: 'fas fa-balance-scale',
          content: 'Begrijpt de werking van de bestuurlijke omgeving, kent interne hiërarchie en weet waar verantwoordelijkheden liggen.'
        },
        {
          title: 'Communicatieve Vaardigheden',
          icon: 'fas fa-comments',
          content: 'Kan helder communiceren, boodschappen structureren, en representatief optreden naar externen.'
        },
        {
          title: 'Teamplayer',
          icon: 'fas fa-users',
          content: 'Samenwerken staat centraal, met oog voor diversiteit in achtergrond en vaardigheden.'
        },
        {
          title: 'Inlevingsvermogen',
          icon: 'fas fa-heart',
          content: 'Kan inschatten wat de impact van besluiten is op anderen binnen het team.'
        },
        {
          title: 'Integriteit',
          icon: 'fas fa-shield-alt',
          content: 'Is betrouwbaar, gaat discreet om met informatie, en draagt verantwoordelijkheid uit.'
        },
        {
          title: 'Initiërend Vermogen',
          icon: 'fas fa-lightbulb',
          content: 'Neemt initiatief en stimuleert beweging binnen het team.'
        },
        {
          title: 'Flexibiliteit',
          icon: 'fas fa-random',
          content: 'Kan effectief omgaan met wisselende, complexe of onverwachte situaties.'
        }
      ]
    },
    {
      title: 'Origineel Document',
      icon: 'fas fa-file-pdf',
      cards: [
        {
          title: 'Functieprofiel Postcommandant',
          icon: 'fas fa-file-pdf',
          content: (
            <>
              <div className="document-container pdf-document">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>Functieprofiel: Postcommandant ZRB</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Datum:</strong> April 2022</p>
                  <p><strong>Auteurs:</strong> L. Carree, R. van Caspel, B. Kemperman en P. Winkel</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1hf0CX91ytVM8myjdI_H6_nd-OM9GFvQ2/view" 
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