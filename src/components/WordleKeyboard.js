import React from 'react';
import { FaBackspace } from "react-icons/fa";
import CheckWord from './WordleLogic';
import { useNavigate } from "react-router-dom";

const WordleKeyboard = ({ setRow, row, setIndex, currIndex, setPutLetter, setLastIndex, lastIndex, setMode, secret}) => {
    let navigate = useNavigate();
    const row1 = 'QWERTYUIOP'
    const row2 = 'ASDFGHJKL'
    const row3 = '1ZXCVBNM2'

    const handleBack = () => {
        if (currIndex != 0) {
            setLastIndex(currIndex)
            setIndex(currIndex - 1)
            setMode("d")
        } else {
            setLastIndex(0)
            setMode("d")
        }
    }

    const handleEnter = () => {
        if(row == 5) {
            alert("DU FÖRLORADE")
            // navigate("/", { replace: true });
            window.location.reload(false);
        } else {
            var word = ""
            var nodes = []
            for (let i = 0; i < 5; i++) {
                if (document.getElementById(i + (row*10)) != null) {
                    nodes.push(document.getElementById((i + (row*10))))
                    word = word + document.getElementById(i + (row*10)+"h2").innerHTML
                }
            }
            console.log("WORD", word)
            var res = CheckWord(word, nodes, secret)
            if(res == 1) {
                setRow(row+1)
                setLastIndex(-1)
                setIndex(0)
            } else if (res == 2) {
                navigate("/secret", { replace: true });
            }
        }

    }

    const handleLetter = (letter) => {
        setMode("w")
        setPutLetter(letter)
        if (currIndex != 4) {
            setLastIndex(currIndex)
            setIndex(currIndex + 1)
        } else {
            setLastIndex(currIndex)
        }
    }

    function WordleKeyLetter(letter) {
        if (letter === '1') {
            return (
                <div className="logo">
                    <button onClick={handleEnter}>Enter</button>
                </div>
            )
        } else if (letter === '2') {
            return (
                <div className="logo">
                    <button onClick={handleBack}><FaBackspace /></button>
                </div>
            )
        } else {
            return (
                <div className="reg">
                    <button id={letter} onClick={() => { handleLetter(letter) }}>{letter}</button>
                </div>
            )
        }

    }

    function renderKeyRow(row) {
        var rowItems = []
        for (let i = 0; i < row.length; i++) {
            rowItems.push(WordleKeyLetter(row.charAt(i)))
        }
        return (
            <div className="keyRow">
                {rowItems}
            </div>
        )
    }

    return (
        <div>
            {renderKeyRow(row1)}
            {renderKeyRow(row2)}
            {renderKeyRow(row3)}
        </div>
    )
}

export default WordleKeyboard