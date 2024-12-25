import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import About from './Screens/About';
import { PaperProvider } from "react-native-paper"
import Doctor from './Screens/Doctor/Doctor';
import Hospital from './Screens/Hospital';
import CreateDoctor from './Screens/Doctor/CreateDoctor';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name='Home' options={{ title: "Feni" }} component={Home} />
          <Stack.Screen name='About' component={About} />
          <Stack.Screen name='Doctor' component={Doctor} />
          <Stack.Screen name='Create Doctor' component={CreateDoctor} />

          <Stack.Screen name='Hospital' component={Hospital} />
          <Stack.Screen name='Bus Schedule' component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}
