import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '@app/components/root';
import initAxios from '@config/axios';
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
      <App routes={routes} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
