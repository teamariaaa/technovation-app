import React from "react";
import Icon from "@expo/vector-icons/Octicons";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home";
import ItemScreen from "./Items";
import ProfileScreen from "./ProfilePage";
import WeCareScreen from "./WeCare";
import { StyleSheet, Dimensions, View } from "react-native";
import SelfCareDescription from "./SelfCare";



import styles from "../global.styles.js";
import ResourcesScreen from "./Resources";

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
      name="Home"
      component={HomeScreen}
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
      name="MealTreacker"
      component={ResourcesScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Self Care",
        //tabBarColor: "#8DB38D",
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
        tabBarLabel: "We Care",
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

    <Tab.Screen
      name="Self-care"
      component={SelfCareDescription}
      options={{
        headerShown: false,
        tabBarLabel: 'Self-care',
        tabBarIcon: ({ color }) => (
          <Ionicons name="leaf-outline" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainNavigator;
