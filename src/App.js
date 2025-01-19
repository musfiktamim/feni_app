
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import About from './Screens/About';
import { IconButton, PaperProvider } from "react-native-paper"
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
import JobHomePage from './Screens/Job/JobHomePage';
import CreateJob from './Screens/Job/CreateJob';
import WorkerHome from './Screens/Worker/WorkerHome';
import WorkerDetailes from './Screens/Worker/WorkerDetailes';
import CreateWorker from './Screens/Worker/CreateWorker';
import MyAllDocuMents from './Screens/MyAllDocuMents';
import NewsHome from './Screens/News/NewsHome';
import NewsDetailes from './Screens/News/NewsDetailes';
import CreateNews from './Screens/News/CreateNews';
import UserHome from './Screens/User/UserHome';
import User_Reg_Log from './Screens/User/User_Reg_Log';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import DetailesDoctor from './Screens/Doctor/DetailesDoctor';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Stack = createNativeStackNavigator()

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient} >

    <PaperProvider>
      <NavigationContainer  >
        <Stack.Navigator screenOptions={{ animation: "ios_from_right"}} initialRouteName='Home' >
          <Stack.Screen name='Home' options={{ title: "ফেনী জেলা" }} component={Home} />
          <Stack.Screen name='Notification' component={About} />
          <Stack.Screen name='Activity' component={MyAllDocuMents} />
          <Stack.Screen name='User' component={UserHome} options={({ navigation }) => ({
            title: "user", headerRight: async () => (
              <IconButton icon={"door-open"} onPress={() => {
                Alert.alert("are you want", "are you want to logout this account", [{
                  text: "OK!", onPress: () => {
                    AsyncStorage.removeItem("token")
                    navigation.popTo("User-RegLog")
                  }
                }, { text: "cencel", onPress: () => { } }, { text: "clear", onPress: () => { } }])
              }} />
            )
          })} />
          <Stack.Screen name='User-RegLog' component={User_Reg_Log} />

          <Stack.Screen name='Doctor' component={Doctor} options={({ navigation }) => ({
            title: "ডক্টর", headerRight: () => (
              <IconButton icon={'folder-plus'} onPress={() => navigation.navigate("Create Doctor")} />
            )
          })} />
          <Stack.Screen name='Doctor Detailes' component={DetailesDoctor} options={{ title: "doctor detailes", }} />
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

          <Stack.Screen name='Job' component={JobHomePage} options={{ title: "বাড়ির বিস্তারিত" }} />
          <Stack.Screen name='Create Job' component={CreateJob} options={{ title: "বাড়ির বিস্তারিত" }} />

          <Stack.Screen name='Worker' component={WorkerHome} options={{ title: "শ্রমিক" }} />
          <Stack.Screen name='Worker Detailes' component={WorkerDetailes} options={{ title: "শ্রমিক বিস্তারিত" }} />
          <Stack.Screen name='Create Worker' component={CreateWorker} options={{ title: "শ্রমিক যোগ" }} />

          <Stack.Screen name='News' component={NewsHome} options={{ title: "খবর" }} />
          <Stack.Screen name='News Detailes' component={NewsDetailes} options={{ title: "খবর বিস্তারিত" }} />
          <Stack.Screen name='Create News' component={CreateNews} options={{ title: "খবর তৈরী করুন" }} />

          <Stack.Screen name='Bus Schedule' component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider >
    </QueryClientProvider>
  );
}
