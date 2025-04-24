import { InfoCardDetail } from '../types';
import { postProceduresDetail } from './algemeen/postProcedures';
import { roepnummersDetail } from './algemeen/roepnummers';
import { opleidingstrajectenDetail } from './algemeen/opleidingstrajecten';
import { rhrHandleidingDetail } from './operationeel/rhrHandleiding';
import { externeSystemenDetail } from './operationeel/externeSystemen';
import { zandvoortKaartDetail } from './operationeel/zandvoortKaart';
import { telefoonlijstDetail } from './operationeel/telefoonlijst';
import { waarschuwingsvlaggenDetail } from './operationeel/waarschuwingsvlaggen';
import { c2000OverzichtDetail } from './operationeel/c2000Overzicht';
import { mtbParcoursDetail } from './operationeel/mtbParcours';
import { vermissingenSOPDetail } from './operationeel/vermissingenSOP';
import { helikopterSOPDetail } from './operationeel/helikopterSOP';
import { ambulanceHelikopterSOPDetail } from './operationeel/ambulanceHelikopterSOP';
import { kustwachtgebiedSOPDetail } from './operationeel/kustwachtgebiedSOP';
import { inzetprotocolRBKNRMDetail } from './operationeel/inzetprotocolRBKNRM';
// import { algemeneInformatieDetail } from './operationeel/algemeneInformatie';
import { handboekNRVEenhedenDetail } from './operationeel/handboekNRVEenheden';
import { inzetDuingebiedDetail } from './duingebied/inzetDuingebied';
import { vogBeleidDetail } from './bestuur/vogBeleid';
import { socialeMediaRichtlijnenDetail } from './richtlijnen/socialeMediaRichtlijnen';
import { optischeGeluidssignalenDetail } from './richtlijnen/optischeGeluidssignalen';
import { actiefLidDetail } from './richtlijnen/actiefLid';
import { psychosocialeOndersteuningDetail } from './richtlijnen/psychosocialeOndersteuning';
import { evaluatiemethodeInzetDetail } from './richtlijnen/evaluatiemethodeInzet';
import { besmettingsaccidentDetail } from './richtlijnen/besmettingsaccident';
import { alarmploegWerkwijzeDetail } from './operationeel/alarmploegWerkwijze';

// Collection of all card details
export const cardDetails: Record<string, InfoCardDetail> = {
  'post-procedures': postProceduresDetail,
  'roepnummers': roepnummersDetail,
  'opleidingstrajecten': opleidingstrajectenDetail,
  'telefoonlijst': telefoonlijstDetail,
  'rhr-handleiding': rhrHandleidingDetail,
  'externe-systemen': externeSystemenDetail,
  'zandvoort-kaart': zandvoortKaartDetail,
  'waarschuwingsvlaggen': waarschuwingsvlaggenDetail,
  'c2000-overzicht': c2000OverzichtDetail,
  'mtb-parcours': mtbParcoursDetail,
  'vermissingen-sop': vermissingenSOPDetail,
  'helikopter-sop': helikopterSOPDetail,
  'ambulancehelikopter-sop': ambulanceHelikopterSOPDetail,
  'kustwachtgebied-sop': kustwachtgebiedSOPDetail,
  'inzetprotocol-rb-knrm': inzetprotocolRBKNRMDetail,
  // 'algemene-informatie': algemeneInformatieDetail,
  'handboek-nrv-eenheden': handboekNRVEenhedenDetail,
  'inzet-duingebied': inzetDuingebiedDetail,
  'vog-beleid': vogBeleidDetail,
  'sociale-media-richtlijnen': socialeMediaRichtlijnenDetail,
  'brancherichtlijn-og': optischeGeluidssignalenDetail,
  'actief-lid': actiefLidDetail,
  'protocol-psychosociale-ondersteuning': psychosocialeOndersteuningDetail,
  'protocol-evaluatiemethode-inzet': evaluatiemethodeInzetDetail,
  'protocol-besmettingsaccident': besmettingsaccidentDetail,
  'werkwijze-alarmploeg': alarmploegWerkwijzeDetail,
  // Add more card details as they're created
};

/**
 * Get details for a specific card by ID
 */
export function getCardDetailById(id: string): InfoCardDetail | null {
  return cardDetails[id] || null;
}

/**
 * Check if details exist for a card
 */
export function hasCardDetails(id: string): boolean {
  return !!cardDetails[id];
} 