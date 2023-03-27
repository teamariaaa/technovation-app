import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { ActivityIndicator, View } from "react-native";
import {
    getAuth,
    signOut
} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-config.json";
import { useNavigation } from "@react-navigation/native";

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const MainLayout = ({ children }: any) => {

    const [user, setUser] = useState<{ displayName: string, email: string }>();

    const navigation = useNavigation() as any;


    return (
     <SafeAreaView>
            <Appbar.Header>
                <Appbar.Content title={`Welcome, Ghita`} />
                <Appbar.Action icon="logout" onPress={async () => {}} />
            </Appbar.Header>
            <View style={{ alignSelf: 'stretch', backgroundColor: 'blue', height: '80%', display: 'flex', flexDirection: 'column' }}>{children}</View>
    </SafeAreaView>
    );
}

export default MainLayout;