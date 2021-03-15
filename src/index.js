import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ErrorBoundry from './common/genericComponents/ErrorBoundry';
import BookstoreApi from './api/bookstoreApi';
import { BookstoreApiProvider } from './api/bookstoreApiContext';
import './index.css';
import App from './app/App';

const bookstoreApi = new BookstoreApi();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreApiProvider value={bookstoreApi}>
          <Router>
            <App />
          </Router>
        </BookstoreApiProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
