import * as React from 'react';

// import * as RNFS from 'react-native-fs';
import {View} from "react-native";

import {Text} from '../components/Themed';
import {verbFormInst} from '../components/VerbForms';
import {Col, Row, Rows, Table, TableWrapper} from "react-native-table-component";
import Styles from "../components/Styles";

// const baseVerbsPath = `${RNFS.DocumentDirectoryPath}/quranic-verbs.json`

async function getVerbs(opts: any) {
    try {
        return []//JSON.parse(await RNFS.readFile(baseVerbsPath));
    } catch (e) {
        return []
    }
}

// table with tableHead and columnTitles
const renderTable2 = function (data: any, flexArr: any, colHeadStyle:any) {
    colHeadStyle = colHeadStyle || Styles.tableTextSmall
    return (<Table borderStyle={Styles.tableBorder}>
        <Row data={data.tableHead} flexArr={flexArr} style={Styles.tableHead}
             textStyle={Styles.tableText}/>
        <TableWrapper style={Styles.tableWrapper}>
            <Rows data={data.tableData} flexArr={flexArr} style={Styles.tableRow}
                  textStyle={Styles.tableTextBold}/>
            <Col data={data.columnTitle} style={Styles.tableTitle} textStyle={colHeadStyle}/>
        </TableWrapper>
    </Table>)
}

const sarfKabeerTableHead = ['Plural', 'Dual', 'Singular', ''];
const sarfKabeerColHeads = ['Male 3rd', 'Female 3rd', 'Male 2nd', 'Female 2nd', 'Both'];

async function sarfSagheer(opts: any) {
    const vForm = verbFormInst(opts.verbDetail)

    return (<View>
        <View style={Styles.rowJustified}>
            <Text style={[Styles.paragraph, Styles.textBold]}> Sarf Sagheer</Text>
        </View>
        <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
            <Row data={['Ism fael', 'Verbal noun', 'Active present / future', 'Active Past']} style={Styles.tableHead}
                 textStyle={Styles.tableHeadTextCompact}/>
            <Row data={[vForm.ismF(), vForm.msdr(), vForm.mdrM1(), vForm.mdM1()]} textStyle={Styles.tableTextBold}/>
            <Row data={['Ism maf\'ul', 'Verbal noun', 'Passive present / future', 'Passive Past']}
                 style={Styles.tableHead} textStyle={Styles.tableHeadTextCompact}/>
            <Row data={[vForm.ismMfl(), vForm.msdr(), vForm.mdrMjM1(), vForm.mdMjM1()]}
                 textStyle={Styles.tableTextBold}/>
            <Row data={['نَهِيْ  Prohibition', 'أَمْرٌ  Command',]} style={Styles.tableHead}
                 textStyle={Styles.tableHeadTextCompact}/>
            <Row data={[vForm.nahiM1(), vForm.amrM1()]} textStyle={Styles.tableTextBold}/>
            <Row data={['طَرْفُ الزَّماَنِ وَ المَكاَنِ']} style={Styles.tableHead}
                 textStyle={Styles.tableHeadTextCompact}/>
            <Row data={[vForm.zarf()]} textStyle={Styles.tableTextBold}/>

        </Table>
    </View>)
}

async function sarfKabeerMadi(opts: any) {
    const vForm = verbFormInst(opts.verbDetail)
    const data = {
        tableHead: sarfKabeerTableHead,
        columnTitle: sarfKabeerColHeads,
        tableData: [
            [vForm.mdMP(), vForm.mdM2(), vForm.mdM1()],
            [vForm.mdFP(), vForm.mdF2(), vForm.mdF1()],
            [vForm.mdM2P(), vForm.mdM22(), vForm.mdM21()],
            [vForm.mdF2P(), vForm.mdF22(), vForm.mdF21()],
            [vForm.mdB3(), vForm.mdB1()],
        ]
    }
    return (<View>
        <View style={Styles.rowJustified}>
            <Text style={[Styles.paragraph, Styles.textBold]}> Sarf Kabeer (Mad'i)</Text>
        </View>
        {renderTable2(data, [1, 1, 1], Styles.tableTextSmall)}

    </View>)
}

async function sarfKabeerMudari(opts: any) {
    const vForm = verbFormInst(opts.verbDetail)

    return (<View>
        <View style={Styles.rowJustified}>
            <Text style={[Styles.paragraph, Styles.textBold]}>Sarf Kabeer (Mud'ari)</Text>
        </View>
        <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
            <Row data={['Ism fael', 'Verbal noun', 'Active present / future', 'Active Past']} style={Styles.tableHead}
                 textStyle={Styles.tableHeadTextCompact}/>
            <Row data={[vForm.ismF(), vForm.msdr(), vForm.mdrM1(), vForm.mdM1()]} textStyle={Styles.tableTextBold}/>
            <Row data={['Ism maf\'ul', 'Verbal noun', 'Passive present / future', 'Passive Past']}
                 style={Styles.tableHead} textStyle={Styles.tableHeadTextCompact}/>
            <Row data={[vForm.ismMfl(), vForm.msdr(), vForm.mdrMjM1(), vForm.mdMjM1()]}
                 textStyle={Styles.tableTextBold}/>
            <Row data={['نَهِيْ  Prohibition', 'أَمْرٌ  Command',]} style={Styles.tableHead}
                 textStyle={Styles.tableHeadTextCompact}/>
            <Row data={[vForm.nahiM1(), vForm.amrM1()]} textStyle={Styles.tableTextBold}/>
            <Row data={['طَرْفُ الزَّماَنِ وَ المَكاَنِ']} style={Styles.tableHead}
                 textStyle={Styles.tableHeadTextCompact}/>
            <Row data={[vForm.zarf()]} textStyle={Styles.tableTextBold}/>

        </Table>
    </View>)
}

export default {
    getVerbs,
    sarfSagheer,
    sarfKabeerMadi,
    sarfKabeerMudari,
};

