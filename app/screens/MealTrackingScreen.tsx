import React, { useEffect, useReducer, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { _View, Dimensions, _ScrollView, View } from "react-native";
import {
  Card,
  Paragraph,
  Avatar,
  Title,
  Button,
  Appbar,
} from "react-native-paper";
import styles from "../global.styles.js";
import { ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from "../../config/firebase.js";

/*Culori #DAF7DC
         #ABC8C0
         #C7EFCF
         #B7CECE*/

const MealTrackingScreen = ({ navigation }: any) => {
  const win = Dimensions.get("window");

  const auth = getAuth();
  const user = auth.currentUser;

  let fullName = user?.displayName;

  let name;
  name = fullName?.split(",");
  fullName = name ? name[0] + " " + name[1] : "";

  return (
    <ScrollView>
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
                { backgroundColor: "#e4ede4", marginLeft: win.width - 170 },
              ]}
              onPress={() => navigation.navigate("Diary")}
            >
              Diary
            </Button>
          </Appbar.Header>
        </View>
        <Paragraph style={[styles.titleLarge, { bottom: 13, left: 15 }]}>
          Hello, {name ? name[1] : ""}!
        </Paragraph>
        <Card style={styles.idkContainer}>
          <Card.Title
            title="Today"
            titleStyle={[styles.headlineSmall, { textAlign: "center" }]}
          ></Card.Title>
          <Progress.Circle
            style={{ alignSelf: "center", marginTop: 10 }}
            size={200}
            progress={0.7}
            thickness={10}
            borderWidth={2}
            color="#B6CB9E"
            borderColor="#B6CB9E"
            fill="#EEF5DB"
            unfilledColor="#EEF5DB"
            formatText={() => {}}
          />
          {/* <Card.Content></Card.Content> */}
        </Card>
      </View>
    </ScrollView>
  );
};

export default MealTrackingScreen;
