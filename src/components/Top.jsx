import { languages } from "../data/languages";
import { getFarewellText } from "../utils";

function Top({ count, isGameWon, isGameLost }) {
  const noticeMessage =
    count > 0
      ? getFarewellText(languages[count - 1].name)
      : "Yay lots of choice, the world is safe";

  const messageElement = <p className="notice-text">“{noticeMessage}”</p>;
  const gameWonElement = (
    <div className="notice-container">
      <p className="notice-status">You win!</p>
      <p className="notice-desc">Well done! 🎉</p>
    </div>
  );
  const gameLostElement = (
    <div className="notice-container">
      <p className="notice-status">Game over!</p>
      <p className="notice-desc">You lose! Better start learning Assembly 😭</p>
    </div>
  );

  let className = "notice";
  if (count > 0 && !isGameWon && !isGameLost) {
    className += " notice-farewell";
  }

  if (isGameWon) {
    className += " notice-win";
  }

  if (isGameLost) {
    className += " notice-lost";
  }

  return (
    <header className="top">
      <section className="headline">
        <h1 className="headline-title">Assembly: Endgame</h1>
        <p className="headline-desc">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </section>
      <section className={className}>
        {!isGameWon && !isGameLost && messageElement}
        {isGameWon && gameWonElement}
        {isGameLost && gameLostElement}
      </section>
    </header>
  );
}

export default Top;
