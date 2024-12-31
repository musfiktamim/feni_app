import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import About from './Screens/About';
import { PaperProvider } from "react-native-paper"
import Doctor from './Screens/Doctor/Doctor';
import Hospital from './Screens/Hospital/Hospital';
import CreateDoctor from './Screens/Doctor/CreateDoctor';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tourism from './Screens/Tourism/Tourism';
import CreateTourism from './Screens/Tourism/CreateTourism';
import DetailesToursim from './Screens/Tourism/DetailesToursim';
import Blood from './Screens/Blood/Blood';
import CreateBlood from './Screens/Blood/CreateBlood';
import RentCar from './Screens/Rent_Car/RentCar';
import CreateRentCar from './Screens/Rent_Car/CreateRentCar';
import ToLetHome from './Screens/ToLet/ToLetHome';
import CreateToLet from './Screens/ToLet/CreateToLet';
import DetailesToLet from './Screens/ToLet/DetailesToLet';

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ animation: "fade" }} initialRouteName='Home' >
          <Stack.Screen name='Home' options={{ title: "ফেনী জেলা" }} component={Home} />
          <Stack.Screen name='About' component={About} />

          <Stack.Screen name='Doctor' component={Doctor} options={{ title: "ডক্টর" }} />
          <Stack.Screen name='Create Doctor' component={CreateDoctor} options={{ title: "ডক্টর পোষ্ট তৈরী করুন" }} />

          <Stack.Screen name='Tourism' component={Tourism} options={{ title: "পর্যটন" }} />
          <Stack.Screen name='Create Tourism' component={CreateTourism} options={{ title: "পর্যটন পোষ্ট তৈরী করুন" }} />
          <Stack.Screen name='Tourism Detailes' component={DetailesToursim} options={{ title: "স্থানের বিস্তারিত" }} />

          <Stack.Screen name='Hospital' component={Hospital} options={{ title: "হসপিতাল" }} />

          <Stack.Screen name='Blood' component={Blood} options={{ title: "রক্ত" }} />
          <Stack.Screen name='Create Blood' component={CreateBlood} options={{ title: "রক্ত দান করার জন্য পোষ্ট করুন" }} />

          <Stack.Screen name='Rent Car' component={RentCar} options={{ title: "কার ভাড়া করুন" }} />
          <Stack.Screen name='Create Rent Car' component={CreateRentCar} options={{ title: "তৈরী করুন" }} />

          <Stack.Screen name='To Let' component={ToLetHome} options={{ title: "বাসা ভাড়া" }} />
          <Stack.Screen name='Create To Let' component={CreateToLet} options={{ title: "তৈরি করুন" }} />
          <Stack.Screen name='To Let Detailes' component={DetailesToLet} options={{ title: "বাড়ির বিস্তারিত" }} />

          <Stack.Screen name='Bus Schedule' component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider >
  );
}
