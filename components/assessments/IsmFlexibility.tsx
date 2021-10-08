import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
    View,
    Text
} from 'react-native';
import Styles from '../../components/Styles';


export default function IsmFlexibility(props: any) {
    const {data} = props;

    if (!data && !data.input) {
        return (<View/>);
    }

    const [sampledWord, setSampledWord] = React.useState('');
    const [selectedType, setSelectedType] = React.useState('');
    const [answered, setAnswered] = React.useState(false);
    const [correctAnswer, setCorrectAnswer] = React.useState(false);

    const flexible = data['input']['flex'].split(',');
    const semiFlex = data['input']['semi-flex'].split(',');
    const nonFlex = data['input']['non-flex'].split(',');
    const shuffleQuestion = () => {
        const toss = Math.floor(Math.random() * 3);
        let word: string;
        let selectedType: string;

        switch (toss){
            case 0:
                word = flexible[Math.floor(Math.random() * flexible.length)]
                selectedType = "flex"
                break;
            case 1:
                word = semiFlex[Math.floor(Math.random() * semiFlex.length)];
                selectedType = "semi-flex";
                break;
            default:
                word = nonFlex[Math.floor(Math.random() * nonFlex.length)];
                selectedType = "non-flex";
                break;
        }

        setSelectedType(selectedType);
        setAnswered(false);
        setCorrectAnswer(false);
        setSampledWord(word);
    }
    React.useEffect(() => {
        shuffleQuestion();
    }, []);

    const updateResult = (_selected: string) => {
        const answer = _selected == selectedType;
        setCorrectAnswer(answer);
        setAnswered(true)
    }
    return (
        <View style={Styles.container}>

            <View style={Styles.rowJustified}>
                <Text style={Styles.paragraph}>{data['questionTitle']}</Text>
            </View>
            <View style={Styles.rowJustified}>
                <Text style={[Styles.paragraph, Styles.tableTextBold]}> {sampledWord}</Text>
                <View style={Styles.label}>
                    {answered && correctAnswer ?
                        <Ionicons name={'ios-checkmark'} size={45} style={Styles.greenColor}/> : null}
                    {answered && !correctAnswer ?
                        <Ionicons name={'ios-close'} size={45} style={Styles.redColor}/> : null}
                </View>
            </View>
            <View style={[Styles.rowJustified, {height: 40, paddingBottom: 10}]}>
                {answered ? <Ionicons name={'md-refresh'} size={30} style={Styles.grayColor}
                                      onPress={() => shuffleQuestion()}/> : null}
            </View>
            <View style={Styles.rowJustified}>
                <Text style={[Styles.label, Styles.textButton]} onPress={() => updateResult("flex")}>Full Flexible (مُعْرَبٌ)</Text>
                <Text> </Text>
                <Text style={[Styles.label, Styles.textButton]} onPress={() => updateResult("semi-flex")}>Partly Flexible (غَيْرُ مُنْصَرِفٍ)</Text>
                <Text> </Text>
                <Text style={[Styles.label, Styles.textButton]} onPress={() => updateResult("non-flex")}>Non-Flexible (مَبْنِيٌّ)</Text>
            </View>
        </View>
    );
}
