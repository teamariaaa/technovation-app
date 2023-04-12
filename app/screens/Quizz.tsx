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

const QuizzScreen = ({ navigation }: any) => {
  const questions = [
    {
      id: 1,
      name: "I am terrified about being overweight.",
      description: "1",
    },
    {
      id: 2,
      name: "I void eating when I am hungry.",
      description: "2",
    },
    {
      id: 3,
      name: "I find myself preoccupied with food.",
      description: "3",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [questionNo, setQuestionNo] = useState(1);

  function changePage() {
    console.log(currentPage + 1);
    if (currentPage < 3) setCurrentPage(currentPage + 1);
    else navigation.navigate("Main");
  }

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
            onPress={() => navigation.navigate("GoToQuizz")}
          />

          <Text
            style={[
              styles.text,
              styles.bodyMedium,
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
          {questions.map((question) => (
            <View>
              {question.description == currentPage.toString() ? (
                <Text
                  style={[styles.text, styles.headlineSmall, styles.textBold]}
                >
                  {question.name}
                </Text>
              ) : (
                <View></View>
              )}
            </View>
          ))}

          {/* {true && 
            <View></View>
          } */}
          <Button
            mode="elevated"
            style={[
              styles.myButton,
              //styles.marginButtonTop,
              styles.noBottomMargin,
              { marginTop: "30%", marginBottom: "10%" },
            ]}
            onPress={() => {
              changePage();
            }}
          >
            <Text style={[styles.text, styles.textBodyLarge]}>Start quizz</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizzScreen;
