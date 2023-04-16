import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Dimensions, ScrollView } from "react-native";
import { AgendaList, Calendar, CalendarProvider, ExpandableCalendar, LocaleConfig, WeekCalendar } from "react-native-calendars";
import CircularProgress from "react-native-circular-progress-indicator";
import {
  Card,
  Paragraph,
  Avatar,
  Title,
  IconButton,
  Button,
} from "react-native-paper";
import globalstyles from "../global.styles.js";

const LeftContent = () => (
  <Avatar.Image
    size={70}
    source={require("../../assets/profilePicture.jpeg")}
  />
);

interface Props {
  weekView?: boolean;
}
const DiaryScreen = (props : Props) => {
  const [selected, setSelected] = useState("");


  return (
    <View style={{ paddingTop: 50, flex: 1 }}>
      <Calendar
        // Initially visible month. Default = Date()
        current={"2012-03-01"}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={"2012-05-10"}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={"2012-05-30"}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log("selected day", day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={"yyyy MM"}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
      />
      <CircularProgress
        value={60}
        radius={120}
        duration={2000}
        progressValueColor={"#ecf0f1"}
        maxValue={200}
        title={"KM/H"}
        titleColor={"white"}
        titleStyle={{ fontWeight: "bold" }}
      />
    </View>
  );
};

export default DiaryScreen;
