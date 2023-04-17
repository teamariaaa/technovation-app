import React, { useEffect, useReducer, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  _View,
  Dimensions,
  _ScrollView,
  View,
  Pressable,
  StyleSheet,
} from "react-native";
import {
  Card,
  Paragraph,
  Avatar,
  Title,
  Button,
  Appbar,
  DataTable,
  Divider,
  IconButton,
  MD3Colors,
  Surface,
} from "react-native-paper";
import globalstyles from "../global.styles.js";
import { ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../../config/firebase.js";
import CircularProgress from "react-native-circular-progress-indicator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FoodItem } from "./FoodCard";

/*Culori #DAF7DC
         #ABC8C0
         #C7EFCF
         #B7CECE*/

// const breakfastItems = [
//   {
//     id: 1,
//     name: "Omelet",
//     photo: "../../assets/profilePicture.jpeg",
//     calories: 183,
//     protein: 12,
//     fat: 14,
//     carbs: 4.6,
//   },
// ];

// const lunchItems = [
//   {
//     id: 1,
//     name: "Omelet",
//     photo: "../../assets/profilePicture.jpeg",
//     calories: 183,
//     protein: 12,
//     fat: 14,
//     carbs: 4.6,
//   },
// ];

// const dinnerItems = [
//   {
//     id: 1,
//     name: "Omelet",
//     photo: "../../assets/profilePicture.jpeg",
//     calories: 183,
//     protein: 12,
//     fat: 14,
//     carbs: 4.6,
//   },
// ];

// const drinksItems = [
//   {
//     id: 1,
//     name: "Omelet",
//     photo: "../../assets/profilePicture.jpeg",
//     calories: 183,
//     protein: 12,
//     fat: 14,
//     carbs: 4.6,
//   },
// ];

// const dessertItems = [
//   {
//     id: 1,
//     name: "Omelet",
//     photo: "../../assets/profilePicture.jpeg",
//     calories: 183,
//     protein: 12,
//     fat: 14,
//     carbs: 4.6,
//   },
// ];

// const snacksItems = [
//   {
//     id: 1,
//     name: "Omelet",
//     photo: "../../assets/profilePicture.jpeg",
//     calories: 183,
//     protein: 12,
//     fat: 14,
//     carbs: 4.6,
//   },
// ];

const MealTrackingScreen = ({ navigation }: any) => {
  const win = Dimensions.get("window");

  const [todayItems, setTodayItems] = useState<FoodItem[]>([]);

  const getTodayMeals = async () => {
    const storedMeals = await AsyncStorage.getItem("@myfood");
    return  storedMeals ? JSON.parse(storedMeals) : [];
    // setTodayItems(foodList.filter((d) => new Date(d.date).toDateString() === day.toDateString())); 
  };
  
  const [todayCal, setTodayCal] = useState<number>(0);
  const [todayCarbs, setTodayCarbs] = useState<number>(0);
  const [todayProtein, setTodayProtein] = useState<number>(0);
  const [todayFat, setTodayFat] = useState<number>(0);

  useEffect(() => {
    getTodayMeals().then((foodList) => {
      setTodayItems(foodList.filter((d : FoodItem) => new Date(d.date).toDateString() === new Date().toDateString()));
      const stats = todayItems.reduce((acc : any, food : FoodItem) => {
        acc.calories += food.calories;
        acc.carbs += food.carbs;
        acc.protein += food.protein;
        acc.fat += food.fat;
        return acc;
      }, {calories: 0, carbs: 0, protein: 0, fat: 0});
      
      setTodayCal(stats.calories);
      setTodayCarbs(stats.carbs);
      setTodayProtein(stats.protein);
      setTodayFat(stats.fat);
    });
}, []);

  const progress = <Paragraph style={globalstyles.textBold}>388</Paragraph>;
  const auth = getAuth();
  const user = auth.currentUser;

  let fullName = user?.displayName;
  let age;
  let gender;
  let weight;
  let height;

  let name;
  name = fullName?.split("$");
  fullName = name ? name[0] + " " + name[1] : "";
  age = name ? name[2] : "";
  gender = name ? name[3] : "";
  weight = name ? name[4] : "";
  height = name ? name[5] : "";

  return (
    <ScrollView style={{ backgroundColor: "#FFFCEF" }}>
      <View style={{ flex: 1, backgroundColor: "#FFFCEF", marginLeft: 0 }}>
        <View
          style={{
            marginTop: 45,
            marginBottom: 30,
          }}
        >
          <Appbar.Header
            mode="small"
            style={{
              flex: 1,
              backgroundColor: "#FFFCEF",
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Avatar.Image
              size={60}
              source={require("../../assets/profilePicture.jpeg")}
            />
            <Button
              mode="contained-tonal"
              style={[
                { backgroundColor: "#EEF5DB", marginLeft: win.width - 170 }, //"#e4ede4"
              ]}
              onPress={() => navigation.navigate("Diary")}
            >
              Diary
            </Button>
          </Appbar.Header>
        </View>
        <Paragraph style={[globalstyles.titleLarge, { bottom: 13, left: 15 }]}>
          Hello, {name ? name[1] : ""}!
        </Paragraph>
        <Card style={globalstyles.idkContainer}>
          <Card.Title
            title="Today"
            titleStyle={[
              globalstyles.headlineSmall,
              { textAlign: "center", color: "#9db97d" },
            ]}
          ></Card.Title>
          <View style={{ alignSelf: "center", marginTop: 10 }}>
            <CircularProgress
              value={388}
              //initialValue={1400}
              //<MaterialCommunityIcons name = "fire" />
              radius={110}
              duration={1}
              activeStrokeColor="#9db97d"
              inActiveStrokeColor="#B6CB9E"
              inActiveStrokeOpacity={0.5}
              progressValueColor={"#3C403D"}
              progressValueStyle={{ fontSize: 40 }}
              inActiveStrokeWidth={18}
              activeStrokeWidth={16}
              maxValue={1400}
              title={"Kcal"}
              titleStyle={{
                color: "#808080",
                fontFamily: "Cabin",
                fontSize: 20,
              }}
              subtitle=" Your daily goals"
              subtitleStyle={{
                color: "#808080",
                fontFamily: "Cabin",
                fontSize: 17,
              }}
              titleColor={"#3C403D"}
            />
          </View>
          <Card.Content>
            <Surface
              style={[
                styles.row,
                { backgroundColor: "#EEF5DB", shadowColor: "#EEF5DB" },
              ]}
            >
              <Surface
                style={[
                  styles.column,
                  { backgroundColor: "#EEF5DB", shadowColor: "#EEF5DB" },
                ]}
              >
                <View
                  style={{
                    borderBottomColor: "#B6CB9E",
                    borderBottomWidth: 2,
                    borderStyle: "solid",
                  }}
                >
                  <Paragraph
                    style={[
                      globalstyles.textBold,
                      { fontSize: 18, textAlign: "center" },
                    ]}
                  >
                    Carbs
                  </Paragraph>
                </View>
                <Paragraph style={globalstyles.lightText2}>204g left</Paragraph>
              </Surface>
              <Surface
                style={[
                  styles.column,
                  { backgroundColor: "#EEF5DB", shadowColor: "#EEF5DB" },
                ]}
              >
                <View
                  style={{
                    borderBottomColor: "#B6CB9E",
                    borderBottomWidth: 2,
                    borderStyle: "solid",
                  }}
                >
                  <Paragraph
                    style={[
                      globalstyles.textBold,
                      { fontSize: 18, textAlign: "center" },
                    ]}
                  >
                    Protein
                  </Paragraph>
                </View>
                <Paragraph
                  style={[
                    globalstyles.lightText2,
                    { fontSize: 18, textAlign: "center" },
                  ]}
                >
                  81g left
                </Paragraph>
              </Surface>
              <Surface
                style={[
                  styles.column,
                  { backgroundColor: "#EEF5DB", shadowColor: "#EEF5DB" },
                ]}
              >
                <View
                  style={{
                    borderBottomColor: "#B6CB9E",
                    borderBottomWidth: 2,
                    borderStyle: "solid",
                  }}
                >
                  <Paragraph
                    style={[
                      globalstyles.textBold,
                      { fontSize: 18, textAlign: "center" },
                    ]}
                  >
                    Fat
                  </Paragraph>
                </View>
                <Paragraph
                  style={[
                    globalstyles.lightText2,
                    { fontSize: 18, textAlign: "center" },
                  ]}
                >
                  54g left
                </Paragraph>
              </Surface>
            </Surface>
            <Pressable
              style={{
                alignSelf: "center",
                alignContent: "center",
                justifyContent: "center",
                marginBottom: -30,
                marginTop: 25,
                backgroundColor: "#B6CB9E",
                width: 130,
                height: 50,
                elevation: 3,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("SearchPage")}
            >
              <Paragraph
                style={[
                  globalstyles.textBold,
                  { fontSize: 18, textAlign: "center" },
                ]}
              >
                Add meal
              </Paragraph>
            </Pressable>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default MealTrackingScreen;

const styles = StyleSheet.create({
  row: {
    mode: "flat",
    elevation: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    color: "#EEF5DB",
  },
  column: {
    mode: "flat",
    elevation: 0,
    display: "flex",
    flexDirection: "column",
    color: "#EEF5DB",
  },
});

{
  /* <Progress.Circle
            style={{ alignSelf: "center", marginTop: 10 }}
            size={200}
            progress={0.7}
            thickness={10}
            borderWidth={2}
            color="#B6CB9E"
            borderColor="#B6CB9E"
            showsText={true}
            fill="#EEF5DB"
            unfilledColor="#EEF5DB"
            formatText={() => progress}
          /> */
}
