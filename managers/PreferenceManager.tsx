import DefaultPreference from 'react-native-default-preference';
import Constant from "../constants/Values";

async function languagePref() {
    return (await DefaultPreference.get('language') || Constant.defaultLanguage);
}

async function lessonsSource() {
    return (await DefaultPreference.get('lessonsSource') || Constant.defaultLessonsSource);
}

async function getLessonsSourcesChanged() {
    return (await DefaultPreference.get('lessonsSourcesChanged') || 'false');
}

async function setLanguagePref(language: string) {
    await DefaultPreference.set('language', language)
}

async function setLessonsSourcesChanged(value: string) {
    await DefaultPreference.set('lessonsSourcesChanged', value)
}

async function setLessonsSourcesPref(lessonsSource: string) {
    await setLessonsSourcesChanged('true');
    await DefaultPreference.set('lessonsSource', lessonsSource)
}


export default {
    languagePref,
    lessonsSource,
    setLanguagePref,
    setLessonsSourcesPref,
    getLessonsSourcesChanged,
    setLessonsSourcesChanged
}
