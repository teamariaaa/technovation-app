import React, { useState } from "react";
import { initializeApp } from "firebase/app";
//import firebaseConfig from "../firebase-config.json";
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
import { Button, Paragraph, TextInput, Surface } from "react-native-paper";
import { red100 } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const GetStarted = ({ navigation }: any) => {
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
    <View style={{ backgroundColor: "#c1dbc1", flex: 1 }}>
      <View style={styles.container}>
        <Paragraph style={[styles.headlineBig, styles.text, styles.textBold]}>
          RecoverEats
        </Paragraph>
        <Image
          style={styles.img}
          source={require("../../assets/people-eating.png")}
        />

        <Button
          mode="elevated"
          style={styles.myButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text
            style={[styles.textBodyLarge, styles.text, styles.textSemiBold]}
          >
            Get started
          </Text>
        </Button>

        <Button
          mode="elevated"
          style={styles.myButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={[styles.textBodyLarge, styles.text, styles.textSemiBold]}
          >
            Log in
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default GetStarted;

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "red",
  },
  containerRow: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    color: "#333",
    borderRadius: 20,
    width: 250,
    marginTop: "8%",
  },

  containerText: {
    marginTop: "30%",
    marginBottom: "10%",
  },
  text: {
    color: "#333333",
  },

  headlineBig: {
    fontFamily: "Cabin",
    fontSize: 36,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 36,
    marginTop: "30%",
    marginBottom: "15%",
  },

  textBodyLarge: {
    fontFamily: "Cabin",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.15,
    lineHeight: 24,
  },

  textBold: {
    fontWeight: "700",
  },

  textSemiBold: {
    fontWeight: "600",
  },

  Surface: {
    backgroundColor: "red",
    borderRadius: 20,
    width: 250,
    marginTop: "8%",
    alignItems: "center",
    justifyContent: "center",
  },
});
