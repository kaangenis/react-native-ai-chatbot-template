//Imports
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-reanimated'
import 'react-native-gesture-handler'

//Routes
import Home from './src/Routes/Home/Home'
import Onboarding from './src/Routes/Onboarding/Onboarding';

//Redux
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { Text, TouchableOpacity, View } from 'react-native';
import CustomDrawerContent from './src/Configs/CustomDrawerContent';
import Premium from './src/Routes/Premium/Premium';
import LoadingPage from './src/Routes/Home/components/LoadingPage';

//Creating Stack Navigator
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={
        {
          headerShown: false,
          drawerActiveBackgroundColor: '#0E0E0E',
          drawerStyle: {
            flex: 1,
            backgroundColor: '#0E0E0E',
          }
        }
      }>
      <Drawer.Screen name="Homepage" component={Home} />
    </Drawer.Navigator>
  )
};


//Talk is cheap, show me the code!
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Onboarding">
          <Stack.Screen name="Home" component={DrawerNavigator} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Premium" component={Premium} />
          <Stack.Screen name="LoadingPage" component={LoadingPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}