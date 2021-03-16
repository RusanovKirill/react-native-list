import React from 'react';

// Router
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen
import UsersListScreen from './src/screen/list';
import UserProfileScreen from './src/screen/user';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={UsersListScreen} />
        <Stack.Screen
          name="Profile"
          component={UserProfileScreen}
          options={({ route }) => ({ title: route.params.id })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
