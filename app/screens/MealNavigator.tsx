import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsTrackingScreen from "./MealTrackingScreen";
import DiaryScreen from "./Diary";
import SearchPageScreen from "./SearchPage";
import FoodItemCard from "./FoodCard";
import MealDetailsScreen from "./FoodPage";

//https://reactnavigation.org/docs/hello-react-navigation
const ItemStack = createNativeStackNavigator();

const MealsScreen = () => {
    return <ItemStack.Navigator>
        <ItemStack.Screen name="MealTracking" component={MealsTrackingScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="Diary" component={DiaryScreen} options={{ headerShown: false }}/>
        <ItemStack.Screen name="SearchPage" component= {SearchPageScreen} options={{ headerShown: false }}/>
        <ItemStack.Screen name="FoodPage" component={MealDetailsScreen} options={{ headerShown: false }}/>
        <ItemStack.Screen name="FoodItemCard" component= {FoodItemCard} options={{ headerShown: false }}/>
    </ItemStack.Navigator>
}

export default MealsScreen;