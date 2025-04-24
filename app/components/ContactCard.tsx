import React, { ReactNode } from 'react';
import ContactInfoItem from './ContactInfoItem';

interface ContactInfo {
  type: 'phone' | 'email' | 'address' | 'url' | 'text';
  value: string;
  icon: string;
  displayText?: string;
}

interface ContactCardProps {
  title: string;
  icon: string;
  contactItems: ContactInfo[];
  className?: string;
  children?: ReactNode;
}

/**
 * A reusable component for displaying contact cards with proper formatting
 */
const ContactCard: React.FC<ContactCardProps> = ({
  title,
  icon,
  contactItems,
  className = '',
  children
}) => {
  return (
    <div className={`contact-card ${className}`}>
      <div className="contact-card-header">
        <i className={icon}></i>
        <h3>{title}</h3>
      </div>
      <div className="contact-card-content">
        {contactItems.map((item, index) => (
          <ContactInfoItem
            key={index}
            type={item.type}
            value={item.value}
            icon={item.icon}
            displayText={item.displayText}
          />
        ))}
        {children}
      </div>
    </div>
  );
};

export default ContactCard; 