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

  function updateUser() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      let userName =
        lastName +
        "$" +
        firstName +
        "$" +
        userHeight +
        "$" +
        userAge +
        "$" +
        userGender;
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
    }
  }
  function goToQuizz() {
    navigation.navigate("");
  }

  const inputStyle: StyleProp<ViewStyle> = {
    alignSelf: "stretch",
    margin: 20,
  };

  return (
    <View style={[styles.container, { backgroundColor: "#FFFCEF" }]}>
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
          onPress={() => navigation.navigate("Start")}
        />

        <Text
          style={[
            styles.text,
            styles.bodyMedium,
            styles.textCenter,
            { marginLeft: "2.5%" },
          ]}
        >
          jasfaf
        </Text>
      </View>
      <Avatar.Icon
        size={110}
        icon="dots-horizontal"
        color="#c1dbc1"
        style={{
          backgroundColor: "transparent",
          // width: customAvtardimension,
          //height: customAvtardimension,
        }}
      />
      {/* <Icon name="dots-horizontal" size={15} /> */}
      <View style={[styles.bottomContainer]}>
        <Paragraph style={[styles.headlineSmall, styles.textBold]}>
          Welcome!
        </Paragraph>
        <Paragraph style={(styles.bodyMedium, styles.lightText)}>
          Enter your personal data
        </Paragraph>
        <TextInput
          mode="flat"
          style={styles.TextInput}
          label="First name"
          left={<TextInput.Icon icon="account" />}
          value={firstName}
          onChangeText={(firstName: string) => setFirstName(firstName)}
        />
        <TextInput
          mode="flat"
          style={styles.TextInput}
          label="Last name"
          left={<TextInput.Icon icon="account" />}
          value={lastName}
          onChangeText={(lastName: string) => setLastName(lastName)}
        />

        <Button
          mode="elevated"
          style={[
            styles.myButton,
            //styles.marginButtonTop,
            styles.noBottomMargin,
            { margin: "2%", marginTop: "10%" },
          ]}
          onPress={() => {
            goToQuizz();
          }}
        >
          <Text style={[styles.text, styles.textBodyLarge]}>Sign up</Text>
        </Button>
        <View style={[styles.containerRow, styles.noMargin]}>
          <Paragraph style={(styles.bodyMedium, styles.lightText)}>
            Aready have an account?
          </Paragraph>
          <Button
            mode="text"
            style={styles.smallHiddenButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.hightlightText}>Sign in</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default UserDataScreen;
