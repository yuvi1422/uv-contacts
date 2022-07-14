import { StatusBar } from "expo-status-bar";
import {
  Button,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as sData from "./settings.strings.json";

const SettingsScreen = () => {
  const exportJSON = () => {
    console.debug(`Yuvraj is exporting PDF`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Long Night is coming.</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      <Text>Settings are just waiting for it</Text>

      <View style={styles.exportBtnContainer}>
        <Button title={sData.exportBtnTitle}></Button>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  exportBtnContainer: {
    margin: 20,
    width: "50%",
    bottom: "1%",
    position: "absolute",
  },
});
