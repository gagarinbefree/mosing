import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/Index';
import * as serviceWorker from './serviceWorker';

const configureStore = (initialState: any) => createStore(rootReducer, initialState, applyMiddleware(thunk));

export const store = configureStore(undefined);

ReactDOM.render(
    <Provider store={store}>
        <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();