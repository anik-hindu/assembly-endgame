import { useState } from "react";
import ReactConfetti from "react-confetti";
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
  const isGameLost = wrongGuessCount === 8;

  function getGuessedLetter(letter) {
    setGuessedLetters((prevGuessedLetters) =>
      Array.from(new Set([...prevGuessedLetters, letter])),
    );
  }

  function startNewGame() {
    setCurrentWord(() => getNewWord().toUpperCase());
    setGuessedLetters([]);
  }

  console.log(currentWord);
  return (
    <main className="main">
      {isGameWon && (
        <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <Top
        count={wrongGuessCount}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
      />
      <Eliminations count={wrongGuessCount} />
      <Letters
        word={currentWord}
        letters={guessedLetters}
        isGameLost={isGameLost}
      />
      <Keyboard
        handleClick={getGuessedLetter}
        letters={guessedLetters}
        word={currentWord}
        gameStatus={isGameWon || isGameLost}
      />
      {(isGameLost || isGameWon) && (
        <button className="new-game-btn" onClick={startNewGame}>
          NEW GAME
        </button>
      )}
    </main>
  );
}

export default App;
