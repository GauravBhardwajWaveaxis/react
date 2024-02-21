import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const MyApp = () => {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
    <MyApp />
  </React.StrictMode>
);
