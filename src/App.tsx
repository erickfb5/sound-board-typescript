import { useState, useEffect } from "react";

import { mp3, sounds } from "./sounds";
import "./App.css";

const App = () => {
  const [selectedSound, setSelectedSound] = useState<string>("");

  useEffect(() => {
    if (selectedSound) {
      sounds.forEach((sound: string) => {
        const song = document.getElementById(sound) as HTMLAudioElement;
        if (song) {
          song.pause();
          song.currentTime = 0;
        }
      });

      const selectedSong = document.getElementById(selectedSound) as HTMLAudioElement;
      if (selectedSong) selectedSong.play();
    }
  }, [selectedSound]);

  const soundButtons = sounds.map((sound: string) => (
    <>
      <audio id={sound} key={sound} src={mp3(sound)} />
      <button className="btn"key={sound}onClick={() => setSelectedSound(sound)}>
        {sound}
      </button>
    </>
  ));

  return <div>{soundButtons}</div>;
};

export default App;
