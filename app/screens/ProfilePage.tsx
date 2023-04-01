import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import MainLayout from "./Layout";
import {
  Card,
  Paragraph,
  Avatar,
  Title,
  Chip,
  Surface,
  Button,
  IconButton,
  DataTable,
} from "react-native-paper";
import styles from "../global.styles.js";
import Icon from "@expo/vector-icons/Octicons";

const Stack = createNativeStackNavigator();

const LeftContent = () => (
  <Avatar.Image
    size={70}
    source={require("../../assets/profilePicture.jpeg")}
  />
);

const ProfileScreen = ({ navigation }: any) => {
  const [problems, setProblems] = useState<string[]>([
    "anger",
    "mood swings",
    "insomnia",
    "depression",
    "anxiety",
  ]);

  const [display, setDisplay] = useState<string>("Information");

  const win = Dimensions.get("window");

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFCEF", marginLeft: 0 }}>
      <View
        style={{
          marginTop: 45,
          marginBottom: 30,
          //backgroundColor: "red",
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

      <IconButton
        icon="cog-outline"
        mode="contained-tonal"
        style={[
          styles.iconButton,
          { position: "absolute", marginLeft: win.width - 50, marginTop: 35 },
        ]}
        size={25}
        onPress={() => navigation.navigate("Start")}
      />
      <View style={{ flex: 20, backgroundColor: "#FFFCEF" }}>
        <Card mode="contained">
          <View style={{ backgroundColor: "#FFFCEF" }}>
            <Card.Title
              style={{ margin: 10 }}
              title="Tom Stuart"
              titleStyle={(styles.text, styles.textBold)}
              subtitle="age sickness treatment"
              subtitleStyle={[styles.text, styles.hightlightText]}
              left={LeftContent}
              leftStyle={{ marginRight: 40 }} //style={{ margin: 10 }}
            />
            <Card.Content style={{ margin: 10 }}>
              <Title
                style={[styles.text, styles.textBold, styles.headlineSmall]}
              >
                Symptoms
              </Title>
              <Surface style={styles.surface} elevation={0}>
                {problems.map((problem, index) => {
                  return (
                    <Chip key={index} style={styles.chip}>
                      {problem}
                    </Chip>
                  );
                })}
              </Surface>
              <Surface style={styles.surface} elevation={0}>
                <View style={styles.profilePageAboutSuface}>
                  <Button
                    onPress={() => setDisplay("Information")}
                    textColor={
                      display === "Information" ? "#246324" : "#555555"
                    }
                  >
                    Information
                  </Button>
                  <Button
                    onPress={() => setDisplay("Medicine")}
                    textColor={display === "Medicine" ? "#246324" : "#555555"}
                  >
                    Medicine
                  </Button>
                  <Button
                    onPress={() => setDisplay("Diagnosis")}
                    textColor={display === "Diagnosis" ? "#246324" : "#555555"}
                  >
                    Diagnosis
                  </Button>
                </View>
              </Surface>
              {display === "Information" && (
                <View style={{ marginTop: 10 }}>
                  <Card mode="elevated" style={{ backgroundColor: "#fff2bd" }}>
                    <Card.Title
                      style={{ margin: 10, marginBottom: 0 }}
                      title="Information"
                      titleStyle={[
                        styles.text,
                        styles.textBold,
                        styles.headlineSmall,
                        { marginBottom: 0 },
                      ]}
                    />
                    <Card.Content style={{ margin: 10 }}>
                      <DataTable.Row>
                        <DataTable.Cell>First Name</DataTable.Cell>
                        <DataTable.Cell numeric>Tom</DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row>
                        <DataTable.Cell>Last Name</DataTable.Cell>
                        <DataTable.Cell numeric>Stuart</DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row>
                        <DataTable.Cell>Date of Birth</DataTable.Cell>
                        <DataTable.Cell numeric>07 June 1999</DataTable.Cell>
                      </DataTable.Row>

                      <DataTable.Row>
                        <DataTable.Cell>Gender</DataTable.Cell>
                        <DataTable.Cell numeric>male</DataTable.Cell>
                      </DataTable.Row>

                      {/* 
                      <DataTable>
                        <DataTable.Header>
                          <DataTable.Title>
                            {" "}
                            <Text style={styles.text}>First Name </Text>
                          </DataTable.Title>
                          <DataTable.Title numeric>
                            {" "}
                            <Text style={styles.text}>Tom </Text>
                          </DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Header>
                          <DataTable.Title>
                            {" "}
                            <Text style={styles.text}>Last Name </Text>
                          </DataTable.Title>
                          <DataTable.Title>
                            {" "}
                            <Text style={styles.text}>Stuart </Text>
                          </DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Header>
                          <DataTable.Title>
                            {" "}
                            <Text style={styles.text}>Age </Text>
                          </DataTable.Title>
                          <DataTable.Title numeric>
                            {" "}
                            <Text style={styles.text}>25 yo </Text>
                          </DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Header>
                          <DataTable.Title>
                            {" "}
                            <Text style={styles.text}>Gender </Text>
                          </DataTable.Title>
                          <DataTable.Title>
                            {" "}
                            <Text style={styles.text}>male</Text>
                          </DataTable.Title>
                        </DataTable.Header>
                      </DataTable> */}
                    </Card.Content>
                  </Card>
                </View>
              )}
              {display === "Medicine" && <Paragraph>Medicine</Paragraph>}
              {display === "Diagnosis" && <Paragraph>Diagnosis</Paragraph>}
            </Card.Content>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default ProfileScreen;
