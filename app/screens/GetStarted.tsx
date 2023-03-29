import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-config.json";
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
} from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
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
    <View style={{ backgroundColor: "#aac0aa", flex: 1 }}>
      <View style={styles.container}>
        <Paragraph style={styles.headlineSmall}>RecoverEats</Paragraph>
        <Image
          style={styles.img}
          source={require("../../assets/people-eating.png")}
        />

        <Button
          //mode="outlined"
          style={styles.myButton}
          onPress={() => navigation.navigate("Main")}
        >
          Get started
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
  img: {
    width: win.width / 1.05,
    height: win.width / 1.05,
    marginBottom: "30%",
  },
  myButton: {
    alignSelf: "center",
    backgroundColor: "#fff2bd",
  },

  containerText: {
    marginTop: "30%",
    marginBottom: "10%",
  },

  headlineSmall: {
    fontFamily: "Rubik",
    fontSize: 30,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 30,
    marginTop: "30%",
    marginBottom: "15%",
  },
});
