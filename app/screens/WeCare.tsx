import React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from "react-native";

const { width, height } = Dimensions.get("screen");
const persons = [
  {
    id: "1",
    name: "Dr. Sophia Lee",
    description:
      "Is passionate about educating her clients on the importance of healthy eating and guiding them towards achieving their health goals",
    avatarURL: "https://source.unsplash.com/rDEOVtE7vOs",
  },

  {
    id: "2",
    name: "Dr. Winston Orn",
    description:
      "A renowned nutrition therapist who focuses on using whole foods and natural remedies to address health concerns and promote overall wellness",
    avatarURL: "https://source.unsplash.com/iFgRcqHznqg",
  },

  {
    id: "3",
    name: "Dr. Emily Evans",
    description:
      "A trusted nutrition therapist who focuses on helping clients manage chronic conditions such as diabetes",
    avatarURL: "https://source.unsplash.com/mEZ3PoFGs_k",
  },

  {
    id: "4",
    name: "Dr. Malcolm Labadie",
    description:
      "A holistic nutrition therapist who believes in treating the whole person, not just the symptoms, and incorporates alternative therapies into his practice",
    avatarURL: "https://source.unsplash.com/YUu9UAcOKZ4",
  },

  {
    id: "5",
    name: "Dr. Michelle Dare",
    description:
      "A dedicated nutrition therapist who specializes in working with athletes and fitness enthusiasts to optimize their performance through proper nutrition and hydration",
    avatarURL: "https://source.unsplash.com/_H6wpor9mjs",
  },

  {
    id: "6",
    name: "Dr. Carlton Zieme",
    description:
      "A knowledgeable nutrition therapist who emphasizes the importance of a balanced diet and works with clients to create meal plans that fit their unique needs and preferences",
    avatarURL: "https://source.unsplash.com/7YVZYZeITc8",
  },

  {
    id: "7",
    name: "Dr. Jessie Dickinson",
    description:
      "A skilled nutrition therapist who helps clients with a wide range of health issues, from weight management to digestive disorders, using evidence-based nutritional strategies",
    avatarURL: "https://source.unsplash.com/-zqoE7jnQgw",
  },

  {
    id: "8",
    name: "Dr. Julian Gulgowski",
    description:
      "A passionate nutrition therapist who believes that food is medicine and helps clients use nutrition to prevent and treat chronic diseases",
    avatarURL: "https://source.unsplash.com/6anudmpILw4",
  },

  {
    id: "9",
    name: "Dr. Ellen Veum",
    description:
      "A compassionate nutrition therapist who works with clients to develop healthy relationships with food and overcome emotional eating habits",
    avatarURL: "https://source.unsplash.com/u3WmDyKGsrY",
  },

  {
    id: "10",
    name: "Dr. Lorena Rice",
    description:
      "An experienced nutrition therapist who specializes in plant-based nutrition and helps clients transition to a plant-based diet for improved health and sustainability",
    avatarURL: "https://source.unsplash.com/dbPWgxsWFvY",
  },

  {
    id: "11",
    description:
      "A compassionate nutrition therapist who helps clients develop sustainable eating habits and provides ongoing support and guidance throughout their health journey",
    avatarURL: "https://source.unsplash.com/644AhjsZNQs",
  },

  {
    id: "12",
    name: "Dr. William Garcia",
    description:
      "A board-certified nutrition therapist who specializes in sports nutrition",
    avatarURL: "https://source.unsplash.com/ILip77SbmOE",
  },

  {
    id: "13",
    name: "Dr. Earnest Green",
    description:
      "A seasoned nutrition therapist with years of experience in creating personalized nutrition plans to help clients achieve their health goals",
    avatarURL: "https://source.unsplash.com/d1UPkiFd04A",
  },

  {
    id: "14",
    name: "Dr. Elena Smith",
    description:
      "A dedicated nutrition therapist who is committed to helping individuals lead healthier and happier lives",
    avatarURL: "https://source.unsplash.com/wOe_VGJe3TE",
  },
];

const SPACING = 20;
const SPACING_CARDS = 40;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const WeCareScreen = ({ navigation }: any) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fffcef" }}>
      <SafeAreaView style={styles.container}>
        <Animated.FlatList
          data={persons}
          //  onScroll={Animated.event(
          //    [{nativeEvent: {contentOffset: {y: scrollY}}}],
          //    {useNativeDriver: true}
          //  )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={myListEmpty}
          ListHeaderComponent={() => (
            <View style={styles.container}>
              <Text
                style={{
                  fontFamily: "Cabin",
                  fontSize: 24,
                  fontWeight: "400",
                  letterSpacing: 0,
                  lineHeight: 36,
                  // marginTop: "30%",
                  marginTop: "10%",
                  marginBottom: "10%",
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                Therapists
              </Text>
            </View>
          )}
          contentContainerStyle={{
            padding: SPACING,
            paddingTop: StatusBar.currentHeight || 42,
          }}
          renderItem={({ item, index }) => {
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2),
            ];

            const opacityInputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 0.5),
            ];

            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1, 1, 1, 0],
            });

            const opacity = scrollY.interpolate({
              inputRange: opacityInputRange,
              outputRange: [1, 1, 1, 0],
            });
            return (
              <Animated.View
                style={{
                  flexDirection: "row",
                  padding: SPACING,
                  marginBottom: SPACING_CARDS,
                  backgroundColor: "#c1dbc1",
                  borderRadius: 12,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.3,
                  shadowRadius: 20,
                  opacity,
                  transform: [{ scale }],
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <Image
                    source={{ uri: item.avatarURL }}
                    style={{
                      width: ITEM_SIZE / 2,
                      height: ITEM_SIZE / 2,
                      borderRadius: ITEM_SIZE / 4,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      textDecorationColor: "#246324",
                      marginVertical: "5%",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={
                      (styles.text,
                      [
                        {
                          fontSize: 14,
                          fontWeight: "400",
                          letterSpacing: 0.25,
                          lineHeight: 20,
                        },
                      ])
                    }
                  >
                    {item.description}
                  </Text>
                </View>
              </Animated.View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};
export default WeCareScreen;

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },

  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
  },

  text: {
    color: "#3C403D",
    fontFamily: "Cabin",
  },
});
