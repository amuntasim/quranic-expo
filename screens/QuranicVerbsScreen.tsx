import * as React from 'react';
import {useState} from 'react';
import Styles from '../components/Styles';

import {Text, View} from '../components/Themed';
import {Alert, FlatList, ScrollView, TextInput, TouchableOpacity,} from "react-native";
import {Chip, ListItem, Overlay} from 'react-native-elements';

import QuranicVerbsManager from '../managers/QuranicVerbsManager';
import {Ionicons} from "@expo/vector-icons";
import * as RNFS from "react-native-fs";
import Constant from "../constants/Values";
import Loader from "../components/Loaders/Loader";


const verbForms = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

type VerbProps = {
    item?: any;
    openVerbPopup?: any;
};
class Verb extends React.PureComponent<VerbProps> {
    render() {
        const {item, openVerbPopup} = this.props;
        return (
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
    }
}

export default function QuranicVerbsScreen(props: any) {
    const {navigation} = props;

    const [isModalVisible, setModalVisible] = React.useState(false);
    const [isFormModalVisible, setFormModalVisible] = React.useState(false);
    const [isRootModalVisible, setRootModalVisible] = React.useState(false);
    const [isOrderModalVisible, setOrderModalVisible] = React.useState(false);
    const [selectedForm, setSelectedForm] = React.useState('');
    const [selectedMeaning, setSelectedMeaning] = React.useState('');
    const [selectedRoot, setSelectedRoot] = React.useState('');
    const [selectedFaQalimah, setSelectedFaQalimah] = React.useState('');
    const [selectedAinQalimah, setSelectedAinQalimah] = React.useState('');
    const [selectedLamQalimah, setSelectedLamQalimah] = React.useState('');
    const [currentRootLetter, setCurrentRootLetter] = React.useState('fa');
    const [verbDetail, setVerbDetail] = React.useState(null);
    const [verbOrder, setVerbOrder] = React.useState('count-desc');
    const [loading, setLoading] = useState(true)

    let ref_faQalimah: TextInput | null;
    let ref_ainQalimah: TextInput | null;
    let ref_lamQalimah: TextInput | null;

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
        loadVerbs();
        setLoading(true);
        setSelectedRoot('')
        setSelectedForm('')
        setSelectedMeaning('')
    }, []);

    // filter verbs
    React.useEffect(() => {
        setLoading(true);
        let tmpResult = [...baseVerbs];

        if (selectedForm)
            tmpResult = tmpResult.filter((obj: any) => obj.form === selectedForm);

        if (selectedMeaning)
            tmpResult = tmpResult.filter((obj: any) => obj.trans.en.indexOf(selectedMeaning) >= 0);

        if (selectedRoot) {
            const _s = selectedRoot.split('').join(' ');
            tmpResult = tmpResult.filter((obj: any) => obj.root.indexOf(_s) >= 0);
        }

        if (verbOrder === 'count-asc') {
            // @ts-ignore
            tmpResult.sort((a, b) => a.freq - b.freq)
        } else if (verbOrder === 'count-desc') {
            // @ts-ignore
            tmpResult.sort((a, b) => b.freq - a.freq)
        }
        setVerbs(tmpResult);
        setLoading(false);
    }, [selectedForm, selectedMeaning, selectedRoot, verbOrder]);

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
        const fileName = `${RNFS.DocumentDirectoryPath}/quranic-verbs.json`;
        RNFS.downloadFile({
            fromUrl: `${Constant.fileBaseUrl}quranic-verbs.json`,
            toFile: fileName,
        }).promise.then((r) => {
            loadVerbs();
        });
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons name={'md-refresh'} size={30} style={Styles.whiteColor}
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

    function amrChart() {
        QuranicVerbsManager.amrChart({verbDetail}).then(function (content: any) {
            setModalBodyContent(content);
        })
    }

    function nahiChart() {
        QuranicVerbsManager.nahiChart({verbDetail}).then(function (content: any) {
            setModalBodyContent(content);
        })
    }
    function madiMajhul() {
        QuranicVerbsManager.madiMajhul({verbDetail}).then(function (content: any) {
            setModalBodyContent(content);
        })
    }
    function mudariMajhul() {
        QuranicVerbsManager.mudariMajhul({verbDetail}).then(function (content: any) {
            setModalBodyContent(content);
        })
    }

    const modalHead = function () {
        if (verbDetail) {
            return (<View>
                <View style={Styles.rowJustified}>
                    <Text style={[Styles.textBold, Styles.arabicFontSize]}> {verbDetail.verb + ""}</Text>
                    <Text style={{marginTop: 5}}>({verbDetail.form}) </Text>
                    <Text style={{marginTop: 5}}>({verbDetail.trans.en}) </Text>
                </View>
                <View style={Styles.rowJustified}>
                    <TouchableOpacity onPress={() => sarfSagheer()}>
                        <Text style={Styles.textButtonCompact}>Sarf Sagheer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => sarfKabeerMadi()}>
                        <Text style={Styles.textButtonCompact}>Sarf الْمَاضِي</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => sarfKabeerMudari()}>
                        <Text style={Styles.textButtonCompact}>Sarf الْمُضَارِعُ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => amrChart()}>
                        <Text style={Styles.textButtonCompact}>Amr أَمْرٌ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nahiChart()}>
                        <Text style={Styles.textButtonCompact}>Nahi نَهِيْ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => madiMajhul()}>
                        <Text style={Styles.textButtonCompact}>Majhul الْمَاضِي</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => mudariMajhul()}>
                        <Text style={Styles.textButtonCompact}>Majhul الْمُضَارِعُ</Text>
                    </TouchableOpacity>

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

    const verbFormSelected = (selected: string) => {
        setLoading(true)
        setSelectedForm(selected);
        setFormModalVisible(false);
    }

    const rootLetterSelected = (selected: string) => {
        switch (currentRootLetter) {
            case 'fa':
                setSelectedFaQalimah(selected);
                setCurrentRootLetter('ain');
                ref_ainQalimah.focus();
                break;
            case 'ain':
                setSelectedAinQalimah(selected);
                setCurrentRootLetter('lam');
                ref_lamQalimah.focus();
                break;
            case 'lam':
                setSelectedLamQalimah(selected);
                setCurrentRootLetter('fa');
                ref_faQalimah.focus();
                break;
        }
    }

    const combineRootLetters = () => {
        setLoading(true);
        setSelectedRoot(selectedFaQalimah + selectedAinQalimah + selectedLamQalimah);
        setRootModalVisible(false);
    }
    return (
        <View style={Styles.container}>
            {loading ? <Loader/> : <></>}
            <Overlay overlayStyle={{marginTop: 50, padding: 2, paddingBottom: 15}} isVisible={isModalVisible}
                     onBackdropPress={() => setModalVisible(false)}>
                <ScrollView>
                    {modalHead()}
                    {modalBody()}
                </ScrollView>
                <Text style={Styles.closeText}
                      onPress={() => {
                          setModalVisible(false)
                      }}> Close </Text>
            </Overlay>
            <View style={[Styles.borderBottom, {flexDirection: 'row'}]}>
                <TextInput placeholder="Meaning" style={[Styles.text, {width: 130, flex: 1,}]}
                           value={selectedMeaning}
                           onChangeText={meaning => setSelectedMeaning(meaning)}
                />

                <View style={{flex: 1}}>
                    <Text style={Styles.text} onPress={() => setFormModalVisible(true)}>Form - {selectedForm}</Text>
                    <Overlay overlayStyle={Styles.verbFormModal} isVisible={isFormModalVisible}
                             onBackdropPress={() => setFormModalVisible(false)}>
                        <View style={[Styles.centeredView, {marginTop: 0, flexDirection: "row"}]}>
                            <Text style={Styles.subtitle} key={'label'}>Verb form</Text>
                            <Ionicons name={'md-refresh'} size={30} style={[Styles.grayColor, {marginLeft: 50}]}
                                      onPress={() => {
                                          setSelectedForm('');
                                          setFormModalVisible(false)
                                      }}/>
                        </View>

                        <View style={[Styles.modalContent, {flexDirection: "row", flexWrap: "wrap"}]}>
                            {verbForms.map((f) => <Chip onPress={() => verbFormSelected(f)}
                                                        buttonStyle={{margin: 10, width: 50}} key={f} title={f}/>)}
                        </View>
                    </Overlay>
                </View>

                <View style={{flex: 1}}>
                    <Text style={Styles.text} onPress={() => setRootModalVisible(true)}>Root - {selectedRoot}</Text>
                    <Overlay overlayStyle={Styles.verbFormModal} isVisible={isRootModalVisible}
                             onBackdropPress={() => setRootModalVisible(false)}
                             onShow={() => ref_faQalimah.focus()}
                    >
                        <View style={{alignItems: 'center'}}>

                            <View style={[Styles.centeredView, {marginTop: 0, flexDirection: "row"}]}>
                                <Text style={Styles.subtitle} key={'label'}>Root letters </Text>
                                <TextInput placeholder="ل" style={[Styles.textCompact, {width: 28}]}
                                           value={selectedLamQalimah}
                                           returnKeyType="next"
                                           ref={(input) => {
                                               ref_lamQalimah = input;
                                           }}
                                           onFocus={() => setCurrentRootLetter('lam')}
                                />
                                <TextInput placeholder="ع" style={[Styles.textCompact, {width: 28}]}
                                           value={selectedAinQalimah}
                                           ref={(input) => {
                                               ref_ainQalimah = input;
                                           }}
                                           onFocus={() => setCurrentRootLetter('ain')}
                                />
                                <TextInput placeholder="ف" style={[Styles.textCompact, {width: 28}]}
                                           value={selectedFaQalimah}
                                    // ref={ref_faQalimah}
                                    // autoFocus={true}
                                           ref={(input) => {
                                               ref_faQalimah = input;
                                           }}
                                           onFocus={() => setCurrentRootLetter('fa')}
                                />
                                <Ionicons name={'arrow-forward'} size={35} style={[Styles.grayColor, {marginLeft: 30}]}
                                          onPress={() => combineRootLetters()}/>
                                <Ionicons name={'md-refresh'} size={30} style={[Styles.grayColor, {marginLeft: 50}]}
                                          onPress={() => {
                                              setSelectedRoot('');
                                              setSelectedFaQalimah('')
                                              setSelectedAinQalimah('')
                                              setSelectedLamQalimah('')
                                              setRootModalVisible(false)
                                          }}/>
                            </View>
                        </View>

                        <View style={[Styles.modalContent, {flexDirection: "row", flexWrap: "wrap"}]}>
                            {Constant.harfs.map((f, index) => <Chip onPress={() => rootLetterSelected(f)}
                                                                    titleStyle={Styles.arabicFontSize}
                                                                    buttonStyle={{margin: 3}} key={'harf-' + index}
                                                                    title={f}/>)}
                        </View>
                    </Overlay>
                </View>
                <Ionicons name={'caret-down'} size={30} style={[Styles.grayColor, {marginTop: 5, marginLeft: 10}]}
                          onPress={() => setOrderModalVisible(true)}/>
                <Overlay overlayStyle={Styles.verbFormModal} isVisible={isOrderModalVisible}
                         onBackdropPress={() => setOrderModalVisible(false)}>
                    <View style={[Styles.centeredView, {marginTop: 0, flexDirection: "row"}]}>
                        <Text style={Styles.subtitle} key={'label'}>Sort by</Text>
                        <Ionicons name={'md-refresh'} size={30} style={[Styles.grayColor, {marginLeft: 50}]}
                                  onPress={() => {
                                      setVerbOrder('');
                                      setOrderModalVisible(false)
                                  }}/>
                    </View>

                    <View style={[Styles.modalContent, {flexDirection: "row", flexWrap: "wrap"}]}>
                        <TouchableOpacity onPress={() => {
                            setVerbOrder("count-asc");
                            setOrderModalVisible(false);
                        }}>
                            <Text style={[{margin: 10}, verbOrder === 'count-asc' && Styles.selectedText]}>Count
                                ASC</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setVerbOrder("count-desc");
                            setOrderModalVisible(false);
                        }}>
                            <Text style={[{margin: 10}, verbOrder === 'count-desc' && Styles.selectedText]}>Count
                                DSC</Text>
                        </TouchableOpacity>
                    </View>
                </Overlay>
            </View>
            <FlatList
                data={verbs}
                renderItem={({item}) => <Verb item={item} openVerbPopup={openVerbPopup}/>}
                keyExtractor={(item:any) => `${item.id}`}
            />
        </View>
    );
}

