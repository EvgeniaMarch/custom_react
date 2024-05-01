import App from './App.js';
import { render, React } from './react.js';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead

const root = document.getElementById('app');
render(React.createElement(App), root);
