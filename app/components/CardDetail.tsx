import React, { useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import { InfoCardDetail } from '../utils/types';

interface CardDetailProps {
  cardDetail: InfoCardDetail;
}

/**
 * Component for rendering an information card's detailed view
 */
export default function CardDetail({ cardDetail }: CardDetailProps) {
  // Force layout recalculation before the component is painted
  useLayoutEffect(() => {
    // Reset any potential scroll position
    window.scrollTo(0, 0);
  }, []);
  
  // Add effect to reset any height and layout issues when component mounts
  useEffect(() => {
    // Force browser to recalculate layout when component mounts or details change
    const recalculateLayout = () => {
      window.dispatchEvent(new Event('resize'));
    };
    
    // Apply immediately and after a short delay to ensure proper rendering
    recalculateLayout();
    const timeoutId = setTimeout(recalculateLayout, 100);
    
    // Cleanup function to ensure proper layout when unmounting
    return () => {
      clearTimeout(timeoutId);
      // Short timeout to let the browser recover the layout when navigating back
      setTimeout(recalculateLayout, 100);
    };
  }, [cardDetail.id]);
  
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