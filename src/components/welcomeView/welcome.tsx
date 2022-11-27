import { useState } from "react";
import { View } from "react-native";
import LogIn from "./LogIn";
import Register from "./Register";
import OpeningChoice from "./OpeningChoice";
import { welcomeStyles } from "./styles/welcomeStyles";
export default function Welcome() {
  const [hasAcc, setHasAcc] = useState(false);
  const [checked, setChecked] = useState(false);
  function handleHavingAcc(): void {
    setChecked(true);
    setHasAcc(true);
  }
  function handleNotHavingAcc(): void {
    setChecked(true);

    setHasAcc(false);
  }
  function handleLogIn(data: { emal: string; passwd: string }): void {
    console.log(data);
  }
  function handleRegister(data: { emal: string; passwd: string }): void {
    console.log(data);
  }
  return (
    <View style={welcomeStyles.view}>
      {!checked && (
        <OpeningChoice
          handleHavingAcc={handleHavingAcc}
          handleNotHavingAcc={handleNotHavingAcc}
        ></OpeningChoice>
      )}
      {checked && hasAcc && <LogIn handleLogIn={handleLogIn}></LogIn>}
      {checked && !hasAcc && (
        <Register handleRegister={handleRegister}></Register>
      )}
    </View>
  );
}
