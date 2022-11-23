import { Button, StyleSheet, Text, View } from "react-native";
import { welcomeStyles } from "./styles/welcomeStyles";
export default function Welcome() {
  return (
    <View style={welcomeStyles.view}>
      <Text>LOGO</Text>
      <Text style={welcomeStyles.text}>Czy masz już konto?</Text>
      <View style={welcomeStyles.btnCont}>
        <Button title="Nie"></Button>
      </View>
    </View>
  );
}
