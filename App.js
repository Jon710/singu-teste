import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './src/screens/Start';
import Game from './src/screens/Game';
import Restart from './src/screens/Restart';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

export default App => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Restart" component={Restart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
