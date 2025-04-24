import React from 'react';
import ContactCard from './ContactCard';

/**
 * Example component showing how to use the ContactCard component
 * for the contact information section
 */
const ContactExample: React.FC = () => {
  return (
    <div className="contact-section">
      <h2 className="section-title">
        <i className="fas fa-building"></i> 
        <span>Contactgegevens</span>
      </h2>
      <div className="contact-cards-grid">
        {/* Example of a general contact card */}
        <ContactCard
          title="Zandvoortse Reddingsbrigade"
          icon="fas fa-home"
          contactItems={[
            {
              type: 'url',
              value: 'www.zrb.info',
              icon: 'fas fa-link'
            },
            {
              type: 'email',
              value: 'bestuur@zrb.info',
              icon: 'fas fa-envelope'
            },
            {
              type: 'address',
              value: 'Linnaeusstraat 2, 2041 BR, Zandvoort',
              icon: 'fas fa-building'
            },
            {
              type: 'text',
              value: '34.57.138',
              displayText: 'RSIN: 34.57.138',
              icon: 'fas fa-hashtag'
            },
            {
              type: 'text',
              value: '40594918',
              displayText: 'KVK: 40594918',
              icon: 'fas fa-address-card'
            }
          ]}
        />

        {/* Example of a media contact card */}
        <ContactCard
          title="Pers & Media"
          icon="fas fa-newspaper"
          contactItems={[
            {
              type: 'text',
              value: 'Ernst Brokmeier',
              icon: 'fas fa-user'
            },
            {
              type: 'phone',
              value: '06-19442879',
              icon: 'fas fa-phone'
            },
            {
              type: 'email',
              value: 'pr@zrb.info',
              icon: 'fas fa-envelope'
            }
          ]}
        />

        {/* Example of a post location card */}
        <ContactCard
          title="Reddingspost Piet Oud 'Noord'"
          icon="fas fa-umbrella-beach"
          contactItems={[
            {
              type: 'address',
              value: 'Boulevard Barnaart 50, 2041 JA, Zandvoort',
              icon: 'fas fa-map-marker-alt'
            },
            {
              type: 'phone',
              value: '023-5712376',
              icon: 'fas fa-phone'
            }
          ]}
        />
      </div>
    </div>
  );
};

export default ContactExample; 