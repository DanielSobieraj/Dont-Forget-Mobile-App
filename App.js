import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Button, Text, View} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'black'}}>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Settings')} title="Click" />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'black'}}>Details Screen</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Click" />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Details" component={DetailsScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
