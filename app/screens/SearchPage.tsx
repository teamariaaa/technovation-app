import React, { useState } from "react";
import { IconButton, TextInput } from "react-native-paper";
import { ScrollView, View, StyleSheet } from "react-native";
import FoodItemCard, { FoodItem } from "./FoodCard";
import globalstyles from "../global.styles.js";

const renderFood = (FoodItems: FoodItem[]) => {
  return FoodItems.map((food) => (
    <FoodItemCard foodItem={food} key={food.id}></FoodItemCard>
  ));
};

const SearchPageScreen = ({ navigation }: any) => {
  const foodList: FoodItem[] = [
    {
      id: 1,
      name: "Cereal with milk",
      date : new Date().getTime(),
      photo: "cerealsWithMilk",
      calories: 300,
      carbs: 40,
      fat: 8,
      protein: 11,
    },
    {
      id: 2,
      name: "Bread with cream cheese",
      date : new Date().getTime(),
      photo: "paineCuBranza",
      calories: 220,
      carbs: 20,
      fat: 10,
      protein: 13,
    },
    {
      id: 3,
      date : new Date().getTime(),
      name: "Tuna",
      photo: "tuna",
      calories: 150,
      carbs: 1,
      fat: 2,
      protein: 30,
    },
    {
      id: 4,
      date : new Date().getTime(),
      name: "Oatmeal with Bananas",
      photo: "oats",
      calories: 400,
      carbs: 60,
      fat: 7,
      protein: 9,
    },
    {
      id: 5,
      date : new Date().getTime(),
      name: "Omelette",
      photo: "omelette",
      calories: 180,
      carbs: 14,
      fat: 12,
      protein: 14,
    },
    {
      id: 6,
      date : new Date().getTime(),
      name: "Avocado Toast",
      photo: "avocadoToast",
      calories: 350,
      carbs: 35,
      fat: 17,
      protein: 6,
    },
    {
      id: 7,
      date : new Date().getTime(),
      name: "Boiled Egg",
      photo: "eggs",
      calories: 80,
      carbs: 0.2,
      fat: 5,
      protein: 6,
    },
    {
      id: 8,
      date : new Date().getTime(),
      name: "Yogurt",
      photo: "Yogurt",
      calories: 80,
      carbs: 10,
      fat: 4,
      protein: 5,
    },
    {
      id: 9,
      date : new Date().getTime(),
      name: "Cottage Cheese",
      photo: "cheese",
      calories: 100,
      carbs: 3,
      fat: 3,
      protein: 12,
    },
    {
      id: 10,
      date : new Date().getTime(),
      name: "Chicken Noodle Soup",
      photo: "noodles",
      calories: 150,
      carbs: 20,
      fat: 6,
      protein: 12,
    },
    {
      id: 11,
      date : new Date().getTime(),
      name: "Beef Soup",
      photo: "soup",
      calories: 150,
      carbs: 15,
      fat: 6,
      protein: 15,
    },
    {
      id: 12,
      date : new Date().getTime(),
      name: "Grilled Chicken",
      photo: "chicken",
      calories: 200,
      carbs: 1,
      fat: 8,
      protein: 30,
    },
    {
      id: 13,
      date : new Date().getTime(),
      name: "Grilled Mushrooms",
      photo: "mushrooms",
      calories: 22,
      carbs: 2.7,
      fat: 0.3,
      protein: 2.5,
    },
    {
      id: 14,
      date : new Date().getTime(),
      name: "Rice with Vegetables",
      photo: "rice",
      calories: 300,
      carbs: 27,
      fat: 0.9,
      protein: 2.3,
    },
    {
      id: 15,
      date : new Date().getTime(),
      name: "Baked Potatoes",
      photo: "potato",
      calories: 200,
      carbs: 23,
      fat: 5.4,
      protein: 2.9,
    },
    {
      id: 16,
      date : new Date().getTime(),
      name: "Pizza",
      photo: "pizza",
      calories: 300,
      carbs: 35,
      fat: 15,
      protein: 12,
    },
    {
      id: 17,
      date : new Date().getTime(),
      name: "Caesar Salad",
      photo: "caesar",
      calories: 450,
      carbs: 30,
      fat: 30,
      protein: 30,
    },
    {
      id: 18,
      date : new Date().getTime(),
      name: "Red Cabbage Salad",
      photo: "salad",
      calories: 100,
      carbs: 10,
      fat: 2,
      protein: 4,
    },
    {
      id: 100,
      date : new Date().getTime(),
      name: "Mashed Potatoes",
      photo: "mashedPotatoes",
      calories: 250,
      carbs: 40,
      fat: 10,
      protein: 3,
    },
    {
      id: 19,
      date : new Date().getTime(),
      name: "Beef Burger",
      photo: "burger",
      calories: 300,
      carbs: 5,
      fat: 25,
      protein: 25,
    },
    {
      id: 20,
      date : new Date().getTime(),
      name: "Pasta",
      photo: "pasta",
      calories: 158,
      carbs: 30,
      fat: 2,
      protein: 6,
    },
    {
      id: 21,
      date : new Date().getTime(),
      name: "Salmon",
      photo: "somon",
      calories: 206,
      carbs: 0,
      fat: 13,
      protein: 20,
    },
    {
      id: 22,
      date : new Date().getTime(),
      name: "Spinach",
      photo: "spanac",
      calories: 23,
      carbs: 3.6,
      fat: 0.4,
      protein: 2.9,
    },
    {
      id: 23,
      date : new Date().getTime(),
      name: "Porc Steak",
      photo: "steak",
      calories: 300,
      carbs: 0,
      fat: 25,
      protein: 20,
    },
    {
      id: 24,
      date : new Date().getTime(),
      name: "Apple",
      photo: "apple",
      calories: 95,
      carbs: 25,
      fat: 0.3,
      protein: 0.5,
    },
    {
      id: 25,
      date : new Date().getTime(),
      name: "Banana",
      photo: "banana",
      calories: 105,
      carbs: 27,
      fat: 0.4,
      protein: 1,
    },
    {
      id: 26,
      date : new Date().getTime(),
      name: "Pear",
      photo: "pear",
      calories: 100,
      carbs: 27,
      fat: 0.3,
      protein: 1,
    },
    {
      id: 27,
      date : new Date().getTime(),
      name: "Strawberries",
      photo: "capsuni",
      calories: 32,
      carbs: 7.7,
      fat: 0.3,
      protein: 0.7,
    },
    {
      id: 28,
      date : new Date().getTime(),
      name: "Cranberries",
      photo: "afine",
      calories: 57,
      carbs: 14.5,
      fat: 0.3,
      protein: 0.7,
    },
    {
      id: 29,
      date : new Date().getTime(),
      name: "Pineapple",
      photo: "ananas",
      calories: 50,
      carbs: 13,
      fat: 0.2,
      protein: 0.5,
    },
    {
      id: 30,
      date : new Date().getTime(),
      name: "Mango",
      photo: "mango",
      calories: 60,
      carbs: 15,
      fat: 0.4,
      protein: 0.8,
    },
    {
      id: 31,
      date : new Date().getTime(),
      name: "Kiwi",
      photo: "kiwi",
      calories: 61,
      carbs: 14.7,
      fat: 0.5,
      protein: 1.1,
    },
    {
      id: 32,
      date : new Date().getTime(),
      name: "Grapes",
      photo: "grapes",
      calories: 69,
      carbs: 18.1,
      fat: 0.16,
      protein: 0.72,
    },
    {
      id: 33,
      date : new Date().getTime(),
      name: "Peaches",
      photo: "peaches",
      calories: 39,
      carbs: 9.54,
      fat: 0.25,
      protein: 0.91,
    },
    {
      id: 34,
      date : new Date().getTime(),
      name: "Ice Cream",
      photo: "inghetata",
      calories: 300,
      carbs: 30,
      fat: 18,
      protein: 5,
    },
    {
      id: 35,
      date : new Date().getTime(),
      name: "Pancakes",
      photo: "crepe",
      calories: 150,
      carbs: 20,
      fat: 5,
      protein: 7,
    },
    {
      id: 36,
      date : new Date().getTime(),
      name: "Donut",
      photo: "donut",
      calories: 300,
      carbs: 35,
      fat: 15,
      protein: 7,
    },
    {
      id: 37,
      date : new Date().getTime(),
      name: "Waffle",
      photo: "waffle",
      calories: 75,
      carbs: 9,
      fat: 4,
      protein: 1,
    },
    {
      id: 38,
      date : new Date().getTime(),
      name: "Chocolate Cake",
      photo: "cake",
      calories: 350,
      carbs: 45,
      fat: 18,
      protein: 3,
    },
    {
      id: 39,
      date : new Date().getTime(),
      name: "Cheesecake",
      photo: "cheesecake",
      calories: 300,
      carbs: 30,
      fat: 20,
      protein: 7,
    },
    {
      id: 40,
      date : new Date().getTime(),
      name: "Muffin",
      photo: "briosa",
      calories: 45,
      carbs: 28,
      fat: 13,
      protein: 3.5,
    },
    {
      id: 41,
      date : new Date().getTime(),
      name: "Orange Juice",
      photo: "orange",
      calories: 112,
      carbs: 26.8,
      fat: 0.5,
      protein: 1.7,
    },
    {
      id: 42,
      date : new Date().getTime(),
      name: "Coffee",
      photo: "coffee",
      calories: 2,
      carbs: 0.4,
      fat: 0.1,
      protein: 0.3,
    },
    {
      id: 43,
      date : new Date().getTime(),
      name: "Milk",
      photo: "milk",
      calories: 150,
      carbs: 12,
      fat: 8,
      protein: 8,
    },
    {
      id: 44,
      date : new Date().getTime(),
      name: "Hot Chocolate",
      photo: "chocolate",
      calories: 190,
      carbs: 24,
      fat: 8,
      protein: 8,
    },
    {
      id: 45,
      date : new Date().getTime(),
      name: "Lemonade",
      photo: "lemonade",
      calories: 99,
      carbs: 26,
      fat: 0.1,
      protein: 0.2,
    },
    {
      id: 46,
      date : new Date().getTime(),
      name: "Tomatoes",
      photo: "tomatoes",
      calories: 22,
      carbs: 5,
      fat: 0.1,
      protein: 1,
    },
    {
      id: 47,
      date : new Date().getTime(),
      name: "Cucumber",
      photo: "cucu",
      calories: 20,
      carbs: 2.2,
      fat: 0.1,
      protein: 0.7,
    },
    {
      id: 48,
      date : new Date().getTime(),
      name: "Peppers",
      photo: "pepper",
      calories: 20,
      carbs: 1.8,
      fat: 0.2,
      protein: 0.9,
    },
    {
      id: 49,
      date : new Date().getTime(),
      name: "Carrots",
      photo: "carrot",
      calories: 41,
      carbs: 9.6,
      fat: 0.2,
      protein: 0.9,
    },
    {
      id: 50,
      date : new Date().getTime(),
      name: "Onion",
      photo: "ceapa",
      calories: 32,
      carbs: 7.6,
      fat: 0.2,
      protein: 1.8,
    },
  ];

  const getThreeRandomItems = () => {
    return foodList.sort(() => 0.5 - Math.random()).slice(0, 6);
  }

  const [food, setFood] = useState<FoodItem[]>(getThreeRandomItems());

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fffcef",
      bottom: 10,
    },

    upContainer: {
      flex: 1,
      flexDirection: "row",
      paddingLeft: "2.5%",
      backgroundColor: "#fff2bd",
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: "20%",
      marginBottom: "10%",
    },

    container2: {
      backgroundColor: "#C7EFCF",
      marginTop: "3%",
      marginBottom: "3%",
      marginLeft: "3%",
      marginRight: "3%",
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
    },
  });

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    if (query === "") {
      setFood(foodList);
    } else {
      const lowercaseQuery = query.toLowerCase();
      setFood(
        foodList.filter((d) => d.name.toLowerCase().startsWith(lowercaseQuery))
      );
    }
  };

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.upContainer}>
          <IconButton
            icon="keyboard-backspace"
            mode="contained-tonal"
            style={globalstyles.iconButton}
            size={20}
            onPress={() => navigation.navigate("MealTracking")}
          />
          <TextInput
            value={searchQuery}
            style={{
              margin: "3%",
              flex: 1,
              backgroundColor: "#EEF5DB",
              paddingVertical: "0.0001%",
              borderRadius: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
            activeUnderlineColor="#EEF5DB"
            underlineColor="#EEF5DB"
            left={<TextInput.Icon icon="magnify" />}
            placeholder="Search"
            onChangeText={onChangeSearch}
          />
        </View>
        <ScrollView style = {{height : "85.8%"}}>{renderFood(food)}</ScrollView>
      </View>
    </>
  );
};

export default SearchPageScreen;
