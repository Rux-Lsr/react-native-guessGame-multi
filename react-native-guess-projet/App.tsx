import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import PartyComponent from './PartyComponent';
import PlayGround from './PlayGround';

const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        
        <Stack.Screen
          name="login"
          component={Login}
        />
        <Stack.Screen
          name="join a party"
          component={PartyComponent}
        />
        <Stack.Screen
          name="playground"
          component={PlayGround}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

