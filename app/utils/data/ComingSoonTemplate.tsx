import React from 'react';
import { InfoCardDetail } from '../types';

// Function to create a Coming Soon template for cards that don't have content yet
export const createComingSoonTemplate = (
  id: string,
  title: string,
  description: string,
  icon: string,
  category: 'algemeen' | 'operationeel' | 'richtlijnen' | 'duingebied' | 'handleiding' | 'factsheets' | 'formulieren',
  availableDate?: string
): InfoCardDetail => {
  return {
    id,
    title,
    description,
    icon,
    category,
    intro: `Gedetailleerde informatie voor deze kenniskaart is momenteel in ontwikkeling en zal binnenkort beschikbaar zijn.${availableDate ? ` Verwachte beschikbaarheid: ${availableDate}.` : ''}`,
    sections: [
      {
        title: 'Informatie in ontwikkeling',
        icon: 'fas fa-clock',
        cards: [
          {
            title: 'Binnenkort beschikbaar',
            icon: 'fas fa-exclamation-circle',
            content: (
              <div>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <p className="text-sm text-blue-700">
                    <i className="fas fa-info-circle mr-2"></i>
                    Deze kenniskaart is momenteel in ontwikkeling. De volledige informatie zal binnenkort beschikbaar zijn.
                  </p>
                </div>
                
                <p className="mb-4">
                  We werken aan de inhoud van deze kenniskaart om u zo snel mogelijk van de juiste informatie te voorzien.
                  In de tussentijd kunt u contact opnemen met de verantwoordelijke afdeling voor directe vragen.
                </p>
                
                <h4 className="font-bold text-gray-800 mb-2">Contact voor vragen</h4>
                <p className="mb-1">
                  <span className="font-medium">Email:</span> <a href="mailto:operationeel@zrb.info" className="text-orange-500 hover:underline">operationeel@zrb.info</a>
                </p>
                <p>
                  <span className="font-medium">Telefonisch:</span> <a href="tel:0235713788" className="text-orange-500 hover:underline">023-5713788</a>
                </p>
              </div>
            )
          }
        ]
      }
    ],
  };
}; 