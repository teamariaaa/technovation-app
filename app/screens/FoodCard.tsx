import React, { useState } from "react";
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
import { StyleSheet, Image, ImageBackground } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import globalstyles from "../global.styles.js";
import { Pressable} from "react-native";
import { View } from "react-native";
import Icon from "react-native-paper/lib/typescript/src/components/Icon.js";
import { Dimensions } from "react-native";

export interface FoodItem {
  id: number;
  name: string;
  photo: any;
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
        source={foodItem.photo}
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
  const containerStyle = { backgroundColor: '#fffcef', padding: win.width * 0.03 };

  return (
    <>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
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
            <View style={[styles.container, {marginTop : "-5%", borderTopLeftRadius : 20, borderTopRightRadius : 20, backgroundColor : "red", marginLeft : "0%", marginRight :"0%"}]}>
              <Paragraph style={[globalstyles.textBold, {marginBottom : "-2%", marginLeft : "3%"}]}>
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
                    duration={3000}
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
                    duration={3000}
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
        </Card>
          </Modal>
        </Portal>
        <Pressable onPress={showModal}>
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
          </Card>
        </Pressable>
      </Provider>
    </>
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
