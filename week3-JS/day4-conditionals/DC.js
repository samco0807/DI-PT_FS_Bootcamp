const sentence="The movie is not that bad, I like it"
const wordNot="not"
const wordBad="bad"
const wordNotPosition=sentence.indexOf(wordNot)
const wordBadPosition=sentence.indexOf(wordBad)

if (wordBadPosition<wordNotPosition) {
    const newSentence=sentence.replace(`${wordNot} that ${wordBad}`, "good")
    console.log(newSentence);
} else {
    console.log(sentence);
}
