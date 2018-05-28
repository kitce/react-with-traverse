# react-with-traverse
A HoC (Higher-Order Component) that allows you to traverse into the React components tree to do something on each node, such as highlight keywords, censor sensitive content and etc.

## Example
[Live demo](https://runkit.com/kitce/react-with-traverse-demo)
More detailed examples can be found in `tests/`
## Installation
```bash
# npm
npm install react-with-traverse

# yarn
yarn add react-with-traverse
```
## Usage
```javascript
// ES6+
import withTraverse from 'react-with-traverse';

// ES5
const withTraverse = require('react-with-traverse');
```
## Test
```bash
# npm
npm install
npm test

# yarn
yarn install
yarn test
