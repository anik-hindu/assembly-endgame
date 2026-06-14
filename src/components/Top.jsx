import { languages } from "../data/languages";
import { getFarewellText } from "../utils";

function Top({ count, isGameWon }) {
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

  let className = "notice";
  if (count > 0 && !isGameWon) {
    className += " notice-farewell";
  }

  if (isGameWon) {
    className += " notice-win";
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
        {!isGameWon && messageElement}
        {isGameWon && gameWonElement}
      </section>
    </header>
  );
}

export default Top;
