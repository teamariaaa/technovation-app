import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

const SelfCareDescription = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <CircleCronometer />
        </View>
    );
}

const CircleCronometer = () => {
    const [currentColor, setCurrentColor] = useState('lightgreen');
    const [time, setTime] = useState(0);
    const [breathIn, setBreathIn] = useState(true);

    useEffect(() => {

        var counter = 0;
        const intervalId = setInterval(() => {

            if (time % 8 == 0)
                setTime(0);
            console.log(time);
            setTime(time + 1);

        }, 1000);

        const colorIntervalId = setInterval(() => {

            setCurrentColor(currentColor === 'lightgreen' ? 'lightblue' : 'lightgreen');
        }, 8000);

        const breathIntervalId = setInterval(() => {
            setBreathIn(prevBreathIn => !prevBreathIn);
        }, 8000);

        return () => {
            clearInterval(intervalId);
            clearInterval(colorIntervalId);
            clearInterval(breathIntervalId);
        };
    }, [time]);

    return (
        <View style={[styles.circle, { backgroundColor: currentColor }]}>
            <Text style={styles.breath}>{breathIn ? 'Breathe in' : 'Breathe out'}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 20,
    },
    // title: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     marginBottom: 10,
    //     color: 'purple',
    // },
    // subtitle: {
    //     fontSize: 16,
    //     lineHeight: 22,
    //     color: 'purple',
    // },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    breath: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
        position: 'absolute',
        top: 25,
    },
    time: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default SelfCareDescription;