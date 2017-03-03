import fetch from '../core/fetch';

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const LOSE = 0;
const WIN = 1;
const TIE = 2;

function transformVictoryStatus(status) {
  switch (status) {
    case WIN:
      return 'win';
    case LOSE:
      return 'lose';
    case TIE:
      return 'tie';
    default:
      throw new Error(`Unknown victory status: ${status}`);
  }
}

function transformRPS(status) {
  switch (status) {
    case ROCK:
      return 'rock';
    case PAPER:
      return 'paper';
    case SCISSORS:
      return 'scissors';
    default:
      throw new Error(`Unknown victory status: ${status}`);
  }
}


class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  newGame = () => fetch(`${this.baseUrl}games/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }

    return response.json();
  })

  verifyGame = gameId => fetch(`${this.baseUrl}games/${gameId}/`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }

    return response.json();
  })

  throw = (gameId, userThrow) => fetch(`${this.baseUrl}games/${gameId}/throw/`, {
    method: 'POST',
    body: JSON.stringify({
      throw: userThrow,
    }),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }

    return response.json();
  }).then(data => ({
    computerThrow: transformRPS(data.computer_throw),
    humanThrow: transformRPS(data.human_throw),
    gameStatus: transformVictoryStatus(data.game_status),
  }))
}

export default Api;
