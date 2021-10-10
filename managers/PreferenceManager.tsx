import AsyncStorage from '@react-native-async-storage/async-storage'
import Constant from "../constants/Values";

const languageKey = '@qrnc/prefs/language';
const lessonsSourceKey = '@qrnc/prefs/lessonsSource';
const lessonsSourcesChangedKey = '@qrnc/prefs/lessonsSourcesChanged';

async function languagePref() {
    return (await AsyncStorage.getItem(languageKey) || Constant.defaultLanguage);
}

async function lessonsSource() {
    return (await AsyncStorage.getItem(lessonsSourceKey) || Constant.defaultLessonsSource);
}

async function getLessonsSourcesChanged() {
    return (await AsyncStorage.getItem(lessonsSourcesChangedKey) || 'false');
}

async function setLanguagePref(language: string) {
    await AsyncStorage.setItem(languageKey, language)
}

async function setLessonsSourcesChanged(value: string) {
    await AsyncStorage.setItem(lessonsSourcesChangedKey, value)
}

async function setLessonsSourcesPref(lessonsSource: string) {
    await setLessonsSourcesChanged('true');
    await AsyncStorage.setItem(lessonsSourceKey, lessonsSource)
}


export default {
    languagePref,
    lessonsSource,
    setLanguagePref,
    setLessonsSourcesPref,
    getLessonsSourcesChanged,
    setLessonsSourcesChanged
}
