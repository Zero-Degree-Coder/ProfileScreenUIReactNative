import * as React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './src/screens/ProfileScreen';
import { lighTheme } from './src/theme/lightTheme';
import { darkTheme } from './src/theme/darkTheme';
import SettingScreen from './src/screens/SettingScreen';



const Stack = createNativeStackNavigator();

function App() {
  const scheme = useColorScheme();
  console.log("scheme", scheme)

  // you have to sync it up with systemet heme

  // make the toggle theme 
  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lighTheme}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="PROFILE_SCREEN" component={ProfileScreen} />
        <Stack.Screen name="SETTING_SCREEN" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;