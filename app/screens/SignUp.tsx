import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../config/firebase.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
} from "react-native-paper";
import { red100 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";
import styles from "../global.styles.js";

const app = firebaseConfig;
const auth = getAuth(app);

const SignUpcreen = ({ navigation }: any) => {
  // onAuthStateChanged(auth, user => {
  //     if (user != null) {
  //         AsyncStorage.setItem('@user', JSON.stringify(user))
  //             .then(() => navigation.navigate('Main'));
  //     }
  // });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  // async function signUp() {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //     navigation.navigate("Main");
  //   } catch (error) {}
  // }

  function signUp() {
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  }

  function getToTest(){
    navigation.navigate("Main");
  }

  const inputStyle: StyleProp<ViewStyle> = {
    alignSelf: "stretch",
    margin: 20,
  };

  return (
    <View style={styles.container}>
      <View style={styles.upContainer}>
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
            styles.titleLarge,
            styles.textSemiBold,
            styles.textCenter,
          ]}
        >
          Sign up
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Paragraph style={[styles.headlineSmall, styles.textBold]}>
          Welcome!
        </Paragraph>
        <Paragraph style={(styles.bodyMedium, styles.lightText)}>
          Enter your credential login
        </Paragraph>

        <TextInput
          mode="flat"
          style={styles.TextInput}
          label="Email"
          left={<TextInput.Icon icon="email" />}
          value={email}
          onChangeText={(email: string) => setEmail(email)}
        />
        <TextInput
          mode="flat"
          label="Password"
          style={[styles.TextInput, styles.noTopMargin]}
          secureTextEntry={hidePassword}
          value={password}
          onChangeText={(password) => setPassword(password)}
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon="eye"
              onPress={() => setHidePassword(!hidePassword)}
            />
          }
        />
        <Button
          mode="elevated"
          style={[
            styles.myButton,
            styles.marginButtonTop,
            styles.noBottomMargin,
          ]}
          onPress={() => {signUp(); getToTest();}}
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

export default SignUpcreen;
