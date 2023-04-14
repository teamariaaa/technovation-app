import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedbackProps } from "react-native";
import { Surface } from 'react-native-paper';


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
        <View style={{ backgroundColor: '#fffcef' }}>
            <View style={styles.container}>

                <ResourcesButton onPress={function (): void {
                    throw new Error("Function not implemented.");
                }}></ResourcesButton>
                <SelfCareList></SelfCareList>

                { /* <Text style={styles.buttonText}> Try our exercise for relaxing </Text> */}

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



const SelfCareList = () => {
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

    const [randomMessage, setRandomMessage] = useState('');

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
        <Surface style={styles.surface}>
            <Text style={styles.surface}>Daily reminder : </Text>
            <Text style={styles.message}> {randomMessage}</Text>
        </Surface>

    );
};

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
        color: 'purple',
        fontSize: 15,
        textAlign: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    surface:
    {
        color: "#3C403D",
        fontSize: 18,
        fontWeight: "bold",
        elevation: 4,
    },
    buttonContainer: {
        marginBottom: 50,
        backgroundColor: '#c1dbc1', // Change this to the desired background color
        padding: 10,
        borderRadius: 5,
    },
    buttonresources: {
        color: 'black', // Change this to the desired text color
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SelfCareScreen;
