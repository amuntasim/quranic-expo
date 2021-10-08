import * as React from 'react';
import {Modal, Text, View} from 'react-native';
import Styles from '../components/Styles';
import {ListItem} from 'react-native-elements'
import {RadioButton} from './Themed'

export default function LanguageSettings(props: any) {
    const {visibility} = props;
    const {pageTitle, languageMap, currentLocal} = props;

    const [currentLanguage, setCurrentLanguage] = React.useState(currentLocal)

    const languageList = () => {
        const _languageList = [
            <ListItem key='lang-title' bottomDivider>
                <ListItem.Content>
                    <ListItem.Title style={Styles.pageTitle}>{pageTitle}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        ]
        for (let languageKey in languageMap) {
            _languageList.push(
                <ListItem key={languageKey} bottomDivider onPress={() => languageChanged(languageKey)}>
                    <ListItem.Content>
                        <ListItem.Title>{languageMap[languageKey]}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content right>
                        <RadioButton selected={languageKey == currentLanguage}/>
                    </ListItem.Content>

                </ListItem>
            )
        }
        return _languageList;
    }

    const languageChanged = (languageKey: string) => {
        props.languageSelected(languageKey)
        setCurrentLanguage(languageKey)
        console.log("updated language ...", languageKey)

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

                {languageList()}

                <Text style={Styles.closeText}
                      onPress={() => {
                          props.setVisibility(false)
                      }}> Close </Text>
            </Modal>
        </View>
    );
}


