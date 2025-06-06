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
  {
    id: 'functieprofiel-postcommandant',
    title: 'Functieprofiel: Postcommandant',
    description: 'Beschrijving van de rol, verantwoordelijkheden en vereiste competenties voor de functie van Postcommandant binnen de ZRB.',
    icon: 'fas fa-user-tie',
    category: 'algemeen',
    url: '/informatie/functieprofiel-postcommandant'
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
    id: 'heli-op-strand',
    title: 'Heli op het Strand',
    description: 'Werkafspraak voor het veilig begeleiden van de landing en het vertrek van trauma- en ambulancehelikopters op het strand.',
    icon: 'fas fa-helicopter',
    category: 'operationeel',
    url: '/informatie/heli-op-strand'
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
    id: 'convenant-vrk',
    title: 'Convenant VRK – Reddingsbrigades in Kennemerland',
    description: 'Samenwerkingsafspraken tussen Veiligheidsregio Kennemerland en reddingsbrigades voor reguliere en grootschalige hulpverlening.',
    icon: 'fas fa-handshake',
    category: 'richtlijnen',
    url: '/informatie/convenant-vrk'
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
    id: 'handleiding-zoll-aed',
    title: 'Handleiding ZOLL AED',
    description: 'Officiële handleiding voor gebruik en onderhoud van de ZOLL AED defibrillator.',
    icon: 'fas fa-heartbeat',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1tAKcm0QikOw66bpSRaiQei_mUV2lsqjf&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'kustwachthelikopter-info',
    title: 'Informatie Kustwachthelikopter',
    description: 'Technische specificaties, inzetcriteria en veiligheidsrichtlijnen voor de Leonardo AW189 Kustwachthelikopter.',
    icon: 'fas fa-helicopter',
    category: 'handleiding',
    url: '/informatie/kustwachthelikopter-info'
  },
  {
    id: 'instructie-video-aed',
    title: 'Instructie video nieuwe AED (jan 2023)',
    description: 'Instructievideo voor het gebruik van de nieuwe AED-apparatuur.',
    icon: 'fas fa-video',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1cRBPyyx8BgRgOn-ydn9739P1qq4cqAEC&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'rhr-korte-handleiding',
    title: 'RHR korte handleiding zomerregistratie',
    description: 'Beknopte handleiding voor de zomerregistratie in het RHR-systeem.',
    icon: 'fas fa-clipboard-list',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1-Dd4uhKyFKbo83dh54farrNmmW_6LBVl&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'rhr-handleiding-algemeen',
    title: 'RHR handleiding algemeen (v2.0)',
    description: 'Volledige handleiding voor het gebruik van het Reddingsbrigade Hulpverleningsregistratie systeem.',
    icon: 'fas fa-book',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1ENIJK_HGszbEtGrjc2W9tKbrBiRWJqAO&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'dagelijks-onderhoud-rwc',
    title: 'Dagelijks onderhoud RWC (waterscooters)',
    description: 'Handleiding voor het dagelijkse onderhoud van RWC (Rescue Water Craft) waterscooters.',
    icon: 'fas fa-water',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1f27w9zDDuZ7IwSKVb7mG1fu2PlwNlyHy&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'gebruiksaanwijzing-motorola',
    title: 'Gebruiksaanwijzing Motorola portofoon MTP6650',
    description: 'Handleiding voor gebruik en bediening van de Motorola portofoon MTP6650.',
    icon: 'fas fa-broadcast-tower',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1yxtU6DTFZosVlXt3HDYpSybRrfsHwdhl&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'instructie-gebruik-tent',
    title: 'Instructie gebruik tent',
    description: 'Instructie voor opzetten, gebruik en opbergen van de PR-tent. Alleen voor PR, Demo en Trainingsdoeleinden.',
    icon: 'fas fa-campground',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1t9K-cxxOY059N3fFvhraYr-sOR4xYiPs&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'zrb-presentatie',
    title: 'ZRB presentatie - voorlichting scholen',
    description: 'Presentatie gebruikt voor voorlichting aan scholen over de Zandvoortse Reddingsbrigade (2021).',
    icon: 'fas fa-chalkboard-teacher',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1hfQ1bbtsjXxbAo065rTAQn16gB-uYX0N&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'bestuurstaken-overzicht',
    title: 'Bestuurstaken overzicht 2021',
    description: 'Overzicht van taken en verantwoordelijkheden binnen het bestuur van de Zandvoortse Reddingsbrigade.',
    icon: 'fas fa-tasks',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=103xXhsxqZwkZva_PlhI0hCcOgUVvAzey&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'apv-zandvoort',
    title: 'Naslag - APV Zandvoort 2017 (update 2020)',
    description: 'Algemene Plaatselijke Verordening Zandvoort 2017, bijgewerkt in 2020.',
    icon: 'fas fa-gavel',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1KMZaTztUBFsRUQuQN9xPK7Vu20X84C7N&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'naslag-psychosociale-ondersteuning',
    title: 'Naslag - Psychosociale Ondersteuning Geüniformeerden',
    description: 'Richtlijn psychosociale ondersteuning geüniformeerden uit 2012.',
    icon: 'fas fa-heart',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1JQbqsCODt4D-qYZ4j55V4QLYuRuxrKa7&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'sea-doo-operators-guide',
    title: 'Sea Doo Waterscooter GTI 2020 Operators Guide',
    description: 'Handleiding voor de bediening en het gebruik van de Sea Doo GTI waterscooter uit 2020.',
    icon: 'fas fa-ship',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1yF8M6K1VROXigK2m8aC8kIXJ6x88qfa9&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'sea-doo-guide-sheet',
    title: 'Sea Doo Waterscooter Guide Sheet',
    description: 'Beknopt overzicht met belangrijke informatie voor gebruik van de Sea Doo waterscooter.',
    icon: 'fas fa-file-alt',
    category: 'handleiding',
    url: 'https://drive.google.com/open?id=1ioOeLLCQsVOpWwS6S2ULjA8XePHUBeY-Yl2bOufkM98&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'watersport-zonering',
    title: 'Nota Watersportzonering Zandvoort – 2020',
    description: 'Gemeentelijke richtlijnen voor watersportzones, veiligheid en gedragsregels voor alle strandgebruikers.',
    icon: 'fas fa-water',
    category: 'handleiding',
    url: 'https://drive.google.com/file/d/1-kYykWemj6E3Lrc1oD-Hex-Ucm6TR36e/view',
    isExternal: true
  },
  
  // Factsheets
  {
    id: 'factsheet-zandvoort',
    title: 'Factsheet Reddingsbrigade Zandvoort',
    description: 'Overzicht van voertuigen, contactgegevens, werkgebied en ploegen van de Zandvoortse Reddingsbrigade.',
    icon: 'fas fa-file-invoice',
    category: 'factsheets',
    url: 'https://drive.google.com/open?id=1hc_XDWHhi6hUa9BwXuAckHMcxGHcu-0d&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'factsheet-heemskerk',
    title: 'Factsheet Reddingsbrigade Heemskerk',
    description: 'Overzicht van voertuigen, contactgegevens, werkgebied en ploegen van de Heemskerkse Reddingsbrigade.',
    icon: 'fas fa-file-invoice',
    category: 'factsheets',
    url: 'https://drive.google.com/open?id=1O1eUUoLfSp8ri5kEbinyP2slQjaUmFlO&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'factsheet-bloemendaal',
    title: 'Factsheet Reddingsbrigade Bloemendaal',
    description: 'Overzicht van voertuigen, contactgegevens, werkgebied en ploegen van de Bloemendaalse Reddingsbrigade.',
    icon: 'fas fa-file-invoice',
    category: 'factsheets',
    url: 'https://drive.google.com/open?id=1VDlX1_uQWw9lxdr1H61hPeb-lZdtlDsB&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'factsheet-wijk-aan-zee',
    title: 'Factsheet Reddingsbrigade Wijk aan Zee',
    description: 'Overzicht van voertuigen, contactgegevens, werkgebied en ploegen van de Wijk aan Zeese Reddingsbrigade.',
    icon: 'fas fa-file-invoice',
    category: 'factsheets',
    url: 'https://drive.google.com/open?id=1e-7AoAI0f2pIOvHTF6D9Z_TSz5Q3_gFC&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'factsheet-ijmuiden',
    title: 'Factsheet Reddingsbrigade IJmuiden',
    description: 'Overzicht van voertuigen, contactgegevens, werkgebied en ploegen van de IJmuidense Reddingsbrigade.',
    icon: 'fas fa-file-invoice',
    category: 'factsheets',
    url: 'https://drive.google.com/open?id=1SaXuTmjG4rkmz-jRPC20WcXnFoC9cONu&usp=drive_copy',
    isExternal: true
  },
  
  // Formulieren
  {
    id: 'incident-registratie-pdf',
    title: 'ZRB Registratieformulier Incidenten (PDF)',
    description: 'Officieel ZRB formulier voor het registreren van incidenten (PDF versie, mei 2023, v1.3).',
    icon: 'fas fa-file-pdf',
    category: 'formulieren',
    url: 'https://drive.google.com/open?id=14EF2uMb4-hv1098kuhSYG3K5XX5zxLP7&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'incident-registratie-doc',
    title: 'ZRB Registratieformulier Incidenten (DOC)',
    description: 'Officieel ZRB formulier voor het registreren van incidenten (Word versie, mei 2023, v1.3).',
    icon: 'fas fa-file-word',
    category: 'formulieren',
    url: 'https://drive.google.com/open?id=1OTkqXlTLI9-8fQD-UiA2F2jDmEjVm2hi&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'onkosten-declaratie-pdf',
    title: 'ZRB Onkosten Declaratie (PDF)',
    description: 'Formulier voor het declareren van onkosten gemaakt voor de Zandvoortse Reddingsbrigade (PDF versie).',
    icon: 'fas fa-file-invoice-dollar',
    category: 'formulieren',
    url: 'https://drive.google.com/open?id=1hrAFvPRnEdLZ3wA-wRilrr-oSUn816SO&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'onkosten-declaratie-docx',
    title: 'ZRB Onkosten Declaratie (DOCX)',
    description: 'Formulier voor het declareren van onkosten gemaakt voor de Zandvoortse Reddingsbrigade (Word versie).',
    icon: 'fas fa-file-word',
    category: 'formulieren',
    url: 'https://drive.google.com/open?id=10D0djDUgvvuhssJ118r7XaFVOlGJcM4a&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'vim-nautische-partners',
    title: 'VIM voor Nautische partners',
    description: 'Veilig Incident Melden formulier voor gebruik bij incidenten met nautische partners.',
    icon: 'fas fa-file-pdf',
    category: 'formulieren',
    url: 'https://drive.google.com/open?id=19Iq5fZgyXE9eqLH7nwAbU4wmk699gHoQ&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'melding-ongewenste-benadering',
    title: 'Melding Ongewenste Benadering Lifeguards',
    description: 'Formulier om ongewenste benadering van lifeguards te melden tijdens operationele diensten.',
    icon: 'fas fa-exclamation-triangle',
    category: 'formulieren',
    url: 'https://drive.google.com/open?id=1G2GGrz3rhlkLcw0sObLCYaAojzFd-jr83zmGTFTjxaY&usp=drive_copy',
    isExternal: true
  },
  {
    id: 'cscatt-evaluatie',
    title: 'CSCATT - Evaluatie Formulier',
    description: 'Evaluatieformulier voor kritieke incidenten volgens de CSCATT methodiek.',
    icon: 'fas fa-clipboard-check',
    category: 'formulieren',
    url: 'https://drive.google.com/open?id=1bzGriFVw7k7aYXfvu0AWEE2dd9_J7E2b&usp=drive_copy',
    isExternal: true
  }
]; 