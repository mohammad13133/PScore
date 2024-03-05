import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Screens/Welcome";
import PageTest from "./Screens/PageTest";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen name="PageTest" component={PageTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
