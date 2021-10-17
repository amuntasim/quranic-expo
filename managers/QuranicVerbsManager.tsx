import * as React from 'react';

import * as RNFS from 'react-native-fs';
import {View} from "react-native";
import {Col, Row, Rows, Table, TableWrapper} from "react-native-table-component";

import {Text} from '../components/Themed';
import {verbFormInst} from '../components/VerbForms';
import Styles from "../components/Styles";

const baseVerbsPath = `${RNFS.DocumentDirectoryPath}/quranic-verbs.json`

async function getVerbs(opts: any) {
    try {
        return JSON.parse(await RNFS.readFile(baseVerbsPath));
    } catch (e) {
        return []
    }
}

// table with tableHead and columnTitles
const renderTable2 = function (data: any, flexArr: any, colHeadStyle: any) {
    colHeadStyle = colHeadStyle || Styles.tableTextSmall;
    return (<Table borderStyle={Styles.tableBorder}>
        <Row data={data.tableHead} flexArr={[2,2,2,1]} style={Styles.tableHead}
             textStyle={Styles.tableText}/>
        <TableWrapper style={Styles.tableWrapper}>
            <Rows data={data.tableData} flexArr={[2,2,2]} style={Styles.tableRow}
                  textStyle={Styles.tableTextBold}/>
            <Col data={data.columnTitle} style={Styles.tableTitle} textStyle={colHeadStyle}/>
        </TableWrapper>
    </Table>)
}

const sarfKabeerTableHead = ['Plural', 'Dual', 'Singular', ''];
const sarfKabeerColHeads = ['M 3rd', 'F 3rd', 'M 2nd', 'F 2nd', 'Both'];
const maleFemaleColHeads = ['M', 'F'];

async function sarfSagheer(opts: any) {
    const vForm = verbFormInst(opts.verbDetail)

    return (<View>
        <View style={Styles.rowJustified}>
            <Text style={[Styles.paragraph, Styles.textBold]}> Sarf Sagheer</Text>
        </View>
        <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
            <Row data={['Ism fael', 'Verbal noun', 'Active present / future', 'Active Past']} style={{backgroundColor: '#f1f8ff'}}  textStyle={{textAlign: "center"}}/>
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
            <Text style={[Styles.paragraph, Styles.textBold]}> Sarf الْمَاضِي</Text>
        </View>
        {renderTable2(data, [1, 1, 1], Styles.tableTextSmall)}

    </View>)
}

async function sarfKabeerMudari(opts: any) {
    const vForm = verbFormInst(opts.verbDetail)
    const data = {
        tableHead: sarfKabeerTableHead,
        columnTitle: sarfKabeerColHeads,
        tableData: [
            [vForm.mdrMP(), vForm.mdrM2(), vForm.mdrM1()],
            [vForm.mdrFP(), vForm.mdrF2(), vForm.mdrF1()],
            [vForm.mdrM2P(), vForm.mdrM22(), vForm.mdrM21()],
            [vForm.mdrF2P(), vForm.mdrF22(), vForm.mdrF21()],
            [vForm.mdrB3(), vForm.mdrB1()],
        ]
    }
    return (<View>
        <View style={Styles.rowJustified}>
            <Text style={[Styles.paragraph, Styles.textBold]}> Sarf  الْمُضَارِعُ</Text>
        </View>
        {renderTable2(data, [1, 1, 1], Styles.tableTextSmall)}

    </View>)
}

async function amrChart(opts: any) {
    const vForm = verbFormInst(opts.verbDetail)
    const data = {
        tableHead: sarfKabeerTableHead,
        columnTitle: maleFemaleColHeads,
        tableData: [
            [vForm.amrMP(), vForm.amrM2(), vForm.amrM1()],
            [vForm.amrFP(), vForm.amrF2(), vForm.amrF1()],
        ]
    }
    return (<View>
        <View style={Styles.rowJustified}>
            <Text style={[Styles.paragraph, Styles.textBold]}> Amr أَمْرٌ</Text>
        </View>
        {renderTable2(data, [1, 1, 1], Styles.tableTextSmall)}

    </View>)
}

async function nahiChart(opts: any) {
    const vForm = verbFormInst(opts.verbDetail)
    const data = {
        tableHead: sarfKabeerTableHead,
        columnTitle: maleFemaleColHeads,
        tableData: [
            [vForm.nahiMP(), vForm.nahiM2(), vForm.nahiM1()],
            [vForm.nahiFP(), vForm.nahiF2(), vForm.nahiF1()],
        ]
    }
    return (<View>
        <View style={Styles.rowJustified}>
            <Text style={[Styles.paragraph, Styles.textBold]}> Nahi نَهِيْ</Text>
        </View>
        {renderTable2(data, [1, 1, 1], Styles.tableTextSmall)}

    </View>)
}

async function madiMajhul(opts: any) {
    const vForm = verbFormInst(opts.verbDetail)
    const data = {
        tableHead: sarfKabeerTableHead,
        columnTitle: sarfKabeerColHeads,
        tableData: [
            [vForm.mdMjMP(), vForm.mdMjM2(), vForm.mdMjM1()],
            [vForm.mdMjFP(), vForm.mdMjF2(), vForm.mdMjF1()],
            [vForm.mdMjM2P(), vForm.mdMjM22(), vForm.mdMjM21()],
            [vForm.mdMjF2P(), vForm.mdMjF22(), vForm.mdMjF21()],
            [vForm.mdMjB3(), vForm.mdMjB1()],
        ]
    }
    return (<View>
        <View style={Styles.rowJustified}>
            <Text style={[Styles.paragraph, Styles.textBold]}> Majhul الْمَاضِي</Text>
        </View>
        {renderTable2(data, [1, 1, 1], Styles.tableTextSmall)}

    </View>)
}

async function mudariMajhul(opts: any) {
    const vForm = verbFormInst(opts.verbDetail)
    const data = {
        tableHead: sarfKabeerTableHead,
        columnTitle: sarfKabeerColHeads,
        tableData: [
            [vForm.mdrMjMP(), vForm.mdrMjM2(), vForm.mdrMjM1()],
            [vForm.mdrMjFP(), vForm.mdrMjF2(), vForm.mdrMjF1()],
            [vForm.mdrMjM2P(), vForm.mdrMjM22(), vForm.mdrMjM21()],
            [vForm.mdrMjF2P(), vForm.mdrMjF22(), vForm.mdrMjF21()],
            [vForm.mdrMjB3(), vForm.mdrMjB1()],
        ]
    }
    return (<View>
        <View style={Styles.rowJustified}>
            <Text style={[Styles.paragraph, Styles.textBold]}> Majhul الْمُضَارِعُ</Text>
        </View>
        {renderTable2(data, [1, 1, 1], Styles.tableTextSmall)}

    </View>)
}


export default {
    getVerbs,
    sarfSagheer,
    sarfKabeerMadi,
    sarfKabeerMudari,
    amrChart,
    nahiChart,
    madiMajhul,
    mudariMajhul,
};

