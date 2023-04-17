import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../config/firebase.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");

  function LogIn() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setEmailError("");
        setPasswordError("");
        const user = userCredential.user;
        navigation.navigate("Main");
      })
      .catch((error) => {
        setEmailError("");
        setPasswordError("");
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code === "auth/user-not-found") {
          setEmailError("Invalid email");
          setPasswordError("Invalide password");
        }

        if (error.code === "auth/invalid-email") {
          setEmailError("That email address is invalid!");
        }

        if (error.code === "auth/wrong-password") {
          setPasswordError("Wrong password!");
        }
      });
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
            onPress={() => navigation.navigate("Start")}
          />

          <Text
            style={[
              styles.text,
              styles.textBodyLarge,
              styles.textCenter,
              { marginLeft: "2.5%" },
            ]}
          >
            Log in
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
            Welcome back!
          </Paragraph>
          <Paragraph
            style={[
              styles.bodyMedium,
              styles.lightText,
              { width: "75%", marginBottom: "5%" },
            ]}
          >
            Enter your credential login
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
          <Text style={[styles.errorText]}> {emailError}</Text>

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
          <Text style={[styles.errorText]}>{passwordError}</Text>
        </View>
        <Button
          mode="elevated"
          style={[styles.myButton, styles.noBottomMargin, { marginTop: "25%" }]}
          onPress={() => {
            LogIn();
          }}
        >
          <Text style={[styles.text, styles.textBodyLarge]}>Sign in</Text>
        </Button>

        <View style={[styles.containerRow, styles.noMargin]}>
          <Paragraph style={(styles.bodyMedium, styles.lightText)}>
            Don't have an account?
          </Paragraph>
          <Button
            mode="text"
            style={styles.smallHiddenButton}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.hightlightText}>Sign Up</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
