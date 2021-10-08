import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
    View,
    Text
} from 'react-native';
import Styles from '../../components/Styles';

export default function IdentifyIsm(props: any) {
    const {data} = props;

    if (!data && !data.input) {
        return (<View/>);
    }

    const [currentSentenceIndex, setCurrentSentenceIndex] = React.useState(0);
    const [sampledWord, setSampledWord] = React.useState('');
    const [selectedType, setSelectedType] = React.useState('');
    const [answered, setAnswered] = React.useState(false);
    const [correctAnswer, setCorrectAnswer] = React.useState(false);

    const sentenceCount = data['input'].length

    const shuffleQuestion = () => {
        const toss = Math.floor(Math.random() * 2);
        const currentSentence = data['input'][currentSentenceIndex]
        const ismWords = currentSentence['ism'].split(',');
        const otherWords = currentSentence['other'].split(',');

        let word: string;

        if (toss == 0) {//Ism
            word = ismWords[Math.floor(Math.random() * ismWords.length)]
            setSelectedType('ism');
        } else {
            word = otherWords[Math.floor(Math.random() * otherWords.length)];
            setSelectedType('other');
        }
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

    const nextSentence = () => {
        if (currentSentenceIndex < (sentenceCount - 1)) {
            setCurrentSentenceIndex(currentSentenceIndex + 1)
        }else {
            setCurrentSentenceIndex(0)
        }
        shuffleQuestion();
    }

    return (
        <View style={Styles.container}>

            <View style={Styles.rowJustified}>
                <Text style={Styles.paragraph}>{data['input'][currentSentenceIndex]['sentence']}</Text>
            </View>

            <View style={Styles.rowJustified}>
                <Text style={Styles.paragraph}>{data['questionTitle']}</Text>
            </View>

            <View style={Styles.rowJustified}>
                <Text style={[Styles.paragraph, Styles.tableTextBold]}> {sampledWord}</Text>
                <Text>    </Text>
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
                <Text style={Styles.textButton} onPress={() => updateResult("ism")}>Ism</Text>
                <Text> </Text>
                <Text style={Styles.textButton} onPress={() => updateResult("other")}>Other</Text>
                <Text> </Text>
                <Text style={Styles.textButton} onPress={() => nextSentence()}>{"Next >>"}</Text>
            </View>
        </View>
    );
}


