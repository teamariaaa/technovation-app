import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFCEF",
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
    color: "#3C403D",
    fontFamily: "Cabin",
  },

  lightText: {
    color: "#555555",
    fontFamily: "Cabin",
  },

  lightText2: {
    color: "#808080",
    fontSize: 14,
    fontFamily: "Cabin",
  },

  hightlightText: {
    color: "#246324",
    fontFamily: "Cabin",
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

  paragraphStyle: {
    fontFamily: "Cabin",
    fontSize: 18,
    color: "#808080",
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
    backgroundColor: "#FFFCEF",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginVertical: "10%",
  },

  rowContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 28,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
  },

  idkContainer: {
    backgroundColor: "#EEF5DB",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingTop: 28,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "3%",
  },

  bottomContainer: {
    flex: 6,
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
    height: 45,
    color: "#333",
    marginTop: "9%",
    //marginBottom: ,
  },

  noMargin: {
    margin: "0%",
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

  surface: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    //margin: 10,
  },

  chip: {
    margin: 5,
    backgroundColor: "#c1dbc1",
  },

  profilePageAboutSuface: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  errorText: {
    color: "#246324",
    fontFamily: "Cabin",
    //marginBottom: "2%",
    marginTop: "2%",
  },
});

export default styles;
