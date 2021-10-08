// For chapter 5

import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Styles from '../../components/Styles';
import {Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';


export default function MuslimunChart(props: any) {
    const {data} = props;

    if (!data && !data.input) {
        return (<View/>);
    }
    const assessmentSubType = data.assessmentSubType

    const initialTableContent = {
        tableHead: ['Plural', 'Dual', 'Singular', ''],
        tableTitle: ['RafAa', 'Nasb', 'Jar'],
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]
    }
    let _wordDetails: any = {};
    const [revealedTable, setRevealedTable] = React.useState('');
    const [cellDataMap, setCellDataMap] = React.useState(new Map());
    const [tableData, setTableData] = React.useState(initialTableContent.tableData);
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [sampledWord, setSampledWord] = React.useState('');
    const [answerOption, setAnswerOption] = React.useState(false);
    const [wordDetails, setWordDetails] = React.useState(_wordDetails);
    const [currentCellIndex, setCurrentCellIndex] = React.useState('');

    const wordsCount = data.input.length;
    const cellContent = (cellIndex: string) => {
        if (cellDataMap.get(cellIndex)) {
            return cellDataMap.get(cellIndex)
        } else {
            return (
                <TouchableOpacity onPress={() => openAnswerOption(cellIndex)}>
                    <View style={Styles.rowJustified}>
                        <Text style={Styles.cellButton}> {currentCellIndex == cellIndex ? '?' : ''} </Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    const openAnswerOption = (cellIndex: string) => {
        setAnswerOption(true)
        setCurrentCellIndex(cellIndex)
    }

    const wordBreakDown = (baseWord: string) => {
        switch (assessmentSubType) {
            case 'sound-feminine':
                return soundFeminine(baseWord);
            case 'sound-feminine-light':
                return soundFeminineLight(baseWord);
            case 'sound-masculine-light':
                return soundMasculineLight(baseWord);
            default:
                return soundMasculine(baseWord);
        }
    }

    const soundMasculine = (baseWord: string) => {
        const sliced = baseWord.slice(0, -1)
        return {
            '11': baseWord, '12': sliced + 'َانِ', '13': sliced + 'ُوْنَ',
            '21': sliced + 'ً', '22,32': sliced + 'َيْنِ', '23,33': sliced + 'ِيْنَ',
            '31': sliced + 'ٍ'
        }
    }

    const soundFeminine = (baseWord: string) => {
        const sliced = baseWord.slice(0, -2)
        return {
            '11': baseWord, '12': sliced + 'تَانِ', '13': sliced + 'اتٌ',
            '21': sliced + 'ةً', '22,32': sliced + 'تَيْنِ', '23,33': sliced + 'اتٍ',
            '31': sliced + 'ةٍ'
        }
    }

    const soundFeminineLight = (baseWord: string) => {
        const sliced = baseWord.slice(0, -2)
        return {
            '11': baseWord, '12': sliced + 'تَا', '13': sliced + 'اتَ',
            '21': sliced + 'ةَ', '22,32': sliced + 'تَيْ', '23,33': sliced + 'اتِ',
            '31': sliced + 'ةِ'
        }
    }

    const soundMasculineLight = (baseWord: string) => {
        const sliced = baseWord.slice(0, -1)
        return {
            '11': baseWord, '12': sliced + 'َا', '13': sliced + 'ُوْ',
            '21': sliced + 'َ', '22,32': sliced + 'َيْ', '23,33': sliced + 'ِيْ',
            '31': sliced + 'ِ'
        }
    }


    const shuffleWord = () => {

        const word = data.input[currentWordIndex];
        setWordDetails(wordBreakDown(word))
        setCellDataMap(new Map().set('11', word));
        setCurrentCellIndex('21');
        openAnswerOption('21')
        // this is for triggering useEffect that re-renders table
        setRevealedTable(revealedTable + '11');
        setSampledWord(word);
    }

    const updateTableView = () => {
        const _tableData = [
            [cellContent('13'), cellContent('12'), cellContent('11')],
            [cellContent('23'), cellContent('22'), cellContent('21')],
            [cellContent('33'), cellContent('32'), cellContent('31')],

        ]
        setTableData(_tableData);
    }

    React.useEffect(() => {
        shuffleWord();
    }, [currentWordIndex]);

    React.useEffect(() => {
        updateTableView();
    }, [revealedTable]);

    const AnswerOptionView = () => {
        const options = Object.keys(wordDetails).map(function (key: string) {
            let value = wordDetails[key]
            return <Text key={key} style={Styles.textButtonCompact} onPress={() => matchAnswer(key)}>{value}</Text>;
        })
        return (
            <View style={Styles.rowJustified}>
                {options}
                {/*{options.sort(() => Math.random() - 0.5)}*/}
            </View>
        )
    }

    const matchAnswer = (selectedKeys: string) => {
        if (selectedKeys.includes(currentCellIndex)) {
            handleCorrectAnswer(_getKeyValue_(selectedKeys)(wordDetails))
        } else {
            handleWrongAnswer()
        }
    }

    const _getKeyValue_ = (key: string) => (obj: Record<string, any>) => obj[key];

    const handleCorrectAnswer = (cellData: string) => {
        cellDataMap.set(currentCellIndex, cellData);
        setCellDataMap(cellDataMap)
        setRevealedTable(revealedTable + currentCellIndex)
        setNextCellIndex();
    }
    const wrongAnswerContent = () => {
        return (
            <View style={Styles.rowJustified}>
                <View style={Styles.cellButton}>
                    <Ionicons name={'ios-close'} size={25} style={Styles.redColor}/>
                </View>
            </View>
        )
    }
    const handleWrongAnswer = () => {
        cellDataMap.set(currentCellIndex, wrongAnswerContent());
        setCellDataMap(cellDataMap)
        setRevealedTable(revealedTable + '1')
    }

    const setNextCellIndex = () => {
        let nextIndex = parseInt(currentCellIndex) + 10;

        if (cellDataMap.size >= 9) {
            return;
        }
        if (nextIndex > 33) {
            setCurrentCellIndex((parseInt(currentCellIndex) + 1 - 20).toString())
        } else {
            setCurrentCellIndex(nextIndex.toString())
        }
    }

    const nextWord = () => {
        if (currentWordIndex < (wordsCount - 1)) {
            setCurrentWordIndex(currentWordIndex + 1)
        } else {
            setCurrentWordIndex(0)
        }
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.rowJustified}>
                <Text style={Styles.paragraph}>{data['questionTitle']}</Text>
            </View>

            <View style={Styles.rowJustified}>
                <Text style={[Styles.paragraph, Styles.tableTextBold]}> {sampledWord}</Text>
            </View>

            <View style={[Styles.rowJustified, {paddingBottom: 10}]}>
                {answerOption ? <AnswerOptionView/> : null}
            </View>


            <Table borderStyle={{borderWidth: 1}}>
                <Row data={initialTableContent.tableHead} flexArr={[1, 1, 1, 1]} style={Styles.tableHead}
                     textStyle={Styles.tableText}/>
                <TableWrapper style={Styles.tableWrapper}>
                    <Rows data={tableData} flexArr={[1, 1, 1]} style={Styles.tableRow}
                          textStyle={Styles.tableTextBold}/>
                    <Col data={initialTableContent.tableTitle} style={Styles.tableTitle} textStyle={Styles.tableText}/>
                </TableWrapper>
            </Table>

            <View style={[Styles.rowJustified, {marginTop: 10}]}>
                <Text style={Styles.textButton} onPress={() => nextWord()}>{"Next Word >>"}</Text>
            </View>
        </View>
    );

}
