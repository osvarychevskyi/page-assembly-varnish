import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

console.log('hello');
ReactDOM.hydrate(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
