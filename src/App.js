import React from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './config/router'
import { createAppContainer } from 'react-navigation'
import Store from './redux'

const AppContainer = createAppContainer(AppNavigator);

export default () => {
  return (
    <Provider store={Store}>
      <AppContainer theme="light"/>
    </Provider>
  )
}