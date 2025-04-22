import React from 'react';
import { InfoCardDetail } from '../../types';

// Add a global styles component that will be used in the content
const NRVStyles = () => (
  <style jsx global>{`
    .nrv-list {
      counter-reset: item;
      list-style-type: none;
      padding-left: 0;
      margin-left: 1.25rem;
    }
    .nrv-list li {
      counter-increment: item;
      position: relative;
      padding-left: 2rem;
      margin-bottom: 0.5rem;
    }
    .nrv-list li:last-child {
      margin-bottom: 0;
    }
    .nrv-list li::before {
      content: counter(item) ".";
      position: absolute;
      left: 0;
      color: #666;
      font-weight: 500;
    }
  `}</style>
);

export const handboekNRVEenhedenDetail: InfoCardDetail = {
  id: 'handboek-nrv-eenheden',
  title: 'Handboek Inzet NRV eenheden',
  description: 'Nationale inzetprocedures voor reddingsbrigade-eenheden bij calamiteiten zoals overstromingen in andere provincies.',
  icon: 'fas fa-truck-moving',
  category: 'operationeel',
  intro: 'Dit handboek beschrijft de procedures en richtlijnen voor de inzet van Nationale Reddingsvloot (NRV) eenheden bij grootschalige incidenten en calamiteiten zoals overstromingen in andere provincies. Dit is een samenvatting van het officiële document. Bekijk het volledige document op de Google Drive link.',
  sections: [
    {
      title: 'Documentgegevens',
      icon: 'fas fa-info-circle',
      cards: [
        {
          title: 'Document informatie',
          icon: 'fas fa-file-alt',
          content: (
            <div>
              <NRVStyles />
              <p className="mb-1"><span className="font-medium">Versie:</span> 2.0</p>
              <p className="mb-1"><span className="font-medium">Laatste update:</span> Januari 2024</p>
              <p><span className="font-medium">Verantwoordelijke:</span> Operationeel Manager NRV</p>
            </div>
          )
        },
        {
          title: 'Contactgegevens',
          icon: 'fas fa-address-book',
          content: (
            <div>
              <p className="mb-1"><span className="font-medium">Alarmnummer NRV:</span> <a href="tel:0889997000" className="text-blue-600 hover:underline">088-9997000</a></p>
              <p className="mb-1"><span className="font-medium">Email:</span> <a href="mailto:nrv@reddingsbrigade.nl" className="text-blue-600 hover:underline">nrv@reddingsbrigade.nl</a></p>
              <p><span className="font-medium">Operationeel Centrum:</span> Reddingsbrigade Nederland, Ijmuiden</p>
            </div>
          )
        },
        {
          title: 'Officieel document',
          icon: 'fas fa-file-pdf',
          content: (
            <div>
              <p className="mb-2">Het volledige officiële handboek is beschikbaar via onderstaande link:</p>
              <a
                href="https://drive.google.com/file/d/176PFb2IgyE5OtJgdIq4E6pBx0QDlROaK/view"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center"
              >
                <i className="fas fa-external-link-alt mr-1"></i> Handboek NRV-eenheden
              </a>
            </div>
          )
        }
      ]
    },
    {
      title: 'Inleiding & Achtergrond',
      icon: 'fas fa-bookmark',
      cards: [
        {
          title: 'Over de NRV',
          icon: 'fas fa-info-circle',
          content: (
            <div>
              <p className="mb-4">
                De Nationale Reddingsvloot (NRV) bestaat uit reddingseenheden van diverse reddingsbrigades die 
                gespecialiseerd zijn in het redden van mensen bij watersnoodrampen en grootschalige overstromingen.
                Dit handboek beschrijft de procedures voor alarmering, inzet en coördinatie van deze eenheden.
              </p>
              
              <h4 className="font-bold text-gray-800 mb-2">Organisatiestructuur</h4>
              <p className="mb-4">
                De NRV-eenheden worden gecoördineerd door Reddingsbrigade Nederland en kunnen door veiligheidsregio's
                worden aangevraagd via het Landelijk Operationeel Coördinatie Centrum (LOCC).
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                <p className="text-sm text-yellow-700">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  <span className="font-bold">Belangrijk:</span> De NRV kan enkel worden ingezet door een officiële aanvraag via het LOCC.
                  Lokale reddingsbrigades kunnen niet zelfstandig besluiten tot nationale inzet.
                </p>
              </div>
            </div>
          )
        },
        {
          title: 'NRV-eenheden',
          icon: 'fas fa-truck',
          content: (
            <div>
              <p className="mb-4">
                De NRV bestaat uit vier type eenheden:
              </p>
              <ol className="nrv-list">
                <li>Type A: Hoogwatereenheden met vaartuigen</li>
                <li>Type B: Commandovaartuigen</li>
                <li>Type C: Logistieke ondersteuningseenheden</li>
                <li>Type D: Verkenningseenheden</li>
              </ol>
              
              <p>
                Elke eenheid heeft een specifieke samenstelling van materieel en personeel, aangepast aan de taak die zij moeten vervullen.
              </p>
            </div>
          )
        }
      ]
    },
    {
      title: 'Vooralarm',
      icon: 'fas fa-bell',
      cards: [
        {
          title: 'Procedure Vooralarm',
          icon: 'fas fa-clipboard-list',
          content: (
            <div>
              <p className="mb-4">
                Bij vooralarm kan de NRV in vooralarm worden gebracht. Dit betekent dat eenheden 
                worden geïnformeerd over een mogelijke inzet maar nog niet daadwerkelijk worden gealarmeerd.
              </p>
              
              <ol className="nrv-list">
                <li>Het LOCC informeert Reddingsbrigade Nederland over een dreigende situatie</li>
                <li>Het Operationeel Centrum RN verstuurt een vooralarm naar de betreffende eenheden</li>
                <li>Eenheidsleiders bevestigen ontvangst van het vooralarm en de beschikbaarheid van hun eenheid</li>
                <li>Manschappen worden geïnformeerd maar nog niet opgeroepen</li>
                <li>Materieel wordt gecontroleerd en in gereedheid gebracht</li>
              </ol>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-sm text-blue-700">
                  <i className="fas fa-info-circle mr-2"></i>
                  Het vooralarm kan zowel telefonisch als via de NRV-app worden verspreid. Controleer altijd of de 
                  ontvangst door de eenheidsleiders wordt bevestigd.
                </p>
              </div>
            </div>
          )
        },
        {
          title: 'Responstijden',
          icon: 'fas fa-clock',
          content: (
            <div>
              <p className="mb-4">
                Bij het vooralarm gelden de volgende verwachte responstijden:
              </p>
              <ol className="nrv-list">
                <li><span className="font-medium">Eenheidsleider:</span> Bevestiging binnen 30 minuten</li>
                <li><span className="font-medium">Materieel check:</span> Binnen 2 uur na vooralarm</li>
                <li><span className="font-medium">Beschikbaarheidsrapportage:</span> Binnen 3 uur na vooralarm</li>
              </ol>
            </div>
          )
        }
      ]
    },
    {
      title: 'Feitelijke Alarmering',
      icon: 'fas fa-exclamation-circle',
      cards: [
        {
          title: 'Alarmeringsprocedure',
          icon: 'fas fa-bullhorn',
          content: (
            <div>
              <p className="mb-4">
                Bij een feitelijke alarmering worden de NRV-eenheden daadwerkelijk opgeroepen voor inzet. 
                Dit gebeurt volgens een vastgesteld protocol om snelle opschaling mogelijk te maken.
              </p>
              
              <ol className="nrv-list">
                <li>Het LOCC geeft formeel opdracht tot inzet aan Reddingsbrigade Nederland</li>
                <li>Het Operationeel Centrum RN activeert de alarmering via de NRV-app</li>
                <li>Eenheidsleiders ontvangen een alarmbevestiging met inzetlocatie en contactgegevens</li>
                <li>Eenheidsleiders activeren hun manschappen volgens hun eigen procedures</li>
                <li>Operationeel Centrum ontvangt vertrekbevestiging van elke eenheid</li>
              </ol>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-sm text-red-700">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  <span className="font-bold">Let op!</span> Bij feitelijke alarmering dient binnen 15 minuten een terugkoppeling 
                  plaats te vinden over de opkomst van manschappen en de status van het materieel.
                </p>
              </div>
            </div>
          )
        },
        {
          title: 'Uitruktijden',
          icon: 'fas fa-stopwatch',
          content: (
            <div>
              <p className="mb-4">
                Voor NRV-eenheden gelden de volgende uitruktijden na feitelijke alarmering:
              </p>
              <ol className="nrv-list">
                <li><span className="font-medium">Type A eenheden:</span> Uitruk binnen 2 uur</li>
                <li><span className="font-medium">Type B eenheden:</span> Uitruk binnen 1,5 uur</li>
                <li><span className="font-medium">Type C eenheden:</span> Uitruk binnen 3 uur</li>
                <li><span className="font-medium">Type D eenheden:</span> Uitruk binnen 1 uur</li>
              </ol>
            </div>
          )
        }
      ]
    },
    {
      title: 'Operationele Inzet',
      icon: 'fas fa-tasks',
      cards: [
        {
          title: 'Aansturing',
          icon: 'fas fa-users-cog',
          content: (
            <div>
              <p className="mb-4">
                De operationele inzet van NRV-eenheden wordt gecoördineerd vanuit het Operationeel Centrum 
                van Reddingsbrigade Nederland in samenwerking met de lokale autoriteiten in het inzetgebied.
              </p>
              
              <p className="mb-4">
                De aansturing van NRV-eenheden verloopt volgens de volgende lijn:
              </p>
              <ol className="nrv-list">
                <li>Operationeel Centrum RN {'>'} Operationeel Leider NRV {'>'} Eenheidsleiders {'>'} Teamleiders {'>'} Manschappen</li>
                <li>De Operationeel Leider NRV heeft ter plaatse de leiding over alle NRV-eenheden</li>
                <li>De Operationeel Leider rapporteert aan de lokale CoPI/ROT structuur</li>
              </ol>
            </div>
          )
        },
        {
          title: 'Procedures & Veiligheid',
          icon: 'fas fa-shield-alt',
          content: (
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Inzetgebied</h4>
              <p className="mb-4">
                Bij aankomst in het inzetgebied gelden de volgende procedures:
              </p>
              <ol className="nrv-list">
                <li>Eenheden melden zich bij het aangewezen verzamelpunt</li>
                <li>De Operationeel Leider NRV geeft een briefing over de situatie en inzetopdrachten</li>
                <li>Eenheden ontvangen kaartmateriaal en communicatiemiddelen</li>
                <li>Teams worden ingedeeld volgens het inzetplan</li>
              </ol>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-sm text-blue-700">
                  <i className="fas fa-info-circle mr-2"></i>
                  Communicatie tijdens de inzet verloopt primair via C2000. Eenheidsleiders ontvangen 
                  bij aankomst de juiste gespreksgroepen en kanalen.
                </p>
              </div>
              
              <h4 className="font-bold text-gray-800 mb-2">Veiligheid</h4>
              <p className="mb-4">
                Tijdens de inzet heeft veiligheid de hoogste prioriteit:
              </p>
              <ol className="nrv-list">
                <li>Alle manschappen dragen de voorgeschreven persoonlijke beschermingsmiddelen</li>
                <li>Eenheden werken altijd minimaal in koppels van twee personen</li>
                <li>Bij twijfel over veiligheid heeft iedereen het recht en de plicht om de opdracht te stoppen</li>
                <li>Incidenten worden direct gemeld aan de Operationeel Leider NRV</li>
              </ol>
            </div>
          )
        }
      ]
    },
    {
      title: 'Logistiek & Ondersteuning',
      icon: 'fas fa-truck',
      cards: [
        {
          title: 'Bevoorrading & Ondersteuning',
          icon: 'fas fa-boxes',
          content: (
            <div>
              <p className="mb-4">
                Voor langdurige inzet van NRV-eenheden is logistieke ondersteuning essentieel. Dit omvat 
                bevoorrading, aflossing, onderhoud en andere facilitaire zaken.
              </p>
              
              <p className="mb-4">
                De volgende logistieke ondersteuning wordt geregeld:
              </p>
              <ol className="nrv-list">
                <li><span className="font-medium">Brandstof:</span> Via tankpassen voor voertuigen en vaartuigen</li>
                <li><span className="font-medium">Catering:</span> Via lokale COPI/ROT structuur of eigen voorzieningen</li>
                <li><span className="font-medium">Onderdelen:</span> Via logistieke ondersteuningseenheden (Type C)</li>
                <li><span className="font-medium">Medische ondersteuning:</span> Via lokale GHOR</li>
              </ol>
            </div>
          )
        },
        {
          title: 'Aflossing & Verblijf',
          icon: 'fas fa-bed',
          content: (
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Aflossingsbeleid</h4>
              <p className="mb-4">
                Bij langdurige inzet ({'>'}12 uur) wordt aflossing geregeld:
              </p>
              <ol className="nrv-list">
                <li>Eenheidsleiders geven door wanneer aflossing noodzakelijk is</li>
                <li>Het Operationeel Centrum activeert reserve-eenheden voor aflossing</li>
                <li>Aflossing vindt waar mogelijk plaats bij daglicht</li>
                <li>Er is minimaal 1 uur overlap voor een goede overdracht</li>
              </ol>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                <p className="text-sm text-yellow-700">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  <span className="font-bold">Belangrijk:</span> De maximale inzetduur voor NRV-personeel is 12 uur voor
                  operationele werkzaamheden, gevolgd door minimaal 8 uur rust.
                </p>
              </div>
              
              <h4 className="font-bold text-gray-800 mb-2">Verblijf</h4>
              <p className="mb-4">
                Voor de huisvesting van NRV-eenheden zijn er drie opties:
              </p>
              <ol className="nrv-list">
                <li><span className="font-medium">Optie 1:</span> Verblijf in lokale kazernes/brandweerposten</li>
                <li><span className="font-medium">Optie 2:</span> Verblijf in een door de veiligheidsregio geregelde locatie</li>
                <li><span className="font-medium">Optie 3:</span> Zelfvoorzienende kampeermiddelen bij de Type C eenheden</li>
              </ol>
            </div>
          )
        }
      ]
    },
    {
      title: 'Schade & Incidenten',
      icon: 'fas fa-shield-alt',
      cards: [
        {
          title: 'Schadeafhandeling',
          icon: 'fas fa-tools',
          content: (
            <div>
              <p className="mb-4">
                Tijdens de inzet van NRV-eenheden kunnen zich incidenten voordoen of kan er schade ontstaan 
                aan materieel. Hiervoor gelden specifieke procedures.
              </p>
              
              <p className="mb-4">
                Bij schade aan materieel wordt de volgende procedure gevolgd:
              </p>
              <ol className="nrv-list">
                <li>Schade wordt direct gemeld aan de eenheidsleider</li>
                <li>De eenheidsleider informeert de operationeel leider</li>
                <li>De operationeel leider registreert de schade in het logboek</li>
                <li>Na afloop van de inzet wordt een officieel schaderapport opgesteld</li>
                <li>Schade wordt vergoed volgens de afspraken van de LNAZ (Landelijke Netwerk Acute Zorg)</li>
              </ol>
            </div>
          )
        },
        {
          title: 'Incidentenregistratie',
          icon: 'fas fa-exclamation-triangle',
          content: (
            <div>
              <p className="mb-4">
                Bij incidenten (ongevallen, letsel, bijna-ongevallen) geldt:
              </p>
              <ol className="nrv-list">
                <li>Veiligheid gaat altijd voor, eerst zorgen voor hulp en veilige situatie</li>
                <li>Incidenten worden direct gemeld aan de operationeel leider</li>
                <li>De operationeel leider informeert het Operationeel Centrum</li>
                <li>Een incidentformulier wordt ingevuld door betrokkenen</li>
                <li>Bij ernstige incidenten wordt een crisisteam geactiveerd</li>
              </ol>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-sm text-red-700">
                  <i className="fas fa-exclamation-triangle mr-2"></i>
                  <span className="font-bold">Calamiteiten:</span> Bij ernstige incidenten met letsel of levensbedreigende situaties
                  wordt direct 112 gebeld en daarna de operationeel leider geïnformeerd.
                </p>
              </div>
              
              <h4 className="font-bold text-gray-800 mb-2">Contactgegevens bij Incidenten</h4>
              <p className="mb-4">
                In geval van incidenten zijn de volgende personen 24/7 bereikbaar:
              </p>
              <ol className="nrv-list">
                <li><span className="font-medium">Operationeel Leider NRV:</span> Bereikbaar via C2000 of <a href="tel:0889997001" className="text-orange-500 hover:underline">088-9997001</a></li>
                <li><span className="font-medium">Calamiteitenteam RN:</span> <a href="tel:0889997009" className="text-orange-500 hover:underline">088-9997009</a></li>
                <li><span className="font-medium">Meldkamer LOCC:</span> <a href="tel:0886628333" className="text-orange-500 hover:underline">088-6628333</a></li>
              </ol>
            </div>
          )
        }
      ]
    },
  ],
}; 