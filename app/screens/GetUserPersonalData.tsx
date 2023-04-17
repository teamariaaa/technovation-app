import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../config/firebase.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  Dimensions,
  StyleProp,
  View,
  ViewStyle,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  Button,
  Paragraph,
  TextInput,
  Surface,
  IconButton,
  Avatar,
} from "react-native-paper";
import { red100 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";
import styles from "../global.styles.js";
import Icon from "react-native-paper/lib/typescript/src/components/Icon.js";

// import database from "@react-native-firebase/database";
// import { firebase } from "@react-native-firebase/database";

const app = firebaseConfig;
const auth = getAuth(app);

const UserDataScreen = ({ navigation }: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [currentPage, setCurrentPage] = useState("userName");
  const [userName, setUserName] = useState("");

  function updateUser() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      if (currentPage === "otherInfo") {
        let userName =
          lastName +
          "$" +
          firstName +
          "$" +
          userAge +
          "$" +
          userGender +
          "$" +
          userWeight +
          "$" +
          userHeight;
        updateProfile(user, {
          displayName: userName,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log(user.displayName);
            console.log(lastName);
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        navigation.navigate("GoToQuizz");
      }
      if (currentPage === "userName") {
        setCurrentPage("otherInfo");
      }
    }
  }
  function goToQuizz() {
    navigation.navigate("");
  }

  function changePage() {
    if (currentPage == "userName") navigation.navigate("SignUp");
    if (currentPage == "otherInfo") setCurrentPage("userName");
  }

  const inputStyle: StyleProp<ViewStyle> = {
    alignSelf: "stretch",
    margin: 20,
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#FFFCEF" }]}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={[
            styles.upContainer,
            { backgroundColor: "#FFFCEF", marginBottom: 0 },
          ]}
        >
          <IconButton
            icon="keyboard-backspace"
            mode="contained-tonal"
            style={styles.iconButton}
            size={20}
            onPress={() => changePage()}
          />

          <Text
            style={[
              styles.text,
              styles.textBodyLarge,
              styles.textCenter,
              { marginLeft: "2.5%" },
            ]}
          >
            Sign Up
          </Text>
        </View>
        <Avatar.Icon
          size={134}
          icon="dots-horizontal"
          color="#c1dbc1"
          style={{
            backgroundColor: "transparent",
            height: 122 * 0.8,
            marginTop: "10%",
            // width: customAvtardimension,
            //height: customAvtardimension,
          }}
        />
        {/* <Icon name="dots-horizontal" size={15} /> */}
        <View
          style={{
            flex: 6,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          <Paragraph style={[styles.headlineSmall, styles.textBold]}>
            Let us know you!
          </Paragraph>
          <Paragraph
            style={[
              styles.bodyMedium,
              styles.lightText,
              { width: "75%", marginBottom: "5%" },
            ]}
          >
            Based on your data we can calculate the perfect diet and treatment.
          </Paragraph>

          {/* {true && 
            <View></View>
          } */}

          {currentPage == "userName" ? (
            <View style={{ width: "100%" }}>
              <Text
                style={[
                  styles.text,
                  styles.hightlightText,
                  styles.bodyMedium,
                  { marginTop: "5%", marginBottom: 0 },
                ]}
              >
                Enter your name and age:
              </Text>
              <TextInput
                mode="flat"
                style={[
                  styles.TextInput,
                  styles.text,
                  { height: 45, marginTop: "5%" },
                ]}
                label="First name"
                left={<TextInput.Icon icon="account" />}
                value={firstName}
                onChangeText={(firstName: string) => setFirstName(firstName)}
              />
              <TextInput
                mode="flat"
                style={[
                  styles.TextInput,
                  styles.text,
                  { height: 45, marginTop: "10%" },
                ]}
                label="Last name"
                left={<TextInput.Icon icon="account" />}
                value={lastName}
                onChangeText={(lastName: string) => setLastName(lastName)}
              />
              <TextInput
                mode="flat"
                style={[styles.TextInput, { height: 45, marginTop: "10%" }]}
                label="Age"
                left={<TextInput.Icon icon="calendar-account" />}
                value={userAge}
                onChangeText={(userAge: string) => setUserAge(userAge)}
              />
            </View>
          ) : (
            <View style={{ width: "100%" }}>
              <Text
                style={[
                  styles.text,
                  styles.hightlightText,
                  styles.bodyMedium,
                  { marginTop: "5%", marginBottom: 0 },
                ]}
              >
                Enter your gender, weight and height:
              </Text>
              <TextInput
                mode="flat"
                style={[styles.TextInput, { height: 45, marginTop: "5%" }]}
                label="Male or female"
                left={<TextInput.Icon icon="gender-male-female" />}
                value={userGender}
                onChangeText={(userGender: string) => setUserGender(userGender)}
              />

              <TextInput
                mode="flat"
                style={[styles.TextInput, { height: 45, marginTop: "10%" }]}
                label="Weight in kg"
                left={<TextInput.Icon icon="scale" />}
                value={userWeight}
                onChangeText={(userWeight: string) => setUserWeight(userWeight)}
              />

              <TextInput
                mode="flat"
                style={[styles.TextInput, { height: 45, marginTop: "10%" }]}
                label="Height in cm"
                left={<TextInput.Icon icon="human-male-height" />}
                value={userHeight}
                onChangeText={(userHeight: string) => setUserHeight(userHeight)}
              />
            </View>
          )}

          <Button
            mode="elevated"
            style={[
              styles.myButton,
              //styles.marginButtonTop,
              styles.noBottomMargin,
              { marginTop: "37%", marginBottom: "10%" },
            ]}
            onPress={() => {
              updateUser();
            }}
          >
            <Text style={[styles.text, styles.textBodyLarge]}>Next</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserDataScreen;
