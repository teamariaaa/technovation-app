import React, { useState } from "react";
import {
  Card,
  IconButton,
  Surface,
} from "react-native-paper";
import { StyleSheet, Image } from "react-native";
import globalstyles from "../global.styles.js";
import { Pressable } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

export interface FoodItem {
  id: number;
  name: string;
  photo: string;
  date : number;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

const CARBS = 1;
const PROTEIN = 1;
const FAT = 1;

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
        source={{uri : `https://firebasestorage.googleapis.com/v0/b/recovereats-722e7.appspot.com/o/${foodItem.photo}.jpg?alt=media`}}
      />
      <IconButton
        icon="fire"
        iconColor="#A0A0A0"
        style={{ alignSelf: "flex-end", marginBottom: "6%" }}
      />
    </Surface>
  );

const FoodItemCard = ({ foodItem }: { foodItem: FoodItem }) => {
  const win = Dimensions.get("window");

  const [visible, setVisible] = useState<boolean>(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "#fffcef",
    padding: win.width * 0.03,
  };

  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("FoodPage", {foodItem})}>
      <Card key={foodItem.id} style={styles.container}>
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
              fontSize: 18,
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
        {/* <View style = {{flex : 1, padding : 100}}>
          <ImageBackground
        resizeMode = "cover"
        style={{
          flex : 1,
          width: "100%",
          height: "100%",
          // justifyContent : "center", 
          // shadowColor : "red",
        }}
        source={foodItem.photo}
      /> 
       </View> */}
      </Card>
    </Pressable>
  );
};

export default FoodItemCard;

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
