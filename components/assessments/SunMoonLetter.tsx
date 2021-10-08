import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
    View,
    Text
} from 'react-native';
import Styles from '../../components/Styles';


export default function SunMoonLetter(props: any) {
    const {data} = props;

    if (!data && !data.input) {
        return (<View/>);
    }

    const [sampledChar, setSampledChar] = React.useState('');
    const [selectedType, setSelectedType] = React.useState('');
    const [answered, setAnswered] = React.useState(false);
    const [correctAnswer, setCorrectAnswer] = React.useState(false);

    const sunLetters = data['input']['sunLetter'].split(',');
    const moonLetters = data['input']['moonLetter'].split(',');
    const shuffleQuestion = () => {
        const toss = Math.floor(Math.random() * 2);
        let char: string;
        let selectedType: string;

        if (toss == 0) {//Sun letter
            char = sunLetters[Math.floor(Math.random() * sunLetters.length)]
            selectedType = "sun"
        } else {
            char = moonLetters[Math.floor(Math.random() * moonLetters.length)];
            selectedType = "moon";
        }
        setSelectedType(selectedType);
        setAnswered(false);
        setCorrectAnswer(false);
        setSampledChar(char);
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
                <Text style={[Styles.paragraph, Styles.tableTextBold]}> {sampledChar}</Text>
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
                <Text style={[Styles.label, Styles.textButton]} onPress={() => updateResult("sun")}>Sun letter</Text>
                <Text> </Text>
                <Text style={[Styles.label, Styles.textButton]} onPress={() => updateResult("moon")}>Moon letter</Text>
            </View>
        </View>
    );
}
