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
} from "react-native-paper";
import { red100 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";
import styles from "../global.styles.js";

// import database from "@react-native-firebase/database";
// import { firebase } from "@react-native-firebase/database";

const app = firebaseConfig;
const auth = getAuth(app);

const SignUpcreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function updateUser() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      let userName = lastName + "," + firstName;
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

  function signUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //updateUser();
        //writeUserData(user.uid, name, email, "");

        navigation.navigate("GetUserPersonalData");
      })
      .catch((error) => {
        setEmailError("");
        setPasswordError("");
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
          setEmailError("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
          setEmailError("That email address is invalid!");
        }

        if (error.code === "auth/invalide-password") {
          console.log("invalide-password");
          setPasswordError("invalide-password");
        }

        if (error.code === "auth/weak-password") {
          console.log("weak-password");
          setPasswordError("Password should be at least six characters");
        }
        console.error(error);
      });
  }

  function getToTest() {
    navigation.navigate("GetUserPersonalData");
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
      <View style={[styles.bottomContainer]}>
        <Paragraph style={[styles.headlineSmall, styles.textBold]}>
          Welcome!
        </Paragraph>
        <Paragraph style={(styles.bodyMedium, styles.lightText)}>
          Enter your personal data
        </Paragraph>
        <TextInput
          mode="flat"
          style={[
            styles.TextInput,
            { marginTop: "10%", height: 50, marginBottom: "5%" },
          ]}
          label="Email"
          left={<TextInput.Icon icon="email" />}
          value={email}
          onChangeText={(email: string) => setEmail(email)}
        />

        <TextInput
          mode="flat"
          label="Password"
          style={[
            styles.TextInput,
            //styles.noTopMargin,
            { marginTop: "10%", height: 50 },
          ]}
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
        <Text style={styles.errorText}> {passwordError}</Text>
        <Text style={styles.errorText}>{emailError}</Text>
        <Button
          mode="elevated"
          style={[
            styles.myButton,
            //styles.marginButtonTop,
            styles.noBottomMargin,
            { marginTop: "50%" },
          ]}
          onPress={() => {
            //signUp();
            navigation.navigate("GetUserPersonalData");
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

export default SignUpcreen;
