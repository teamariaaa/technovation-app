import React, { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  Appbar,
  Headline,
  List,
  Divider,
  Button,
  Snackbar,
  Card,
  Paragraph,
  Surface,
  IconButton,
} from "react-native-paper";
import { FoodItem } from "./FoodCard";
import MainLayout from "./Layout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import CircularProgress from "react-native-circular-progress-indicator";
import globalstyles from "../global.styles.js";
import { color } from "react-native-reanimated";
const inputStyle: StyleProp<ViewStyle> = {
  alignSelf: "stretch",
  margin: 20,
};

const LeftContent = (foodItem: FoodItem) => () =>
  (
    <Surface style={[styles.row, styles.container]}>
      <Image
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
      />
      <IconButton
        icon="fire"
        iconColor="#A0A0A0"
        style={{ alignSelf: "flex-end", marginBottom: "6%" }}
      />
    </Surface>
  );

const MealDetailsScreen = ({ navigation, route }: any) => {
  const [meal, setMeal] = useState<FoodItem>(route.params?.meal || {});

  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const addMeal = async () => {
    const storedMeals = await AsyncStorage.getItem("@myfood");
    const foodList: FoodItem[] = storedMeals ? JSON.parse(storedMeals) : [];

    // const alarmDrug = drugs.find(d => d.name === "Paracetamol")
    // if(alarmDrug) {
    //     alarmDrug.remainingPills = alarmDrug?.remainingPills?alarmDrug.remainingPills-1: 0
    // }
    // await AsyncStorage.setItem("@mydrugs", JSON.stringify(drugs))

    await AsyncStorage.setItem("@myfood", JSON.stringify([...foodList, meal]));
    onToggleSnackBar();
  };

  return (
    <><View style={globalstyles.upContainer}>
      <IconButton
        icon="keyboard-backspace"
        mode="contained-tonal"
        style={globalstyles.iconButton}
        size={20}
        onPress={() => navigation.navigate("Start")} />

      <Text
        style={[
          globalstyles.text,
          globalstyles.titleLarge,
          globalstyles.textSemiBold,
          globalstyles.textCenter,
        ]}
      >
        Sign in
      </Text>
    </View>
    <Card key={meal.id} style={[styles.container, { display: "flex", flexDirection: "column", borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: "hidden", backgroundColor: "#EEF5DB" }]}>
        <Card style={{ backgroundColor: "blue" }}>
          <Card.Cover source={require("../../assets/profilePicture.jpeg")} style={{ width: "100%", height: 270, maxHeight: 270 }} />
        </Card>
        <Card style={{ position: "relative", bottom: 20, borderRadius: 20 }}>
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
                  value={50}
                  maxValue={100}
                  valueSuffix="%"
                  //initialValue={1400}
                  //<MaterialCommunityIcons name = "fire" />
                  radius={40}
                  duration={0}
                  activeStrokeColor="#9db97d"
                  inActiveStrokeColor="#B6CB9E"
                  inActiveStrokeOpacity={0.5}
                  progressValueColor={"#3C403D"}
                  progressValueStyle={{ fontSize: 15 }} />
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
                  value={50}
                  maxValue={100}
                  valueSuffix="%"
                  //initialValue={1400}
                  //<MaterialCommunityIcons name = "fire" />
                  radius={40}
                  duration={0}
                  activeStrokeColor="#9db97d"
                  inActiveStrokeColor="#B6CB9E"
                  inActiveStrokeOpacity={0.5}
                  progressValueColor={"#3C403D"}
                  progressValueStyle={{ fontSize: 15 }} />
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
                  value={50}
                  maxValue={100}
                  valueSuffix="%"
                  //initialValue={1400}
                  //<MaterialCommunityIcons name = "fire" />
                  radius={40}
                  duration={0}
                  activeStrokeColor="#9db97d"
                  inActiveStrokeColor="#B6CB9E"
                  inActiveStrokeOpacity={0.5}
                  progressValueColor={"#3C403D"}
                  progressValueStyle={{ fontSize: 15 }} />
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
        </Card>
      </Card></>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
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
