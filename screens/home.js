// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Linking } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';


import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FifthPage from './pages/FifthPage';
import SixthPage from './pages/SixthPage';

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';

const Stack = createStackNavigator();


const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#6BCEF5', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
   return (
    <Stack.Navigator initialRouteName="SecondPage">
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Watch Videos', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#6BCEF5', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function thirdScreenStack({ navigation }) {
 return (
    <Stack.Navigator initialRouteName="ThirdPage">
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'First Aid', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#6BCEF5', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function fourthScreenStack({ navigation }) {
 return (
    <Stack.Navigator initialRouteName="FourthPage">
      <Stack.Screen
        name="FourthPage"
        component={FourthPage}
        options={{
          title: 'Settings', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#6BCEF5', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function fifthScreenStack({ navigation }) {
 return (
    <Stack.Navigator initialRouteName="FifthPage">
      <Stack.Screen
        name="FifthPage"
        component={FifthPage}
        options={{
          title: 'Emergency Response', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#6BCEF5', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
function sixthScreenStack({ navigation }) {
 return (
    <Stack.Navigator initialRouteName="SixthPage">
      <Stack.Screen
        name="SixthPage"
        component={SixthPage}
        options={{
          title: 'Emergency Hotlines', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#6BCEF5', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


function App() {
  return (
    <NavigationContainer>
    
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#6BCEF5',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'Home' }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Watch Videos' }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="ThirdPage"
          options={{ drawerLabel: 'Learn About First Aid' }}
          component={thirdScreenStack}
        />
         <Drawer.Screen
          name="FourthPage"
          options={{ drawerLabel: 'Settings' }}
          component={fourthScreenStack}
        />
         <Drawer.Screen
          name="FifthPage"
          options={{ drawerLabel: 'Emergency Response' }}
          component={fifthScreenStack}
        />
         <Drawer.Screen
          name="SixthPage"
          options={{ drawerLabel: 'Emergency Hotlines' }}
          component={sixthScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
v