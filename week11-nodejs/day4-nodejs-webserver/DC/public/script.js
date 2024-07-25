const getRandomEmoji = () => {
    const data= axios.get("http://localhost:3001/emojis")
    randomEmoji=data.randomEmoji
    let option=data/shuffleemojis
    render,der(randomEmoji, option)
console.log(data);
}
catch(e)=>{
    console.log(e);

}

const render = (emoji, option) => {
    const html=option.map(item=>{
        return `${item.name}`
    })
    document.getElementById("root").innerHTML=
    "option: " + html.join("") + "hint: " + emoji.emoji
}