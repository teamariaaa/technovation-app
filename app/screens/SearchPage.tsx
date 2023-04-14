import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import {
  Appbar,
  Avatar,
  IconButton,
  Modal,
  Paragraph,
  Portal,
  RadioButton,
  Searchbar,
  Surface,
} from "react-native-paper";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import FoodItemCard, { FoodItem } from "./FoodCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const renderFood = (FoodItems: FoodItem[]) => {
  return FoodItems.map((food) => (
    //<View><Paragraph> jkhd</Paragraph></View>
  
    <FoodItemCard foodItem={food} key={food.id}></FoodItemCard>
  ));
};

const SearchPageScreen = ({ navigation }: any) => {
  const foodList: FoodItem[] = [
    {
      id: 1,
      name: "Omlet",
      photo: require("../../assets/profilePicture.jpeg"),
      calories: 183,
      protein: 12,
      fat: 14,
      carbs: 4.6,
    },
    {
      id: 2,
      name: "Omelet",
      photo: require("../../assets/profilePicture.jpeg"),
      calories: 183,
      protein: 12,
      fat: 14,
      carbs: 4.6,
    },
    {
      id: 3,
      name: "Omelet",
      photo: require("../../assets/profilePicture.jpeg"),
      calories: 183,
      protein: 12,
      fat: 14,
      carbs: 4.6,
    },
  ];

  const [food, setFood] = useState<FoodItem[]>(foodList);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#C7EFCF",
      bottom: 10,
    },
  });

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    setFood(foodList.filter((d) => d.name.includes(query)));
  };
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Appbar.Header style={styles.container}>
        <Appbar.BackAction
          color="white"
          onPress={() => navigation.goBack()}
        />
      </Appbar.Header>
      <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginLeft: "6%",
            marginRight: "3%",
          }}
        >
          <Searchbar
            value={searchQuery}
            style={{ margin: "3%" }}
            placeholder="Search"
            onChangeText={onChangeSearch}
            // onChangeText={onChangeSearch, setSearchQuery}
          />
        </View>
      <ScrollView>
        {renderFood(food)}
        </ScrollView>
    </>
  );
};

export default SearchPageScreen;
