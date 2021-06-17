import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/GlobalStyles";
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { theme } from "./assets/styles/theme";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
