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

const initialState = {
  newGameFetching: false,
  newGameSuccess: false,
  newGameFail: false,

  throwFetching: false,
  throwSuccess: false,
  throwFail: false,

  gameId: null,
  gameMessages: [],

  computerScore: 0,
  humanScore: 0,
};

function createGameMessage(message, messageType, sender) {
  return {
    message,
    messageType,
    sender,
  };
}

export default function game(state = initialState, action) {
  let gameMessages;

  switch (action.type) {
    case NEW_GAME_REQUEST:
      return {
        ...state,
        newGameFetching: true,
        newGameSuccess: false,
        newGameFail: false,
      };

    case NEW_GAME_REQUEST_SUCCESS:
      return {
        ...state,
        newGameFetching: false,
        newGameSuccess: action.data,
        newGameFail: false,
        gameId: action.data.id,
      };

    case NEW_GAME_REQUEST_FAIL:
      return {
        ...state,
        newGameFetching: false,
        newGameSuccess: false,
        newGameFail: action.error,
      };

    case VERIFY_GAME_REQUEST:
      return {
        ...state,
        verifyGameFetching: true,
        verifyGameSuccess: false,
        verifyGameFail: false,
      };

    case VERIFY_GAME_REQUEST_SUCCESS:
      return {
        ...state,
        verifyGameFetching: false,
        verifyGameSuccess: action.data,
        verifyGameFail: false,
        gameId: action.data.id,
      };

    case VERIFY_GAME_REQUEST_FAIL:
      return {
        ...state,
        verifyGameFetching: false,
        verifyGameSuccess: false,
        verifyGameFail: action.error,
      };

    case THROW_REQUEST:
      return {
        ...state,
        throwFetching: true,
        throwSuccess: false,
        throwFail: false,
      };

    case THROW_REQUEST_SUCCESS: {
      let humanScore = state.humanScore;
      let computerScore = state.computerScore;

      switch (action.data.gameStatus) {
        case 'win':
          humanScore += 1;
          break;
        case 'lose':
          computerScore += 1;
          break;
        case 'tie':
          break;
        default:
          throw new Error(`Unknown game status: ${action.data.gameStatus}`);
      }

      return {
        ...state,
        throwFetching: false,
        throwSuccess: action.data,
        throwFail: false,
        computerScore,
        humanScore,
      };
    }
    case THROW_REQUEST_FAIL:
      return {
        ...state,
        throwFetching: false,
        throwSuccess: false,
        throwFail: action.error,
      };

    case ADD_GAME_MESSAGE:
      gameMessages = [
        ...state.gameMessages,
        createGameMessage(action.message, action.messageType, action.sender),
      ];
      return {
        ...state,
        gameMessages,
      };

    default:
      return state;
  }
}

