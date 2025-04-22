import React from 'react';
import Link from 'next/link';
import { InfoCardDetail } from '../utils/types';

interface CardDetailProps {
  cardDetail: InfoCardDetail;
}

/**
 * Component for rendering an information card's detailed view
 */
export default function CardDetail({ cardDetail }: CardDetailProps) {
  return (
    <div className="info-detail-container">
      <div className="info-detail-header">
        <div className="info-detail-icon">
          <i className={cardDetail.icon}></i>
        </div>
        <h2>{cardDetail.title}</h2>
      </div>
      
      <div className="info-detail-content">
        <div className="section-intro">
          <p>{cardDetail.intro}</p>
        </div>
        
        {cardDetail.sections.map((section, sectionIndex) => (
          <div className="info-section" key={`section-${sectionIndex}`}>
            <h2><i className={section.icon}></i> {section.title}</h2>
            
            <div className="info-cards-grid two-columns">
              {section.cards.map((card, cardIndex) => (
                <div className="info-card" key={`card-${sectionIndex}-${cardIndex}`}>
                  <div className="info-card-header">
                    <i className={card.icon}></i>
                    <h3>{card.title}</h3>
                  </div>
                  <div className="info-content">
                    {/* If content is a React node, render directly, otherwise render as text */}
                    {typeof card.content === 'string' ? <p>{card.content}</p> : card.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="navigation-buttons">
          <Link href="/informatie" className="button secondary">
            <i className="fas fa-arrow-left"></i> Terug naar informatieoverzicht
          </Link>
        </div>
      </div>
    </div>
  );
} 