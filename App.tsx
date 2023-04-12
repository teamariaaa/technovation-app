import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import LoginScreen from "./app/screens/Login";
import MainNavigator from "./app/screens/Main";

import { LogBox } from "react-native";
import GetStarted from "./app/screens/GetStarted";
import SignUpScreen from "./app/screens/SignUp";
import UserDataScreen from "./app/screens/GetUserPersonalData";
import QuizzScreen from "./app/screens/Quizz";
import GetToQuizzScreen from "./app/screens/GoToQuizz";

import { useFonts } from "expo-font";

LogBox.ignoreLogs([
  /^AsyncStorage has been extracted from react-native/,
  /^Setting a timer for a long period of time/,
]);

//https://reactnavigation.org/docs/hello-react-navigation
const Stack = createNativeStackNavigator();

//https://callstack.github.io/react-native-paper/getting-started.html
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#246324",
    accent: "#fff2bd",
  },
};

function App() {
  const [loaded] = useFonts({
    Rubik: require("./assets/fonts/Rubik-Regular.ttf"),
    Cabin: require("./assets/fonts/Cabin-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={GetStarted}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="GetUserPersonalData"
            component={UserDataScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Quizz"
            component={QuizzScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="GoToQuizz"
            component={GetToQuizzScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
