import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsTrackingScreen from "./MealTrackingScreen";
import DiaryScreen from "./Diary";
import PulaScreen from "./MealTrackingScreen";

//https://reactnavigation.org/docs/hello-react-navigation
const ItemStack = createNativeStackNavigator();

const MealsScreen = () => {
    return <ItemStack.Navigator>
        <ItemStack.Screen name="MealTracking" component={MealsTrackingScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="Diary" component={DiaryScreen} options={{ headerShown: false }}/>
    </ItemStack.Navigator>
}

export default MealsScreen;