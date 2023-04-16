import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Dimensions, ScrollView, Pressable } from "react-native";
import {
  AgendaList,
  Calendar,
  CalendarProvider,
  ExpandableCalendar,
  LocaleConfig,
  WeekCalendar,
} from "react-native-calendars";
import CircularProgress from "react-native-circular-progress-indicator";
import {
  Card,
  Paragraph,
  Avatar,
  Title,
  IconButton,
  Button,
  Surface,
  Text,
} from "react-native-paper";
import globalstyles from "../global.styles.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FoodItem } from "./FoodCard";
import moment from "moment";
import DiaryCard from "./DiaryCard";

const LeftContent = () => (
  <Avatar.Image
    size={70}
    source={require("../../assets/profilePicture.jpeg")}
  />
);

interface Props {
  weekView?: boolean;
}
const DayItem = (props: any) => 
<Surface style = {[{display : "flex", flexDirection : "column", alignItems : "center", backgroundColor : props.selected ? "red" : "blue"}]}>
  <Text>{props.day.format("dd")}</Text> 
  <Text>{props.day.format("D-M")}</Text>
</Surface>;
const DaySlider = (props: any) => {
  const days = [];
  const [selected, setSelected] = useState<number>();
  
  for (let i = -30; i <= 30; i++) {
    days.push(moment().add(i, "days"));
  }
  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} style = {{maxHeight : 50}}>
      {days.map((day, i) => (
        <Pressable key = {i}  style = {{height : 50}} onPress={() => {props.dateChange(day); setSelected(i);}}>
        <DayItem day={day} selected = {i === selected}/>
        </Pressable>
      ))}
    </ScrollView>
  );
};



const DiaryScreen = (props: Props) => {
  const [date, setDate] = useState(new Date());
  const onChangeDate = (m: any) => {setDate (m.toDate())};

  return (
    <View style={{justifyContent : "flex-start", paddingTop: 50, flex: 1 }}>
      <DaySlider dateChange = {onChangeDate}/>
      <DiaryCard day={date}/>
    </View>
  );
};

export default DiaryScreen;
