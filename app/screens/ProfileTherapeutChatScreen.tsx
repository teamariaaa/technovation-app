import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Button, IconButton, TextInput } from "react-native-paper";
import globalstyles from "../global.styles.js";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const { width, height } = Dimensions.get("screen");

interface Props {
  route: { params: { item: any } };
  navigation: NativeStackNavigationProp<any>;
}

const ProfileTherapeutChatScreen = ({ route, navigation }: Props) => {
  const { item } = route.params;
  const [therapistItem, setTherapistItem] = useState(item);
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    if (message == "") {
      return;
    }

    let newTherapistItem = { ...therapistItem };
    newTherapistItem.messages.push({ text: message, sender: true });
    setTherapistItem(newTherapistItem);
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: "#FFFCEF",
      }}
    >
      <SafeAreaView style={styles.container}>
        <View
          style={[styles.upContainer]}
        >
          <IconButton
            icon="keyboard-backspace"
            mode="contained-tonal"
            style={[globalstyles.iconButton, { marginRight: 33 }]}
            size={20}
            onPress={() => navigation.goBack()}
          />

          <Text
            style={{
              fontFamily: "Cabin",
              fontSize: 24,
              fontWeight: "400",
              letterSpacing: 0,
              lineHeight: 36,
              marginTop: "10%",
              marginBottom: "10%",
              color: "#333333",
              textAlign: "center",
            }}
          >
            Chat with {item.name}
          </Text>
        </View>
        <ScrollView
          style={{
            alignSelf: "flex-start",
            width: "100%",
            padding: 10,
            paddingBottom: 80,
            flex: 1,
          }}
        >
          {therapistItem.messages.length == 0 && <Text>No messages</Text>}
          {therapistItem.messages.map((message: any, index: number) => {
            return (
              <View
                key={index}
                style={{
                  alignSelf: message.sender ? "flex-end" : "flex-start",
                  marginBottom: 10,
                  padding: 10,
                  borderRadius: 20,
                  backgroundColor: message.sender ? "#DBEAB3" : "#EEF5DB",
                  marginLeft: message.sender ? "45%" : "0%",
                  maxWidth: "50%",
                }}
              >
                <Text style={{ marginLeft: 7, textAlign: "left" }}>
                  {" "}
                  {message.text}{" "}
                </Text>
                <View
                  style={message.sender ? styles.rightArrow : styles.leftArrow}
                ></View>
                <View
                  style={
                    message.sender
                      ? styles.rightArrowOverlap
                      : styles.leftArrowOverlap
                  }
                ></View>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            height: 70,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "#FFFCEF",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              marginLeft: 15,
              backgroundColor: "#FFF2BC",
            }}
            value={message}
            activeUnderlineColor="#FFF2BC"
            underlineColor="#FFF2BC"
            onChangeText={(m) => setMessage(m)}
            placeholder="Write a message..."
          />
          <Button
            style={{
              backgroundColor: "#c1dbc1",
              height: 56,
              borderRadius: 20,
              position: "relative",
              right: 17,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => sendMessage()}
          >
            <Text
              style={{
                fontSize: 27,
                lineHeight: 40,
                marginTop: 20,
                textAlign: "center",
              }}
            >
              💬
            </Text>
          </Button>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default ProfileTherapeutChatScreen;

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  upContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: "2.5%",
    backgroundColor: "#fffcef",
    alignItems: "center",
    justifyContent: "flex-start",
    maxHeight :110,
    marginTop: "10%",
    marginBottom: "0%",
  },

  rightArrow: {
    position: "absolute",
    backgroundColor: "#DBEAB3",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },
  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },
  leftArrow: {
    position: "absolute",
    backgroundColor: "#EEF5DB",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },

  leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },

  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
    height: "70%",
    marginLeft: 10,
    marginRight: 10,
  },

  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },

  text: {
    color: "#3C403D",
    fontFamily: "Cabin",
  },
});
