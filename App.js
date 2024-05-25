import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GradesScreen from './screens/GradesScreen';
import NavBar from './navigation/NavBar';
import Grades from './screens/GradesScreen';
import Tests from './screens/TestsScreen';
import TimeTable from './screens/TimeTableScreen';
import SettingsScreen from './screens/SettingsScreen';
const Tab = createBottomTabNavigator();



function TabNavigator() {
  return (
    <Tab.Navigator 
     screenOptions={{ headerShown: false }}>
      <Tab.Screen name="TimeTable" component={TimeTable} 
       options={{ tabBarStyle: { display: "none" },}}/>
      <Tab.Screen name="Grades" component={Grades} 
      options={{ tabBarStyle: { display: "none" },}}/>
      <Tab.Screen name="Tests" component={Tests} 
       options={{ tabBarStyle: { display: "none" },}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} 
       options={{ tabBarStyle: { display: "none" },}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>

      <NavigationContainer>
        {/*wenn der TabNavigator enttfernt wird, dann sieht man das SettingsSymbol*/}
        <TabNavigator />
      </NavigationContainer>
    </>
  );
}
