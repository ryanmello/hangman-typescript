import React from 'react'

const HangmanWord = () => {
    const word = "Test"
  return (
    <div style={{ display: "flex", gap: ".25em", fontSize:"6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace" }}>
      {word.split("").map((letter, index) => (
        <span>{letter}</span>
      ))}
    </div>
  )
}

export default HangmanWord
