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

const LastSignUpScreen = ({ navigation }: any) => {
  function changePage() {
    navigation.navigate("Main");
  }

  const auth = getAuth();
  const user = auth.currentUser;

  let userInfo = user?.displayName;
  let info = userInfo?.split("$");
  let score;

  score = info ? parseInt(info[6]) : 0;
  if (!score) score = 0;
  score = 108;

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: "#FFFCEF", paddingTop: StatusBar.currentHeight },
      ]}
    >
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
            onPress={() => navigation.navigate("GetUserPersonalData")}
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
            marginTop: "20%",
          }}
        />
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
            Your score is {score / 2} out of 78.
          </Paragraph>
          <Paragraph
            style={[
              styles.textBodyLarge,
              styles.lightText,
              { width: "90%", marginBottom: "5%" },
            ]}
          >
            A score above 20 indicates some level of concern about your diet and
            mental health.
          </Paragraph>
          <Paragraph
            style={[
              styles.textBodyLarge,
              styles.lightText,
              { width: "90%", marginBottom: "5%" },
            ]}
          >
            This was the last step of the sign up. Thank your for taking our
            test!
          </Paragraph>
          <Button
            mode="elevated"
            style={[
              styles.myButton,
              styles.noBottomMargin,
              { marginTop: "60%", marginBottom: "10%" },
            ]}
            onPress={() => {
              navigation.navigate("Main");
            }}
          >
            <Text style={[styles.text, styles.textBodyLarge]}>Next</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LastSignUpScreen;
