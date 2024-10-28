import { initReactI18next } from 'react-i18next';
import { translations as en } from '@shared/translations';
import i18n, { type ParseKeys } from 'i18next';

type AppTranslations = { translation: typeof en };

export type TranslationKey = ParseKeys<
  'translation',
  { returnNull: false; resources: AppTranslations },
  undefined
>;

const resources = {
  en: {
    translation: en,
  },
};

void i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  debug: false,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  keySeparator: '.',
  returnNull: false,
  resources,
});

export default i18n;
