import { React } from './react.js';
console.log('React', React);

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'form',
      null,
      React.createElement('input', {
        placeholder: 'name',
      }),
      React.createElement('input', {
        placeholder: 'surname',
      }),
      React.createElement('button', { type: 'submit' }, 'submit'),
    ),
    React.createElement(
      'div',
      null,
      'Hi! ',
      React.createElement('span', null, 'Text'),
    ),
  );
}

export default App;
