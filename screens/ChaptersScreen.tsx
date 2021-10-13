import * as React from 'react';
import Styles from '../components/Styles';
import {Ionicons} from '@expo/vector-icons';

import {RowViewText, View} from '../components/Themed';
import {FlatList, SafeAreaView, ScrollView} from "react-native";
import ChaptersManager from '../managers/ChaptersManager';
import PreferenceManager from '../managers/PreferenceManager';
import {Order} from "./AccountScreen/components/Order";

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
        const lessonsSourcesChanged = 'true'//await PreferenceManager.getLessonsSourcesChanged();
        if (lessonsSourcesChanged === 'true') {
            console.log('checking content status');
            await PreferenceManager.setLessonsSourcesChanged('false')
            reloadChapters();
        }
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons name={'md-refresh'} size={30} style={Styles.whiteColor}
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
        <View style={Styles.container}>
            <FlatList
                data={state.chapters}
                // onRefresh={syncOrders}
                // refreshing={isRefreshing}
                keyExtractor={(item) => item}
                renderItem={({item}) => {
                    return (
                        <RowViewText key={item} style={Styles.rowViewBox}
                                     onPress={() => navigation.navigate('ChapterDetailScreen', {chapterName: item})}>
                            {item.split('.')[1]}
                        </RowViewText>
                    );
                }}
            />
        </View>
        // <SafeAreaView style={Styles.container}>
        //     <ScrollView contentContainerStyle={Styles.scrollView}>
        //         {chapterLists}
        //     </ScrollView>
        // </SafeAreaView>
    );
}

