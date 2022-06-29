import { React, useState, useEffect } from 'react'

const WordleRowInput = ({ id, index, row, currIndex, currRow, putLetter, lastIndex, mode }) => {
    const [focused, setFocused] = useState("");
    const [added, setAdded] = useState("");

    useEffect(() => {
        if (index === currIndex && row === currRow) {
            setFocused("focused")
        } else {
            setFocused("")
        }

        if (lastIndex > -1) {
            if (mode === "w") {
                if (index === lastIndex && row === currRow) {
                    setAdded(putLetter)
                }
            } else {
                if (index === lastIndex && row === currRow) {
                    setAdded("")
                }
            }
        }

    })

    return (
        <div className={"letter" + " " + focused} id={id}>
            <h3 id={id+"h2"}>{added}</h3>
        </div>
    )
}

export default WordleRowInput