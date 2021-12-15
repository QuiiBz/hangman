export type ScoreData = {
  username: string;
  score: number;
  totalParty: number;
  avatar: string;
  position: number;
  party: Party[];
};

export type Party = {
  createdAt: string;
  id: string;
  isWin: boolean;
  numberLetterInWord: number;
  username: string;
  word: string;
};

export type WordData = {
  id: string;
  word: string;
};

export enum GameStatus {
  WAITING,
  PLAYING,
  WON,
  LOST,
}
