import React, { useEffect, useState } from "react";
import {
  Card,
  IconButton,
  Paragraph,
  Portal,
  Provider,
  Surface,
  Button,
  Modal,
  Title,
} from "react-native-paper";
import { StyleSheet, Image, ImageBackground, ScrollView } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import globalstyles from "../global.styles.js";
import { Pressable } from "react-native";
import { View } from "react-native";
import Icon from "react-native-paper/lib/typescript/src/components/Icon.js";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardContent from "react-native-paper/lib/typescript/src/components/Card/CardContent.js";
import moment from "moment";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export interface FoodItem {
  id: number;
  name: string;
  photo: any;
  date: Date;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

const LeftContent = (foodItem: FoodItem) => () => {
  return (
    <Surface style={[styles.row, styles.container]}>
      <Image
        style={{
          width: 85,
          height: 80,
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
        source={{
          uri: `https://firebasestorage.googleapis.com/v0/b/recovereats-722e7.appspot.com/o/${foodItem.photo}.jpg?alt=media`,
        }}
      />
      <IconButton
        icon="fire"
        iconColor="#A0A0A0"
        style={{ alignSelf: "flex-end", marginBottom: "6%" }}
      />
    </Surface>
  );
};

const DiaryCard = ({ day }: { day: Date }) => {

  const auth = getAuth();
  const user = auth.currentUser;

  let fullName = user?.displayName;
  let age;
  let gender;
  let weight;
  let height;

  let name;
  let BMR;
  // const [BMR, setBRM] = useState(0);
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
  // const [visible, setVisible] = useState<boolean[]>([]);
  // setVisible(visible.filter((d : boolean) => ))}
  const [visible, setVisible] = useState<number>(-1);
  const [todayItems, setTodayItems] = useState<FoodItem[]>([]);
  const [numeData, setNumeData] = useState<boolean>(true);

  useEffect(() => {
    setNumeData(
      day.toDateString() === new Date().toDateString() ? true : false
    );
    // console.log(numeData);
  }, [day]);

  const addMeal = async () => {
    const storedMeals = await AsyncStorage.getItem("@myfood");
    return storedMeals ? JSON.parse(storedMeals) : [];
    // setTodayItems(foodList.filter((d) => new Date(d.date).toDateString() === day.toDateString()));
  };

  const [todayCal, setTodayCal] = useState<number>(0);

  useEffect(() => {
    addMeal().then((foodList) => {
      const filteredItems = foodList.filter(
        (d: FoodItem) =>
          new Date(d.date).toDateString() === day.toDateString()
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
    });
  }, [day]);

  const Clear = async () => {
    await AsyncStorage.removeItem("@myfood");
  };

  return (
    // <Pressable onPress={() => navigation.navigate("FoodPage", { foodItem })}>
    <ScrollView
      style={{ height: "44%", backgroundColor: "#EEF5DB", borderRadius: 25 }}
    >
      {/* <Button onPress = {Clear}> clear </Button> */}
      <Card
        style={{
          backgroundColor: "#fffcef",
          borderRadius: 25,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        {numeData === true && (
          <>
            <Card.Title
              style={{
                alignSelf: "flex-start",
                marginTop: "4%",
                marginBottom: "4%",
                // display : "flex",
                // flexDirection : "row",
              }}
              title="Today"
              titleStyle={[
                globalstyles.text,
                {
                  flex: 1,
                  alignSelf: "flex-start",
                  marginTop: "0%",
                  marginLeft: 17,
                  paddingTop: "7%",
                  fontSize: 28,
                  fontWeight: "800",
                },
              ]}
            />
            <Card.Content>
              <Surface style={[styles.row2, { backgroundColor: "#fffcef" , marginTop : "-2.5%"}]}>
                <IconButton
                  icon="fire"
                  iconColor="#A0A0A0"
                  size={33}
                  style={{ marginTop: "-1%", marginRight: "-1%" }}
                />
                <Paragraph
                  // left={LeftContent(meal)}
                  style={{
                    color: "#808080",
                    fontFamily: "Cabin",
                    fontSize: 23,
                    paddingTop: "3%",
                    marginTop: "2%",
                    // alignSelf: "flex-start",
                  }}
                >
                  {todayCal} kcal
                </Paragraph>
                <Paragraph
                  // left={LeftContent(meal)}
                  style={{
                    color: "#B6CB9E",
                    fontFamily: "Cabin",
                    fontSize: 19,
                    marginLeft: 7,
                    paddingTop: "3%",
                    marginTop: "2%",
                    // alignSelf: "flex-start",
                  }}
                >
                  / {CALORIE_INTAKE}kcal
                </Paragraph>
              </Surface>
            </Card.Content>
          </>
        )}
        {numeData === false && (
          <>
            <Card.Title
              style={{
                alignSelf: "flex-start",
                marginTop: "4%",
                marginBottom: "4%",
                // display : "flex",
                // flexDirection : "row",
              }}
              title={moment(day).format('MMMM D')}
              titleStyle={[
                globalstyles.text,
                {
                  flex: 1,
                  alignSelf: "flex-start",
                  marginTop: "0%",
                  marginLeft: 17,
                  paddingTop: "7%",
                  fontSize: 28,
                  fontWeight: "800",
                },
              ]}
            />
            <Card.Content>
              <Surface style={[styles.row2, { backgroundColor: "#fffcef",  marginTop : "-2.5%"}]}>
                <IconButton
                  icon="fire"
                  iconColor="#A0A0A0"
                  size={33}
                  style={{ marginTop: "-1%", marginRight: "-1%" }}
                />
                <Paragraph
                  // left={LeftContent(meal)}
                  style={{
                    color: "#B6CB9E",
                    fontFamily: "Cabin",
                    fontSize: 23,
                    paddingTop: "3%",
                    marginTop: "2%",
                    // alignSelf: "flex-start",
                  }}
                >
                  {todayCal} kcal
                </Paragraph>
                <Paragraph
                  // left={LeftContent(meal)}
                  style={{
                    color: "#ADADC9",
                    fontFamily: "Cabin",
                    fontSize: 19,
                    marginLeft: 7,
                    paddingTop: "3%",
                    marginTop: "2%",
                    // alignSelf: "flex-start",
                  }}
                >
                  / {CALORIE_INTAKE}kcal
                </Paragraph>
              </Surface>
            </Card.Content>
          </>
        )}
        {todayItems.map((foodItem, i) => (
          <Pressable key={i} onPress={() => setVisible(i === visible ? -1 : i)}>
            <Card key={i} style={[styles.container]}>
              <Card.Title
                style={{
                  alignSelf: "flex-start",
                  marginTop: "7%",
                  marginBottom: "7%",
                }}
                title={foodItem.name}
                titleStyle={[
                  globalstyles.text,
                  {
                    alignSelf: "flex-start",
                    marginLeft: "18%",
                    marginTop: "-3%",
                    fontSize: 17,
                    fontWeight: "700",
                  },
                ]}
                subtitle={`${foodItem.calories} kcal`}
                subtitleStyle={{
                  color: "#A0A0A0",
                  fontFamily: "Cabin",
                  fontSize: 16,
                  marginTop: "2%",
                  marginBottom: "-4%",
                  alignSelf: "flex-start",
                  marginLeft: "25%",
                }}
                left={LeftContent(foodItem)}
              />
              {visible === i && (
                <View
                  style={[
                    styles.container,
                    {
                      marginTop: "-5%",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      backgroundColor: "#fffcef",
                      marginLeft: "0%",
                      marginRight: "0%",
                    },
                  ]}
                >
                  <Paragraph
                    style={[
                      globalstyles.textBold,
                      { marginBottom: "-2%", marginLeft: "3%" },
                    ]}
                  >
                    Nutritional Information
                  </Paragraph>
                  <Surface
                    style={[
                      styles.row,
                      { backgroundColor: "#fffcef", shadowColor: "#fffcef" },
                    ]}
                  >
                    <Surface
                      style={[
                        styles.column,
                        { backgroundColor: "#fffcef", shadowColor: "#fffcef" },
                      ]}
                    >
                      <CircularProgress
                        value={
                          (foodItem.carbs * 10000) /
                          ((foodItem.carbs + foodItem.fat + foodItem.protein) *
                            100)
                        }
                        maxValue={100}
                        valueSuffix="%"
                        //initialValue={1400}
                        //<MaterialCommunityIcons name = "fire" />
                        radius={40}
                        duration={1}
                        activeStrokeColor="#9db97d"
                        inActiveStrokeColor="#B6CB9E"
                        inActiveStrokeOpacity={0.5}
                        progressValueColor={"#3C403D"}
                        progressValueStyle={{ fontSize: 15 }}
                      />
                      <Paragraph
                        style={[
                          globalstyles.text,
                          { marginTop: 8, fontSize: 15, textAlign: "center" },
                        ]}
                      >
                        Carbs
                      </Paragraph>
                    </Surface>
                    <Surface
                      style={[
                        styles.column,
                        { backgroundColor: "#fffcef", shadowColor: "#fffcef" },
                      ]}
                    >
                      <CircularProgress
                        value={
                          (foodItem.protein * 10000) /
                          ((foodItem.carbs + foodItem.fat + foodItem.protein) *
                            100)
                        }
                        maxValue={100}
                        valueSuffix="%"
                        //initialValue={1400}
                        //<MaterialCommunityIcons name = "fire" />
                        radius={40}
                        duration={1}
                        activeStrokeColor="#9db97d"
                        inActiveStrokeColor="#B6CB9E"
                        inActiveStrokeOpacity={0.5}
                        progressValueColor={"#3C403D"}
                        progressValueStyle={{ fontSize: 15 }}
                      />
                      <Paragraph
                        style={[
                          globalstyles.text,
                          { marginTop: 8, fontSize: 15, textAlign: "center" },
                        ]}
                      >
                        Protein
                      </Paragraph>
                    </Surface>
                    <Surface
                      style={[
                        styles.column,
                        { backgroundColor: "#fffcef", shadowColor: "#fffcef" },
                      ]}
                    >
                      <CircularProgress
                        value={
                          (foodItem.fat * 10000) /
                          ((foodItem.carbs + foodItem.fat + foodItem.protein) *
                            100)
                        }
                        maxValue={100}
                        valueSuffix="%"
                        //initialValue={1400}
                        //<MaterialCommunityIcons name = "fire" />
                        radius={40}
                        duration={1}
                        activeStrokeColor="#9db97d"
                        inActiveStrokeColor="#B6CB9E"
                        inActiveStrokeOpacity={0.5}
                        progressValueColor={"#3C403D"}
                        progressValueStyle={{ fontSize: 15 }}
                      />
                      <Paragraph
                        style={[
                          globalstyles.text,
                          { marginTop: 8, fontSize: 15, textAlign: "center" },
                        ]}
                      >
                        Fat
                      </Paragraph>
                    </Surface>
                  </Surface>
                </View>
              )}
            </Card>
            <View
              style={{
                borderBottomColor: "lightgrey",
                borderBottomWidth: 2,
                borderStyle: "solid",
                marginEnd: "5%",
                marginStart: "5%",
              }}
            />
          </Pressable>
        ))}
      </Card>
    </ScrollView>
  );
};

export default DiaryCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffcef",
    shadowColor: "#fffcef",
    marginTop: "0%",
    marginBottom: "2%",
    marginLeft: "3%",
    marginRight: "3%",
    borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  row: {
    mode: "flat",
    elevation: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    shadowColor: "#EEF5DB",
    color: "#EEF5DB",
    marginLeft: "3%",
    marginRight: "3%",
  },
  row2: {
    mode: "flat",
    elevation: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    // marginTop: 30,
    shadowColor: "#EEF5DB",
    color: "#EEF5DB",
    // marginLeft: "3%",
    // marginRight: "3%",
  },
  column: {
    mode: "flat",
    elevation: 0,
    display: "flex",
    flexDirection: "column",
    color: "#EEF5DB",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "600",
    color: "#3C403D",
    fontFamily: "Cabin",
  },
});
