import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import createRootReducer from './reducers'

import RootStack from './routes'

const store = createStore(createRootReducer(), applyMiddleware(thunk))

const MainApp = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  )
}

export default MainApp
