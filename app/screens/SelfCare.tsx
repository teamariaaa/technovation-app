import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  ScrollView,
} from "react-native";
import { Button, Surface, Card, Paragraph } from "react-native-paper";

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

  const selfCareMessages = [
    "Self-care is not selfish, it's necessary. Take time to prioritize your well-being.",
    "You deserve to be taken care of, both physically and mentally. Make yourself a priority.",
    "Remember, you are worthy of love and care. Treat yourself with kindness and compassion.",
    "Taking care of yourself is not a luxury, it's a necessity. Make self-care a daily habit.",
    "Investing in self-care is an investment in your overall health and happiness. You are worth it.",
    "Remember to nourish your mind, body, and soul. You are deserving of all the care and attention.",
    "Self-care is not a one-time thing, it's a lifelong practice. Make it a part of your daily routine.",
    "You cannot pour from an empty cup. Take care of yourself first so you can better care for others.",
    "Prioritize self-care like you prioritize your responsibilities. You deserve the same level of attention.",
    "You are important and your well-being matters. Take time to replenish your energy and take care of yourself.",
    "Self-care is not indulgence, it's self-preservation. Remember to take care of yourself, inside and out.",
    "Give yourself permission to take a break, to relax, and to prioritize self-care. You deserve it.",
    "Remember, self-care is not a luxury, it's a necessity. Take care of yourself like you would take care of a loved one.",
    "Make yourself a priority, because you are worth it. Take small steps towards self-care every day.",
    "Self-care is not a selfish act, it's an act of self-love. You are worthy of all the care and attention you give to yourself.",
  ];

  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    // Function to get a random self-care message
    const getRandomMessage = () => {
      const randomIndex = Math.floor(Math.random() * selfCareMessages.length);
      return selfCareMessages[randomIndex];
    };

    // Set a random self-care message initially
    setRandomMessage(getRandomMessage());
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#fffcef" }}>
      <View style={styles.container}>
        {/* <Text style={styles.buttonText}> Try our exercise for relaxing </Text> */}

        <Paragraph
          style={[
            styles.text,
            styles.headlineMid,
            styles.textBold,
            { width: "80%" },
          ]}
        >
          Welcome to the{" "}
          <Text style={[styles.hightlightText, styles.textBold]}>SelfCare</Text>{" "}
          zone!
        </Paragraph>
        <Paragraph
          style={[
            styles.text,
            styles.textBodyLarge,
            { width: "85%", marginTop: "5%" },
          ]}
        >
          Come here for your{" "}
          <Text
            style={[
              styles.hightlightText,
              styles.textBold,
              { fontStyle: "italic" },
            ]}
          >
            daily reminder
          </Text>{" "}
          and{" "}
          <Text
            style={[
              styles.hightlightText,
              styles.textBold,
              { fontStyle: "italic" },
            ]}
          >
            breathing exercises
          </Text>{" "}
          !
        </Paragraph>

        <Card
          style={{
            backgroundColor: "#EEF5DB",
            paddingBottom: 0,
            marginTop: "10%",
            marginBottom: "5%",
          }}
          mode="elevated"
        >
          <Card.Content style={{ paddingBottom: "5%" }}>
            <Text
              style={[
                styles.titleLarge,
                styles.textBold,
                styles.text,
                { marginBottom: "5%" },
              ]}
            >
              Daily reminder
            </Text>
            <Text style={(styles.text, styles.textBodyLarge)}>
              {randomMessage}
            </Text>
          </Card.Content>
          <Card.Cover
            source={require("../../assets/people-eating-card.png")}
            style={{
              width: "100%",
              height: 90,
              backgroundColor: "#EEF5DB",
              marginBottom: 0,
              paddingBottom: 0,
            }}
          />
        </Card>

        <Card
          style={{
            backgroundColor: "#EEF5DB",
            paddingBottom: 0,
            marginVertical: "6%",
          }}
          mode="elevated"
        >
          <Card.Content style={{ paddingBottom: "5%" }}>
            <Text
              style={[
                styles.text,
                styles.titleLarge,
                styles.textBold,
                { marginBottom: "5%", width: "95%" },
              ]}
            >
              Go to your breathing exercise
            </Text>
            <Text style={[styles.text, styles.textBodyLarge]}>
              Breathing exercises can help you relax and reduce stress.{" "}
            </Text>
            <Button
              mode="elevated"
              style={[
                styles.myButton,
                //styles.marginButtonTop,
                styles.noBottomMargin,
                {
                  marginTop: "10%",
                  width: "50%",
                },
              ]}
              onPress={() => {
                navigation.navigate("BreathingExercise");
              }}
            >
              <Text
                style={[styles.text, styles.textBodyLarge, styles.textBold]}
              >
                Exercise
              </Text>
            </Button>
          </Card.Content>
        </Card>

        <Card
          style={{
            backgroundColor: "#EEF5DB",
            paddingBottom: 0,
            marginVertical: "6%",
          }}
          mode="elevated"
        >
          <Card.Content style={{ paddingBottom: "5%" }}>
            <Text
              style={[
                styles.text,
                styles.titleLarge,
                styles.textBold,
                { marginBottom: "5%", width: "95%" },
              ]}
            >
              Also check our resources
            </Text>
            <Text style={[styles.text, styles.textBodyLarge]}>
              If you are curios about eating disorders and you want to know
              more, this section is perfect for you. We tried to gather a set of
              helpful information and tips about eating disorder.{" "}
            </Text>
            <Button
              mode="elevated"
              style={[
                styles.myButton,
                //styles.marginButtonTop,
                styles.noBottomMargin,
                {
                  marginTop: "10%",
                  width: "50%",
                },
              ]}
              onPress={() => {
                navigation.navigate("Resources");
              }}
            >
              <Text
                style={[styles.text, styles.textBodyLarge, styles.textBold]}
              >
                Explore
              </Text>
            </Button>
          </Card.Content>
        </Card>
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
      <Text style={[styles.breath, styles.text]}>
        {breathIn ? "Breathe in" : "Breathe out"}
      </Text>
      <Text style={[styles.time, styles.text]}>{elapsedTime}</Text>
    </View>
  );
};
interface ResourcesButtonProps extends TouchableWithoutFeedbackProps {
  onPress: () => void;
}

const ResourcesButton: React.FC<ResourcesButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonresources}>Resources</Text>
    </TouchableOpacity>
  );
};

// const SelfCareList = () => {
//   return (
//     <ScrollView style={{ flex: 1 }}>
//       <Paragraph
//         style={[
//           styles.text,
//           styles.headlineMid,
//           styles.textBold,
//           { width: "80%" },
//         ]}
//       >
//         Welcome to the{" "}
//         <Text style={[styles.hightlightText, styles.textBold]}>SelfCare</Text>{" "}
//         zone!
//       </Paragraph>
//       <Card>
//         <Card.Content>
//           <Text style={styles.titleLarge}>Daily reminder</Text>
//           <Text style={styles.text}>{randomMessage}</Text>
//         </Card.Content>
//       </Card>
//       <Surface style={styles.surface}>
//         <Text style={[styles.surface, styles.text]}>Daily reminder : </Text>
//         <Text style={[styles.message, styles.text]}> {randomMessage}</Text>
//       </Surface>
//     </ScrollView>
//   );
// };

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 30,
  },
  circle: {
    marginTop: 50,
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
});

export default SelfCareScreen;
