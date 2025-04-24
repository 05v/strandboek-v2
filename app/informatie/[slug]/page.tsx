'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import MainLayout from '../../layouts/MainLayout'
import Link from 'next/link'
// CSS bestanden nu in de RootLayout geladen
// Specifieke stijlen nog steeds hier laden
import '../../styles/pages/kenniskaart.css'
import '../../styles/pages/informatieDetail.css'
import { infoCards } from '../../utils/data/infoCards'
import { getCardDetailById, hasCardDetails } from '../../utils/data/cardDetails'
import CardDetail from '../../components/CardDetail'
import { InfoCard, InfoCardDetail } from '../../utils/types'

export default function KenniskaartDetailPage() {
  const params = useParams();
  const [cardInfo, setCardInfo] = useState<InfoCard | null>(null);
  const [cardDetail, setCardDetail] = useState<InfoCardDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Laden van CSS direct bij component mount
  useEffect(() => {
    // Functie om CSS te laden
    const loadCSS = () => {
      const kenniskaartCSS = document.createElement('link');
      kenniskaartCSS.rel = 'stylesheet';
      kenniskaartCSS.href = '/styles/pages/kenniskaart.css';
      document.head.appendChild(kenniskaartCSS);
      
      const detailCSS = document.createElement('link');
      detailCSS.rel = 'stylesheet';
      detailCSS.href = '/styles/pages/informatieDetail.css';
      document.head.appendChild(detailCSS);
    };
    
    // CSS direct laden
    loadCSS();
  }, []);

  useEffect(() => {
    // Zoek de kaart op basis van de slug in de URL
    if (params.slug) {
      const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
      
      // Find basic card info
      const matchingCard = infoCards.find(card => card.id === slug);
      if (matchingCard) {
        setCardInfo(matchingCard);
        
        // Check if we have detailed content for this card
        if (hasCardDetails(slug)) {
          const detail = getCardDetailById(slug);
          setCardDetail(detail);
        }
      }
      
      setIsLoading(false);
    }
  }, [params]);

  if (isLoading) {
    return (
      <MainLayout
        hero={{
          title: 'Kenniskaart laden...',
          subtitle: 'Even geduld a.u.b.',
        }}
      >
        <div className="container">
          <div className="article-loading">
            <div className="spinner"></div>
            <p>Kenniskaart laden...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!cardInfo) {
    return (
      <MainLayout
        hero={{
          title: 'Kenniskaart niet gevonden',
          subtitle: 'De opgevraagde pagina bestaat niet',
        }}
      >
        <div className="container">
          <div className="article-error">
            <h2>Pagina niet gevonden</h2>
            <p>De opgevraagde kenniskaart kon niet worden gevonden.</p>
            <Link href="/informatie" className="back-button">
              <i className="fas fa-arrow-left"></i> Terug naar informatie
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  // If we have detailed content for this card, render it
  if (cardDetail) {
    return (
      <MainLayout
        hero={{
          title: cardInfo.title,
          subtitle: cardInfo.description,
        }}
      >
        <section className="content-section">
          <div className="container">
            <CardDetail cardDetail={cardDetail} />
          </div>
        </section>
      </MainLayout>
    );
  }

  // Render a generic "Coming Soon" page for cards without detailed content
  return (
    <MainLayout
      hero={{
        title: cardInfo.title,
        subtitle: cardInfo.description,
      }}
    >
      <section className="content-section">
        <div className="container">
          <div className="kenniskaart-container">
            <div className="kenniskaart-header">
              <div className="kenniskaart-icon">
                <i className={cardInfo.icon}></i>
              </div>
              <h2>{cardInfo.title}</h2>
            </div>
            
            <div className="kenniskaart-content">
              <div className="coming-soon">
                <i className="fas fa-tools"></i>
                <h3>Coming Soon</h3>
                <p>Deze informatiepagina is momenteel in ontwikkeling.</p>
                <p>Binnenkort vind je hier alle details over {cardInfo.title}.</p>
                <Link href="/informatie" className="back-button">
                  <i className="fas fa-arrow-left"></i> Terug naar overzicht
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 