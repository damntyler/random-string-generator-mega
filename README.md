# Random String Generator Mega

## Overview

This simple npm package provides a function to generate random strings of a specified length. It's designed to be easy to use and customizable.

## Installation

Install the package using npm:

```bash
npm install random-string-generator
```

## Usage

In your JavaScript/Node.js file, require the package and use the `generateRandomString` function:

```javascript
const generateRandomString = require('random-string-generator');

// Generate a random string of length 10 (default characters: alphanumeric)
const randomString = generateRandomString(10);
console.log('Random String:', randomString);

// Generate a random string of length 8 with custom characters
const customString = generateRandomString(8, 'abc123');
console.log('Custom String:', customString);
```

## API

### `generateRandomString(length, characters)`

Generates a random string of the specified length.

- `length` (number): The length of the random string.
- `characters` (string, optional): Custom characters to include in the random string (default: alphanumeric).

Returns the generated random string.

## Examples

```javascript
const generateRandomString = require('random-string-generator');

// Example 1: Generate a random string of length 12
const randomStr1 = generateRandomString(12);

// Example 2: Generate a random string of length 8 with custom characters
const randomStr2 = generateRandomString(8, 'abcd1234');
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
