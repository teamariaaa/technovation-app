import React from "react";
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import ProfileTherapeutScreen from "./ProfileTherapeutScreen";
const { width, height } = Dimensions.get('screen');;

const persons = [
  {
	id: "1",
  name: "Dr. Sophia Lee",
  description: "Is passionate about educating her clients on the importance of healthy eating and guiding them towards achieving their health goals",
  avatarURL: "https://source.unsplash.com/rDEOVtE7vOs",
  messages: [
    {text: "Hello, Dr. Sophia Lee!", sender: true},
    {text: "Hello! Thank you for choosing me as your therapist. How are you feeling?", sender: false},
    {text: "I'm feeling great, thank you!", sender: true},
    {text: "Now, how can I help? What is bothering you? 🤗", sender: false},
  ],
  email: "dr_sophialee@gmail.com",
  phone: "",
  },

  {
	id: "2",
	name: "Dr. Winston Orn",
  description: "A renowned nutrition therapist who focuses on using whole foods and natural remedies to address health concerns and promote overall wellness",
  avatarURL: "https://source.unsplash.com/iFgRcqHznqg",
  messages: [
    {text: "Hi Dr. Orn, I'm interested in getting some nutrition advice. What are some tips you have for eating healthier?", sender: true},
    {text: "Hi there! That's great to hear 🤗. One tip I have is to focus on eating whole, nutrient-dense foods like fruits, vegetables, whole grains, and lean proteins. You should also aim to limit your intake of processed foods and sugary drinks. Do you have any specific questions or concerns?", sender: false},
  ],
  email: "dr_winstonorn@gmail.com",
  phone: "",
  },

  {
	id: "3",
  name: "Dr. Emily Evans",
  description: "A trusted nutrition therapist who focuses on helping clients manage chronic conditions such as diabetes",
  avatarURL: "https://source.unsplash.com/mEZ3PoFGs_k",
  messages: [
    {text: "Hi Dr. Emily Evans, it's nice to meet you. I've been struggling with managing my diabetes and was wondering if you had any advice.", sender: true},
    {text: "Hi there, it's great to meet you too. Managing diabetes can be challenging, but there are many strategies we can explore. Can you tell me a bit more about your current routine?", sender: false},
    {text: "Sure, I try to eat a balanced diet and exercise regularly, but my blood sugar levels still seem to be all over the place.", sender: true},
    {text: "It's great that you're already taking steps to manage your diabetes. Have you considered tracking your blood sugar levels throughout the day?🤗", sender: false},
    {text: "This can help us identify patterns and adjust your routine accordingly. We can also discuss specific dietary changes and potentially medication options. Let's work together to find the best solution for you.", sender: false},
  ],
  email: "dr_emilyevans@gmail.com",
  phone: "",
  },

  {
	id: "4",
	name: "Dr. Malcolm Labadie",
  description: "A holistic nutrition therapist who believes in treating the whole person, not just the symptoms, and incorporates alternative therapies into his practice",
  avatarURL: "https://source.unsplash.com/YUu9UAcOKZ4",
  messages: [
    {text: "Hi Dr. Malcolm Labadie, it's nice to meet you! Can you tell me a bit about your approach to nutrition therapy?", sender: true},
    {text: "Hi there! Of course. My philosophy is to treat the whole person, not just the symptoms.", sender: false},
    {text: "That's really interesting! Can you give me an example of how you might use an alternative therapy in conjunction with nutrition therapy?", sender: true},
    {text: "Let's say a patient comes to me with digestive issues. In addition to recommending dietary changes and supplements, I might also suggest acupuncture to help stimulate the digestive system, or meditation to reduce stress levels that could be contributing to the problem. Is there any such a problem I might solve?", sender: false},
  ],
  email: "dr_malcolmlabadie@gmail.com",
  phone: "",
  },

  {
	id: "5",
	name: "Dr. Michelle Dare",
  description: "A dedicated nutrition therapist who specializes in working with athletes and fitness enthusiasts to optimize their performance through proper nutrition and hydration",
  avatarURL: "https://source.unsplash.com/_H6wpor9mjs",
  messages: [
    {text: "Hi Dr. Orn, I'm interested in getting some nutrition advice. What are some tips you have for eating healthier?", sender: true},
    {text: "Hi there! That's great to hear 🤗 The timing of your meals can have an impact on your metabolism and energy levels. Generally, it's a good idea to eat breakfast within an hour of waking up and then aim to eat every 3-4 hours throughout the day. This helps to keep your blood sugar levels stable and prevent overeating later on.", sender: false},
    {text: "How does your current meal schedule look like?", sender: false},
  ],
  email: "dr_michelledare@gmail.com",
  phone: "",
  },

  {
	id: "6",
	name: "Dr. Carlton Zieme",
  description: "A knowledgeable nutrition therapist who emphasizes the importance of a balanced diet and works with clients to create meal plans that fit their unique needs and preferences",
  avatarURL: "https://source.unsplash.com/7YVZYZeITc8",
  messages: [
    {text: "Hi Dr. Zieme. I'm actually a vegetarian and sometimes struggle to get enough protein in my diet. Do you have any suggestions?", sender: true},
    {text: "Hi there! Great to hear that you're looking to make some positive changes. Getting enough protein can be a common concern for vegetarians. Some great vegetarian sources of protein include legumes (like lentils, chickpeas, and black beans), nuts and seeds (like almonds, chia seeds, and hemp seeds), and tofu or tempeh. Do you typically include these types of foods in your diet?", sender: false},
  ],
  email: "dr_carltonzieme@gmail.com",
  phone: "",
  },

  {
	id: "7",
	name: "Dr. Jessie Dickinson",
  description: "A skilled nutrition therapist who helps clients with a wide range of health issues, from weight management to digestive disorders, using evidence-based nutritional strategies",
  avatarURL: "https://source.unsplash.com/-zqoE7jnQgw",
  messages: [
    {text: "Hi Dr. Dickinson, I've been struggling with some digestive issues lately and I'm not sure what to do. Do you have any advice?", sender: true},
    {text: "Hi there! Sorry to hear that you're experiencing digestive issues😕. Can you tell me a little more about what symptoms you're having?", sender: false},
  ],
  email: "dr_jessiedickinson@gmail.com",
  phone: "",
  },
  
  {
	id: "8",
	name: "Dr. Julian Gulgowski",
  description: "A passionate nutrition therapist who believes that food is medicine and helps clients use nutrition to prevent and treat chronic diseases",
  avatarURL: "https://source.unsplash.com/6anudmpILw4",
  messages: [
    {text: "Hi Dr. Gulgowski, I've been struggling with some chronic health issues and I'm looking for ways to use nutrition to improve my condition. Can you help?", sender: true},
    {text: "Absolutely! It's great to hear that you're interested in using nutrition to support your health. Can you tell me a little more about your specific health concerns?", sender: false},
    {text: "Sure, I have high blood pressure and I've been diagnosed with type 2 diabetes😕. I also have high cholesterol levels.", sender: true},
    {text: " Okay, those are all serious health concerns that can be managed with the right nutrition plan📋. Have you made any changes to your diet or lifestyle since your diagnosis?", sender: false},
  ],
  email: "dr_juliangulgowski@gmail.com",
  phone: "",
  },

  {
	id: "9",
	name: "Dr. Ellen Veum",
  description: "A compassionate nutrition therapist who works with clients to develop healthy relationships with food and overcome emotional eating habits",
  avatarURL: "https://source.unsplash.com/u3WmDyKGsrY",
  messages: [
    {text: "Hi Dr. Veum, I've been struggling with emotional eating and I'm not sure how to overcome this habit. Can you help me?", sender: true},
    {text: "Absolutely! Emotional eating can be a challenging habit to break, but it's definitely possible. Can you tell me a little more about your eating habits and what triggers your emotional eating?", sender: false},
    {text: "Sure, I tend to turn to food when I'm stressed or anxious. I also tend to eat when I'm bored or feeling down.", sender: true},
    {text: "Okay, that's a common pattern for emotional eating. One of the first steps to overcoming this habit is to identify your triggers and find healthier ways to cope with them. For example, if stress is a trigger for you, finding ways to manage stress like meditation, yoga, or talking to a therapist can be helpful", sender: false},
    {text: "Have you considered any of these?", sender: false},
  ],
  email: "dr_ellenveum@gmail.com",
  phone: "",
  },

  {
	id: "10",
	name: "Dr. Lorena Rice",
  description: "An experienced nutrition therapist who specializes in plant-based nutrition and helps clients transition to a plant-based diet for improved health and sustainability",
  avatarURL: "https://source.unsplash.com/dbPWgxsWFvY",
  messages: [
    {text: "Hi Dr. Rice, I've been considering transitioning to a plant-based diet but I'm not sure where to start. Can you help me?🥺", sender: true},
    {text: "Absolutely! Transitioning to a plant-based diet can be a great way to improve your health and reduce your environmental footprint. What are your reasons for wanting to make this change?", sender: false},
    {text: " Some great plant-based protein sources include beans, lentils, tofu, tempeh, nuts, and seeds. Quinoa and whole grains like brown rice and farro are also good sources of protein. It's important to include a variety of protein sources in your diet to ensure you're getting all the essential amino acids your body needs.", sender: false},
    {text: "Have you tried any plant-based meals or recipes before?", sender: false},
  ],
  email: "dr_lorenarice@gmail.com",
  phone: "",
  },

  {
    id: "11",
    name: "Dr. Carlton Collins",
    description: "A compassionate nutrition therapist who helps clients develop sustainable eating habits and provides ongoing support and guidance throughout their health journey",
    avatarURL: "https://source.unsplash.com/644AhjsZNQs",
    messages: [
      {text: "Hi there, how can I help you today?🤗", sender: false},
      {text: " Hi Dr. Collins, I'm interested in improving my nutrition and developing healthier eating habits.", sender: true},
      {text: "That's great to hear! Can you tell me a little bit about your current eating habits?", sender: false},
    ],
    email: "dr_carltoncollins@gmail.com",
    phone: "",
  },

  {
    id: "12",
    name: "Dr. William Garcia",
    description: "A board-certified nutrition therapist who specializes in sports nutrition",
    avatarURL: "https://source.unsplash.com/ILip77SbmOE",
    messages: [
      {text: "Hi Y/n, how are you? What can I do for you?", sender: false},
      {text: "Hi Dr. Garcia, I'm fine, thank you. I'm looking to improve my nutrition for sports performance.", sender: true},
      {text: "Great to hear! Can you tell me more about the sports you participate in and your current training routine?", sender: false},
    ],
    email: "dr_williamgarcia@gmail.com",
    phone: "",
  },

  {
    id: "13",
    name: "Dr. Earnest Green",
    description: "A seasoned nutrition therapist with years of experience in creating personalized nutrition plans to help clients achieve their health goals",
    avatarURL: "https://source.unsplash.com/d1UPkiFd04A",
    messages: [
      {text: "Good evening, Dr. Green, I'm looking to improve my overall health and wellness through better nutrition. What advice do you have for me?", sender: true},
      {text: "That's great to hear! Can you tell me a bit more about your current eating habits and lifestyle?", sender: false},
    ],
    email: "dr_earnestgreen@gmail.com",
    phone: "",
  },

  {
    id: "14",
    name: "Dr. Elena Smith",
    description: "A dedicated nutrition therapist who is committed to helping individuals lead healthier and happier lives",
    avatarURL: "https://source.unsplash.com/wOe_VGJe3TE",
    messages: [
      {text: "Hi Dr. Smith, I'm interested in improving my diet and overall health.", sender: true},
      {text: "Great to hear!🙂 Can you tell me a bit more about your current eating habits?", sender: false},
      {text: "I tend to eat a lot of fast food and processed snacks, and I know I'm not getting enough fruits and vegetables.", sender: true},
      {text: "Okay, it sounds like we have a good starting point. Have you thought about any specific dietary changes you'd like to make?", sender: false},
      {text: " I've heard a lot about the benefits of a plant-based diet, but I'm not sure if it's right for me.", sender: true},
      {text: " That's understandable. Have you ever tried incorporating more plant-based meals into your diet?🌿", sender: false},
      {text: "Not really, I'm not sure where to start.", sender: true},
      {text: "No problem, we can definitely work on that together. Do you have any dietary restrictions or food allergies that I should be aware of?", sender: false},
      {text: "You should keep in mind that making small changes can make a big difference over time🤗", sender: false}
    ],
    email: "dr_elenasmith@gmail.com",
    phone: "",
  },
];

const SPACING = 20;
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
  
  return <View style={{flex: 1, backgroundColor: '#fffcef'}}>
  <SafeAreaView style={styles.container}>
  <Animated.FlatList
          data = {persons}
        //  onScroll={Animated.event(
        //    [{nativeEvent: {contentOffset: {y: scrollY}}}],
        //    {useNativeDriver: true}
        //  )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={myListEmpty}
          ListHeaderComponent={() => (
            <View style={styles.container}>
              <Text style={{fontFamily: "Cabin",
                  fontSize: 36,
                  fontWeight: "400",
                  letterSpacing: 0,
                  lineHeight: 36,
                  // marginTop: "30%",
                  marginBottom: "15%",
                  color: "#333333",
                  textAlign: 'center'}}>Therapists</Text>
            </View>
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
              <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ProfileTherapeutScreen", { item })
                  }>
            <View style={{flexDirection: 'column'}}>
            <Image
              source={{ uri: item.avatarURL }}
              style={{ width: ITEM_SIZE / 2, height: ITEM_SIZE / 2, borderRadius: ITEM_SIZE / 4 }}
            />
              {/* <Text style={{ fontSize: 18, fontWeight: "600", textDecorationColor: "#246324"}}>{item.name}</Text> */}
                    <Text style={{ fontSize: 18, fontWeight: "600", textDecorationColor: "#246324"}}>{item.name}</Text>
                    <Text style={{ fontFamily: "Cabin", fontSize: 16, fontWeight: "400", letterSpacing: 0.15, lineHeight: 21}}>{item.description}</Text>
            </View>
            </TouchableOpacity>
          </Animated.View>
           }}
           />
    </SafeAreaView>
    </View>
}
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
});