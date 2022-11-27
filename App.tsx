import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/components/welcomeView/welcome";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const [logIn, setlogIn] = useState(false);
  useEffect(() => {
    setlogIn(true);
  });

  return (
    <NavigationContainer>
      <View style={styles.app}>
        <Welcome />
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 20,
  },
});
