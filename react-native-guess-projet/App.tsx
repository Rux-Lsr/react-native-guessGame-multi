import React from 'react';
import Startup from './Startup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './SignUp';
import Login from './Login';
import CreateParty from './CreateParty';
import PartyComponent from './PartyComponent';
import PlayGround from './PlayGround';

const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="startup"
          component={Startup}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
        />
        <Stack.Screen
          name="login"
          component={Login}
        />
        <Stack.Screen
          name="createparty"
          component={CreateParty}
        />
        <Stack.Screen
          name="party"
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

