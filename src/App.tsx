import { useState } from 'react'
import words from "./wordlist.json"

function App() {
  const [wordToGuess, setWordsToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  console.log(wordToGuess);

  return (
    <div className="App">
      Hello
    </div>
  )
}

export default App
