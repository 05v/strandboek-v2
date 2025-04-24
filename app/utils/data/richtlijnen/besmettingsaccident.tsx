import React from 'react';
import { InfoCardDetail } from '../../types';

export const besmettingsaccidentDetail: InfoCardDetail = {
  id: 'protocol-besmettingsaccident',
  title: 'Protocol Besmettingsaccident',
  description: 'Protocol voor prik-, bijt-, snij-, krab- en spataccidenten met mogelijk besmet bloed of lichaamsvloeistoffen bij de ZRB.',
  icon: 'fas fa-syringe',
  category: 'richtlijnen',
  intro: 'Dit protocol beschrijft het beleid rondom prik-, bijt-, snij-, krab- en spataccidenten waarbij bloed of andere lichaamsvloeistoffen betrokken zijn. Voor de leesbaarheid wordt dit samengevat als "prikaccidenten".',
  sections: [
    {
      title: 'Basisinformatie Protocol',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Doel en Toepassing',
          icon: 'fas fa-bullseye',
          content: (
            <>
              <h4>Doel</h4>
              <p>Dit protocol beschrijft het beleid rondom prik-, bijt-, snij-, krab- en spataccidenten waarbij bloed of andere lichaamsvloeistoffen betrokken zijn. Voor de leesbaarheid wordt dit samengevat als "prikaccidenten".</p>
              
              <h4>Toepassing</h4>
              <ul className="info-list checkmark">
                <li>Van toepassing op alle ZRB-vrijwilligers</li>
                <li>Geldt bij incidenten waarbij contact is met mogelijk besmet bloed of lichaamsvocht</li>
                <li>Medische afhandeling wordt uitgevoerd door PreventCare (kosten voor rekening van gemeente via de VRK-abonnementskosten)</li>
                <li>Voorkomen is beter dan genezen: Voorlichting, PBM (handschoenen, beademingsmaskers) en vaccinatie zijn essentieel</li>
              </ul>
            </>
          )
        },
        {
          title: 'Risicovol Bloedcontact',
          icon: 'fas fa-tint',
          content: (
            <>
              <p>Een situatie wordt als risicovol beschouwd wanneer sprake is van:</p>
              
              <ul className="info-list warning">
                <li>Contact van bloed/lichaamsvocht met niet-intacte huid (zoals schaafwonden of eczeem)</li>
                <li>Bloedspatten in ogen, mond of op slijmvliezen</li>
                <li>Bijt- of krabwonden waarbij bloed en speeksel gecombineerd worden</li>
                <li>Mond-op-mond beademing met bloedhoudend speeksel</li>
              </ul>
              
              <p>Overdracht van HBV, HCV of hiv is dan mogelijk</p>
              
              <p>De kans op besmetting is afhankelijk van:</p>
              <ul className="info-list">
                <li>Aard van het accident (hoeveelheid en wijze van overdracht)</li>
                <li>Serostatus van de bron</li>
                <li>Immuunstatus van het slachtoffer</li>
              </ul>
            </>
          )
        },
        {
          title: 'Risicobeoordeling & Behandeling',
          icon: 'fas fa-stethoscope',
          content: (
            <>
              <p>De beoordeling wordt gedaan door een arts of verpleegkundige van PreventCare, conform de Landelijke Richtlijn Prikaccidenten. Maatregelen kunnen zijn:</p>
              
              <ul className="info-list checkmark">
                <li>Post-expositie profylaxe (PEP)</li>
                <li>Monitoring en vervolgonderzoek</li>
                <li>Eventueel bloedonderzoek bij de bron</li>
              </ul>
              
              <p>Meer informatie is te vinden in de landelijke richtlijn:</p>
              <a href="https://lci.rivm.nl/richtlijnen/prikaccidenten" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="external-link">
                <i className="fas fa-external-link-alt"></i> Landelijke Richtlijn Prikaccidenten (RIVM)
              </a>
            </>
          )
        }
      ]
    },
    {
      title: 'Preventie & Verantwoordelijkheden',
      icon: 'fas fa-shield-alt',
      cards: [
        {
          title: 'Voorlichting & Instructie',
          icon: 'fas fa-chalkboard-teacher',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Onderdeel van opleidingen en herhalingscursussen</li>
                <li>Evaluatiemomenten kunnen aanleiding geven tot extra maatregelen</li>
              </ul>
            </>
          )
        },
        {
          title: 'Preventieve Vaccinatie',
          icon: 'fas fa-syringe',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Lifeguards krijgen (indien van toepassing) een preventieve vaccinatie aangeboden</li>
                <li>Belangrijk bij niet-gevaccineerden of non-responders: altijd vermelden tijdens gesprek met PreventCare</li>
              </ul>
            </>
          )
        },
        {
          title: 'Verantwoordelijkheden Lifeguard',
          icon: 'fas fa-user',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Meldt zelf het incident</li>
                <li>Voert eerste maatregelen uit</li>
              </ul>
            </>
          )
        },
        {
          title: 'Verantwoordelijkheden Leidinggevende ZRB',
          icon: 'fas fa-user-tie',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Zorgt voor bekendheid van het protocol</li>
                <li>Vangt de betrokkene op en begeleidt het belproces met PreventCare</li>
                <li>Regelt nazorg</li>
                <li>Verzorgt registratie in het Reddingsbrigade Hulpverlenings Registratiesysteem</li>
                <li>Stuurt verslag naar: <a href="mailto:PVeraar@VRK.nl">PVeraar@VRK.nl</a></li>
              </ul>
            </>
          )
        },
        {
          title: 'Verantwoordelijkheden PreventCare',
          icon: 'fas fa-hospital',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Beoordeelt incident</li>
                <li>Adviseert en begeleidt bij:
                  <ul>
                    <li>HBV-status (en vaccinatie of profylaxe)</li>
                    <li>HCV: monitoring</li>
                    <li>hiv: PEP en follow-up</li>
                  </ul>
                </li>
                <li>Afname nul-serum</li>
                <li>Inschatten serostatus van de bron</li>
              </ul>
            </>
          )
        },
        {
          title: 'Verantwoordelijkheden Adviseur Arbo, Verzuim & Re-integratie (VRK)',
          icon: 'fas fa-hard-hat',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Contactpersoon voor PreventCare</li>
                <li>Houdt overzicht van alle inzetten</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Contactpersonen & Document',
      icon: 'fas fa-phone-alt',
      cards: [
        {
          title: 'Contactgegevens',
          icon: 'fas fa-address-card',
          content: (
            <>
              <div className="contact-table">
                <table className="info-table">
                  <thead>
                    <tr>
                      <th>Functie</th>
                      <th>Naam / Organisatie</th>
                      <th>Contactgegevens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EHBP (PreventCare)</td>
                      <td>PreventCare</td>
                      <td>
                        <p><i className="fas fa-phone"></i> <a href="tel:036-5407407">036-5407407</a> (24/7 bereikbaar)</p>
                      </td>
                    </tr>
                    <tr>
                      <td>VRK Contactpersoon</td>
                      <td>Petra Veraar</td>
                      <td>
                        <p><i className="fas fa-mobile-alt"></i> <a href="tel:06-31664267">06-31664267</a></p>
                        <p><i className="fas fa-envelope"></i> <a href="mailto:PVeraar@VRK.nl">PVeraar@VRK.nl</a></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                <h4>Protocol Besmettingsaccident ZRB</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie:</strong> 1.0 – 2019</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/open?id=1m7D-n7Wbb-ZZN0eRD0icFuoL5Z_ChpB2&usp=drive_copy" 
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