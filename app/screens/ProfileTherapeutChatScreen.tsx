import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Animated, Text, View, Dimensions, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Button, TextInput } from "react-native-paper";

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
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView style={styles.container}>
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
        <ScrollView style={{ alignSelf: "flex-start", width: "100%", padding: 10, paddingBottom: 80, flex: 1, }}>
          {therapistItem.messages.length == 0 && <Text>No messages</Text>}
          {therapistItem.messages.map((message: any, index: number) => {
            return (
              <View
                key={index}
                style={{ alignSelf: message.sender ? "flex-end" : "flex-start", marginBottom: 10, padding: 10, borderRadius: 20,
                backgroundColor: message.sender ? "#2a9d8f" : "#f4a261", marginLeft: message.sender ? "45%" : '0%', maxWidth: '50%'}}>

                <Text style={{ textAlign: message.sender ? "right" : "left" }}> {message.text} </Text>
                <View style={message.sender ? styles.rightArrow : styles.leftArrow}></View>
                <View style={message.sender ? styles.rightArrowOverlap : styles.leftArrowOverlap}></View>
              </View>
            );
          })}
        </ScrollView>
        <KeyboardAvoidingView
          style={{ flex: 1, height: "20%" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        >
          <View style={{ flex: 1, height: "20%" }}>
            <View
              style={{
                alignSelf: "flex-start",
                height: "20%",
                width: "100%",
                // padding: 10,
                paddingBottom: 80,
                // flex: 1,
                backgroundColor: '#fff'
              }}
            >
              {/* Chat messages */}
            </View>
            <View
              style={{
                height: Dimensions.get("window").height * 0.2,
                width: Dimensions.get("window").width,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                // padding: 25,
                backgroundColor: '#fff'
              }}
            >

              <TextInput
                style={{ flex: 1 }}
                value={message}
                onChangeText={(m) => setMessage(m)}
                placeholder="Write a message..."

              />
              <Button
                style={{
                  backgroundColor: "#264653",
                  width: 80,
                  borderRadius: 0,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => sendMessage()}
              >
                <Text style={{ fontSize: 27, lineHeight: 40 }}>💬</Text>
              </Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};
export default ProfileTherapeutChatScreen;

const win = Dimensions.get("window");

const styles = StyleSheet.create({

  rightArrow:
  {
    position: "absolute",
    backgroundColor: "#2a9d8f",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },
  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#fff",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20

  },
  leftArrow: {
    position: "absolute",
    backgroundColor: "#f4a261",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10
  },

  leftArrowOverlap: {
    position: "absolute",
    backgroundColor: "#fff",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20

  },

  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
    height: "70%"
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
