import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Paragraph } from "react-native-paper";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  const [data, setData] = useState<{ label: string; quantity: number }[]>();

  return (
    <MainLayout>
      <Paragraph>fdsfdg</Paragraph>
    </MainLayout>
  );
};

export default HomeScreen;
