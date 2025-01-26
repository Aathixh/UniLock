import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Lock from "@/assets/images/Lock";
import UnLock from "@/assets/images/UnLock";
import WifiConnected from "@/assets/images/WifiConnected";
import Battery from "@/assets/images/Battery";

const HomeScreen = () => {
  const [loaded] = useFonts({
    Poppins500Med: require("../../assets/fonts/Poppins500Med.ttf"),
    Poppins600SemiBold: require("../../assets/fonts/Poppins600SemiBold.ttf"),
    Poppins400Reg: require("../../assets/fonts/Poppins400Reg.ttf"),
    PoppinsBold: require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  const [doorState, setDoorState] = useState("closed");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subTitle}>
          Your door automation companion{"\n"}is ready to assist you.
        </Text>

        <Text style={styles.DoorStatus}>Door Opened</Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonActive,
          ]}
          onPress={() => {}}
        >
          <Lock />
          <Text style={styles.btnText}>CLOSE</Text>
          <View
            style={[
              styles.led,
              { backgroundColor: doorState === "closed" ? "green" : "red" },
            ]}
          />
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.SetupBotton,
            pressed && styles.buttonActive,
          ]}
          onPress={() => {}}
        >
          <WifiConnected />
        </Pressable>

        <View style={styles.StatusContainer}>
          <Text style={styles.statusText}>Connected</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Battery />
            <Text style={{ paddingLeft: 10 }}>100%</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9E6CF",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: RFValue(28),
    top: RFValue(50),
    fontFamily: "Poppins600SemiBold",
  },
  subTitle: {
    fontSize: RFValue(14),
    top: RFValue(40),
    textAlign: "center",
    color: "#5F5F5F",
    fontFamily: "Poppins400Reg",
  },
  DoorStatus: {
    fontSize: RFValue(18),
    top: RFValue(80),
    fontFamily: "Poppins500Med",
  },
  button: {
    backgroundColor: "#FFECDF",
    padding: RFValue(10),
    borderRadius: RFValue(100),
    top: RFValue(100),
    height: RFValue(280),
    width: RFValue(280),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 1,
    elevation: 20,
    transform: [{ scale: 1 }],
    borderWidth: 1,
    borderColor: "#000000",
  },
  buttonActive: {
    transform: [{ scale: 0.95 }],
    opacity: 0.9,
  },
  btnText: {
    fontSize: RFValue(34),
    fontFamily: "PoppinsBold",
  },
  led: {
    position: "absolute",
    top: RFValue(220),
    width: RFValue(40),
    height: RFValue(10),
    borderRadius: 10,
  },
  SetupBotton: {
    top: RFValue(120),
    backgroundColor: "#FFECDF",
    padding: RFValue(10),
    borderRadius: RFValue(100),
    height: RFValue(60),
    width: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 1,
    elevation: 20,
  },
  StatusContainer: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    top: RFValue(150),
    width: RFValue(300),
    height: RFValue(80),
    backgroundColor: "#FFECDF",
    borderRadius: RFValue(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 1,
    elevation: 20,
  },
  statusText: {
    fontSize: RFValue(18),
    fontFamily: "Poppins400Reg",
    paddingTop: RFValue(10),
    color: "#00CC07",
  },
});

export default HomeScreen;
