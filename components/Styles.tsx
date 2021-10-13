import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";

const arabicFontSize = 30;

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },

    flexContainer: {
        flex: 1,
    },

    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
    },

    loginScreenContainer: {
        flex: 1
    },
    loginFormView: {
        flex: 1,
        margin: 15
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,

    },
    loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    },

    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    modalCloseIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        fontWeight: 'bold'
    },
    headerIcon: {
        position: 'absolute',
        right: 16,
    },
    headerTitle: {
        flexDirection: 'row'
    },
    centeredHorView: {
        flex: 1,
        marginTop: 22,
        alignItems: "center",
    },
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 15
    },
    verbFormModal: {
        position: "absolute",
        top: 100,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    modalView: {
        margin: 10,
        marginTop: '20%',
        // backgroundColor: "white",
        borderRadius: 20,
        borderColor: '#414141',
        justifyContent: "center",
        padding: 15,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 5
    },

    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: "#f1f1f1",
    },
    twoColumnItem: {
        width: '50%',
        backgroundColor: "#ffffff",
        margin: 5,
        padding: 5
    },
    center: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        ...Colors.lightBg,
        fontSize: 18,
        marginBottom: 10,
        padding: 10,
    },
    textCompact: {
        ...Colors.lightBg,
        fontSize: 18,
        padding: 5,
    },

    textBold: {
        fontWeight: 'bold',
    },
    arabicFontSize: {
        fontSize: arabicFontSize,
    },

    textButton: {
        ...Colors.lightBg,
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: Colors.lightBg.color,
        borderWidth: 1,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        marginBottom: 5
    },
    borderBottom: {
        borderColor: '#cdcdcd',
        borderBottomWidth: .2,
    },

    shadow: {
        shadowColor: "black",
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation: 1,
    },
    textButtonCompact: {
        ...Colors.lightBg,
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: Colors.lightBg.color,
        borderWidth: 1,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 3,
        margin: 1,
    },

    paragraph: {
        ...Colors.lightBg,
        fontSize: 24,
        paddingBottom: 10,
        marginTop: 10,
        textAlign: "justify"
    },

    rowView: {
        ...Colors.lightBg,
        fontSize: 20,
        fontWeight: 'bold',
    },
    rowViewBox: {
        ...Colors.lightBg,
        fontSize: 20,
        fontWeight: 'bold',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 10,
    },

    pageTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    imageStyle: {
        marginLeft: 15,
        marginRight: 20,
        alignSelf: 'center',
        width: 20,
        height: 24,
        justifyContent: 'center'
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrollView: {
        paddingBottom: 40
    },
    button: {
        display: 'flex',
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowRadius: 25,
        elevation: 2
    },
    cellButton: {
        display: 'flex',
        height: 'auto',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        width: '90%',
        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowRadius: 25,
        elevation: 2
    },

    closeButton: {
        display: 'flex',
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF3974',
        shadowColor: '#2AC062',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowRadius: 25,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 22,
    },
    image: {
        marginTop: 150,
        marginBottom: 10,
        width: '100%',
        height: 350,
    },
    closeText: {
        fontSize: 24,
        color: '#00479e',
        textAlign: 'center',
    },
    row: {
        flexDirection: "row",
        display: "flex"
    },
    rowJustified: {
        flexDirection: "row",
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    inputWrap: {
        flex: 1,
        marginBottom: 10
    },
    label: {
        ...Colors.lightBg,
        fontWeight: 'bold'
    },
    greenColor: {
        color: "#079915",
    },
    redColor: {
        color: "#fa0738",
    },
    grayColor: {
        color: "#666666",
    },
    whiteColor: {
        color: "#ffffff",
    },
    blankLine: {
        height: 30
    },
    selectedText: {
        borderBottomColor: Colors.light.tint,
        borderBottomWidth: 2
    },
    tableContainer: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    tableHead: {backgroundColor: '#f1f8ff'},
    tableHeadTextCompact: {
        ...Colors.lightBg,
        fontSize: 16, textAlign: "center"
    },
    tableWrapper: {flexDirection: 'row'},
    tableTitle: {flex: 1, backgroundColor: '#f6f8fa'},
    tableRow: {},
    tableText: {textAlign: 'center', fontSize: 24},
    tableTextSmall: {textAlign: 'center', fontSize: 18},
    tableTextBold: {textAlign: 'center', fontSize: arabicFontSize, fontWeight: 'bold'},
    tableBorder: {
        borderWidth: 1, borderColor: '#c8e1ff'
    },
    leftMargin: {
        marginLeft: '2%'
    },
    miscItem: {
        borderColor: Colors.lightBg.color,
        borderWidth: 1,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '49%',
    },
    miscItemText: {
        fontSize: 20
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    rowViewContainer: {
        flex: 1,
        paddingRight: 15,
        paddingTop: 13,
        paddingBottom: 13,
        borderBottomWidth: 0.5,
        borderColor: '#c9c9c9',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 20,
        marginLeft: 10,
    },
})

