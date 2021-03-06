# react-with-traverse
A HOC (Higher-Order Component) that allows you to traverse into the React component tree to do something on each of the deepest strings, such as highlight keywords, censor sensitive content and etc.
## Installation
```bash
# npm
npm install react-with-traverse

# yarn
yarn add react-with-traverse
```
## Usage
This module exposes a single function.
```javascript
// ES6+
import withTraverse from 'react-with-traverse';

// ES5
const withTraverse = require('react-with-traverse');
```
### withTraverse(transform : Function) : Component
#### transform(child : Any, props : Object) : Node

`child` : Each of the deepest strings in the component tree (probably `<String>`, unless you do something like `<div>{<Number>}</div>`)

`props` : The props for the result component

Use this function to transform `child` into anything you want by returning it.

Example:
```javascript
const convertToSmileEmoji = (child, props) => {
  const {large} = props;
  if (child === ':smile:') {
    const src = large ? 'smile_large.png' : 'smile.png';
    return <img src={src} alt="Smiley face"/>;
  }
  return child;
};
const Smile = withTraverse(convertToSmileEmoji);

<div>
  <Smile large>
    <span>Some text</span>
    :smile:
  </Smile>
</div>
```
Result :
```html
<div>
  <span>Some text</span>
  <img src="smile_large.png" alt="Smiley face"/>
</div>
```
## Test
(Test cases are also examples)
```bash
# npm
npm install
npm test

# yarn
yarn install
yarn test
