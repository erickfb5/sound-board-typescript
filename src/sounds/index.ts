export interface Sound {
  id: string;
  src: string;
}

export const sounds: Sound[] = [
  { id: "applause", src: require("./applause.mp3") },
  { id: "boo", src: require("./boo.mp3") },
  { id: "gasp", src: require("./gasp.mp3") },
  { id: "tada", src: require("./tada.mp3") },
  { id: "victory", src: require("./victory.mp3") },
  { id: "wrong", src: require("./wrong.mp3") },
];
