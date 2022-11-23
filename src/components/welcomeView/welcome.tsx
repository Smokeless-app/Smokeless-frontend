import { Button, StyleSheet, Text, View } from "react-native";
import Btn from "../reuseable/Btn";
import { welcomeStyles } from "./styles/welcomeStyles";
export default function Welcome() {
  function handleHavingAcc(): void {}
  function handleNotHavingAcc(): void {}
  return (
    <View style={welcomeStyles.view}>
      <Text>LOGO</Text>
      <Text style={welcomeStyles.text}>Czy masz już konto?</Text>
      <View style={welcomeStyles.btnCont}>
        <Btn text={"Tak"} on={handleHavingAcc} style={welcomeStyles.btn}></Btn>
        <Btn
          text={"Nie"}
          on={handleNotHavingAcc}
          style={welcomeStyles.btn}
        ></Btn>
      </View>
    </View>
  );
}
