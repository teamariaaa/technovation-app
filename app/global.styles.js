import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff2bd",
    // backgroundColor: "red",
    //backgroundColor: "red",
  },

  containerRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    alignSelf: "center",
  },

  img: {
    width: win.width / 1.2,
    height: win.width / 1.2,
    marginBottom: "20%",
  },

  logoImg: {
    width: win.width / 5,
    height: win.width / 5,
  },

  myButton: {
    //height: 16,
    alignSelf: "center",
    backgroundColor: "#fff2bd",
    borderRadius: 20,
    width: 250,
    marginTop: "8%",
  },

  smallHiddenButton: {
    alignSelf: "center",
    backgroundColor: "transparent",
    borderRadius: 20,
    width: 100,
  },

  roundButton: {
    width: 5,
    height: 25,
    borderRadius: 200,
    //alignSelf: "center",
  },

  marginButtonTop: {
    marginTop: 100,
  },

  containerText: {
    marginTop: "30%",
    marginBottom: "10%",
  },

  text: {
    color: "#333333",
  },

  lightText: {
    color: "#555555",
  },

  hightlightText: {
    color: "#246324",
  },

  headlineBig: {
    fontFamily: "Cabin",
    fontSize: 36,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 36,
    marginTop: "5%",
    marginBottom: "5%",
  },

  headlineSmall: {
    fontFamily: "Cabin",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 32,
    marginBottom: "5%",
  },

  titleLarge: {
    fontFamily: "Cabin",
    fontSize: 22,
    fontWeight: "400",
    letterSpacing: 0,
    lineHeight: 28,
  },

  textBodyLarge: {
    fontFamily: "Cabin",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.15,
    lineHeight: 24,
  },

  bodyMedium: {
    fontFamily: "Cabin",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.25,
    lineHeight: 20,
  },

  textBold: {
    fontWeight: "700",
  },

  textSemiBold: {
    fontWeight: "600",
  },

  upContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: "2.5%",
    backgroundColor: "#fff2bd",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },

  bottomContainer: {
    flex: 3,
    backgroundColor: "#c1dbc1",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 50,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingLeft: 30,
    paddingRight: 30,
  },
  iconButton: {
    backgroundColor: "#c1dbc1",
  },

  textCenter: {
    paddingLeft: "27%",
  },

  TextInput: {
    backgroundColor: "#eeeee4",
    width: "100%",
    height: 50,
    color: "#333",
    marginTop: 40,
    marginBottom: 40,
  },

  noMargin: {
    margin: 0,
  },

  noTopMargin: {
    marginTop: 0,
  },

  noBottomMargin: {
    marginBottom: 0,
  },

  navbavIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //padding: 10,
    //backgroundColor: "red",
  },
});

export default styles;
