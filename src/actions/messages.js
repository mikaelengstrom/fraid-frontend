import {
  DELETE_MESSAGE,
  ADD_MESSAGE,
} from '../constants';


export function addMessage({ message, status }) {
  return {
    type: ADD_MESSAGE,
    message,
    status,
  };
}

export function deleteMessage({ index }) {
  return {
    type: DELETE_MESSAGE,
    index,
  };
}
