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
import { Fontisto } from "@expo/vector-icons";

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
    {
      id: 4,
      name: "I have gone on eating binges where I feel that I may not be able to stop.",
      description: "4",
    },
    {
      id: 5,
      name: "I cut my food into small pieces.",
      description: "5",
    },
    {
      id: 6,
      name: "I am aware of the calorie content of foods that I eat.",
      description: "6",
    },
    {
      id: 7,
      name: "I particularly avoid food with high carbohydrate content.",
      description: "7",
    },
    {
      id: 8,
      name: "I feel that others would prefer if I ate more.",
      description: "8",
    },
    {
      id: 9,
      name: "I vomit after I have eaten.",
      description: "9",
    },
    {
      id: 10,
      name: "I feel extremely guilty after eating.",
      description: "10",
    },
    {
      id: 11,
      name: "I am preoccupied with the a desire to be thinner.",
      description: "11",
    },
    {
      id: 12,
      name: "I think about burning up calories by exercising.",
      description: "12",
    },
    {
      id: 13,
      name: "Other people think that i am too thin.",
      description: "13",
    },
    {
      id: 14,
      name: "I am preoccupied with the thought of having fat on my body.",
      description: "14",
    },
    {
      id: 15,
      name: "I take longer than others to eat my meals.",
      description: "15",
    },
    {
      id: 16,
      name: "I avoid foods with sugar in them.",
      description: "16",
    },
    {
      id: 17,
      name: "I eat diet foods.",
      description: "17",
    },
    {
      id: 18,
      name: "I feel that food controls my life.",
      description: "18",
    },
    {
      id: 19,
      name: "I display self-control around food.",
      description: "19",
    },
    {
      id: 20,
      name: "I feel that others pressure me to eat more.",
      description: "20",
    },
    {
      id: 21,
      name: "I give too much time and thought to food.",
      description: "21",
    },
    {
      id: 22,
      name: "I feel uncomfortable after I eat sweets.",
      description: "22",
    },
    {
      id: 23,
      name: "I engage in dieting behaviour.",
      description: "23",
    },
    {
      id: 24,
      name: "I like my stomach to be empty.",
      description: "24",
    },
    {
      id: 25,
      name: "I have the impulse to vomit after meals.",
      description: "25",
    },
  ];

  const options = [
    {
      id: 0,
      name: "Never",
    },
    {
      id: 1,
      name: "Rarely",
    },
    {
      id: 2,
      name: "Sometimes",
    },
    {
      id: 3,
      name: "Often",
    },
    {
      id: 4,
      name: "Usually",
    },
    {
      id: 5,
      name: "Always",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [questionNo, setQuestionNo] = useState(1);
  const [selected, setSelected] = useState(-1);
  const [score, setScore] = useState(0);

  function updateUser() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (true) {
      let fullName = user?.displayName;
      if (user) {
        console.log("mda" + score);
        setScore(score / 2);
        console.log("mda" + score);
        fullName = fullName + "$" + score;
        updateProfile(user, {
          displayName: fullName,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log(user.displayName);
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      }
    }
  }

  function changePage() {
    //add to score the id from the option selected
    console.log("Selected: " + selected);
    console.log("Score2: " + score);
    console.log("Score3: " + (score + selected));
    if (selected != -1) {
      let tempScore = score + selected;
      setScore(tempScore);
      console.log("Score1: " + score);
    }
    if (currentPage < 25) {
      setSelected(-1);
      setCurrentPage(currentPage + 1);
      console.log(currentPage + 1);
    } else {
      updateUser();
      navigation.navigate("LastPageSignUp");
    }
  }

  //set change with the value of the option selected
  function changeSelected(value: number) {
    setSelected(value);
  }

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
            onPress={() => navigation.navigate("GoToQuizz")}
          />

          <Text
            style={[
              styles.text,
              styles.textBodyLarge,
              styles.textCenter,
              { marginLeft: "2.5%" },
            ]}
          >
            Quizz
          </Text>
        </View>
        <Avatar.Icon
          size={134}
          icon="dots-horizontal"
          color="#c1dbc1"
          style={{
            backgroundColor: "transparent",
            height: 122 * 0.8,
            marginTop: "2%",
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
                <View>
                  <Text
                    style={[styles.text, styles.headlineSmall, styles.textBold]}
                  >
                    {question.name}
                  </Text>

                  {options.map((option) => (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginVertical: "1%",
                      }}
                    >
                      <IconButton
                        icon={
                          option.id == selected
                            ? "radiobox-marked"
                            : "radiobox-blank"
                        }
                        size={18}
                        onPress={() => changeSelected(option.id)}
                      />
                      <Text style={[styles.text, { fontSize: 18 }]}>
                        {option.name}
                      </Text>
                    </View>
                  ))}
                </View>
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
              { marginTop: "35%", marginBottom: "10%" },
            ]}
            onPress={() => {
              changePage();
            }}
          >
            <Text style={[styles.text, styles.textBodyLarge]}>Next</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizzScreen;
