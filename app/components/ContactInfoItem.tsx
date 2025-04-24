import React from 'react';
import { formatPhoneLink, formatEmailLink, formatAddressLink, formatUrlLink } from '../utils/contactFormatters';

type ContactType = 'phone' | 'email' | 'address' | 'url' | 'text';

interface ContactInfoItemProps {
  type: ContactType;
  value: string;
  icon: string;
  displayText?: string;
  className?: string;
}

/**
 * A reusable component for displaying contact information items
 * with proper formatting and linking
 */
const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ 
  type, 
  value, 
  icon, 
  displayText,
  className = ''
}) => {
  const getFormattedContact = () => {
    switch (type) {
      case 'phone':
        return formatPhoneLink(value, displayText);
      case 'email':
        return formatEmailLink(value, displayText);
      case 'address':
        return formatAddressLink(value, displayText);
      case 'url':
        return formatUrlLink(value, displayText);
      case 'text':
      default:
        return displayText || value;
    }
  };

  return (
    <p className={className}>
      <i className={icon}></i> {getFormattedContact()}
    </p>
  );
};

export default ContactInfoItem; 