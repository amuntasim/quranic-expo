import * as Localization from 'expo-localization';
// @ts-ignore
import i18n from 'i18n-js';

import en from '../locales/en.json';
import bn from '../locales/bn.json';

import PreferenceManager from '../managers/PreferenceManager';
i18n.fallbacks = true;
i18n.translations = { en, bn };
i18n.locale = Localization.locale;
//
// const translation = new LocalizedStrings({
//     en: en,
//     bn: bn,
// });
//
// export const changeLanguage = (languageKey:any) => {
//     translation.setLanguage(languageKey)
// }
//
// PreferenceManager.languagePref().then(function(language:string){
//     changeLanguage(language);
// })

export default i18n;
