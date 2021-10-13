import * as React from 'react';
import Styles from '../components/Styles';

import {RowViewText, Text, View} from '../components/Themed';
import {Modal, SafeAreaView, ScrollView, Alert} from "react-native";
import AssessmentsManager from '../managers/AssessmentsManager';
import Assessments from '../components/assessments/index';

import {Ionicons} from "@expo/vector-icons";
import * as RNFS from "react-native-fs";
import {unzip} from "react-native-zip-archive";
import Constant from "../constants/Values";

interface StateObject {
    assessments: any[]
}


export default function AssessmentListScreen(props: any) {
    const {navigation} = props;

    const _state = {assessments: []} as StateObject;
    const _assessmentDetail = {} as any;
    const [state, setState] = React.useState(_state)
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [assessmentDetail, setAssessmentDetail] = React.useState(_assessmentDetail);

    const [assessments, setAssessments] = React.useState([]);
    const loadAssessments = () => {
        AssessmentsManager.getAssessments({}).then(function (_assessments: any) {
            setState({assessments: _assessments});
        })
    }
    React.useEffect(() => {
        loadAssessments();
    }, [assessments]);

    const updateAssessmentsAlert = () =>
        Alert.alert(
            "Update Assessments",
            "Do you want to update the assessment contents?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => reloadAssessments() }
            ]
        );


    const reloadAssessments = async function () {
        const tmpFileName = `${RNFS.TemporaryDirectoryPath}/${Date.now()}.zip`;
        RNFS.downloadFile({
            fromUrl: `${Constant.fileBaseUrl}assessments.zip`,
            toFile: tmpFileName,
        }).promise.then((r) => {
            const charset = 'UTF-8';
            const targetPath = `${RNFS.DocumentDirectoryPath}`;
            RNFS.unlink(`${RNFS.DocumentDirectoryPath}/assessments`)

            unzip(tmpFileName, targetPath, charset)
                .then((path) => {
                    console.log(`unzip completed at ${path}`);
                    loadAssessments();
                })
                .catch((error) => {
                    console.error(error)
                })
        });
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons name={'md-refresh'} size={30} style={Styles.whiteColor}
                          onPress={async () => await updateAssessmentsAlert()}/>
            ),
        });
    }, [navigation]);

    function openAssessment(assessment: string) {
        AssessmentsManager.assessmentDetail(assessment).then(function (assessmentDetail: any) {
            setAssessmentDetail(assessmentDetail);
            setModalVisible(true)
        })

    }

    const assessmentBody = function () {
        // @ts-ignore
        const Assessment = Assessments[assessmentDetail.assessmentName];
        if(Assessment){
            return <Assessment data={assessmentDetail}/>
        }
        return <></>;

    }


    const assessmentLists = function () {
        const list = state.assessments.map(function (assessment) {
            return <RowViewText key={assessment} style={Styles.rowViewBox}
                                onPress={() => openAssessment(assessment)}>{assessment.split('.')[1]}</RowViewText>;
        });
        return list.length ? list : <Text onPress={()=> updateAssessmentsAlert()}>No Assessments found, Download!</Text>
    }
    return (
        <View style={Styles.container}>
            <ScrollView contentContainerStyle={Styles.scrollView}>
                <Modal
                    // animationType={"slide"}
                    transparent={false}
                    visible={isModalVisible}
                    supportedOrientations={['portrait', 'landscape']}
                    onRequestClose={() => {
                    }}>

                    {assessmentBody()}
                    <Text style={Styles.closeText}
                          onPress={() => {
                              setModalVisible(false)
                          }}> Close </Text>
                </Modal>
                {assessmentLists()}
            </ScrollView>
        </View>
    );
}

