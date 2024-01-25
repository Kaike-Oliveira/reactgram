/* eslint-disable camelcase */
// Libraries
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Translation files
import en_US from './en_US.json';
import pt_BR from './pt_BR.json';

export const langMap = {
  en_us: 'en_US',
  en: 'en_US',
  pt_br: 'pt_BR',
  pt: 'pt_BR',
};

export const fallbackLanguage = 'en_US';
export function initI18n() {
  // Language resources
  const resources = {
    en_US: { translation: en_US },
    pt_BR: { translation: pt_BR },
  };
  i18n.use(initReactI18next)
    .init({
      resources,
      lng: fallbackLanguage,
      fallbackLng: fallbackLanguage,
      interpolation: { escapeValue: false },
    });
}
export default i18n;
