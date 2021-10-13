import * as RNFS from 'react-native-fs';

const baseAssessmentPath = `${RNFS.DocumentDirectoryPath}/assessments`

async function getAssessments(opts: any) {
    try {
        const assessments = await RNFS.readdir(baseAssessmentPath);
        return assessments.sort();
    } catch (e) {
        return []
    }

}

async function assessmentDetail(name: string) {
    let assessmentContent = null
    try {
        assessmentContent = JSON.parse(decodeURIComponent(await RNFS.readFile(baseAssessmentPath + '/' + name + '/assessment.json')));
    } catch (e) {
    }
    return assessmentContent;
}

export default {
    getAssessments,
    assessmentDetail,
};

