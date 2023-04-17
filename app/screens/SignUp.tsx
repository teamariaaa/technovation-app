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
        .then(() => {})
        .catch((error) => {});
    }
  }

  function signUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        navigation.navigate("GetUserPersonalData");
      })
      .catch((error) => {
        setEmailError("");
        setPasswordError("");
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code === "auth/email-already-in-use") {
          setEmailError("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          setEmailError("That email address is invalid!");
        }

        if (error.code === "auth/invalide-password") {
          setPasswordError("invalide-password");
        }

        if (error.code === "auth/weak-password") {
          setPasswordError("Password should be at least six characters");
        }
      });
  }

  function getToTest() {
    navigation.navigate("GetUserPersonalData");
  }

  const inputStyle: StyleProp<ViewStyle> = {
    alignSelf: "stretch",
    margin: 20,
  };

  function changePage() {
    navigation.navigate("Start");
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
            Welcome to RecoverEats!
          </Paragraph>
          <Paragraph
            style={[
              styles.bodyMedium,
              styles.lightText,
              { width: "75%", marginBottom: "5%" },
            ]}
          >
            In order to create an account, please enter your email and password.
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
          <Text style={styles.errorText}>{emailError}</Text>
          <TextInput
            mode="flat"
            label="Password"
            style={[
              styles.TextInput,
              { marginTop: "5%", height: 50, marginBottom: "5%" },
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
        </View>
        <Button
          mode="elevated"
          style={[styles.myButton, styles.noBottomMargin, { marginTop: "25%" }]}
          onPress={() => {
            signUp();
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpcreen;
