import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SelfCareScreen = ({ navigation }: any) => {
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
    <View style={styles.container}>
      <CircleCronometer
        isBreathingCycleInProgress={isBreathingCycleInProgress}
        isBreathingCycleCompleted={isBreathingCycleCompleted}
        setIsBreathingCycleCompleted={setIsBreathingCycleCompleted}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleBreathingCycleToggle} // Call handleBreathingCycleToggle when button is pressed
        disabled={isBreathingCycleInProgress && !isBreathingCycleCompleted} // Disable button when cycle is in progress and not completed
      >
        <Text style={[styles.buttonText, styles.text]}>
          {isBreathingCycleInProgress
            ? "Stop breathing cycle"
            : "Start one breathing cycle"}
        </Text>
      </TouchableOpacity>
    </View>
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
      <Text style={[styles.breath, styles.text]}>
        {breathIn ? "Breathe in" : "Breathe out"}
      </Text>
      <Text style={[styles.time, styles.text]}>{elapsedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  breath: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    position: "absolute",
    top: 25,
  },

  time: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#c1dbc1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  text: {
    color: "#3C403D",
    fontFamily: "Cabin",
  },
});

export default SelfCareScreen;
