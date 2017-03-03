import { ADD_MESSAGE, DELETE_MESSAGE } from '../constants';

const inititalState = {
  messages: [],
};


function createMessage(msg, status) {
  return {
    status,
    message: msg,
  };
}

export default function message(state = inititalState, action) {
  switch (action.type) {
    case ADD_MESSAGE: {
      const messages = [...state.messages, createMessage(action.message, action.status)];
      return {
        ...state,
        messages,
      };
    }

    case DELETE_MESSAGE: {
      const messages = [
        ...state.messages.slice(0, action.index - 1),
        ...state.messages.slice(action.index),
      ];
      return {
        ...state,
        messages,
      };
    }

    default:
      return state;
  }
}

