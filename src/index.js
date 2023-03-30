import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {UserProvider} from './twitter/getusers/GeetUsers';
import { TweetProvider } from './twitter/AddTweet';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <TweetProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </TweetProvider>
    </UserProvider>
  </React.StrictMode>
);
