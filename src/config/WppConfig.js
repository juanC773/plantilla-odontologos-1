export const WHATSAPP_CONFIG = {
  phone: '573105804237',
  defaultMessage: 'Hola, estoy interesado en adquirir un sitio web optimizado'
};

export const getWhatsAppLink = (customMessage) => {
  const message = customMessage || WHATSAPP_CONFIG.defaultMessage;
  return `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodeURIComponent(message)}`;
};