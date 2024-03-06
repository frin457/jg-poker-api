type User = {
  id: string;
  email: string;
  displayName: string;
}
type NumberSequence = {
  value: number;
  label: string;
}
type RatingSystem = {
  id: string;
  name: string;
  values: NumberSequence[];
}

type Game = {
  id: string;
  name: string;
  members: User[];
  system: RatingSystem;
  timer: number | null
  warning: number[] | null;
  abstain: boolean;
  explinationRequired: boolean;
  getAvg: boolean;
  voteChange: boolean;
  admin: User[]

}

type Card = {
  gameId: string;
  id: string; //database Id
  title: string;
  issueNumber: string; //ticket Id
  description: string;
  votes: Vote[];
  status: 'idle' | 'active' | 'archived';
}

type Vote = {
  memberID: string;
  value: string;
  systemName: string;
  explaination: string | null;
}
type VotingSession = {
  isOpen: boolean;
  votes: Vote[];
  id: Pick<Card, 'id'> | string
}
export { User, Game, Card, Vote, VotingSession, RatingSystem }