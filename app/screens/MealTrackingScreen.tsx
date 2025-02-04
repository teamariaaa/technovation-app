import React, { useState } from "react";
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
  Button,
  Appbar,
  Surface,
} from "react-native-paper";
import globalstyles from "../global.styles.js";
import { ScrollView } from "react-native";
import { getAuth } from "firebase/auth";
import CircularProgress from "react-native-circular-progress-indicator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FoodItem } from "./FoodCard";
import { useFocusEffect } from "@react-navigation/native";

/*Culori #DAF7DC
         #ABC8C0
         #C7EFCF
         #B7CECE*/

const MealTrackingScreen = ({ navigation }: any) => {
  const win = Dimensions.get("window");

  const [todayItems, setTodayItems] = useState<FoodItem[]>([]);

  const getTodayMeals = async () => {
    const storedMeals = await AsyncStorage.getItem("@myfood");
    const foodList = storedMeals ? JSON.parse(storedMeals) : [];
    const filteredItems = foodList.filter(
      (d: FoodItem) =>
        new Date(d.date).toDateString() === new Date().toDateString()
    )
    setTodayItems(filteredItems);
    const stats = filteredItems.reduce(
      (acc: any, food: FoodItem) => {
        acc.calories += food.calories;
        acc.carbs += food.carbs;
        acc.protein += food.protein;
        acc.fat += food.fat;
        return acc;
      },
      { calories: 0, carbs: 0, protein: 0, fat: 0 }
    );

    setTodayCal(stats.calories);
    setTodayCarbs(stats.carbs);
    setTodayProtein(stats.protein);
    setTodayFat(stats.fat);
  };

  const [todayCal, setTodayCal] = useState<number>(0);
  const [todayCarbs, setTodayCarbs] = useState<number>(0);
  const [todayProtein, setTodayProtein] = useState<number>(0);
  const [todayFat, setTodayFat] = useState<number>(0)
  
  useFocusEffect(() => {
    getTodayMeals();
  });

  const auth = getAuth();
  const user = auth.currentUser;

  let fullName = user?.displayName;
  let age;
  let gender;
  let weight;
  let height;

  let name;
  let BMR;
  name = fullName?.split("$");
  fullName = name ? name[0] + " " + name[1] : "";
  age = name ? parseInt(name[2]) : 0;
  gender = name ? name[3] : "";
  weight = name ? parseInt(name[4]) : 0;
  height = name ? parseInt(name[5]) : 0;

  if (gender === "female")
    BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  else BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;

  const CALORIE_INTAKE = Math.round(BMR * 137.5/100);
  const CARBS_INTAKE = Math.round(BMR * 50) / 400;
  const PROTEIN_INTAKE = (BMR * 30) / 900;
  const FAT_INTAKE = (BMR * 20) / 400;

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
              marginLeft: 15,
              marginRight: 3,
            }}
          >
            <Avatar.Image
              size={70}
              source={require("../../assets/avatar3.jpg")}
            />
            <Button
              mode="contained-tonal"
              style={[
                { backgroundColor: "#EEF5DB", marginLeft: win.width - 180 },
              ]}
              onPress={() => navigation.navigate("Diary")}
            >
              Diary
            </Button>
          </Appbar.Header>
        </View>
        <Paragraph style={[globalstyles.titleLarge, { bottom: 13, left: 25 }]}>
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
              value={todayCal}
              radius={110}
              duration={1}
              activeStrokeColor="#9db97d"
              inActiveStrokeColor="#B6CB9E"
              inActiveStrokeOpacity={0.5}
              progressValueColor={"#3C403D"}
              progressValueStyle={{ fontSize: 40 }}
              inActiveStrokeWidth={18}
              activeStrokeWidth={16}
              maxValue={CALORIE_INTAKE}
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
                <Paragraph style={[globalstyles.lightText2, {textAlign : "center"}]}>
                  {Math.max(Math.round(((CARBS_INTAKE - todayCarbs) * 10) / 10), 0)}g left
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
                    Protein
                  </Paragraph>
                </View>
                <Paragraph style={[globalstyles.lightText2, {textAlign : "center"}]}>
                  {Math.max(Math.round(((PROTEIN_INTAKE- todayProtein) * 10) / 10), 0)}g left
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
                <Paragraph style={[globalstyles.lightText2, {textAlign : "center"}]}>
                  {Math.max(Math.round(((FAT_INTAKE - todayFat) * 10) / 10), 0)}g left
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
