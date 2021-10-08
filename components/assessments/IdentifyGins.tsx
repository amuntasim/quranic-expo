import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
    View,
    Text
} from 'react-native';
import Styles from '../../components/Styles';


export default function IdentifyGins(props: any) {
    const {data} = props;

    if (!data && !data.input) {
        return (<View/>);
    }

    const [sampledWord, setSampledWord] = React.useState('');
    const [selectedType, setSelectedType] = React.useState('');
    const [answered, setAnswered] = React.useState(false);
    const [correctAnswer, setCorrectAnswer] = React.useState(false);

    const masculine = data['input']['masculine'].split(',');
    const feminine = data['input']['feminine'].split(',');

    const shuffleQuestion = () => {
        const toss = Math.floor(Math.random() * 2);
        let word: string;
        let selectedType: string;

        switch (toss){
            case 0:
                word = masculine[Math.floor(Math.random() * masculine.length)]
                selectedType = "masculine"
                break;
            default:
                word = feminine[Math.floor(Math.random() * feminine.length)];
                selectedType = "feminine";
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
                <Text style={[Styles.label, Styles.textButton]} onPress={() => updateResult("masculine")}>Masculine (المُذَكَّرُ)</Text>
                <Text> </Text>
                <Text style={[Styles.label, Styles.textButton]} onPress={() => updateResult("feminine")}>Feminine (المُؤَنَّثُ)</Text>
            </View>
        </View>
    );
}
