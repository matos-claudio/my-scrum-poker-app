import React from 'react'
import { Provider } from 'react-redux'
import App from './app/index';
import storeConfig from './app/store/storeConfig'

console.disableYellowBox = true

const store = storeConfig();

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}