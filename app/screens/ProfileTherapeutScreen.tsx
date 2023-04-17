import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Button, Card, IconButton } from 'react-native-paper';
import globalstyles from "../global.styles.js";

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const ProfileTherapeutScreen = ({route, navigation }: any) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View
          style={[styles.upContainer, {marginTop : "-10%", marginBottom : "5%"}]}
        >
          <IconButton
            icon="keyboard-backspace"
            mode="contained-tonal"
            style={[globalstyles.iconButton, {marginRight: 25}]}
            size={20}
            onPress={() => navigation.goBack()}
          />

          <Text style={[styles.nameText, {marginRight : 30}]}>Therapist {item.name}</Text>
        </View>
      <Image source={{ uri: item.avatarURL }} style={{ width: ITEM_SIZE, height: ITEM_SIZE, borderRadius: ITEM_SIZE / 2 }}/>
      <View style={styles.infoContainer}>
      <View style={{backgroundColor: "#EEF5DB", marginTop : 25, elevation : 3, borderTopLeftRadius: 40, borderTopRightRadius: 40, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, paddingTop: 28, paddingLeft: 30,paddingRight: 30, paddingBottom: 40,}}>
          <Text style={styles.sectionTitle}>About {item.name}</Text>
          <Text style={styles.sectionContent}>{item.description}</Text>
        </View>
        
        <Card style={{backgroundColor: "#EEF5DB", marginTop : 10, borderTopLeftRadius: 40, borderTopRightRadius: 40, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, paddingTop: 28, paddingLeft: 30,paddingRight: 30, paddingBottom: 40,}}>
          <Text style={styles.sectionTitle}>Contact Info</Text>
          <Text style={styles.sectionContent}>Email: {item.email}</Text>
        </Card>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("ProfileTherapeutChatScreen", { item })
        }
      >
        <Text style={styles.buttonText}>Chat with {item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  upContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: "2.5%",
    backgroundColor: "#fffcef",
    alignItems: "center",
    justifyContent: "flex-start",
    maxHeight :80,
    // paddingVertical: 10,
    // marginTop: "5%",
    // marginBottom: "0%",
    // marginBottom: "2%",
    // borderColor : "red",
    // borderWidth : 3,
  },

  container: {
    flex: 1,
    backgroundColor: "#fffcef",
    alignItems: "center",
    justifyContent: "center",
    // borderColor : "red",
    // borderWidth : 3,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    // marginBottom: 20,
    textAlign: "center",
  },
  infoContainer: {
    width: "90%",
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: "#333333",
  },
  serviceText: {
    fontSize: 16,
    color: "#333333",
    marginLeft: 20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#70c1b3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 60,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ProfileTherapeutScreen;