import React, { useState } from "react";
import { IconButton, Searchbar } from "react-native-paper";
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
      photo: require("../../assets/cerealsWithMilk.jpg"),
      calories: 300,
      carbs: 40,
      fat: 8,
      protein: 11,
    },
    {
      id: 2,
      name: "Bread with cream cheese",
      photo: require("../../assets/PaineCuBranza.jpg"),
      calories: 220,
      carbs: 20,
      fat: 10,
      protein: 13,
    },
    {
      id: 3,
      name: "Tuna",
      photo: require("../../assets/tuna.jpg"),
      calories: 150,
      carbs: 1,
      fat: 2,
      protein: 30,
    },
    {
      id: 4,
      name: "Oatmeal with Bananas and Honey",
      photo: require("../../assets/oats.jpg"),
      calories: 400,
      carbs: 60,
      fat: 7,
      protein: 9,
    },{
      id: 5,
      name: "Omelette",
      photo: require("../../assets/omelette.jpg"),
      calories: 180,
      carbs: 14,
      fat: 12,
      protein: 14,
    },{
      id: 6,
      name: "Avocado Toast",
      photo: require("../../assets/avocadoToast.jpg"),
      calories: 350,
      carbs: 35,
      fat: 17,
      protein: 6,
    },{
      id: 7,
      name: "Boiled Egg",
      photo: require("../../assets/eggs.jpg"),
      calories: 80,
      carbs: 0.2,
      fat: 5,
      protein: 6,
    },{
      id: 8,
      name: "Yogurt",
      photo: require("../../assets/Yogurt.jpg"),
      calories: 80,
      carbs: 10,
      fat: 4,
      protein: 5,
    },{
      id: 9,
      name: "Cottage Cheese",
      photo: require("../../assets/cheese.jpg"),
      calories: 100,
      carbs: 3,
      fat: 3,
      protein: 12,
    },{
      id: 10,
      name: "Chicken Noodle Soup",
      photo: require("../../assets/noodles.jpg"),
      calories: 150,
      carbs: 20,
      fat: 6,
      protein: 12,
    },{
      id: 11,
      name: "Beef Soup",
      photo: require("../../assets/soup.jpg"),
      calories: 150,
      carbs: 15,
      fat: 6,
      protein: 15,
    },{
      id: 12,
      name: "Grilled Chicken",
      photo: require("../../assets/chicken.jpg"),
      calories: 200,
      carbs: 1,
      fat: 8,
      protein: 30,
    },{
      id: 13,
      name: "Grilled Mushrooms",
      photo: require("../../assets/mushrooms.jpg"),
      calories: 22,
      carbs: 2.7,
      fat: 0.3,
      protein: 2.5,
    },{
      id: 14,
      name: "Rice with Vegetables",
      photo: require("../../assets/rice.jpg"),
      calories: 300,
      carbs: 27,
      fat: 0.9,
      protein: 2.3,
    },{
      id: 15,
      name: "Baked Potatoes",
      photo: require("../../assets/potato.jpg"),
      calories: 200,
      carbs: 23,
      fat: 5.4,
      protein: 2.9,
    },{
      id: 16,
      name: "Pizza",
      photo: require("../../assets/pizza.jpg"),
      calories: 300,
      carbs: 35,
      fat: 15,
      protein: 12,
    },{
      id: 17,
      name: "Caesar Salad",
      photo: require("../../assets/caesar.jpg"),
      calories: 450,
      carbs: 30,
      fat: 30,
      protein: 30,
    },{
      id: 18,
      name: "Red Cabbage Salad",
      photo: require("../../assets/salad.jpg"),
      calories: 100,
      carbs: 10,
      fat: 2,
      protein: 4,
    },{
      id: 40,
      name: "Mashed Potatoes",
      photo: require("../../assets/mashedPotatoes.jpg"),
      calories: 250,
      carbs: 40,
      fat: 10,
      protein: 3,
    },{
      id: 19,
      name: "Beef Burger",
      photo: require("../../assets/burger.jpg"),
      calories: 300,
      carbs: 5,
      fat: 25,
      protein: 25,
    },{
      id: 20,
      name: "Pasta",
      photo: require("../../assets/pasta.jpg"),
      calories: 158,
      carbs: 30,
      fat: 2,
      protein: 6,
    },{
      id: 21,
      name: "Salmon",
      photo: require("../../assets/somon.jpg"),
      calories: 206,
      carbs: 0,
      fat: 13,
      protein: 20,
    },{
      id: 22,
      name: "Spinach",
      photo: require("../../assets/spanac.jpg"),
      calories: 23,
      carbs: 3.6,
      fat: 0.4,
      protein: 2.9,
    },{
      id: 23,
      name: "Porc Steak",
      photo: require("../../assets/steak.jpg"),
      calories: 300,
      carbs: 0,
      fat: 25,
      protein: 20,
    },{
      id: 24,
      name: "Apple",
      photo: require("../../assets/apple.jpg"),
      calories: 95,
      carbs: 25,
      fat: 0.3,
      protein: 0.5,
    },{
      id: 25,
      name: "Banana",
      photo: require("../../assets/banana.jpg"),
      calories: 105,
      carbs: 27,
      fat: 0.4,
      protein: 1,
    },{
      id: 26,
      name: "Pear",
      photo: require("../../assets/pear.jpg"),
      calories: 100,
      carbs: 27,
      fat: 0.3,
      protein: 1,
    },{
      id: 27,
      name: "Strawberries",
      photo: require("../../assets/capsuni.jpg"),
      calories: 32,
      carbs: 7.7,
      fat: 0.3,
      protein: 0.7,
    },{
      id: 28,
      name: "Cranberries",
      photo: require("../../assets/afine.jpg"),
      calories: 57,
      carbs: 14.5,
      fat: 0.3,
      protein: 0.7,
    },{
      id: 29,
      name: "Pineapple",
      photo: require("../../assets/ananas.jpg"),
      calories: 50,
      carbs: 13,
      fat: 0.2,
      protein: 0.5,
    },{
      id: 30,
      name: "Mango",
      photo: require("../../assets/mango.jpg"),
      calories: 60,
      carbs: 15,
      fat: 0.4,
      protein: 0.8,
    },{
      id: 31,
      name: "Kiwi",
      photo: require("../../assets/kiwi.jpg"),
      calories: 61,
      carbs: 14.7,
      fat: 0.5,
      protein: 1.1,
    },{
      id: 32,
      name: "Grapes",
      photo: require("../../assets/grapes.jpg"),
      calories: 69,
      carbs: 18.1,
      fat: 0.16,
      protein: 0.72,
    },{
      id: 33,
      name: "Peaches",
      photo: require("../../assets/peaches.jpg"),
      calories: 39,
      carbs: 9.54,
      fat: 0.25,
      protein: 0.91,
    },
  ];

  const [food, setFood] = useState<FoodItem[]>(foodList);

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fffcef',
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
      console.log("empty");
    } else {
      const lowercaseQuery = query.toLowerCase();
      setFood(
        foodList.filter((d) => d.name.toLowerCase().includes(lowercaseQuery))
      );
      foodList.map((d) => console.log(d.name));
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
          <Searchbar
            value={searchQuery}
            style={{ margin: "3%", flex: 1, backgroundColor :"#EEF5DB", paddingVertical :"0.0001%"}}
            placeholder="Search"
            //inputStyle = {{marginTop: "-5%", marginBottom: "-5%"}}
            onChangeText={onChangeSearch}
          />
        </View>
        <ScrollView>{renderFood(food)}</ScrollView>
      </View>
    </>
  );
};

export default SearchPageScreen;
