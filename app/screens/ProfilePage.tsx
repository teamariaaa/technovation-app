import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
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
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

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
    <ScrollView>
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
                  Symptoms
                </Title>
                <Surface style={styles.surface} elevation={0}>
                  {problems.map((problem, index) => {
                    return (
                      <Chip key={index} style={styles.chip}>
                        <Text style={styles.text}>{problem}</Text>
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
                      textColor={
                        display === "Diagnosis" ? "#246324" : "#555555"
                      }
                    >
                      Diagnosis
                    </Button>
                  </View>
                </Surface>
                {display === "Information" && (
                  <View style={{ marginTop: 10 }}>
                    <Card
                      mode="elevated"
                      style={{ backgroundColor: "#fff2bd" }}
                    >
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
                          <DataTable.Cell>
                            <Text style={[styles.text, styles.bodyMedium]}>
                              First Name
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell numeric>
                            <Text style={[styles.text, styles.bodyMedium]}>
                              Tom
                            </Text>
                          </DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                          <DataTable.Cell>
                            <Text style={[styles.text, styles.bodyMedium]}>
                              Last Name
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell numeric>
                            <Text style={[styles.text, styles.bodyMedium]}>
                              Stuart
                            </Text>
                          </DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                          <DataTable.Cell>
                            <Text style={[styles.text, styles.bodyMedium]}>
                              Date of Birth
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell numeric>
                            <Text style={[styles.text, styles.bodyMedium]}>
                              07 June 1999
                            </Text>
                          </DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                          <DataTable.Cell>
                            <Text style={[styles.text, styles.bodyMedium]}>
                              Gender
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell numeric>
                            <Text style={[styles.text, styles.bodyMedium]}>
                              male
                            </Text>
                          </DataTable.Cell>
                        </DataTable.Row>
                      </Card.Content>
                    </Card>

                    <Card
                      mode="elevated"
                      style={{ backgroundColor: "#fff2bd", marginTop: 30 }}
                    >
                      <Card.Title
                        style={{ margin: 10, marginBottom: 0 }}
                        title="Additional"
                        titleStyle={[
                          styles.text,
                          styles.textBold,
                          styles.headlineSmall,
                          { marginBottom: 0 },
                        ]}
                      />
                      <Card.Content style={{ margin: 10 }}>
                        <Paragraph
                          style={[
                            styles.text,
                            styles.textBodyLarge,
                            { marginBottom: 10 },
                          ]}
                        >
                          Therapist Notes:
                        </Paragraph>
                        <Paragraph style={[styles.text, styles.bodyMedium]}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Proin nisi metus, lobortis ut quam vitae,
                          aliquet volutpat turpis. Donec convallis hendrerit
                          dolor, ut accumsan risus lobortis nec. Suspendisse
                          potenti. Donec quis rhoncus diam, vel faucibus massa.
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Aenean
                          placerat, neque ut tempor ultrices, sapien libero
                          dignissim magna, non gravida urna turpis nec nunc.
                        </Paragraph>
                      </Card.Content>
                    </Card>
                  </View>
                )}

                {display === "Medicine" && (
                  <View style={{ marginTop: 10 }}>
                    <Card
                      mode="elevated"
                      style={{ backgroundColor: "#fff2bd", marginTop: 30 }}
                    >
                      <Card.Title
                        style={{ margin: 10, marginBottom: 0 }}
                        title="Dr. Nichifor Lipan"
                        titleStyle={[
                          styles.text,
                          styles.headlineSmall,
                          styles.textBold,
                          { marginBottom: 0 },
                        ]}
                      />
                      <Card.Content style={{ margin: 10 }}>
                        <View
                          style={{
                            //paddingVertical: 10,
                            //paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Icon name="pill" color={"#3C403D"} size={24} />
                          <Text
                            style={[
                              styles.text,
                              styles.textBodyLarge,
                              styles.textBold,
                            ]}
                          >
                            Medicine name:
                          </Text>
                        </View>

                        <View
                          style={{
                            //paddingVertical: 10,
                            //paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Icon
                            name="circle-outline"
                            color={"#3C403D"}
                            size={14}
                          />
                          <Text
                            style={[
                              styles.text,
                              styles.bodyMedium,
                              { marginTop: 5 },
                            ]}
                          >
                            Metformin
                          </Text>
                        </View>

                        <Text
                          style={[
                            styles.text,
                            styles.textBodyLarge,
                            styles.textBold,
                            { marginTop: 10 },
                          ]}
                        >
                          Strength:
                        </Text>

                        <Text
                          style={[
                            styles.text,
                            styles.bodyMedium,
                            { marginTop: 5 },
                          ]}
                        >
                          500mg
                        </Text>

                        <Text
                          style={[
                            styles.text,
                            styles.textBodyLarge,
                            styles.textBold,
                            { marginTop: 10 },
                          ]}
                        >
                          Dose:
                        </Text>

                        <Text
                          style={[
                            styles.text,
                            styles.bodyMedium,
                            { marginTop: 5 },
                          ]}
                        >
                          1-0-1
                        </Text>

                        <Text
                          style={[
                            styles.text,
                            styles.textBodyLarge,
                            styles.textBold,
                            { marginTop: 10 },
                          ]}
                        >
                          Duration:
                        </Text>

                        <Text
                          style={[
                            styles.text,
                            styles.bodyMedium,
                            { marginTop: 5 },
                          ]}
                        >
                          6 months
                        </Text>
                      </Card.Content>
                    </Card>
                  </View>
                )}
                {display === "Diagnosis" && <Paragraph>Diagnosis</Paragraph>}
              </Card.Content>
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
