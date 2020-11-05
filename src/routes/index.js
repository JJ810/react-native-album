import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../screens/MainScreen'
import AlbumScreen from '../screens/AlbumScreen'
import PictureScreen from '../screens/PictureScreen'

const RootStack = createStackNavigator()

export const ROUTES = {
  MainScreen: 'MainScreen',
  AlbumScreen: 'AlbumScreen',
  PictureScreen: 'PictureScreen',
}

const RootStackScreen = () => {
  return (
    <RootStack.Navigator initialRouteName={ROUTES.MainScreen}>
      <RootStack.Screen
        name={ROUTES.MainScreen}
        component={MainScreen}
        options={{
          title: 'Albums',
          headerStyle: {
            backgroundColor: '#e76f51',
          },
          headerBackTitleVisible: false,
          animationEnabled: true,
        }}
      />
      <RootStack.Screen
        name={ROUTES.AlbumScreen}
        component={AlbumScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#e76f51',
          },
          headerBackTitleVisible: false,
          animationEnabled: true,
        })}
      />
      <RootStack.Screen
        name={ROUTES.PictureScreen}
        component={PictureScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#e76f51',
          },
          headerBackTitleVisible: false,
          animationEnabled: true,
        })}
      />
    </RootStack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}
