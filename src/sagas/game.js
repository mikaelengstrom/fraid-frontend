import { select, put, call } from 'redux-saga/effects';

import history from '../core/history';
import { stringToEmoji } from '../core/utils';

import {
  newGameRequestSuccess,
  newGameRequestFail,

  verifyGameRequestSuccess,
  verifyGameRequestFail,

  throwRequestSuccess,
  throwRequestFail,

  addGameMessage,
} from '../actions/game';

export const gameIdSelector = state => state.game.gameId;
export const humanScoreSelector = state => state.game.humanScore;
export const computerScoreSelector = state => state.game.computerScore;

export function* requestNewGame(api) {
  try {
    const game = yield call(api.newGame);
    yield put(newGameRequestSuccess({ data: game }));
  } catch (e) {
    yield put(newGameRequestFail(e));
  }
}

export function* requestVerifyGame(api, action) {
  try {
    const game = yield call(api.verifyGame, action.gameId);
    yield put(verifyGameRequestSuccess({ data: game }));
  } catch (e) {
    yield put(verifyGameRequestFail(e));
  }
}

export function* redirectToGamePage() {
  const gameId = yield select(gameIdSelector);
  history.push(`game/${gameId}`);
}


export function* requestThrow(api, action) {
  const gameId = yield select(gameIdSelector);

  try {
    const resp = yield call(api.throw, gameId, action.userThrow);
    yield put(throwRequestSuccess({ data: resp }));
  } catch (e) {
    yield put(throwRequestFail(e));
  }
}

export function* addWelcomeMessage() {
  yield put(addGameMessage({
    message: 'Welcome human, prepare to be destroyed!!!',
    messageType: 'message',
    sender: 'computer',
  }));
}

export function* addThrowResponseToMessageList({ data }) {
  yield put(addGameMessage({
    message: stringToEmoji(data.computerThrow),
    messageType: 'throw',
    sender: 'computer',
  }));

  yield put(addGameMessage({
    message: stringToEmoji(data.humanThrow),
    messageType: 'throw',
    sender: 'human',
  }));

  const humanScore = yield select(humanScoreSelector);
  const computerScore = yield select(computerScoreSelector);

  yield put(addGameMessage({
    message: `Total score: ${computerScore} – ${humanScore}`,
    messageType: 'message',
    sender: 'computer',
  }));

  window.scrollTo(0, document.body.scrollHeight);
}

