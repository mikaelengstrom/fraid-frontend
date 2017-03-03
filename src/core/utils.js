/* eslint-disable import/prefer-default-export */

export function stringToEmoji(str) {
  switch (str) {
    case 'rock':
      return '✊';
    case 'paper':
      return '✋';
    case 'scissors':
      return '✌';
    default:
      throw new Error(`Unknown string: ${str}`);
  }
}
