/* eslint-disable import/prefer-default-export */

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

  ADD_GAME_MESSAGE,
} from '../constants';


// New game requests //

export function newGameRequest() {
  return {
    type: NEW_GAME_REQUEST,
  };
}

export function newGameRequestSuccess({ data }) {
  return {
    type: NEW_GAME_REQUEST_SUCCESS,
    data,
  };
}

export function newGameRequestFail({ error }) {
  return {
    type: NEW_GAME_REQUEST_FAIL,
    error,
  };
}

// Verify game requests //

export function verifyGameRequest({ gameId }) {
  return {
    type: VERIFY_GAME_REQUEST,
    gameId,
  };
}

export function verifyGameRequestSuccess({ data }) {
  return {
    type: VERIFY_GAME_REQUEST_SUCCESS,
    data,
  };
}

export function verifyGameRequestFail({ error }) {
  return {
    type: VERIFY_GAME_REQUEST_FAIL,
    error,
  };
}

// Throw requests //

export function throwRequest({ userThrow }) {
  return {
    type: THROW_REQUEST,
    userThrow,
  };
}

export function throwRequestSuccess({ data }) {
  return {
    type: THROW_REQUEST_SUCCESS,
    data,
  };
}

export function throwRequestFail({ error }) {
  return {
    type: THROW_REQUEST_FAIL,
    error,
  };
}


// Gameplay //

export function addGameMessage({ message, messageType, sender }) {
  return {
    type: ADD_GAME_MESSAGE,
    message,
    messageType,
    sender,
  };
}
