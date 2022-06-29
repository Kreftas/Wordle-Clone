import WordleRowInput from "./components/WordleRowInput";
import WordleKeyboard from "./components/WordleKeyboard";
import possibleWords from "./components/possible-words";
import { React, useState, useEffect } from 'react'
import './wordle-style.css'

const Wordle = () => {
    const [currentRow, setCurrentRow] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(-1);
    const [putLetter, setPutLetter] = useState("1");
    const [mode, setMode] = useState("w");
    const [words, setWords] = useState([])
    const [secret, setSecret] = useState("")

    useEffect(() => {
        var secretWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];
        setSecret(secretWord)
    }, [])

    // console.log("Current row", currentRow)
    // console.log("Last index", lastIndex, "Current index", currentIndex)
    // console.log("mode", mode, "Put Letter", putLetter)
    

    function createRow(row) {
        var wordleRowItem = []
        for (let i = 0; i < 5; i++) {
            wordleRowItem.push(<WordleRowInput
                id={i + (row*10)}
                index={i}
                row={row}
                currIndex={currentIndex}
                currRow={currentRow}
                putLetter={putLetter}
                lastIndex={lastIndex}
                mode={mode} />
            )
        }
        
        return wordleRowItem
    }

    function renderRow(row) {
        return (
            <div className="wordle-row">
                {createRow(row)}
            </div>
        )
    }

    function renderGameField() {
        var wordleRows = []
        for (let i = 0; i < 6; i++) {
            wordleRows.push(renderRow(i))
        }
        
        return wordleRows
    }

    return (
        <div className="wordle">
            <h2 className="title">Guess the word</h2>
            <div className='wordle-container wordle-inputs'>
                <div className="wordle-game">
                    {renderGameField()}
                </div>
            </div>

            <div className="wordle-container wordle-keyboard">
                <WordleKeyboard
                    setRow={setCurrentRow}
                    row={currentRow}
                    setIndex={setCurrentIndex}
                    currIndex={currentIndex}
                    setPutLetter={setPutLetter}
                    setLastIndex={setLastIndex}
                    lastIndex={lastIndex}
                    setMode={setMode}
                    secret={secret}
                />
            </div>
        </div>

    )
}

export default Wordle