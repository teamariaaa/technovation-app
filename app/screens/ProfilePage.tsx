import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import MainLayout from "./Layout";
import {
  Card,
  Paragraph,
  Avatar,
  Title,
  Chip,
  Surface,
  Button,
} from "react-native-paper";

const Stack = createNativeStackNavigator();

const LeftContent = () => (
  <Avatar.Image
    size={24}
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

  const styles = StyleSheet.create({
    surface: { display: "flex", flexDirection: "row", flexWrap: "wrap" },
    chip: { margin: 5 },
  });

  return (
    <MainLayout>
      <Card mode="outlined">
        <Card.Title title="Tom Stuart" subtitle="25 yo" left={LeftContent} />
        <Card.Content>
          <Title>Complaints</Title>
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
            <Button
              onPress={() => setDisplay("Information")}
              textColor={display === "Information" ? "green" : "gray"}
            >
              Information
            </Button>
            <Button
              onPress={() => setDisplay("Medicine")}
              textColor={display === "Medicine" ? "green" : "gray"}
            >
              Medicine
            </Button>
            <Button
              onPress={() => setDisplay("Diagnosis")}
              textColor={display === "Diagnosis" ? "green" : "gray"}
            >
              Diagnosis
            </Button>
          </Surface>
          {display === "Information" && <Paragraph>Information</Paragraph>}
          {display === "Medicine" && <Paragraph>Medicine</Paragraph>}
          {display === "Diagnosis" && <Paragraph>Diagnosis</Paragraph>}
        </Card.Content>
      </Card>
    </MainLayout>
  );
};

export default ProfileScreen;
