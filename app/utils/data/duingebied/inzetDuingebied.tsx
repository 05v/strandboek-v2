import React from 'react';
import { InfoCardDetail } from '../../types';

export const inzetDuingebiedDetail: InfoCardDetail = {
  id: 'inzet-duingebied',
  title: 'Inzet Duingebied – Werkinstructie',
  description: 'Werkinstructie voor inzet in duingebieden: Amsterdamse Waterleidingsduinen (AWD) en Nationaal Park Zuid-Kennemerland (NPZK).',
  icon: 'fas fa-mountain',
  category: 'duingebied',
  intro: 'Dit document beschrijft de werkwijze bij een inzet in het duingebied van de Amsterdamse Waterleidingsduinen (AWD) en Nationaal Park Zuid-Kennemerland (NPZK). Deze werkinstructie (Versie 1.0 – 9-2-2022) biedt richtlijnen voor efficiënte en veilige inzet in deze gebieden.',
  sections: [
    {
      title: 'Algemene Instructies',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Algemene Instructies (alle duingebieden)',
          icon: 'fas fa-exclamation-circle',
          content: (
            <>
              <div className="important-note">
                <p><strong>Bij elke inzet in duingebied:</strong></p>
                <ul className="info-list alert">
                  <li>Informeer de boswachter via de regionale meldkamer.</li>
                  <li>Boswachter NPZK heeft C2000.</li>
                  <li>Boswachter AWD heeft géén C2000.</li>
                  <li>Wijs één voertuig aan als First Responder en één voertuig als logistiek voertuig (voor o.a. ambulancebemanning).</li>
                  <li>Gebruik uitsluitend verharde en onverharde wegen. Wijk alleen af in noodgevallen.</li>
                  <li>Verkenning in het duingebied gebeurt uitsluitend op afspraak met de coördinator van de alarmploeg.</li>
                </ul>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Amsterdamse Waterleidingsduinen (AWD)',
      icon: 'fas fa-tree',
      cards: [
        {
          title: 'Ingang en Route-informatie AWD',
          icon: 'fas fa-route',
          content: (
            <>
              <div className="route-container primary-route">
                <div className="route-header">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Primaire ingang</h4>
                </div>
                <p><strong>Locatie:</strong> Zandvoortselaan (bij rotonde Nieuw-Unicum)</p>
                <p className="note">Ook bij inzetten richting 'Oase' of 'Panneland' heeft deze ingang de voorkeur t.o.v. openbare weg.</p>
              </div>
              
              <h4>Navigatie en Plaatsbepaling:</h4>
              <ul className="info-list checkmark">
                <li>Plaatsbepaling gebeurt op basis van nummering van prullenbakken of (watermeet)putten.</li>
                <li>In alle voertuigen bevindt zich een kaart van het duingebied.</li>
                <li>Alle ingangshekken beschikken over een sleutelkast, open te maken met code 1959 (vertrouwelijk).</li>
                <li>Sleutel uit de kast opent het betreffende hek.</li>
                <li>Navigatie: Veel wegen zijn zichtbaar op Google Maps, dit kan gebruikt worden.</li>
              </ul>
            </>
          )
        },
        {
          title: 'Routebeschrijvingen AWD',
          icon: 'fas fa-directions',
          content: (
            <>
              <div className="route-container">
                <div className="route-header">
                  <i className="fas fa-compass"></i>
                  <h4>Route Oase vanaf ingang Zandvoortselaan</h4>
                </div>
                <p>Volg de hoofdroute vanaf de ingang bij de Zandvoortselaan richting het zuiden tot aan de Oase.</p>
              </div>
              
              <div className="route-container">
                <div className="route-header">
                  <i className="fas fa-compass"></i>
                  <h4>Route Panneland vanaf ingang Zandvoortselaan</h4>
                </div>
                <p>Volg de hoofdroute vanaf de ingang bij de Zandvoortselaan richting het oosten tot aan Panneland.</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Nationaal Park Zuid-Kennemerland (NPZK)',
      icon: 'fas fa-leaf',
      cards: [
        {
          title: 'Ingang en Route-informatie NPZK',
          icon: 'fas fa-route',
          content: (
            <>
              <div className="route-container primary-route">
                <div className="route-header">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Primaire ingangen</h4>
                </div>
                <ul className="info-list checkmark">
                  <li><strong>Vogelmeer:</strong> Via Parnassia</li>
                  <li><strong>Overige gebieden</strong> (zoals 't Wed, Oosterplas): Via hulpdiensteningang Koevlak</li>
                </ul>
              </div>
              
              <h4>Navigatie en Plaatsbepaling:</h4>
              <ul className="info-list checkmark">
                <li>Plaatsbepaling gebeurt op basis van nummering van bankjes.</li>
                <li>In voertuigen bevindt zich een kaart van het duingebied.</li>
                <li>Boswachter is bereikbaar via C2000.</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Kaarten en Documentatie',
      icon: 'fas fa-map',
      cards: [
        {
          title: 'Beschikbare Kaarten',
          icon: 'fas fa-file-pdf',
          content: (
            <>
              <div className="document-container pdf-document">
                <h4>Kaartmateriaal Duingebieden</h4>
                <ul className="info-list pdf-list">
                  <li>
                    <a href="https://drive.google.com/open?id=1VAfJpIm7OQ_JcwQgGtGIpZaZhTHs00FR" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-file-pdf"></i> Wandel- en fietskaart NPZK 2020
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/open?id=1n9kA9kPYYc1YGcGVjgGzVV5qqza_puKX" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-file-pdf"></i> Strandkaart Noordwijk 2021
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/open?id=1LD-EehdaONkfrxSs3k5MHnBVAgnUgxKP" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-file-pdf"></i> 6006 - Duingebied IJmuiden - Zandvoortselaan
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/open?id=1X6YlK_V68Be8B80EbXxC5A8y6-uag0Tb" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-file-pdf"></i> 6005 - Duingebied Castricum - Noordzeekanaal
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/open?id=1TUPnnbALNZ25o1t6Wo2jDrprnLMe5ERe" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-file-pdf"></i> 6009 - Overzicht 1: Duingebied Subkaarten
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/open?id=1i6fh9qLDG1sf0jmQ234iLw9jl9RQ47dw" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-file-pdf"></i> 6008 - Overzicht 2: Duinkaart VRK Gemeentegrens
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/open?id=1WpvolhCkwgDE5bSXhTjDcRmfBGlNi9zT" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-file-pdf"></i> 6007 - Duingebied Zandvoort - Langevelderslag
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="document-container pdf-document">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>Origineel Document</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Versie:</strong> 1.0 – 9-2-2022</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/16Dnbzfh9WiOEYMHJad0zcSXf0adLaCrC/view" 
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