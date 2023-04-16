import React, { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import {
  Button,
  Card,
  Paragraph,
  Surface,
  IconButton,
} from "react-native-paper";
import { FoodItem } from "./FoodCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CircularProgress from "react-native-circular-progress-indicator";
import globalstyles from "../global.styles.js";
import { Dimensions } from "react-native";
const inputStyle: StyleProp<ViewStyle> = {
  alignSelf: "stretch",
  margin: 20,
};

const LeftContent = (foodItem: FoodItem) => () =>
  (
    <Surface style={[styles.row, styles.container]}>
      {/* <Image
        style={{
          width: 85,
          height: 80,
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          // shadowColor : "red",
        }}
        source={foodItem.photo}
      /> */}
      <IconButton
        icon="fire"
        iconColor="#A0A0A0"
        size={33}
        style={{ marginTop: "170%" }}
      />
    </Surface>
  );

const win = Dimensions.get("window");
const RightContent = (foodItem: FoodItem) => () =>
  (
    <Button
      mode="contained-tonal"
      textColor = "red"
      style={[
        {
          backgroundColor: "#9db97d",
          opacity: 0.5,
          marginRight: "10%",
          marginTop: "30%",
          marginBottom: "10%",
        }, //"#e4ede4"
      ]}
      onPress={() => console.log("Pressed")}
    >
      Add to Diary
    </Button>
  );

const MealDetailsScreen = ({ navigation, route }: any) => {
  const [meal, setMeal] = useState<FoodItem>(route.params?.foodItem || {});

  // const [visible, setVisible] = React.useState(false);

  const addMeal = async () => {
    const storedMeals = await AsyncStorage.getItem("@myfood");
    const foodList: FoodItem[] = storedMeals ? JSON.parse(storedMeals) : [];

    await AsyncStorage.setItem("@myfood", JSON.stringify([...foodList, meal]));
  };

  return (
    <ScrollView style={{ backgroundColor: "#fffcef" }}>
      <View style={styles.upContainer}>
        <IconButton
          icon="keyboard-backspace"
          mode="contained-tonal"
          style={globalstyles.iconButton}
          size={20}
          onPress={() => navigation.navigate("SearchPage")}
        />

        <Text
          style={[
            globalstyles.text,
            globalstyles.titleLarge,
            globalstyles.textSemiBold,
            globalstyles.textCenter,
          ]}
        >
          Meal
        </Text>
      </View>
      <Card
        key={meal.id}
        style={[
          styles.container,
          {
            display: "flex",
            flexDirection: "column",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            overflow: "hidden",
            backgroundColor: "#EEF5DB",
          },
        ]}
      >
        <Card style={{ backgroundColor: "blue" }}>
          <Card.Cover
            source={meal.photo}
            style={{ width: "100%", height: 270, maxHeight: 270 }}
          />
        </Card>
        <Card
          style={{
            position: "relative",
            bottom: 25,
            borderRadius: 20,
            backgroundColor: "#EEF5DB",
            shadowColor: "#EEF5DB",
          }}
        >
          <Card.Title
            style={{
              alignSelf: "flex-start",
              marginTop: "4%",
              marginBottom: "4%",
              // display : "flex",
              // flexDirection : "row",
            }}
            title={meal.name}
            titleStyle={[
              globalstyles.text,
              {
                flex: 1,
                alignSelf: "flex-start",
                marginTop: "0%",
                paddingTop: "7%",
                fontSize: 28,
                fontWeight: "800",
              },
            ]}
          />
          <Card.Content>
            <Surface style={[styles.row2, { backgroundColor: "#EEF5DB" }]}>
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
                {meal.calories} kcal
              </Paragraph>
              <Button
                mode="contained-tonal"
                // textColor = "red"
                style={[
                  {
                    backgroundColor: "#9db97d",
                    opacity: 0.5,
                    marginLeft: "17%",
                    marginTop: "1%",
                    marginBottom: "10%",
                  }, //"#e4ede4"
                ]}
                onPress={() => {
                  // console.log("am apasat");
                  addMeal();
                  navigation.navigate("MealTracking");
                }}
                textColor="black"
              >
                Add to Diary
              </Button>
            </Surface>
          </Card.Content>
          <View
            style={[
              styles.container,
              {
                marginTop: "-5%",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: "#EEF5DB",
                marginLeft: "0%",
                marginRight: "0%",
              },
            ]}
          >
            <Paragraph
              style={[
                globalstyles.textBold,
                { marginBottom: "-2%", marginLeft: "4.5%", marginTop: "3%" },
              ]}
            >
              Nutritional Information
            </Paragraph>
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
                <CircularProgress
                  value={
                    (meal.carbs * 10000) /((meal.carbs + meal.fat + meal.protein) * 100)
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
                  { backgroundColor: "#EEF5DB", shadowColor: "#EEF5DB" },
                ]}
              >
                <CircularProgress
                  value={
                    (meal.protein * 10000) /((meal.carbs + meal.fat + meal.protein) * 100)
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
                  { backgroundColor: "#EEF5DB", shadowColor: "#EEF5DB" },
                ]}
              >
                <CircularProgress
                  value={
                    (meal.fat * 10000) /((meal.carbs + meal.fat + meal.protein) * 100)
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
            <View
              style={{
                borderBottomColor: "#B6CB9E",
                borderBottomWidth: 1,
                marginVertical: 10,
                marginTop: "7%",
                marginEnd: 20,
                marginStart: 20,
              }}
            />
            <Surface
              style={[
                styles.row3,
                { backgroundColor: "#EEF5DB", shadowColor: "#EEF5DB"},
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
              </Surface>
              <Surface
                style={[
                  styles.column,
                  { backgroundColor: "#EEF5DB", shadowColor: "#EEF5DB" },
                ]}
              >
                {/* <View
                  style={{
                    borderBottomColor: "#B6CB9E",
                    borderBottomWidth: 2,
                    borderStyle: "solid",
                  }}
                > */}
                  <Paragraph style={[
                      globalstyles.textBold,
                      { fontSize: 18, textAlign: "center" },
                    ]}>
                    {meal.carbs} g
                  </Paragraph>
                {/* </View> */}
              </Surface>
            </Surface>
            <Surface
              style={[
                styles.row3,
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
                    Protein
                  </Paragraph>
                </View>
              </Surface>
              <Surface
                style={[
                  styles.column,
                  { backgroundColor: "#EEF5DB", shadowColor: "#EEF5DB" },
                ]}
              >
                {/* <View
                  style={{
                    borderBottomColor: "#B6CB9E",
                    borderBottomWidth: 2,
                    borderStyle: "solid",
                  }}
                > */}
                  <Paragraph style={[
                      globalstyles.textBold,
                      { fontSize: 18, textAlign: "center" },
                    ]}>
                    {meal.protein} g
                  </Paragraph>
                {/* </View> */}
              </Surface>
            </Surface>
            <Surface
              style={[
                styles.row3,
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
                    Fat
                  </Paragraph>
                </View>
              </Surface>
              <Surface
                style={[
                  styles.column,
                  { backgroundColor: "#EEF5DB", shadowColor: "#EEF5DB" },
                ]}
              >
                {/* <View
                  style={{
                    borderBottomColor: "#B6CB9E",
                    borderBottomWidth: 2,
                    borderStyle: "solid",
                  }}
                > */}
                  <Paragraph style={[
                      globalstyles.textBold,
                      { fontSize: 18, textAlign: "center" },
                    ]}>
                    {meal.fat} g
                  </Paragraph>
                {/* </View> */}
              </Surface>
            </Surface>
            {/* <Surface style={[styles.row3, { backgroundColor: "#EEF5DB" }]}>
            <Paragraph style = {{justifyContent : "flex-start"}}> Carbs </Paragraph>
            <Paragraph style = {{justifyContent : "flex-end"}}> {meal.carbs}g</Paragraph>
            </Surface>
            <Surface style={[styles.row3, { backgroundColor: "#EEF5DB" }]}>
            <Paragraph style = {{justifyContent : "flex-start"}}> Protein </Paragraph>
            <Paragraph style = {{justifyContent : "flex-end"}}> {meal.protein}g</Paragraph>
            </Surface>
            <Surface style={[styles.row3, { backgroundColor: "#EEF5DB" }]}>
            <Paragraph style = {{justifyContent : "flex-start"}}> Fat </Paragraph>
            <Paragraph style = {{justifyContent : "flex-end"}}> {meal.fat}g</Paragraph>
            </Surface> */}
          </View>
        </Card>
      </Card>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  upContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: "2.5%",
    backgroundColor: "#fffcef",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "15%",
    marginBottom: "2%",
  },

  container: {
    backgroundColor: "#EEF5DB",
    marginTop: "3%",
    marginBottom: "2%",
    marginLeft: "3%",
    marginRight: "3%",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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

  row3: {
    mode: "flat",
    elevation: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    shadowColor: "#EEF5DB",
    color: "#EEF5DB",
    marginLeft: "8%",
    marginRight: "8%",
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
