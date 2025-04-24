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
    title: 'Alarmploeg & Opgeschaalde Hulpverlening',
    description: 'Beleid, procedures en werkinstructies voor de inzet van de alarmploeg bij acute en opgeschaalde noodsituaties.',
    icon: 'fas fa-bell',
    category: 'operationeel',
    url: '/informatie/werkwijze-alarmploeg'
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
    title: 'Inzetprotocol Reddingsbrigades en KNRM Lifeguards',
    description: 'Protocol voor alarmering en samenwerking tussen Kustwachtcentrum, Reddingsbrigades en KNRM Lifeguards bij incidenten aan de Nederlandse kust.',
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
    id: 'vog-beleid',
    title: 'VOG-beleid bij de ZRB',
    description: 'Informatie over de Verklaring Omtrent het Gedrag (VOG) voor leden van de Reddingsbrigade Zandvoort.',
    icon: 'fas fa-shield-alt',
    category: 'richtlijnen',
    url: '/informatie/vog-beleid'
  },
  {
    id: 'protocol-psychosociale-ondersteuning',
    title: 'Protocol Psychosociale Ondersteuning',
    description: 'Protocol voor psychosociale ondersteuning na schokkende gebeurtenissen bij de Zandvoortse Reddingsbrigade.',
    icon: 'fas fa-heart',
    category: 'richtlijnen',
    url: '/informatie/protocol-psychosociale-ondersteuning'
  },
  {
    id: 'protocol-evaluatiemethode-inzet',
    title: 'Protocol Evaluatiemethode Inzet',
    description: 'Gestructureerde methode voor het evalueren van inzetten en hulpverleningen van de Zandvoortse Reddingsbrigade.',
    icon: 'fas fa-clipboard-check',
    category: 'richtlijnen',
    url: '/informatie/protocol-evaluatiemethode-inzet'
  },
  {
    id: 'protocol-besmettingsaccident',
    title: 'Protocol Besmettingsaccident',
    description: 'Protocol voor prik-, bijt-, snij-, krab- en spataccidenten met mogelijk besmet bloed of lichaamsvloeistoffen bij de ZRB.',
    icon: 'fas fa-syringe',
    category: 'richtlijnen',
    url: '/informatie/protocol-besmettingsaccident'
  },
  {
    id: 'sociale-media-richtlijnen',
    title: 'Richtlijnen Gebruik Sociale Media',
    description: 'Richtlijnen voor het gebruik van sociale media door leden van de Reddingsbrigade Zandvoort.',
    icon: 'fas fa-hashtag',
    category: 'richtlijnen',
    url: '/informatie/sociale-media-richtlijnen'
  },
  {
    id: 'brancherichtlijn-og',
    title: 'Brancherichtlijn Optische- en Geluidssignalen 2024',
    description: 'Richtlijnen voor het gebruik van optische- en geluidssignalen door reddingsbrigade voertuigen bij dringende taken.',
    icon: 'fas fa-ambulance',
    category: 'richtlijnen',
    url: '/informatie/brancherichtlijn-og'
  },
  {
    id: 'actief-lid',
    title: 'Werkafspraak – Actief Lid bij de ZRB',
    description: 'Criteria en richtlijnen voor het actief lidmaatschap bij de Zandvoortse Reddingsbrigade.',
    icon: 'fas fa-user-check',
    category: 'richtlijnen',
    url: '/informatie/actief-lid'
  },
  {
    id: 'stroomdiagram-reanimatie',
    title: 'Stroomdiagram reanimatie drenkeling',
    description: 'Stapsgewijs overzicht van reanimatieprotocol specifiek voor drenkelingen.',
    icon: 'fas fa-heartbeat',
    category: 'richtlijnen',
    url: 'https://drive.google.com/open?id=1YDH7hvLT0MIvt11udwR8yw5Wvtw7zVvc&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'stroomdiagram-hulpverlening',
    title: 'Stroomdiagram algemene hulpverlening drenkeling',
    description: 'Protocol voor algemene hulpverlening aan drenkelingen in verschillende situaties.',
    icon: 'fas fa-life-ring',
    category: 'richtlijnen',
    url: 'https://drive.google.com/open?id=1VISwOuSVyXsrSr86eOc6aruvTAQMqgSU&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'richtlijn-voorwaarden-matrix',
    title: 'Richtlijn en voorwaarden voor leden ZRB - matrix',
    description: 'Overzicht van benodigde diploma\'s en uitrusting voor gebruik van voertuigen, boten en materieel.',
    icon: 'fas fa-table',
    category: 'richtlijnen',
    url: 'https://drive.google.com/open?id=1qMMHw-ftMlFoFc7iFOjymQVMmQ-MCW3h&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'richtlijn-bewaking',
    title: 'Richtlijn Leidraad Incidentele bewaking en ondersteuning',
    description: 'Handleiding voor verzoeken voor bewaking en ondersteuning: procedure, voorwaarden en besluitvorming.',
    icon: 'fas fa-clipboard-check',
    category: 'richtlijnen',
    url: 'https://drive.google.com/open?id=1JRbgc1lo3boDw6INqkbDZj8oKUdo44w_&usp=drive_copy',
    isExternal: true
  },
  
  // Inzet duingebied
  {
    id: 'inzet-duingebied',
    title: 'Inzet Duingebied – Werkinstructie',
    description: 'Werkinstructie voor inzet in duingebieden: Amsterdamse Waterleidingsduinen (AWD) en Nationaal Park Zuid-Kennemerland (NPZK).',
    icon: 'fas fa-mountain',
    category: 'duingebied',
    url: '/informatie/inzet-duingebied'
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