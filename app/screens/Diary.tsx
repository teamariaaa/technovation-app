import React, { useState } from "react";
import { View, ScrollView, Pressable, StyleSheet } from "react-native";
import { Avatar, IconButton, Surface, Text, Props } from "react-native-paper";
import globalstyles from "../global.styles.js";
import moment from "moment";
import DiaryCard from "./DiaryCard";
import { useNavigation } from "@react-navigation/native";

const DayItem = (props: any) => (
  <Surface
    style={[
      {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: props.selected ? "#DBEAB3" : "#EEF5DB",
        padding: 15,
        borderRadius: 20,
        marginLeft: 2.5,
        marginRight: 2.5,
        shadowColor : "#EEF5DB",
      },
    ]}
  >
    <Text>{props.day.format("dd")}</Text>
    <Surface
      style={[
        {
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          backgroundColor: "#EEF5DB",
          shadowColor : "#EEF5DB",
          padding: 8,
          borderRadius: 20,
          marginTop: 3,
          // marginVertical : 5,
          // marginLeft: "0%",
          // marginRight: "0%",
          // marginBottom : "2%",
        },
      ]}
    >
      <Text>{props.day.format("D-M")}</Text>
    </Surface>
  </Surface>
);

const DaySlider = (props: any) => {
  const days = [];
  const [selected, setSelected] = useState<number>();

  for (let i = -30; i <= 30; i++) {
    days.push(moment().add(i, "days"));
  }

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      disableIntervalMomentum = {true}
      decelerationRate= {"fast"}
      style={{
        maxHeight: 93,
        backgroundColor: "#EEF5DB"//"#fffcef",
      }}
    >
      {days.map((day, i) => (
        <Pressable
          key={i}
          style={{
            height: 58,
            // paddingLeft: 1,
            // paddingRight: 1,
            marginTop: 10,
            marginBottom: 10,
            marginRight: 2.5,
            marginLeft: 2.5,
            
          }}
          onPress={() => {
            props.dateChange(day);
            setSelected(i);
          }}
        >
          <DayItem day={day} selected={i === selected} />
        </Pressable>
      ))}
    </ScrollView>
  );
};

const DiaryScreen = (props: Props) => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const onChangeDate = (m: any) => {
    setDate(m.toDate());
  };

  return (
    <View
      style={{
        // justifyContent: "flex-start",
        flex: 1,
        backgroundColor: "#EEF5DB"//"#fffcef",
      }}
    >
      <View style={[styles.upContainer, {backgroundColor : "#EEF5DB"}]}>
        <IconButton
          icon="keyboard-backspace"
          mode="contained-tonal"
          style={globalstyles.iconButton}
          size={20}
          onPress={() => navigation.navigate("MealTracking")}
        />

        <Text
          style={[
            globalstyles.text,
            globalstyles.titleLarge,
            globalstyles.textSemiBold,
            globalstyles.textCenter,
            ,
            { marginLeft: "4%" },
          ]}
        >
          Diary
        </Text>
      </View>
      <View style = {{backgroundColor : "#EEF5DB", height : 90, marginBottom : 10}}>
      <DaySlider dateChange={onChangeDate} />
      </View>
      <DiaryCard day={date} />
    </View>
  );
};

export default DiaryScreen;

const styles = StyleSheet.create({
  upContainer: {
    flex: 1,
    flexDirection: "row",
    // paddingLeft: "2.5%",
    backgroundColor: "#fffcef",
    alignItems: "center",
    justifyContent: "flex-start",
    // paddingTop: 10,
    // paddingBottom: 1,
    marginTop: "2%",
    // marginBottom: "2%",
    borderBottomColor : "blue"
  },
});
