import React from 'react';
import { InfoCardDetail } from '../../types';

export const heliOpStrandDetail: InfoCardDetail = {
  id: 'heli-op-strand',
  title: 'Werkafspraak Helicopter op Strand',
  description: 'Veilig laten landen en opstijgen van (trauma)helicopters of ambulancehelikopters op het strand.',
  icon: 'fas fa-helicopter',
  category: 'operationeel',
  intro: 'Voor het veilig laten landen en opstijgen van een (trauma)helicopter of ambulancehelikopter, dienen onderstaande instructies gevolgd te worden.',
  sections: [
    {
      title: 'Werkafspraak Helicopter op Strand',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Voorbereiding Landing',
          icon: 'fas fa-plane-arrival',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Zorg voor een landingsplaats van minimaal 25x25 meter</li>
                <li>Verwijder alle losse voorwerpen (parasols, handdoeken, etc.) uit dit gebied</li>
                <li>Evacueer alle personen uit de landingszone</li>
                <li>Stel een veiligheidsperimeter in van minimaal 50 meter rondom de landingsplaats</li>
                <li>Gebruik oranje hesjes voor alle hulpverleners voor zichtbaarheid</li>
              </ul>
            </>
          )
        },
        {
          title: 'Tijdens Landing',
          icon: 'fas fa-helicopter',
          content: (
            <>
              <ul className="info-list alert">
                <li>Blijf op veilige afstand van de helikopter</li>
                <li>Benader de helikopter nooit vanaf de achterzijde (staartrotor)</li>
                <li>Wees alert op opwaaiend zand en objecten door de rotorwind</li>
                <li>Maak oogcontact met de piloot voordat je de landingszone betreedt</li>
              </ul>
            </>
          )
        },
        {
          title: 'Communicatie',
          icon: 'fas fa-comments',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Gebruik handgebaren voor communicatie met de piloot</li>
                <li>Y-symbool met armen: landingsplaats is hier</li>
                <li>Gekruiste armen boven het hoofd: landing afbreken</li>
                <li>Communiceer altijd via de portofoon met de meldkamer en teamleden</li>
              </ul>
            </>
          )
        },
        {
          title: 'Na Landing',
          icon: 'fas fa-user-md',
          content: (
            <>
              <ul className="info-list checkmark">
                <li>Assisteer het ambulancepersoneel indien nodig</li>
                <li>Houd de veiligheidsperimeter in stand</li>
                <li>Blijf alert op omstanders die de zone proberen te betreden</li>
              </ul>
            </>
          )
        },
        {
          title: 'Vertrek',
          icon: 'fas fa-plane-departure',
          content: (
            <>
              <ul className="info-list alert">
                <li>Zorg dat iedereen op veilige afstand is voordat de helikopter opnieuw opstart</li>
                <li>Houd de veiligheidsperimeter in stand tot de helikopter volledig vertrokken is</li>
                <li>Controleer de landingsplaats na vertrek op achtergebleven items</li>
              </ul>
              
              <div className="bg-yellow-100 p-4 rounded-md mt-4">
                <h3 className="text-lg font-semibold text-yellow-800">Let op:</h3>
                <p className="text-yellow-800">De veiligheid van hulpverleners en omstanders staat altijd voorop. Volg altijd de instructies van de piloot of het helikopterpersoneel.</p>
              </div>
            </>
          )
        }
      ]
    }
  ]
}; 