import React from 'react'
import AppNavigator from './config/router'
import { createAppContainer } from 'react-navigation'

const AppContainer = createAppContainer(AppNavigator);

export default () => {
  return <AppContainer theme="light"/>
}