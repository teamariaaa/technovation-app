import React from "react";
import Icon from "@expo/vector-icons/Octicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./ProfilePage";
import WeCareScreen from "./WeCare";
import { Dimensions, View } from "react-native";
import SelfCareScreen from "./SelfCare";

import styles from "../global.styles.js";
import MealsScreen from "./MealNavigator";
//import SelfCareScreen from "./SelfCare";

//https://reactnavigation.org/docs/tab-based-naviganpmtion
const Tab = createBottomTabNavigator();

const win = Dimensions.get("window");

const MainNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        height: "12%",
        paddingTop: 20,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      },
      tabBarActiveTintColor: "#246324",
      tabBarInactiveTintColor: "#8DB38D",
    }}
  >
    <Tab.Screen
      name="Meal"
      component={MealsScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Meals",
        tabBarIcon: ({ color }) => (
          <View
            style={[
              styles.navbavIconCircle,
              color == "#246324" && { backgroundColor: "#fff2bd" },
            ]}
          >
            <Icon name="calendar" color={color} size={26} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="SelfCare"
      component={SelfCareScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Self Care",
        tabBarIcon: ({ color }) => (
          <View
            style={[
              styles.navbavIconCircle,
              color == "#246324" && { backgroundColor: "#fff2bd" },
            ]}
          >
            <Icon name="accessibility" color={color} size={26} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="WeCare"
      component={WeCareScreen}
      options={{
        headerShown: false,
        tabBarLabel: "WeCare",
        tabBarIcon: ({ color }) => (
          <View
            style={[
              styles.navbavIconCircle,
              color == "#246324" && { backgroundColor: "#fff2bd" },
            ]}
          >
            <Icon name="heart" color={color} size={26} />
          </View>
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <View
            style={[
              styles.navbavIconCircle,
              color == "#246324" && { backgroundColor: "#fff2bd" },
            ]}
          >
            <Icon name="person" color={color} size={26} />
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainNavigator;
