import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🇦🇶": "Flag: Antarctica",
  "🇦🇷": "Flag: Argentina",
  "🇦🇸": "Flag: American Samoa",
  "🇦🇹": "Flag: Austria",
  "🇦🇺": "Flag: Australia",
  "🇧🇴": "Flag: Bolivia",
  "🇧🇶": "Flag: Caribbean Netherlands",
  "🇧🇷": "Flag: Brazil",
  "🇨🇴": "Flag: Colombia",
  "🇪🇹": "Flag: Ethiopia",
  "🇪🇸": "Flag: Spain",
  "🇳🇱": "Flag: Netherlands",
  "🇳🇴": "Flag: Norway",
  "🇳🇵": "Flag: Nepal",
  "🇸🇪": "Flag: Sweden",
  "🇸🇬": "Flag: Singapore",
  "🇺🇸": "Flag: United States",
  "🇿🇼": "Flag: Zimbabwe",
  "🏴󠁥󠁮󠁧󠁿": "Flag: England",
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "Flag: Scotland",
  "🏴󠁧󠁢󠁷󠁬󠁳󠁿": "Flag: Wales",
  "🇮🇳": "Flag: India"
  // "🤩": "Star-struck",
  // "🤑": "Money-mouth face",
  // "🤔": "Thinking face",
  // "😑": "Expressionless face",
  // "😒": "Unamused face",
  // "🥵": "Hot face",
  // "😵": "Knocked-out face",
  // "😎": "Smiling face with sunglasses",
  // "🥺": "Pleading face",
  // "😈": "Smiling face with horns",
  // "🤘": "YO-YO"
};

export default function App() {
  const [userAns, setUserAns] = useState("");

  var emojiList = Object.keys(emojiDictionary);

  function inputHandlerEvent(event) {
    var userName = event.target.value;
    if (userName in emojiDictionary) {
      setUserAns(emojiDictionary[userName]);
    } else setUserAns("INVALI-INPUT");
  }

  function emojiClick(emoji) {
    var meaning = emojiDictionary[emoji];
    setUserAns(meaning);
  }

  return (
    <div className="App">
      <h1>Flag Emoji Interpretor</h1>
      <input onChange={inputHandlerEvent} />
      <h2 style={{ padding: "1rem" }}>{userAns} </h2>

      <h2> Emoji We Know</h2>

      {emojiList.map((item) => {
        return (
          <span
            onClick={() => emojiClick(item)}
            key={item}
            style={{
              fontSize: "xx-large",
              padding: "0.7rem",
              cursor: "pointer"
            }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
