import * as React from 'react';
import Styles from '../components/Styles';
import {Ionicons} from '@expo/vector-icons';

import {RowViewText} from '../components/Themed';
import {SafeAreaView, ScrollView} from "react-native";
import ChaptersManager from '../managers/ChaptersManager';
import PreferenceManager from '../managers/PreferenceManager';

interface StateObject {
    chapters: any[]
}

export default function ChaptersScreen(props: any) {
    const {navigation} = props;

    const _state = {chapters: []} as StateObject;

    const [state, setState] = React.useState(_state)
    const [chapters, setChapters] = React.useState([]);

    const reloadChapters = () => {
        ChaptersManager.baseChapters({}).then(function (_chapters: any) {
            setState({chapters: _chapters});
        })
    }

    React.useEffect(() => {
        reloadChapters();
    }, [chapters]);

    const checkContentStatus = async function () {
        const lessonsSourcesChanged = await PreferenceManager.getLessonsSourcesChanged();
        if (lessonsSourcesChanged === 'true') {
            console.log('checking content status');
            await PreferenceManager.setLessonsSourcesChanged('false')
            reloadChapters();
        }
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons name={'md-refresh'} size={30} style={Styles.grayColor}
                          onPress={async () => await checkContentStatus()}/>
            ),
        });
    }, [navigation]);
    // React.useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         // The screen is focused
    //         console.log('The screen is focused')
    //     });
    //
    //     // Return the function to unsubscribe from the event so it gets removed on unmount
    //     return unsubscribe;
    // }, [navigation]);


    let chapterLists = state.chapters.map(function (chapter) {
        return (<RowViewText key={chapter} style={Styles.rowViewBox}
                             onPress={() => navigation.navigate('ChapterDetailScreen', {chapterName: chapter})}>
            {chapter.split('.')[1]}
        </RowViewText>);
    })

    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView contentContainerStyle={Styles.scrollView}>
                {chapterLists}
            </ScrollView>
        </SafeAreaView>
    );
}

