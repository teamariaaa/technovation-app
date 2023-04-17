import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import {
  Surface,
  Card,
  Paragraph,
  Button,
  IconButton,
} from "react-native-paper";
import { FlipInEasyX } from "react-native-reanimated";

const BreathingScreen = ({ navigation }: any) => {
  const [isBreathingCycleInProgress, setIsBreathingCycleInProgress] =
    useState(false); // Set initial value to false
  const [isBreathingCycleCompleted, setIsBreathingCycleCompleted] =
    useState(false); // Set initial value to false

  const handleBreathingCycleToggle = () => {
    if (isBreathingCycleInProgress) {
      setIsBreathingCycleInProgress(false);
      setIsBreathingCycleCompleted(false);
    } else {
      setIsBreathingCycleInProgress(true);
    }
  };

  useEffect(() => {
    if (isBreathingCycleInProgress && isBreathingCycleCompleted) {
      setIsBreathingCycleInProgress(false);
      setIsBreathingCycleCompleted(false);
    }
  }, [isBreathingCycleCompleted]);

  return (
    <ScrollView style={{ backgroundColor: "#FFFCEF" }}>
      <View style={[styles.container, { alignSelf: "center" }]}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <IconButton
            icon="keyboard-backspace"
            mode="contained-tonal"
            style={
              (styles.iconButton, { alignSelf: "center", marginRight: "7%" })
            }
            size={20}
            onPress={() => navigation.navigate("SelfCare")}
          />
          {/* <Text style={styles.buttonText}> Try our exercise for relaxing </Text> */}
          <Text
            style={[
              styles.text,
              styles.headlineSmall,
              styles.textBold,
              {
                width: "85%",
                marginTop: "5%",
                alignSelf: "center",
                marginLeft: "10%",
              },
            ]}
          >
            Breathing Zone
          </Text>
        </View>
        <CircleCronometer
          style={[{ alignSelf: "center" }, styles.circle]}
          isBreathingCycleInProgress={isBreathingCycleInProgress}
          isBreathingCycleCompleted={isBreathingCycleCompleted}
          setIsBreathingCycleCompleted={setIsBreathingCycleCompleted}
        />
        <Button
          style={[
            styles.myButton,
            //styles.marginButtonTop,
            styles.noBottomMargin,
            {
              alignSelf: "center",
              width: "80%",
              marginTop: "10%",
            },
          ]}
          onPress={handleBreathingCycleToggle}
          disabled={isBreathingCycleInProgress && !isBreathingCycleCompleted}
        >
          <Text style={[styles.myButton, styles.text, styles.textBodyLarge]}>
            {isBreathingCycleInProgress
              ? "Stop breathing cycle"
              : "Start one breathing cycle"}
          </Text>
        </Button>
        <Image
          style={styles.img}
          source={require("../../assets/meditation-girl.png")}
        />
      </View>
    </ScrollView>
  );
};

const CircleCronometer = ({
  isBreathingCycleInProgress,
  isBreathingCycleCompleted,
  setIsBreathingCycleCompleted,
}: any) => {
  const [currentColor, setCurrentColor] = useState("lightgreen");
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (isBreathingCycleInProgress) {
      const intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isBreathingCycleInProgress]);

  useEffect(() => {
    if (elapsedTime >= 16) {
      setCurrentColor("#c1dbc1");
      setElapsedTime(0);
      setIsBreathingCycleCompleted(true);
    } else if (elapsedTime % 8 === 0) {
      setCurrentColor((currentColor) =>
        currentColor === "#fff2bd" ? "#c1dbc1" : "#fff2bd"
      );
    }
  }, [elapsedTime, setIsBreathingCycleCompleted]);

  const breathIn = elapsedTime % 16 < 8;

  return (
    <View style={[styles.circle, { backgroundColor: currentColor }]}>
      <Text style={[styles.breath, styles.text, { alignSelf: "center" }]}>
        {breathIn ? "Inhale" : "Exhale"}
      </Text>
      <Text style={[styles.time, styles.text, { alignSelf: "center" }]}>
        {elapsedTime}
      </Text>
      <Text
        style={[
          styles.breath,
          styles.text,
          styles.bodyMedium,
          { alignSelf: "center" },
        ]}
      >
        Keep up the good work!
      </Text>
    </View>
  );
};

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  circle: {
    marginTop: 50,
    //marginLeft: "4%",
    width: 225,
    height: 225,
    borderRadius: 90,
    justifyContent: "center",
  },
  breath: {
    fontSize: 24,
    //fontWeight: "bold",
    fontWeight: "200",
    marginBottom: 10,
    color: "white",
  },

  time: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#c1dbc1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: "auto",
  },
  buttonText: {
    color: "#3C403D",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 50,
  },

  text: {
    color: "#3C403D",
    fontFamily: "Cabin",
  },
  message: {
    color: "purple",
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  surface: {
    color: "#3C403D",
    fontSize: 18,
    fontWeight: "bold",
    elevation: 4,
  },
  buttonContainer: {
    marginBottom: 50,
    backgroundColor: "#c1dbc1", // Change this to the desired background color
    padding: 10,
    borderRadius: 5,
  },
  buttonresources: {
    color: "black", // Change this to the desired text color
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  headlineSmall: {
    fontFamily: "Cabin",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 32,
    marginBottom: "5%",
  },

  hightlightText: {
    color: "#246324",
    fontFamily: "Cabin",
  },

  headlineBig: {
    fontFamily: "Cabin",
    fontSize: 36,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 36,
    marginTop: "5%",
    marginBottom: "5%",
  },

  headlineMid: {
    fontFamily: "Cabin",
    fontSize: 30,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 36,
    marginTop: "5%",
    marginBottom: "5%",
  },

  titleLarge: {
    fontFamily: "Cabin",
    fontSize: 22,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 28,
  },
  textBold: {
    fontWeight: "700",
  },

  textBodyLarge: {
    fontFamily: "Cabin",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.15,
    lineHeight: 24,
  },

  bodyMedium: {
    fontFamily: "Cabin",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  myButton: {
    //height: 16,
    //alignSelf: "center",
    backgroundColor: "#fff2bd",
    borderRadius: 20,
    width: 250,
    marginTop: "8%",
  },
  noBottomMargin: {
    marginBottom: 0,
  },
  img: {
    width: win.width / 1.3,
    height: win.width / 1.3,
    marginTop: "10%",
  },
  iconButton: {
    backgroundColor: "#c1dbc1",
  },
});

export default BreathingScreen;
