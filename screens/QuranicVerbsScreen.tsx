import * as React from 'react';
import Styles from '../components/Styles';

import {Text, View} from '../components/Themed';
import {Alert, FlatList, Modal, Picker, SafeAreaView, TextInput, } from "react-native";
import QuranicVerbsManager from '../managers/QuranicVerbsManager';
import {Ionicons} from "@expo/vector-icons";
// import * as RNFS from "react-native-fs";
import Constant from "../constants/Values";
import {ListItem} from "react-native-elements";


const verbForms = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

const verbFormPickers = verbForms.map((f) => <Picker.Item key={f} label={`(${f})`} value={f}/>)
export default function QuranicVerbsScreen(props: any) {
    const {navigation} = props;

    const [isModalVisible, setModalVisible] = React.useState(false);
    const [selectedForm, setSelectedForm] = React.useState('');
    const [selectedMeaning, setSelectedMeaning] = React.useState('');
    const [selectedRoot, setSelectedRoot] = React.useState('');
    const [verbDetail, setVerbDetail] = React.useState(null);

    const [verbs, setVerbs] = React.useState([]);
    const [baseVerbs, setBaseVerbs] = React.useState([]);
    const [modalBodyContent, setModalBodyContent] = React.useState(null);

    const loadVerbs = () => {
        QuranicVerbsManager.getVerbs({}).then(function (_verbs: any) {
            setVerbs(_verbs);
            setBaseVerbs(_verbs);
        })
    }
    React.useEffect(() => {
        console.log('loadingVerbs')
        loadVerbs();
        setSelectedRoot('')
        setSelectedForm('')
        setSelectedMeaning('')
    }, []);

    // filter verbs
    React.useEffect(() => {
        console.log({selectedForm, selectedMeaning, selectedRoot})
        let tmpResult = baseVerbs;

        if (selectedForm)
            tmpResult = tmpResult.filter((obj: any) => obj.form === selectedForm);

        if (selectedMeaning)
            tmpResult = tmpResult.filter((obj: any) => obj.trans.en.indexOf(selectedMeaning) >= 0);

        if (selectedRoot) {
            const _s = selectedRoot.split('').join(' ');
            tmpResult = tmpResult.filter((obj: any) => obj.root.indexOf(_s) >= 0);
        }

        setVerbs(tmpResult)

    }, [selectedForm, selectedMeaning, selectedRoot]);

    const updateVerbsAlert = () =>
        Alert.alert(
            "Update Verbs",
            "Do you want to update the verb contents?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {text: "OK", onPress: () => reloadVerbs()}
            ]
        );


    const reloadVerbs = async function () {
        // const fileName = `${RNFS.DocumentDirectoryPath}/quranic-verbs.json`;
        // RNFS.downloadFile({
        //     fromUrl: `${Constant.fileBaseUrl}quranic-verbs.json`,
        //     toFile: fileName,
        // }).promise.then((r) => {
        //     loadVerbs();
        // });
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons name={'md-refresh'} size={30} style={Styles.grayColor}
                          onPress={async () => await updateVerbsAlert()}/>
            ),
        });
    }, [navigation]);

    function sarfSagheer() {
        QuranicVerbsManager.sarfSagheer({verbDetail}).then(function (content: any) {
            setModalBodyContent(content);
        })
    }

    function sarfKabeerMadi() {
        QuranicVerbsManager.sarfKabeerMadi({verbDetail}).then(function (content: any) {
            setModalBodyContent(content);
        })
    }

    function sarfKabeerMudari() {
        QuranicVerbsManager.sarfKabeerMudari({verbDetail}).then(function (content: any) {
            setModalBodyContent(content);
        })
    }

    const modalHead = function () {
        if (verbDetail) {
            return (<View>

                <View style={Styles.rowJustified}>
                    <Text style={[Styles.textBold, Styles.arabicFontSize]}> {verbDetail.verb + ""}</Text>
                    <Text style={{marginTop:5}}>({verbDetail.form}) </Text>
                    <Text style={{marginTop:5}}>({verbDetail.trans.en}) </Text>
                </View>
                <View style={Styles.rowJustified}>
                    <Text style={Styles.textButtonCompact} onPress={() => sarfSagheer()}>Sarf Sagheer</Text>
                    <Text> </Text>
                    <Text style={Styles.textButtonCompact} onPress={() => sarfKabeerMadi()}>
                        Sarf Kabeer (Mad'i)
                    </Text>
                    <Text> </Text>
                    <Text style={Styles.textButtonCompact} onPress={() => sarfKabeerMudari()}>
                        Sarf Kabeer (Mud'ari)
                    </Text>
                </View>
            </View>)
        }
        return <></>;

    }

    const modalBody = function () {
        if (modalBodyContent) {
            return (<View style={{marginTop: 20}}>
                {modalBodyContent}
            </View>)
        }
        return <></>;

    }

    const openVerbPopup = (verb: any) => {
        setVerbDetail(verb);
        setModalBodyContent(null)
        setModalVisible(true);
    }

    // @ts-ignore
    const renderItem = ({item}) => (
        <ListItem key="pref-lang" bottomDivider onPress={() => openVerbPopup(item)}>
            <ListItem.Content style={{}}>
                <ListItem.Title>
                    <Text>({item.root}) </Text>
                    <Text style={[Styles.textBold, Styles.arabicFontSize]}> {item.verb + ""}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>
                    <Text>{item.trans.en}</Text>
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
                <Text>({item.form})</Text>
                <Text># {item.freq}</Text>
            </ListItem.Content>
        </ListItem>
    );
    return (
        <View style={Styles.container}>
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={isModalVisible}
                supportedOrientations={['portrait', 'landscape']}
                onRequestClose={() => {
                }}>
                <View style={Styles.container}>
                    {modalHead()}
                    {modalBody()}
                </View>
                <Text style={Styles.closeText}
                      onPress={() => {
                          setModalVisible(false)
                      }}> Close </Text>
            </Modal>
            <View style={[Styles.borderBottom, {flexDirection: 'row'}]}>
                <TextInput placeholder="Meaning" style={{width: 130}}
                           value={selectedMeaning}
                           onChangeText={meaning => setSelectedMeaning(meaning)}
                />

                <Picker
                    selectedValue={selectedForm}
                    style={{height: 50, width: 105}}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => setSelectedForm(itemValue)}
                >
                    <Picker.Item label='Form' value=''/>
                    {verbFormPickers}
                </Picker>
                <TextInput placeholder="Root"
                           value={selectedRoot}
                           onChangeText={root => setSelectedRoot(root)}
                />
            </View>
            <FlatList
                data={verbs}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    );
}

