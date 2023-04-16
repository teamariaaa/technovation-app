import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  RefreshControlBase,
} from "react-native";
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
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();

const LeftContent = () => (
  <Avatar.Image
    size={70}
    source={require("../../assets/profilePicture.jpeg")}
  />
);

const ProfileScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  // const [name, setName] = useState("");
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     const displayName = user.displayName;
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });

  const [problems, setProblems] = useState<string[]>([
    "anger",
    "mood swings",
    "insomnia",
    "depression",
    "anxiety",
  ]);

  const [display, setDisplay] = useState<string>("Information");

  const win = Dimensions.get("window");

  let fullName = user?.displayName;
  let age;
  let gender;
  let weight;
  let height;

  let name;
  name = fullName?.split("$");
  fullName = name ? name[0] + " " + name[1] : "";
  age = name ? name[2] : "";
  gender = name ? name[3] : "";
  weight = name ? name[4] : "";
  height = name ? name[5] : "";

  console.log(fullName);
  console.log(name);

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
          // onPress={() => navigation.navigate("Start")}
        />
        <View style={{ flex: 20, backgroundColor: "#FFFCEF" }}>
          <Card mode="contained">
            <View style={{ backgroundColor: "#FFFCEF" }}>
              <Card.Title
                style={{ margin: 10 }}
                title={fullName}
                titleStyle={[styles.text, styles.textBold]}
                subtitle={age + " years old"}
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
                              {name ? name[1] : ""}
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
                              {name ? name[0] : ""}
                            </Text>
                          </DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                          <DataTable.Cell>
                            <Text style={[styles.text, styles.bodyMedium]}>
                              Age
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell numeric>
                            <Text style={[styles.text, styles.bodyMedium]}>
                              {age}
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
                              {gender}
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
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <View style={{ paddingRight: 5 }}>
                            <Icon name="pill" color={"#3C403D"} size={14} />
                          </View>
                          {/* <Icon name="pill" color={"#3C403D"} size={14} /> */}
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
                            marginTop: 5,
                          }}
                        >
                          <Icon
                            name="chevron-right"
                            color={"#3C403D"}
                            size={14}
                          />
                          <Text style={[styles.text, styles.bodyMedium]}>
                            Metformin
                          </Text>
                        </View>

                        <View
                          style={{
                            paddingVertical: 10,
                            //paddingHorizontal: 10,
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <View style={{ paddingTop: 12, paddingRight: 5 }}>
                            <Icon name="scale" color={"#3C403D"} size={14} />
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
                        </View>

                        <View
                          style={{
                            //paddingVertical: 10,
                            //paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 5,
                          }}
                        >
                          <Icon
                            name="chevron-right"
                            color={"#3C403D"}
                            size={14}
                          />
                          <Text style={[styles.text, styles.bodyMedium]}>
                            500mg ( metformin )
                          </Text>
                        </View>

                        <View
                          style={{
                            paddingVertical: 10,
                            //paddingHorizontal: 10,
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <View style={{ paddingTop: 12, paddingRight: 5 }}>
                            <Icon
                              name="rhombus-split"
                              color={"#3C403D"}
                              size={14}
                            />
                          </View>
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
                        </View>

                        <View
                          style={{
                            //paddingVertical: 10,
                            //paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 5,
                          }}
                        >
                          <Icon
                            name="chevron-right"
                            color={"#3C403D"}
                            size={14}
                          />
                          <Text style={[styles.text, styles.bodyMedium]}>
                            1-0-1
                          </Text>
                        </View>

                        <View
                          style={{
                            //paddingVertical: 10,
                            //paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 5,
                          }}
                        >
                          <View style={{ paddingRight: 5, marginTop: 10 }}>
                            <Icon
                              name="clock-outline"
                              color={"#3C403D"}
                              size={14}
                            />
                          </View>
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
                        </View>

                        <View
                          style={{
                            //paddingVertical: 10,
                            //paddingHorizontal: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 5,
                          }}
                        >
                          <View style={{ marginTop: 5 }}>
                            <Icon
                              name="chevron-right"
                              color={"#3C403D"}
                              size={14}
                            />
                          </View>
                          <Text
                            style={[
                              styles.text,
                              styles.bodyMedium,
                              { marginTop: 5 },
                            ]}
                          >
                            6 months
                          </Text>
                        </View>
                      </Card.Content>
                    </Card>
                  </View>
                )}
                {display === "Diagnosis" && (
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
                      <Paragraph
                        style={[
                          styles.text,
                          styles.textBodyLarge,
                          { marginBottom: 10 },
                          styles.textBold,
                        ]}
                      >
                        Diagnosis details:
                      </Paragraph>
                      <Paragraph style={[styles.text, styles.bodyMedium]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin nisi metus, lobortis ut quam vitae, aliquet
                        volutpat turpis. Donec convallis hendrerit dolor, ut
                        accumsan risus lobortis nec. Suspendisse potenti. Donec
                        quis rhoncus diam, vel faucibus massa. Pellentesque
                        habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Aenean placerat, neque ut
                        tempor ultrices, sapien libero dignissim magna, non
                        gravida urna turpis nec nunc.
                      </Paragraph>

                      <Paragraph
                        style={[
                          styles.text,
                          styles.textBodyLarge,
                          styles.textBold,
                          { marginBottom: 10, marginTop: 40 },
                        ]}
                      >
                        Diagnosis Date:{" "}
                        <Text style={styles.text}> 10.08.2023</Text>
                      </Paragraph>
                    </Card.Content>
                  </Card>
                )}
              </Card.Content>
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
