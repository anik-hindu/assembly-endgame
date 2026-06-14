import { useState } from "react";
import Eliminations from "./components/Eliminations";
import Keyboard from "./components/Keyboard";
import Letters from "./components/Letters";
import Top from "./components/Top";

import { getNewWord } from "./utils.js";

function App() {
  const [currentWord, setCurrentWord] = useState(() =>
    getNewWord().toUpperCase(),
  );
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));


  console.log(currentWord);
  console.log(isGameWon);
  function getGuessedLetter(letter) {
    setGuessedLetters((prevGuessedLetters) =>
      Array.from(new Set([...prevGuessedLetters, letter])),
    );
  }

  return (
    <main className="main">
      <Top count={wrongGuessCount} isGameWon={isGameWon} />
      <Eliminations count={wrongGuessCount} />
      <Letters word={currentWord} letters={guessedLetters} />
      <Keyboard
        handleClick={getGuessedLetter}
        letters={guessedLetters}
        word={currentWord}
        gameStatus={isGameWon}
      />
    </main>
  );
}

export default App;
