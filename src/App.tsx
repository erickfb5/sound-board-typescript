import { useState, useEffect } from "react";

import { sounds } from "./sounds";
import "./App.css";

const App = () => {
  const [selectedSound, setSelectedSound] = useState<string>('');
  const audioElements = sounds.map(({ id, src }) => (
    <audio id={id} key={id} src={src} />
  ));

  useEffect(() => {
    if (selectedSound) {
      sounds.forEach(({ id }) => {
        const song = document.getElementById(id) as HTMLAudioElement;
        if (song) {
          song.pause();
          song.currentTime = 0;
        }
      });

      const selectedSong = document.getElementById(
        selectedSound
      ) as HTMLAudioElement;

      if (selectedSong) selectedSong.play();
    }
  }, [selectedSound]);

  const buttons = sounds.map(({ id, src }) => {
    return (
      <button className="btn" key={src} onClick={() => setSelectedSound(id)}>
        {id}
      </button>
    );
  });

  return (
    <div>
      {audioElements}
      <div id="buttons">{buttons}</div>
    </div>
  );
};

export default App;
