import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from '@app/components/root';
import initAxios from '@config/axios';
import theme from '@style/theme';
import GlobalStyle from '@style';
import routes from '@routes';
import createStore from '@store';
import rootSaga from '@sagas';

initAxios({ baseUrl: 'https://api.carbonintensity.org.uk' });

const initialState = {
  carbonIntensity: {},
};
const store = createStore(initialState);
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App routes={routes} />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
