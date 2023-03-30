import React, { useState } from "react";
import { initializeApp } from "firebase/app";
//import firebaseConfig from "../../firebase-config.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const LoginScreen = ({ navigation }: any) => {
  // onAuthStateChanged(auth, user => {
  //     if (user != null) {
  //         AsyncStorage.setItem('@user', JSON.stringify(user))
  //             .then(() => navigation.navigate('Main'));
  //     }
  // });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

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
          Sign in
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Paragraph style={[styles.headlineSmall, styles.textBold]}>
          Welcome back
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
          onPress={() => navigation.navigate("Main")}
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
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.hightlightText}>Sign Up</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff2bd",
    // backgroundColor: "red",
    //backgroundColor: "red",
  },

  containerRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    alignSelf: "center",
  },

  img: {
    width: win.width / 1.2,
    height: win.width / 1.2,
    marginBottom: "20%",
  },

  logoImg: {
    width: win.width / 5,
    height: win.width / 5,
  },

  myButton: {
    //height: 16,
    alignSelf: "center",
    backgroundColor: "#fff2bd",
    borderRadius: 20,
    width: 250,
    marginTop: "8%",
  },

  smallHiddenButton: {
    alignSelf: "center",
    backgroundColor: "transparent",
    borderRadius: 20,
    width: 100,
  },

  roundButton: {
    width: 5,
    height: 25,
    borderRadius: 200,
    //alignSelf: "center",
  },

  marginButtonTop: {
    marginTop: 100,
  },

  containerText: {
    marginTop: "30%",
    marginBottom: "10%",
  },

  text: {
    color: "#333333",
  },

  lightText: {
    color: "#555555",
  },

  hightlightText: {
    color: "#246324",
  },

  headlineBig: {
    fontFamily: "Cabin",
    fontSize: 36,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 36,
    marginTop: "5%",
    marginBottom: "5%",
  },

  headlineSmall: {
    fontFamily: "Cabin",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 32,
    marginBottom: "5%",
  },

  titleLarge: {
    fontFamily: "Cabin",
    fontSize: 22,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 28,
  },

  textBodyLarge: {
    fontFamily: "Cabin",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.15,
    lineHeight: 24,
  },

  bodyMedium: {
    fontFamily: "Cabin",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.25,
    lineHeight: 20,
  },

  textBold: {
    fontWeight: "700",
  },

  textSemiBold: {
    fontWeight: "600",
  },

  upContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: "2.5%",
    backgroundColor: "#fff2bd",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },

  bottomContainer: {
    flex: 3,
    backgroundColor: "#c1dbc1",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 50,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  iconButton: {
    backgroundColor: "#c1dbc1",
  },

  textCenter: {
    paddingLeft: "27%",
  },

  TextInput: {
    backgroundColor: "#eeeee4",
    width: "100%",
    height: 50,
    color: "#333",
    marginTop: 40,
    marginBottom: 40,
  },

  noMargin: {
    margin: 0,
  },

  noTopMargin: {
    marginTop: 0,
  },

  noBottomMargin: {
    marginBottom: 0,
  },
});
