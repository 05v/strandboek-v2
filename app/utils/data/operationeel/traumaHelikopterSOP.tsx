import React from 'react';
import { InfoCardDetail } from '../../types';

export const traumaHelikopterSOPDetail: InfoCardDetail = {
  id: 'trauma-helikopter-sop',
  title: 'SOP WHV 004 – Trauma- en Ambulancehelikopters',
  description: 'Werkafspraak voor samenwerking bij landing van trauma- en ambulancehelikopters (ANWB MMT).',
  icon: 'fas fa-helicopter',
  category: 'operationeel',
  intro: 'Deze Standaard Operationele Procedure (SOP) beschrijft de werkafspraken rond de landing van trauma- en ambulancehelikopters (ANWB MMT). Het biedt een duidelijk stappenplan voor veilige en efficiënte samenwerking tussen reddingsbrigades en helikopterdiensten bij incidenten op het strand.',
  sections: [
    {
      title: 'Documentgegevens',
      icon: 'fas fa-file-alt',
      cards: [
        {
          title: 'SOP WHV 004 – Werkafspraak Trauma- en Ambulancehelikopters',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <div className="document-info">
                <p><strong>Naam:</strong> Werkafspraak Trauma- en Ambulancehelikopters (ANWB MMT)</p>
                <p><strong>Onderdeel van:</strong> WHV – Partners</p>
                <p><strong>Doelgroep:</strong> Operationele lifeguards</p>
                <p><strong>Versie:</strong> 1.0</p>
                <p><strong>Datum:</strong> 29 november 2023</p>
                <p><strong>Status:</strong> Gepubliceerd</p>
                <p><strong>Contact:</strong> info@reddingsbrigade.nl</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Achtergrond, Doel en Beleid',
      icon: 'fas fa-bullseye',
      cards: [
        {
          title: 'Achtergrond',
          icon: 'fas fa-info-circle',
          content: (
            <>
              <p>Drie typen trauma- en ambulancehelikopters in Nederland:</p>
              <ul className="info-list">
                <li><strong>Lifeliner 1-5:</strong> MMT-helikopters met arts en verpleegkundige</li>
                <li><strong>PH-OOP:</strong> Ambulancehelikopter voor Waddeneilanden</li>
                <li><strong>PH-HOW:</strong> Back-up helikopter voor MMT</li>
              </ul>
              
              <p>Inzet bij medische noodsituaties en traumagevallen, met name:</p>
              <ul className="info-list">
                <li>Grote afstand tot ziekenhuis</li>
                <li>Slecht toegankelijk gebied (strand)</li>
                <li>Ernstige verwondingen waarbij specialistische zorg nodig is</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> De downwash van een helikopter kan gevaarlijk zijn en grote kracht uitoefenen. Losliggende voorwerpen kunnen rondvliegen.</p>
              </div>
            </>
          )
        },
        {
          title: 'Doel',
          icon: 'fas fa-compass',
          content: (
            <>
              <p>Een duidelijk protocol beschrijven voor veilige en efficiënte landingsprocedures van trauma- en ambulancehelikopters op het strand, waarbij de veiligheid van alle betrokkenen wordt gewaarborgd.</p>
            </>
          )
        },
        {
          title: 'Beleid',
          icon: 'fas fa-clipboard-list',
          content: (
            <>
              <p>Werkafspraak opgesteld tussen Reddingsbrigade Nederland en ANWB Medical Air Assistance (ANWB MAA).</p>
              <p>Doel: schade voorkomen, risico's vermijden, veiligheid waarborgen.</p>
            </>
          )
        },
        {
          title: 'Verantwoordelijkheden',
          icon: 'fas fa-user-shield',
          content: (
            <>
              <ul className="info-list">
                <li><strong>Piloot:</strong> Eindverantwoordelijk voor veilige landing en naleving luchtvaartregelgeving.</li>
                <li><strong>Reddingsbrigade:</strong> Ondersteuning bieden bij preparatie landingsplaats en communicatie met strandgangers.</li>
              </ul>
            </>
          )
        }
      ]
    },
    {
      title: 'Procedure',
      icon: 'fas fa-helicopter',
      cards: [
        {
          title: '1. Melding en Communicatie',
          icon: 'fas fa-broadcast-tower',
          content: (
            <>
              <p>Bij melding van komst helikopter:</p>
              <ul className="info-list">
                <li>Bepaal geschikte landingslocatie op het strand</li>
                <li>Informeer meldkamer en eigen personeel</li>
                <li>Neem contact op met aanvliegende helikopter via C2000, indien mogelijk</li>
              </ul>
            </>
          )
        },
        {
          title: '2. Landingslocatie voorbereiden',
          icon: 'fas fa-map-marker-alt',
          content: (
            <>
              <p><strong>Landingslocatie moet voldoen aan:</strong></p>
              <ul className="info-list">
                <li>Minimaal 25x25 meter vrije ruimte</li>
                <li>Vlakke ondergrond</li>
                <li>Geen obstakels (zoals parasols, strandstoelen)</li>
                <li>Geen personen binnen een straal van 30 meter</li>
                <li>Vrij van losliggende voorwerpen die kunnen opwaaien</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Gebruik GEEN afzetlint – dit kan in de rotorbladen terechtkomen!</p>
              </div>
            </>
          )
        },
        {
          title: '3. Strandbezoekers informeren',
          icon: 'fas fa-bullhorn',
          content: (
            <>
              <p>Met megafoon/verbale communicatie strandbezoekers informeren:</p>
              <ul className="info-list">
                <li>Parasols en andere losse voorwerpen verwijderen</li>
                <li>Handhanddoeken en strandmatten verzwaren of opruimen</li>
                <li>Kinderen onder direct toezicht houden</li>
                <li>Voertuigen/trailers verplaatsen (indien mogelijk)</li>
                <li>Honden aanlijnen en op afstand houden</li>
              </ul>
            </>
          )
        },
        {
          title: '4. Begeleiding landing',
          icon: 'fas fa-plane-arrival',
          content: (
            <>
              <ul className="info-list">
                <li>Indien mogelijk, brigade-voertuig met zwaailicht bij landingsplaats positioneren</li>
                <li>Minimaal 2 brigadeleden bij landingsplaats (ruggen naar helikopter tijdens landing)</li>
                <li>Brigadeleden dragen herkenbare kleding</li>
                <li>Hou visueel contact met piloot en volg aanwijzingen</li>
              </ul>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Bescherm ogen tegen opwaaiend zand tijdens landing</p>
              </div>
            </>
          )
        },
        {
          title: '5. Na landing',
          icon: 'fas fa-walking',
          content: (
            <>
              <div className="important-note">
                <p><strong>Let op:</strong> Rotors blijven draaien! Benader helikopter alleen op aanwijzing van bemanning.</p>
              </div>
              <ul className="info-list">
                <li>Benader helikopter altijd van voren, nooit van achteren (staartrotor!)</li>
                <li>Assisteer bij uitladen van materialen indien gevraagd</li>
                <li>Houd landingsplaats vrij tijdens aanwezigheid helikopter</li>
                <li>Assisteer bij overdracht patiënt indien nodig</li>
              </ul>
              
              <p><strong>Veilige naderingszone:</strong></p>
              <div className="approach-diagram">
                <div className="helicopter-diagram">
                  <div className="helicopter-icon"><i className="fas fa-helicopter"></i></div>
                  <div className="approach-zone safe">Veilige zone</div>
                  <div className="approach-zone danger">GEVAAR</div>
                </div>
              </div>
            </>
          )
        }
      ]
    },
    {
      title: 'Referenties en Bijlagen',
      icon: 'fas fa-book',
      cards: [
        {
          title: 'Referenties',
          icon: 'fas fa-link',
          content: (
            <>
              <p>ANWB Medical Air Assistance (2023) – Richtlijnen traumahelikopter landing</p>
              <p>Beschikbaar via:</p>
              <p className="reference">https://www.anwb-maa.nl/voor-professionals</p>
            </>
          )
        },
        {
          title: 'Bijlagen',
          icon: 'fas fa-paperclip',
          content: (
            <>
              <ul className="info-list">
                <li>Visuele weergave naderingshoeken helikopter</li>
                <li>Contactgegevens ANWB Medical Air Assistance</li>
              </ul>
            </>
          )
        },
        {
          title: 'Bron Document',
          icon: 'fas fa-file-alt',
          content: (
            <>
              <div className="document-container pdf-document">
                <i className="fas fa-file-pdf pdf-icon"></i>
                <h4>SOP WHV 004 – Werkafspraak Trauma- en Ambulancehelikopters</h4>
                
                <div className="pdf-info">
                  <p><strong>Type document:</strong> Extern PDF Document</p>
                  <p><strong>Gebruik:</strong> Standaard Operationele Procedure voor helikopterlandingen</p>
                </div>
                
                <div className="button-container">
                  <a href="https://drive.google.com/file/d/1u5njX3B5VxuSzNH4DQ1pv8HtM0o-abCu/view" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button primary pdf-button">
                    <i className="fas fa-external-link-alt"></i> Open Origineel Document
                  </a>
                </div>
              </div>
              
              <div className="important-note">
                <p><strong>Let op:</strong> Deze pagina bevat een samenvatting van de SOP. Voor de meest actuele informatie raadpleeg altijd het originele document via bovenstaande link.</p>
              </div>
            </>
          )
        }
      ]
    }
  ]
}; 