import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Dimensions, ScrollView } from "react-native";
import {
  Card,
  Paragraph,
  Avatar,
  Title,
  Button,
} from "react-native-paper";
import styles from "../global.styles.js";


const LeftContent = () => (
  <Avatar.Image
    size={70}
    source={require("../../assets/profilePicture.jpeg")}
  />
);

const MealTrackingScreen = ({ navigation }: any) => {

  const win = Dimensions.get("window");

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#FFFCEF", marginLeft: 0 }}>
        <View
          style={{
            marginTop: 45,
            marginBottom: 30,
          }}
        >
          <Paragraph
            style={[
              styles.text,
              styles.textBodyLarge,
              styles.textSemiBold,
              { alignSelf: "center" },
            ]}
          >
            Profile Info
          </Paragraph>
        </View>

        <Button
          mode="contained-tonal"
          style={[
            styles.myButton,
            { position: "absolute", marginLeft: win.width - 50, marginTop: 35 },
          ]}
          onPress={() => navigation.navigate("Diary")}
        >
          Diary
        </Button>
        <View style={{ flex: 20, backgroundColor: "#FFFCEF" }}>
          <Card mode="contained">
            <View style={{ backgroundColor: "#FFFCEF" }}>
              <Card.Title
                style={{ margin: 10 }}
                title="Tom Stuart"
                titleStyle={[styles.text, styles.textBold]}
                subtitle="age sickness treatment"
                subtitleStyle={[styles.text, styles.hightlightText]}
                left={LeftContent}
                leftStyle={{ marginRight: 40 }} //style={{ margin: 10 }}
              />
              <Card.Content style={{ margin: 10 }}>
                <Title
                  style={[styles.text, styles.textBold, styles.headlineSmall]}
                >
                  Hello, Tom Stuart
                </Title>
              </Card.Content>
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealTrackingScreen;
