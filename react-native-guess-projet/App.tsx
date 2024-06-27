import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screen/Login';
import PartyComponent from './src/screen/PartyComponent';
import HomeScreen from './src/screen/Home';
import El from './src/screen/PlayGround';
import Multi from './src/screen/multiGround';

const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{headerShown:false}}
        />
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
          component={El}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="playgroundonline"
          component={Multi}
          options={{ headerShown: false}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

