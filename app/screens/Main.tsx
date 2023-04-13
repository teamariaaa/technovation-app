import React from "react";
import Icon from "@expo/vector-icons/Octicons";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Home";
import ItemScreen from "./Items";
import ProfileScreen from "./ProfilePage";
import WeCareScreen from "./WeCare";
import { StyleSheet, Dimensions, View } from "react-native";
import SelfCareScreen from "./SelfCare";

import styles from "../global.styles.js";
import ResourcesScreen from "./Resources";
import MealsScreen from "./MealNavigator";
import MealsTrackingScreen from "./MealNavigator";
import DiaryScreen from "./Diary";
import { NavigationContainer } from "@react-navigation/native";
//import SelfCareScreen from "./SelfCare";

//https://reactnavigation.org/docs/tab-based-naviganpmtion
const Tab = createBottomTabNavigator();

const win = Dimensions.get("window");

const MainNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        height: 90,
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

      /*tabBarItemStyle: {
        height: 60,
        borderRadius: 30,
        padding: 0,
        marginLeft: (win.width / 4 - 60) / 2,
        marginRight: (win.width / 4 - 60) / 2,
        paddingBottom: 12,
        paddingTop: 8,
        marginBottom: 10,
      },*/

      tabBarActiveTintColor: "#246324",
      tabBarInactiveTintColor: "#8DB38D",
      //tabBarActiveBackgroundColor: "#8DB38D",
    }}
  >
    <Tab.Screen
      name="Meal"
      component={MealsScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Meals",
        //tabBarColor: "#8DB38D",
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
        tabBarLabel: "Self-care",
        //tabBarColor: "#8DB38D",
        tabBarIcon: ({ color }) => (
          <View
            style={[
              styles.navbavIconCircle,
              color == "#246324" && { backgroundColor: "#fff2bd" },
            ]}
          >
            <Ionicons name="leaf-outline" color={color} size={26} />
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
        //tabBarColor: "#8DB38D",
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
      name="Mda"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Profil",
        //tabBarColor: "#8DB38D",
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

    {/* <Tab.Screen
      name="Self-care"
      component={SelfCareScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Self-care",
        tabBarIcon: ({ color }) => (
          <Ionicons name="leaf-outline" color={color} size={26} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default MainNavigator;
