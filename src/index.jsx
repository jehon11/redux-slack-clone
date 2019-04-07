// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import MessagesReducer from './reducers/messages_reducer';
import ChannelsReducer from './reducers/channels_reducer';
import CurrentUserReducer from './reducers/current_user_reducer';
import SelectedChannelReducer from './reducers/selected_channel_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

const initialMessages = [
  {
    id: "1",
    author: "anonymous92",
    content: "Hello world!",
    created_at: "2017-09-26T23:03:16.365Z"
  },
  {
    id: "2",
    author: "anonymous77",
    content: "My name is anonymous77",
    created_at: "2017-09-26T23:03:21.194Z"
  }
];

const initialState = {
  messages: initialMessages,
  channels: ['general', 'react', 'paris'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

// State and reducers
const reducers = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  currentUser: CurrentUserReducer,
  selectedChannel: SelectedChannelReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware, logger));

// Logger with default options
const store = createStore(
  reducers,
  initialState,
  middlewares
);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
