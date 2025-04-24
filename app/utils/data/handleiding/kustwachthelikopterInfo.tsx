import React from 'react';
import { InfoCardDetail } from '../../types';

export const kustwachthelikopterInfoDetail: InfoCardDetail = {
  id: 'kustwachthelikopter-info',
  title: 'Informatie Kustwachthelikopter',
  description: 'Technische specificaties, inzetcriteria en veiligheidsrichtlijnen voor de Leonardo AW189 Kustwachthelikopter.',
  icon: 'fas fa-helicopter',
  category: 'handleiding',
  intro: 'Dit document biedt een overzicht van alle relevante informatie over de Leonardo AW189 Kustwachthelikopter van de Nederlandse Kustwacht. Het bevat informatie over beschikbaarheid, technische specificaties, inzetcriteria, veilige benadering en communicatiemiddelen.',
  sections: [
    {
      title: 'Algemene Informatie',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Beschikbaarheid & Standplaatsen',
          icon: 'fas fa-map-marker-alt',
          content: (
            <>
              <p>De Nederlandse Kustwacht beschikt over twee Kustwachthelikopters van het type Leonardo AW189, die:</p>
              
              <ul className="info-list checkmark">
                <li>Gestationeerd zijn op Den Helder Airport en Vliegveld Midden Zeeland</li>
                <li>24/7, 365 dagen per jaar inzetbaar zijn</li>
                <li>Binnen 20 minuten inzetklaar kunnen zijn</li>
              </ul>
            </>
          )
        },
        {
          title: 'Technische Specificaties Leonardo AW189',
          icon: 'fas fa-cogs',
          content: (
            <>
              <ul className="info-list">
                <li><strong>Lengte:</strong> 17,60 meter</li>
                <li><strong>Breedte (incl. rotoren):</strong> 14,40 meter</li>
                <li><strong>Max. snelheid:</strong> 313 km/u</li>
                <li><strong>Voortstuwing:</strong> 2x General Electric CT7-2E1 Turboshaft motoren (2.000 pk per stuk)</li>
                <li><strong>Bereik:</strong> Maximaal 1.142 km</li>
                <li><strong>Vliegtijd:</strong> Meer dan 4 uur</li>
                <li><strong>Dienstverlener:</strong> Bristow Nederland BV (helikopter, bemanning, onderhoud)</li>
              </ul>
            </>
          )
        },
        {
          title: 'Bemanning',
          icon: 'fas fa-users',
          content: (
            <>
              <p>Elke helikopter wordt bemand door:</p>
              
              <ul className="info-list">
                <li>2 piloten</li>
                <li>1 winch operator</li>
                <li>1 winchman (reddingszwemmer)</li>
                <li>1 SAR Nurse (ambulanceverpleegkundige)</li>
              </ul>
            </>
          )
        },
        {
          title: 'Document Informatie',
          icon: 'fas fa-file-alt',
          content: (
            <>
              <div className="document-info">
                <p><strong>Versie:</strong> 1.0</p>
                <p><strong>Datum:</strong> Maart 2023</p>
                <p><strong>Bron:</strong> Kustwachtcentrum Nederland</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Uitrusting & Communicatie',
      icon: 'fas fa-toolbox',
      cards: [
        {
          title: 'Medische Uitrusting',
          icon: 'fas fa-briefcase-medical',
          content: (
            <>
              <p>De helikopter is uitgerust conform het Landelijk Protocol Ambulancezorg, met aanvullende SAR-specifieke protocollen.</p>
              
              <ul className="info-list checkmark">
                <li>1 standaard brancard (ruimte voor 2 mogelijk)</li>
                <li>Uitrusting voor solistisch werken</li>
                <li>Specialisatie in waterongevallen en maritieme casuïstiek</li>
                <li>Mogelijkheid tot transport van meerdere hulpverleners</li>
              </ul>
            </>
          )
        },
        {
          title: 'Apparatuur & Zoekuitrusting',
          icon: 'fas fa-search',
          content: (
            <>
              <ul className="info-list">
                <li><strong>Warmtebeeldcamera (IR/EO)</strong> – voor het opsporen van drenkelingen of vermisten</li>
                <li><strong>Search Radar</strong> – maritieme zoekacties</li>
                <li><strong>Dubbele hoist (lier)</strong> – voor hijsen vanaf water, schip of land</li>
                <li><strong>Zoeklicht</strong> – krachtige verlichting voor nachtoperaties</li>
              </ul>
            </>
          )
        },
        {
          title: 'Communicatiemiddelen',
          icon: 'fas fa-broadcast-tower',
          content: (
            <>
              <ul className="info-list">
                <li>C2000</li>
                <li>VHF/UHF-radio's</li>
                <li>Marifoon</li>
                <li>Mobiele telefoon en satelliettelefoon</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Inzet & Veiligheid',
      icon: 'fas fa-shield-alt',
      cards: [
        {
          title: 'Inzetcriteria',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <p>De helikopter wordt ingezet op verzoek van de meldkamer via het Kustwachtcentrum. Toepassingen:</p>
              
              <ul className="info-list">
                <li>Waterhulpverlening</li>
                <li>Overstromingen</li>
                <li>Zoek- en reddingsacties</li>
                <li>Transport van hulpverleners of slachtoffers vanaf onbereikbare locaties</li>
                <li>Grootschalige incidenten</li>
              </ul>
            </>
          )
        },
        {
          title: 'Veilig Benaderen van de Helikopter',
          icon: 'fas fa-exclamation-triangle',
          content: (
            <>
              <ul className="info-list alert">
                <li>Rotors blijven vaak draaien tijdens uit-/instappen</li>
                <li>Alleen benaderen na toestemming (duim omhoog-signaal)</li>
                <li>Benader uitsluitend van voren of zijkant (tussen 1–3 uur of 9–11 uur positie)</li>
                <li>NOOIT van achteren benaderen (staartrotor)</li>
                <li>Met voertuigen alleen onder begeleiding van bemanning naderen</li>
                <li>Houd rekening met rotor downwash – alles moet worden vastgezet</li>
              </ul>
            </>
          )
        },
        {
          title: 'Landingsruimte',
          icon: 'fas fa-helicopter',
          content: (
            <>
              <ul className="info-list">
                <li>De piloot bepaalt de exacte landingslocatie</li>
                <li>Houd altijd minimaal 100 meter afstand</li>
                <li>Deuren van voertuigen sluiten</li>
                <li>Zorg voor een vrije landingszone zonder losliggende objecten</li>
              </ul>
            </>
          )
        },
        {
          title: 'Uitgangen',
          icon: 'fas fa-door-open',
          content: (
            <>
              <p><strong>Standaard</strong></p>
              <ul className="info-list">
                <li>Cabinedeur(en): hendel omhoog, deur naar achteren schuiven</li>
                <li>Cockpitdeur: hendel omlaag, deur openen</li>
              </ul>
              
              <p><strong>Nooduitgangen</strong></p>
              <ul className="info-list">
                <li>3–5. Cabineramen: trek aan rood label, verwijder rubberkoord, druk in hoek</li>
                <li>6. Voorste cabineruit: druk knop in, roteer rode hendel, raam verwijderen</li>
                <li>7. Cockpitdeur-raam: zelfde procedure als ramen</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Contact & Documentatie',
      icon: 'fas fa-address-book',
      cards: [
        {
          title: 'Contact per Discipline',
          icon: 'fas fa-envelope',
          content: (
            <>
              <ul className="info-list">
                <li><strong>KNRM:</strong> <a href="mailto:KNRM@bristowgroup.com">KNRM@bristowgroup.com</a></li>
                <li><strong>MIRG:</strong> <a href="mailto:MIRG@bristowgroup.com">MIRG@bristowgroup.com</a></li>
                <li><strong>Reddingsbrigade:</strong> <a href="mailto:Reddingsbrigade@bristowgroup.com">Reddingsbrigade@bristowgroup.com</a></li>
                <li><strong>Ambulance:</strong> <a href="mailto:Ambulance@bristowgroup.com">Ambulance@bristowgroup.com</a></li>
                <li><strong>Brandweer:</strong> <a href="mailto:Brandweer@bristowgroup.com">Brandweer@bristowgroup.com</a></li>
                <li><strong>Veiligheidsregio:</strong> <a href="mailto:Veiligheidsregio@bristowgroup.com">Veiligheidsregio@bristowgroup.com</a></li>
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
                <h4>Informatie Kustwachthelikopter</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie:</strong> 1.0</p>
                  <p><strong>Datum:</strong> Maart 2023</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/11x6ENrtCFAWTWcbRSv8VeoJOCXO0so67/view" 
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