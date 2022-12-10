import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Intro from './screens/Intro';
import Login from './screens/Login';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        
        <Stack.Screen
        name="Intro" 
        component={Intro} 
        options={{
          headerShown:false
        }}/>
         <Stack.Screen
        name="SignUp" 
        component={SignUp} 
        options={{
          headerShown:false
        }}/>
         <Stack.Screen
        name="Login" 
        component={Login} 
        options={{
          headerShown:false
        }}/>
      </Stack.Navigator>
  </NavigationContainer>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
