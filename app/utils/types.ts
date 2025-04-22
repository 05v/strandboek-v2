import React from 'react';

// Common types for the information cards
export interface InfoCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'algemeen' | 'operationeel' | 'richtlijnen' | 'duingebied' | 'handleiding' | 'factsheets' | 'formulieren';
  url: string;
  isExternal?: boolean;  // Flag to indicate external links (PDF, etc.)
}

export interface InfoCardDetailSection {
  title: string;
  icon: string;
  cards: InfoCardDetailContent[];
}

export interface InfoCardDetailContent {
  title: string;
  icon: string;
  content: React.ReactNode | string;
}

export interface InfoCardDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'algemeen' | 'operationeel' | 'richtlijnen' | 'duingebied' | 'handleiding' | 'factsheets' | 'formulieren';
  intro: string;
  sections: InfoCardDetailSection[];
} 