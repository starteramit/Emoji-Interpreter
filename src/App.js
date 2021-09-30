import { useState } from "react";
import "./App.css";

//Emoji Database!
var emojiDictionary = {
  "😀": "Grinning Face with Big Eyes",
  "💌": "Love Letter",
  "😷": "Face with medical mask",
  "🎉": "Party Popper",
  "❤️": "love",
  "🐕": "Dog",
  "😕": "Confused Face",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "😴": "Sleeping Face",
  "🥰": "Smiling Face with Hearts",
  "🤗": "Hugging Face",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "☃️": "Snowman",
  "🔥": "Fire",
};

var dicArray = Object.keys(emojiDictionary);

function App() {
  var [userInput, setUserInput] = useState("Translation will come here!");

  function inputValueHandler(event) {
    userInput = event.target.value;
    if (userInput in emojiDictionary) {
      setUserInput(emojiDictionary[userInput]);
    } else {
      setUserInput("We don't have this emoji in our database.");
    }
  }

  function emojiClickHandler(emoji) {
    setUserInput(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input placeholder="Emoji here..." onChange={inputValueHandler}></input>
      <div className="divClass">{userInput}</div>
      <div className="divClass">Emoji's We Know</div>
      {dicArray.map(function (emoji) {
        return (
          <span className="emojiClass" onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 * VISER -> View -> Interact -> State in Event HAndler -> render
 */

export default App;