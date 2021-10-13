import * as React from 'react';
import Styles from '../components/Styles';

import {ScrollView} from 'react-native';
import {View} from '../components/Themed';
import ChaptersManager from "../managers/ChaptersManager";
import {ChapterDetailIntro, ChapterDetailContent, ChapterAssessment} from "../components/SmartComponent";

interface StateObject {
    chapter: any
}

export default function ChapterDetailScreen(props: any) {
    const {navigation} = props;
    const chapterDetail = props.route.params

    const _state = {chapter: {}} as StateObject;

    const [state, setState] = React.useState(_state)
    const [chapter, setChapter] = React.useState([]);
    React.useEffect(() => {
        //TODO translate
        navigation.setOptions({ headerTitle: chapterDetail['chapterName'].split('.')[1] })

        ChaptersManager.chapterDetail({path: chapterDetail['chapterName']}).then(function (_chapter: any) {
            setState({chapter: _chapter});
        })
    }, [chapter]);
    return (
        <View style={Styles.container}>
            <ScrollView contentContainerStyle={Styles.scrollView}>
            <ChapterDetailIntro data={state.chapter.index}/>
            <ChapterDetailContent content={state.chapter.sections}/>
            {/*<ChapterAssessment content={state.chapter.assessments}/>*/}
            </ScrollView>
        </View>
    );
}
