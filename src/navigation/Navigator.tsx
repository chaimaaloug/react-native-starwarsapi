import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/LoginScreen'
import { LaunchScreen } from '../screens/LaunchScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Routes } from './Routes'
import { TermsScreen } from '../screens/TermsScreen'
import { StarshipFeedScreen } from '../screens/StarshipFeedScreen'

type Props = {}

const Stack = createNativeStackNavigator();

export const Navigator = (props: Props) => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={Routes.LAUNCH_SCREEN} component={LaunchScreen} />
            <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
            <Stack.Screen name={Routes.STARSHIP_FEED_SCREEN} component={StarshipFeedScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}