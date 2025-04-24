import React from 'react';

/**
 * Formats a phone number as a clickable link
 * @param phoneNumber - The phone number to format (any format)
 * @param displayText - Optional custom display text (if not provided, uses the phoneNumber)
 */
export const formatPhoneLink = (phoneNumber: string, displayText?: string): React.ReactNode => {
  // Remove spaces, dashes, parentheses, and other non-digit characters except for leading +
  const cleaned = phoneNumber.startsWith('+') 
    ? '+' + phoneNumber.substring(1).replace(/\D/g, '')
    : phoneNumber.replace(/\D/g, '');
    
  // Format the tel: link with the cleaned number
  const telLink = phoneNumber.startsWith('+') 
    ? `tel:${cleaned}` 
    : `tel:+31${cleaned.startsWith('0') ? cleaned.substring(1) : cleaned}`;
    
  return (
    <a href={telLink}>{displayText || phoneNumber}</a>
  );
};

/**
 * Formats an email address as a clickable mailto link
 * @param email - The email address
 * @param displayText - Optional custom display text (if not provided, uses the email)
 */
export const formatEmailLink = (email: string, displayText?: string): React.ReactNode => {
  return (
    <a href={`mailto:${email}`}>{displayText || email}</a>
  );
};

/**
 * Formats an address as a clickable Google Maps link
 * @param address - The full address
 * @param displayText - Optional custom display text (if not provided, uses the address)
 */
export const formatAddressLink = (address: string, displayText?: string): React.ReactNode => {
  const encodedAddress = encodeURIComponent(address);
  return (
    <a 
      href={`https://maps.google.com/?q=${encodedAddress}`} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {displayText || address}
    </a>
  );
};

/**
 * Formats a URL as a clickable link
 * @param url - The URL
 * @param displayText - Optional custom display text (if not provided, uses the URL)
 */
export const formatUrlLink = (url: string, displayText?: string): React.ReactNode => {
  // Add https:// if not present and not starting with http:// already
  const fullUrl = (!url.startsWith('http://') && !url.startsWith('https://')) 
    ? `https://${url}` 
    : url;
    
  return (
    <a 
      href={fullUrl} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {displayText || url}
    </a>
  );
}; 