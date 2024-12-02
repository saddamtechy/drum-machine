import React, { useState } from "react";
import DrumPad from "./components/DrumPad";
import "./App.css";

const sounds = [
  { keyTrigger: "Q", id: "Heater 1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { keyTrigger: "W", id: "Heater 2", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { keyTrigger: "E", id: "Heater 3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { keyTrigger: "A", id: "Clap", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
  { keyTrigger: "S", id: "Open-HH", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
  { keyTrigger: "D", id: "Kick-n'-Hat", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
  { keyTrigger: "Z", id: "Kick", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
  { keyTrigger: "X", id: "Closed-HH", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
  { keyTrigger: "C", id: "Heater 4", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" }
];

function App() {
  const [display, setDisplay] = useState("");

  const playSound = (url, id) => {
    const audio = new Audio(url);
    audio.play();
    setDisplay(id);
  };

  const handleKeyPress = (e) => {
    const pad = sounds.find((sound) => sound.keyTrigger === e.key.toUpperCase());
    if (pad) {
      playSound(pad.url, pad.id);
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">
        {sounds.map((sound) => (
          <DrumPad
            key={sound.keyTrigger}
            id={sound.id}
            keyTrigger={sound.keyTrigger}
            url={sound.url}
            playSound={playSound}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
