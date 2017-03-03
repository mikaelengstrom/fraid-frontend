import { takeLatest } from 'redux-saga/effects';

import {
  NEW_GAME_REQUEST,
  NEW_GAME_REQUEST_SUCCESS,
  NEW_GAME_REQUEST_FAIL,

  VERIFY_GAME_REQUEST,
  VERIFY_GAME_REQUEST_SUCCESS,
  VERIFY_GAME_REQUEST_FAIL,

  THROW_REQUEST,
  THROW_REQUEST_SUCCESS,
  THROW_REQUEST_FAIL,
} from '../constants';

import {
  requestNewGame,
  requestVerifyGame,
  requestThrow,

  redirectToGamePage,

  addWelcomeMessage,
  addThrowResponseToMessageList,
} from './game';

import {
  errorBackendDown,
} from './messages';

import Api from '../services/api';


const api = new Api('http://docker-machine.dev:8000/api/v1/');

function* rootSaga() {
  yield [
    // Api
    takeLatest(NEW_GAME_REQUEST, requestNewGame, api),
    takeLatest(VERIFY_GAME_REQUEST, requestVerifyGame, api),
    takeLatest(THROW_REQUEST, requestThrow, api),

    // Navigation
    takeLatest(NEW_GAME_REQUEST_SUCCESS, redirectToGamePage),

    // Gameplay
    takeLatest(NEW_GAME_REQUEST_SUCCESS, addWelcomeMessage),
    takeLatest(VERIFY_GAME_REQUEST_SUCCESS, addWelcomeMessage),

    takeLatest(THROW_REQUEST_SUCCESS, addThrowResponseToMessageList),

    // Message handeling
    takeLatest(THROW_REQUEST_FAIL, errorBackendDown),
    takeLatest(NEW_GAME_REQUEST_FAIL, errorBackendDown),
    takeLatest(VERIFY_GAME_REQUEST_FAIL, errorBackendDown),
  ];
}

export default rootSaga;
