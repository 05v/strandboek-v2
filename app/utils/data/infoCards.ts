import { InfoCard } from '../types';

// This file contains the basic information for all info cards
// Details are stored in separate files per category

export const infoCards: InfoCard[] = [
  // Algemene informatie
  {
    id: 'post-procedures',
    title: 'Post Openen en Sluiten',
    description: 'Procedures voor het correct openen en sluiten van een reddingspost. Checklists voor alle taken en meldplichten.',
    icon: 'fas fa-door-open',
    category: 'algemeen',
    url: '/informatie/post-procedures'
  },
  {
    id: 'roepnummers',
    title: 'Roepnummers',
    description: 'Roepnummerplan per 31 maart 2025 voor alle eenheden van de Reddingsbrigade Zandvoort.',
    icon: 'fas fa-broadcast-tower',
    category: 'algemeen',
    url: '/informatie/roepnummers'
  },
  {
    id: 'opleidingstrajecten',
    title: 'Opleidingstrajecten',
    description: 'Informatie over de verschillende opleidingstrajecten binnen de Reddingsbrigade Zandvoort.',
    icon: 'fas fa-graduation-cap',
    category: 'algemeen',
    url: '/informatie/opleidingstrajecten'
  },
  
  // Operationeel
  {
    id: 'telefoonlijst',
    title: 'Verkorte Telefoonlijst',
    description: 'Belangrijke telefoonnummers van posten, hulpdiensten en meldkamers.',
    icon: 'fas fa-phone-alt',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1Rv9TyQ5kkSKSgLVF4P_V0hCiDctUSD5a/view',
    isExternal: true
  },
  {
    id: 'rhr-handleiding',
    title: 'RHR Handleiding',
    description: 'Volledige handleiding voor het Reddingsbrigade Hulpverleningsregistratie (RHR) systeem inclusief inloggegevens.',
    icon: 'fas fa-clipboard-list',
    category: 'operationeel',
    url: '/informatie/rhr-handleiding'
  },
  {
    id: 'externe-systemen',
    title: 'Externe Systemen',
    description: 'Informatie over externe systemen zoals Meldkamer en Kustwacht In/Uitmelden.',
    icon: 'fas fa-external-link-alt',
    category: 'operationeel',
    url: '/informatie/externe-systemen'
  },
  // Kaarten en plattegronden
  {
    id: 'zandvoort-kaart',
    title: 'Plattegrond Zandvoort & Boulevard',
    description: 'Schematische plattegrond van Zandvoort & Boulevard, te gebruiken in de zonneklep van voertuigen.',
    icon: 'fas fa-map',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1or9JjvYjEzHI1R1QDFxXlXTjT18RU6MS/view',
    isExternal: true
  },
  {
    id: 'strand-kaart-2021',
    title: 'Kaart zandvoortse strand 2021',
    description: 'Gedetailleerde kaart van het Zandvoortse strand met belangrijke locatiemarkeringen en oriëntatiepunten.',
    icon: 'fas fa-map-marked-alt',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/18bOdYHSq9Ac138s9TT2De5iC4WUPwrCP/view',
    isExternal: true
  },
  {
    id: 'watersport-zones-2021',
    title: 'Kaart watersport zones 2021',
    description: 'Overzicht van de aangewezen zones voor verschillende watersporten langs het Zandvoortse strand.',
    icon: 'fas fa-water',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1syqWAFKDDw7TGi0ig3SG773YlJ2hNkz3/view',
    isExternal: true
  },
  {
    id: 'strandhuisjes-tekening',
    title: 'Strandhuisjes schematische tekening',
    description: 'Schematisch overzicht van de locaties en nummering van strandhuisjes langs het Zandvoortse strand.',
    icon: 'fas fa-home',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1kz7JghbPZscaMU4GdwB3noO-A3tM3B0u/view',
    isExternal: true
  },
  {
    id: 'strandtenten-aanrijroutes',
    title: 'Strandtenten en aanrijroutes',
    description: 'Overzicht van strandtenten en bijbehorende aanrijroutes voor hulpverleners.',
    icon: 'fas fa-route',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1FXXnz4sfjF2L5_p8vdZofa6hDLKyolZ8/view',
    isExternal: true
  },
  {
    id: 'aanrijpunten-noord-holland',
    title: 'Aanrijpunten hulpdiensten Noord Holland',
    description: 'Kaart met overzicht van officiële aanrijpunten voor hulpdiensten in Noord Holland.',
    icon: 'fas fa-truck-medical',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1cBSv_yqicYiQNygsZVf3V1FBY6520zjd/view',
    isExternal: true
  },
  // Comunicatie
  {
    id: 'roepnummerplan-2025',
    title: 'Roepnummerplan voertuigen en eenheden 2025',
    description: 'Actueel roepnummerplan voor alle voertuigen en eenheden van de Reddingsbrigade.',
    icon: 'fas fa-car-side',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1NJnD6p2XBwz8nnMORrpIRyAC4SX0HeWr/view',
    isExternal: true
  },
  {
    id: 'kanaalindeling-mobilofoon-2025',
    title: 'Kanaalindeling mobilofoon 2025',
    description: 'Overzicht van de kanaalindeling voor mobilofoongebruik binnen de Reddingsbrigade.',
    icon: 'fas fa-broadcast-tower',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1BoCoWijE5GEY87OdcOQDHwlthm7Xj5T7/view',
    isExternal: true
  },
  {
    id: 'c2000-codes',
    title: 'C2000 codes',
    description: 'Overzicht van C2000 statuscodes en gebruiksprotocol voor communicatie met meldkamer.',
    icon: 'fas fa-comment-alt',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1a22jc_cty_fEAUqcMqjZfmvhpCyqBZGa/view',
    isExternal: true
  },
  {
    id: 'portofoon-instructie',
    title: 'Instructie gebruik portofoon',
    description: 'Handleiding voor correct gebruik van portofoons binnen de Reddingsbrigade.',
    icon: 'fas fa-satellite-dish',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1hI64So6wQW1EXdKx9XLdVaRMsO3l7HxR/view',
    isExternal: true
  },
  // Protocollen
  {
    id: 'directe-document-link',
    title: 'Overzicht Procedure Documenten',
    description: 'Directe link naar PDF met overzicht van alle operationele procedures en documenten.',
    icon: 'fas fa-file-pdf',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1d1BXeTnm4VR46M_qZxDVAdS59ofE-JyN/view',
    isExternal: true
  },
  {
    id: 'werkwijze-alarmploeg',
    title: 'Werkwijze alarmploeg',
    description: 'Protocol en richtlijnen voor de werkwijze van de alarmploeg bij incidenten.',
    icon: 'fas fa-bell',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1ImOuJKqOhQlViEfEkqDa8m0LX1et1M11/view',
    isExternal: true
  },
  {
    id: 'strandrolstoel-info',
    title: 'Strandrolstoel informatie kaart',
    description: 'Informatie over beschikbaarheid en gebruik van strandrolstoelen voor mindervaliden.',
    icon: 'fas fa-wheelchair',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1CJeBFQI66R0vL4ok525NixGE7J_ex1Z5/view',
    isExternal: true
  },
  {
    id: 'lichaam-berging-protocol',
    title: 'Protocol Berging Stoffelijk Overschot',
    description: 'Stappenplan voor het veiligstellen en bergen van een stoffelijk overschot gevonden op zee of ruime wateroppervlakten.',
    icon: 'fas fa-procedures',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/1aymHVWwYKv6jJ-gsSQ1qxjF0RRmxJm2y/view',
    isExternal: true
  },
  {
    id: 'inzetprotocol-rb-knrm',
    title: 'Inzetprotocol Reddingsbrigades & KNRM Lifeguards',
    description: 'Samenwerkingsprotocol tussen Reddingsbrigades, KNRM Lifeguards en het Kustwachtcentrum voor alarmeringen en inzetten.',
    icon: 'fas fa-life-ring',
    category: 'operationeel',
    url: '/informatie/inzetprotocol-rb-knrm'
  },
  {
    id: 'handboek-nrv-eenheden',
    title: 'Handboek Inzet NRV eenheden',
    description: 'Nationale inzetprocedures voor reddingsbrigade-eenheden bij calamiteiten zoals overstromingen in andere provincies.',
    icon: 'fas fa-truck-moving',
    category: 'operationeel',
    url: '/informatie/handboek-nrv-eenheden'
  },
  {
    id: 'waarschuwingsvlaggen',
    title: 'Waarschuwingsvlaggen Strand',
    description: 'Informatie over de gele en rode waarschuwingsvlaggen aan het strand van Zandvoort.',
    icon: 'fas fa-flag',
    category: 'operationeel',
    url: '/informatie/waarschuwingsvlaggen'
  },
  {
    id: 'c2000-overzicht',
    title: 'C2000 Verkort Overzicht',
    description: 'Overzicht van C2000 communicatieprotocollen en statuscodes voor de Zandvoortse Reddingsbrigade.',
    icon: 'fas fa-broadcast-tower',
    category: 'operationeel',
    url: '/informatie/c2000-overzicht'
  },
  {
    id: 'werkafspraken-meldkamer',
    title: 'Werkafspraken Meldkamer',
    description: 'Werkafspraken Meldkamer Noord Holland Reddingsbrigade & KNRM.',
    icon: 'fas fa-handshake',
    category: 'operationeel',
    url: 'https://drive.google.com/file/d/19E3aUiE_wsnCzYDmUltACSF-KTuWonBf/view',
    isExternal: true
  },
  {
    id: 'mtb-parcours',
    title: 'Toegang MTB-parcours Zandvoort',
    description: 'Informatie over toegang en aanrijpunten naar het Mountainbikeparcours Zandvoort.',
    icon: 'fas fa-biking',
    category: 'operationeel',
    url: '/informatie/mtb-parcours'
  },
  {
    id: 'vermissingen-sop',
    title: 'SOP WHV 006 – Vermissingen',
    description: 'Standaard Operationele Procedure voor vermissingen op het strand en in recreatiegebieden.',
    icon: 'fas fa-search',
    category: 'operationeel',
    url: '/informatie/vermissingen-sop'
  },
  {
    id: 'helikopter-sop',
    title: 'SOP WHV 005 – Kustwachthelikopter',
    description: 'Werkafspraak voor landing Kustwachthelikopter Bristow SAR op het strand.',
    icon: 'fas fa-helicopter',
    category: 'operationeel',
    url: '/informatie/helikopter-sop'
  },
  {
    id: 'ambulancehelikopter-sop',
    title: 'SOP WHV 004 – Trauma- en Ambulancehelikopters (ANWB MMT)',
    description: 'Werkafspraak voor trauma- en ambulancehelikopters (ANWB MMT) op het strand.',
    icon: 'fas fa-helicopter',
    category: 'operationeel',
    url: '/informatie/ambulancehelikopter-sop'
  },
  {
    id: 'kustwachtgebied-sop',
    title: 'SOP WHV 003 – Werkafspraak Kustwachtgebied',
    description: 'Standaard Operationele Procedure voor reddingsbrigades in het kustwachtgebied.',
    icon: 'fas fa-ship',
    category: 'operationeel',
    url: '/informatie/kustwachtgebied-sop'
  },
  
  // Richtlijnen en protocollen
  {
    id: 'richtlijnen-placeholder-1',
    title: 'Richtlijn 1',
    description: 'Placeholder voor richtlijn/protocol kaart 1.',
    icon: 'fas fa-file-alt',
    category: 'richtlijnen',
    url: '/informatie/richtlijnen-placeholder-1'
  },
  {
    id: 'richtlijnen-placeholder-2',
    title: 'Richtlijn 2',
    description: 'Placeholder voor richtlijn/protocol kaart 2.',
    icon: 'fas fa-file-alt',
    category: 'richtlijnen',
    url: '/informatie/richtlijnen-placeholder-2'
  },
  
  // Inzet duingebied
  {
    id: 'duingebied-placeholder-1',
    title: 'Inzet Duingebied 1',
    description: 'Placeholder voor inzet duingebied kaart 1.',
    icon: 'fas fa-mountain',
    category: 'duingebied',
    url: '/informatie/duingebied-placeholder-1'
  },
  {
    id: 'duingebied-placeholder-2',
    title: 'Inzet Duingebied 2',
    description: 'Placeholder voor inzet duingebied kaart 2.',
    icon: 'fas fa-mountain',
    category: 'duingebied',
    url: '/informatie/duingebied-placeholder-2'
  },
  
  // Handleiding/naslag
  {
    id: 'handleiding-placeholder-1',
    title: 'Handleiding 1',
    description: 'Placeholder voor handleiding/naslag kaart 1.',
    icon: 'fas fa-book',
    category: 'handleiding',
    url: '/informatie/handleiding-placeholder-1'
  },
  {
    id: 'handleiding-placeholder-2',
    title: 'Handleiding 2',
    description: 'Placeholder voor handleiding/naslag kaart 2.',
    icon: 'fas fa-book',
    category: 'handleiding',
    url: '/informatie/handleiding-placeholder-2'
  },
  
  // Factsheets
  {
    id: 'factsheet-placeholder-1',
    title: 'Factsheet 1',
    description: 'Placeholder voor factsheet kaart 1.',
    icon: 'fas fa-file-invoice',
    category: 'factsheets',
    url: '/informatie/factsheet-placeholder-1'
  },
  {
    id: 'factsheet-placeholder-2',
    title: 'Factsheet 2',
    description: 'Placeholder voor factsheet kaart 2.',
    icon: 'fas fa-file-invoice',
    category: 'factsheets',
    url: '/informatie/factsheet-placeholder-2'
  },
  
  // Formulieren
  {
    id: 'formulier-placeholder-1',
    title: 'Formulier 1',
    description: 'Placeholder voor formulier kaart 1.',
    icon: 'fas fa-clipboard',
    category: 'formulieren',
    url: '/informatie/formulier-placeholder-1'
  },
  {
    id: 'formulier-placeholder-2',
    title: 'Formulier 2',
    description: 'Placeholder voor formulier kaart 2.',
    icon: 'fas fa-clipboard',
    category: 'formulieren',
    url: '/informatie/formulier-placeholder-2'
  }
]; 