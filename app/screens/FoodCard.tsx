import React from "react";
import { Card, Paragraph, Surface } from "react-native-paper";
import { StyleSheet, Image } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { View } from "react-native";
import globalstyles from "../global.styles.js";

export interface FoodItem {
  id: number;
  name: string;
  photo: any;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

const CARBS =1;
const PROTEIN =1;
const FAT =1;

const FoodItemCard = ({ foodItem }: { foodItem: FoodItem }) => {
  return (
    <Card key={foodItem.id} style={styles.container}>
      <Paragraph> {foodItem.name}</Paragraph>
      <Image style={{ width: 85, height: 70 }} source={foodItem.photo} />
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
              duration={3000}
              activeStrokeColor="#9db97d"
              inActiveStrokeColor="#B6CB9E"
              inActiveStrokeOpacity={0.5}
              progressValueColor={"#3C403D"}
              progressValueStyle={{ fontSize: 15 }}
            />
            <Paragraph
              style={[globalstyles.text, { marginTop : 8, fontSize: 15, textAlign: "center" }]}
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
              duration={3000}
              activeStrokeColor="#9db97d"
              inActiveStrokeColor="#B6CB9E"
              inActiveStrokeOpacity={0.5}
              progressValueColor={"#3C403D"}
              progressValueStyle={{ fontSize: 15 }}
            />
            <Paragraph
              style={[globalstyles.text, { marginTop : 8,fontSize: 15, textAlign: "center" }]}
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
              duration={3000}
              activeStrokeColor="#9db97d"
              inActiveStrokeColor="#B6CB9E"
              inActiveStrokeOpacity={0.5}
              progressValueColor={"#3C403D"}
              progressValueStyle={{ fontSize: 15 }}
            />
            <Paragraph
              style={[globalstyles.text, { marginTop : 8,fontSize: 15, textAlign: "center" }]}
            >
              Fat
            </Paragraph>
          </Surface>
        </Surface>
    </Card>
  );
};

export default FoodItemCard;

const styles = StyleSheet.create({
  container: {
    marginTop: "3%",
    marginBottom: "3%",
    marginLeft: "3%",
    marginRight: "3%",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 20,
  },
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
