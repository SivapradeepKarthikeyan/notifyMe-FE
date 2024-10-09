import React from 'react';
import Toast from 'react-native-toast-message';
import { StyleSheet } from 'react-native';
import Login from './authScreens/login';
import MainScreen from './screens/MainScreen';
import MoviesScreen from './screens/MoviesScreen';
import MovieDetail from './screens/MovieDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="Movies" component={MoviesScreen} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
        </Stack.Navigator>
      </NavigationContainer>

      <Toast />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
