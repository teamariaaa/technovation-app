import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity, Linking } from "react-native";
import MainLayout from "./Layout";
import {
  Card,
  Paragraph,
  Avatar,
  Title,
  Chip,
  Surface,
  Button,
  IconButton,
  DataTable,
} from "react-native-paper";
//import styles from "../global.styles.js";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

const LeftContent = () => (
  <Avatar.Image
    size={70}
    source={require("../../assets/profilePicture.jpeg")}
  />
);

const ResourcesScreen = ({ navigation }: any) => {
  const resources = [
    {
      id: 1,
      name: 'National Eating Disorders Association (NEDA)',
      url: 'https://www.nationaleatingdisorders.org/',
      description:
        'NEDA supports individuals and families affected by eating disorders by providing education, resources, and support.',
    },
    {
      id: 2,
      name: 'Academy for Eating Disorders (AED)',
      url: 'https://www.aedweb.org/',
      description:
        'AED is a global network of professionals dedicated to eating disorder research, education, treatment, and prevention.',
    },
    {
      id: 3,
      name: 'ANAD: National Association of Anorexia Nervosa and Associated Disorders',
      url: 'https://anad.org/',
      description:
        'ANAD provides education, support, and advocacy for individuals and families affected by eating disorders.',
    },
    {
      id: 4,
      name: 'About Anorexia Nervosa',
      url: 'https://www.mayoclinic.org/diseases-conditions/anorexia-nervosa/symptoms-causes/syc-20353591',
      description:
        'Anorexia nervosa is an eating disorder characterized by a distorted body image, an intense fear of gaining weight, and severe calorie restriction.',
    },
    {
      id: 5,
      name: 'About Bulimia',
      url: 'https://www.mayoclinic.org/diseases-conditions/bulimia/symptoms-causes/syc-20353615',
      description:
        'Bulimia is an eating disorder characterized by a cycle of binge eating followed by purging, typically through self-induced vomiting, laxative use, or excessive exercise.',
    },
  ];

  const handleResourceClick = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.title,{ alignSelf: "center", marginTop: 30, marginBottom: 30}]}>Resources</Text>
        {resources.map((resource) => (
          <TouchableOpacity
            key={resource.id}
            style={styles.resourceContainer}
            onPress={() => handleResourceClick(resource.url)}
          >
            <Text style={styles.resourceName}>{resource.name}</Text>
            <Text style={styles.resourceDescription}>{resource.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: "Cabin",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resourceContainer: {
    backgroundColor: '#e4ede4',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  resourceName: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "Cabin",
    color: "#3C403D",
    marginBottom: 5,
  },
  resourceDescription: {
    fontSize: 16,
    fontFamily: "Cabin",
    color: '#999999', // light grey color code
  },
  text: {
    color: "#CDCBCB",
    fontFamily: "Cabin",
  },
});

export default ResourcesScreen;
