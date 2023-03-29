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
    <View
      style={{
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
        height: "50%",
        marginTop: "60%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={styles.img}
        source={require("../../assets/people-eating.png")}
      />

      <TextInput
        mode="outlined"
        style={inputStyle}
        label="Email"
        value={email}
        onChangeText={(email: string) => setEmail(email)}
      />
      <TextInput
        mode="outlined"
        label="Password"
        style={inputStyle}
        secureTextEntry={hidePassword}
        value={password}
        onChangeText={(password) => setPassword(password)}
        right={
          <TextInput.Icon
            icon="eye"
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Button
        mode="outlined"
        style={{ alignSelf: "center" }}
        onPress={() => navigation.navigate("Main")}
      >
        Login
      </Button>
    </View>
  );
};

export default LoginScreen;

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  img: {
    width: win.width / 1.2,
    height: win.width / 1.2,
    marginBottom: "10%",
  },
});
