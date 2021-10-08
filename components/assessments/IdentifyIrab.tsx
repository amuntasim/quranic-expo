import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
    View,
    Text
} from 'react-native';
import Styles from '../../components/Styles';

export default function IdentifyIrab(props: any) {
    const {data} = props;

    if (!data && !data.input) {
        return (<View/>);
    }

    const [currentSentenceIndex, setCurrentSentenceIndex] = React.useState(0);
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [sampledWord, setSampledWord] = React.useState('');
    const [selectedType, setSelectedType] = React.useState('');
    const [answered, setAnswered] = React.useState(false);
    const [correctAnswer, setCorrectAnswer] = React.useState(false);

    const sentenceCount = data['input'].length

    const shuffleQuestion = (newWordIndex: number) => {
        const currentSentence = data['input'][currentSentenceIndex]
        console.log('currentSentenceIndex', currentSentenceIndex)
        if(newWordIndex >= currentSentence['words'].length){
            setCurrentWordIndex(0)
        }else {
            setCurrentWordIndex(newWordIndex)
        }
        console.log('newWordIndex', newWordIndex)
        console.log('currentWordIndex', currentWordIndex)

        const word = currentSentence['words'][currentWordIndex];
        setSelectedType(word['type']);
        setAnswered(false);
        setCorrectAnswer(false);
        setSampledWord(word['word']);
    }

    React.useEffect(() => {
        shuffleQuestion(0);
    }, [currentSentenceIndex]);

    const updateResult = (_selected: string) => {
        const answer = _selected == selectedType;
        setCorrectAnswer(answer);
        setAnswered(true)
    }

    const nextSentence = () => {
        if (currentSentenceIndex < (sentenceCount - 1)) {
            setCurrentSentenceIndex(currentSentenceIndex + 1)
        } else {
            setCurrentSentenceIndex(0)
        }
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
                <Text style={Styles.paragraph}> {sampledWord}</Text>
                <Text> </Text>
                <View style={Styles.label}>
                    {answered && correctAnswer ?
                        <Ionicons name={'ios-checkmark'} size={45} style={Styles.greenColor}/> : null}
                    {answered && !correctAnswer ?
                        <Ionicons name={'ios-close'} size={45} style={Styles.redColor}/> : null}
                </View>
            </View>
            <View style={[Styles.rowJustified, {height: 40, paddingBottom: 10}]}>
                {answered ? <Ionicons name={'md-refresh'} size={30} style={Styles.grayColor}
                                      onPress={() => shuffleQuestion(currentWordIndex + 1)}/> : null}
            </View>
            <View style={Styles.rowJustified}>
                <Text style={Styles.textButton} onPress={() => updateResult("rafAa")}>RafAa</Text>
                <Text> </Text>
                <Text style={Styles.textButton} onPress={() => updateResult("nasb")}>Nasb</Text>
                <Text> </Text>
                <Text style={Styles.textButton} onPress={() => updateResult("jar")}>Jar</Text>
                <Text> </Text>
                <Text style={Styles.textButton} onPress={() => nextSentence()}>{"Next >>"}</Text>
            </View>
        </View>
    );

}
