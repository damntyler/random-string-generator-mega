// random-string-generator-mega.js

/**
 * Generates a random string of the specified length.
 * @param {number} length - The length of the random string.
 * @param {string} [characters] - Custom characters to include in the random string (optional).
 * @returns {string} - The generated random string.
 */
function generateRandomString(length, characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
    let result = '';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
  
  module.exports = generateRandomString;
  