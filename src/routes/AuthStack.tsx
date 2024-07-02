import React, {FC} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CompetitionSelection from '../screens/CompetitionSelection';

const Stack = createStackNavigator();
const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CompetitionSelection"
        component={CompetitionSelection}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
