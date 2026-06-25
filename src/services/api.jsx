const BASE_URL = import.meta.env.VITE_BACKEND_URL || 
  (import.meta.env.PROD ? 'https://myportfolio-1a6j.onrender.com/api/v1' : 'http://localhost:3000/api/v1');

// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: `${BASE_URL}/contact/contactUs`,
};