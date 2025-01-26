import { useFonts } from "expo-font";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function Index() {
  const [loaded] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      router.push({
        pathname: "./main/home",
      });
    }, 2500);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9E6CF",
      }}
    >
      <Text style={{ fontFamily: "PoppinsBold", fontSize: RFValue(30) }}>
        UniLock
      </Text>
    </View>
  );
}
