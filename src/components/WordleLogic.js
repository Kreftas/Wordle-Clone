import possibleWords from "./possible-words"



// const secretWord = 'WHERE'
const interestingItems = new Set(possibleWords)



function CheckWord(word, nodes, secretWord) {
    var win = false
    
    if(word === secretWord) {
        alert("You won")
        win = true
    }

    if(!interestingItems.has(word)) {
        alert("Not a word")
        return 0
    } 

    for(var i = 0; i < 5; i++) {
        if(word.charAt(i) === secretWord.charAt(i)) {
            nodes[i].style.backgroundColor = "green"
            document.getElementById((word.charAt(i))).style.background = "green"
        } else if (secretWord.includes(word.charAt(i))) {
            nodes[i].style.backgroundColor = "yellow"
            if((secretWord.split(word.charAt(i)).length - 1) == 1) {
                document.getElementById((word.charAt(i))).style.background = "yellow"
            }
        } else {
            nodes[i].style.backgroundColor = "gray"
            document.getElementById((word.charAt(i))).style.background = 'rgb(' + [70,70,70].join(',') + ')';
        }
        
    }
    if(win) {
        return 2
    } else {
        return 1
    }

}



export default CheckWord