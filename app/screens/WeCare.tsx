import React from "react";
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');;
const persons = [
  {
	id: "1",
	name: "Dr. Earnest Green",
  description: "A seasoned nutrition therapist with years of experience in creating personalized nutrition plans to help clients achieve their health goals",
  },
  {
	id: "2",
	name: "Dr. Winston Orn",
  description: "A renowned nutrition therapist who focuses on using whole foods and natural remedies to address health concerns and promote overall wellness",
  },
  {
	id: "3",
	name: "Dr. Carlton Collins",
  description: "A compassionate nutrition therapist who helps clients develop sustainable eating habits and provides ongoing support and guidance throughout their health journey",
  },
  {
	id: "4",
	name: "Dr. Malcolm Labadie",
  description: "A holistic nutrition therapist who believes in treating the whole person, not just the symptoms, and incorporates alternative therapies into his practice",
  },
  {
	id: "5",
	name: "Dr. Michelle Dare",
  description: "A dedicated nutrition therapist who specializes in working with athletes and fitness enthusiasts to optimize their performance through proper nutrition and hydration",
  },
  {
	id: "6",
	name: "Dr. Carlton Zieme",
  description: "A knowledgeable nutrition therapist who emphasizes the importance of a balanced diet and works with clients to create meal plans that fit their unique needs and preferences",
  },
  {
	id: "7",
	name: "Dr. Jessie Dickinson",
  description: "A skilled nutrition therapist who helps clients with a wide range of health issues, from weight management to digestive disorders, using evidence-based nutritional strategies",
  },
  {
	id: "8",
	name: "Dr. Julian Gulgowski",
  description: "A passionate nutrition therapist who believes that food is medicine and helps clients use nutrition to prevent and treat chronic diseases",
  },
  {
	id: "9",
	name: "Dr. Ellen Veum",
  description: "A compassionate nutrition therapist who works with clients to develop healthy relationships with food and overcome emotional eating habits",
  },
  {
	id: "10",
	name: "Dr. Lorena Rice",
  description: "An experienced nutrition therapist who specializes in plant-based nutrition and helps clients transition to a plant-based diet for improved health and sustainability",
  },

  {
	id: "11",
	name: "Dr. Jessie Dickinson",
  description: "A highly experienced nutrition therapist with expertise in developing personalized nutrition plans for individuals based on their unique health needs and goals",
  },

  {
    id: "12",
    name: "Dr. Emily Evans",
    description: "A trusted nutrition therapist who focuses on helping clients manage chronic conditions such as diabetes",
  },

  {
    id: "13",
    name: "Dr. William Garcia",
    description: "A board-certified nutrition therapist who specializes in sports nutrition",
  },

  {
    id: "14",
    name: "Dr. Sophia Lee",
    description: "Is passionate about educating her clients on the importance of healthy eating and guiding them towards achieving their health goals",
  },

  {
    id: "15",
    name: "Dr. David Nguyen",
    description: "A dedicated nutrition therapist who is committed to helping individuals lead healthier and happier lives",
  },
];

const BG_IMG = 'https://th.bing.com/th/id/R.4f25763c3519f8b6b8a6db81c7221d2f?rik=X3Bk5wUWkehcxQ&riu=http%3a%2f%2findieherbalist.com%2fwp-content%2fuploads%2f2017%2f12%2flight-yellow-background.jpg&ehk=oeMjkus4Ss2zqw6jTlSUBK35kJF8ppDN6Q5DA5a9cnc%3d&risl=&pid=ImgRaw&r=0';
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

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
});

const WeCareScreen = ({ navigation }: any) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };
  return <View style={{flex: 1, backgroundColor: '#fff'}}>
  <Image
          source = {{uri : BG_IMG}}
          style = {StyleSheet.absoluteFillObject}
          blurRadius={20}
  />
  <SafeAreaView style={styles.container}>
  <Animated.FlatList
          data = {persons}
          // onScroll={Animated.event(
          //   [{nativeEvent: {contentOffset: {y: scrollY}}}],
          //   {useNativeDriver: true}
          // )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={myListEmpty}
          ListHeaderComponent={() => (
              <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
              List of Therapists
              </Text>
          )}
          contentContainerStyle = {{
            padding : SPACING,
            paddingTop : StatusBar.currentHeight || 42
          }}
          renderItem = {({item, index}) => {
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2)
            ]

            const opacityInputRange = [
              -1,
              0,
              ITEM_SIZE * index,
            ITEM_SIZE * (index + .5)
            ]

            const scale = scrollY.interpolate({
              inputRange,
              outputRange : [1, 1, 1, 0]
            })

            const opacity = scrollY.interpolate({
              inputRange : opacityInputRange,
              outputRange : [1, 1, 1, 0]
            })
            return <Animated.View style={{
              flexDirection: 'row', 
              padding : SPACING, 
              marginBottom : SPACING, 
              backgroundColor : '#c1dbc1', 
              borderRadius : 12, 
              shadowColor : "#000",  
              shadowOffset : {width : 0, height : 10}, 
              shadowOpacity : .3, 
              shadowRadius : 20,
              opacity,
              transform : [{scale}]
            }}>
            <View style={{flexDirection: 'column'}}>
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }}
              style={{ width: ITEM_SIZE / 2, height: ITEM_SIZE / 2, borderRadius: ITEM_SIZE / 4 }}
            />
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ fontSize: 14}}>{item.description}</Text>
            </View>
          </Animated.View>
           }}
           />
    </SafeAreaView>
    </View>
}
export default WeCareScreen;