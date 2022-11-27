import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Btn from "../reuseable/Btn";
import { welcomeStyles } from "./styles/welcomeStyles";
export default function OpeningChoice(props: {
  handleHavingAcc: () => void;
  handleNotHavingAcc: () => void;
}) {
  return (
    <View style={welcomeStyles.view}>
      <Text>logo</Text>
      <Text style={welcomeStyles.text}>Do you have an account?</Text>
      <View style={welcomeStyles.btnCont}>
        <Btn
          text={"Yes"}
          on={props.handleHavingAcc}
          style={welcomeStyles.btn}
        ></Btn>
        <Btn
          text={"No"}
          on={props.handleNotHavingAcc}
          style={welcomeStyles.btn}
        ></Btn>
      </View>
    </View>
  );
}
