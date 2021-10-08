import * as React from 'react';
import {Modal, Text, View} from 'react-native';
import Styles from '../components/Styles';
import {ListItem} from 'react-native-elements'
import {RadioButton} from './Themed'

export default function LessonsSettings(props: any) {
    const {visibility} = props;
    const {pageTitle, sourcesMap, currentSource} = props;

    const [currentLessonsSource, setCurrentSource] = React.useState(currentSource)

    const lessonsList = () => {
        const _lessonsList = [
            <ListItem key='lessons-source-title' bottomDivider>
                <ListItem.Content>
                    <ListItem.Title style={Styles.pageTitle}>{pageTitle}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        ]
        for (let sourceKey in sourcesMap) {
            _lessonsList.push(
                <ListItem key={sourceKey} bottomDivider onPress={() => sourceChanged(sourceKey)}>
                    <ListItem.Content>
                        <ListItem.Title>{sourcesMap[sourceKey]}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content right>
                        <RadioButton selected={sourceKey == currentLessonsSource}/>
                    </ListItem.Content>

                </ListItem>
            )
        }
        return _lessonsList;
    }

    const sourceChanged = (sourceKey:string) => {
        props.lessonSourceSelected(sourceKey)
        setCurrentSource(sourceKey);
        console.log("updated source ...", sourceKey)

    }

    return (
        <View style={Styles.container}>
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={visibility}
                supportedOrientations={['portrait', 'landscape']}
                onRequestClose={() => {
                    console.log("Closed")
                }}>

                {lessonsList()}

                <Text style={Styles.closeText}
                      onPress={() => {
                          props.setVisibility(false)
                      }}> Close </Text>
            </Modal>
        </View>
    );
}


