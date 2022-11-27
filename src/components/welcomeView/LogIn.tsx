import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Btn from "../reuseable/Btn";
import { welcomeStyles } from "./styles/welcomeStyles";
export default function LogIn(props: { handleLogIn: (data) => void }) {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  function handleLog() {
    const data = { email: email, passwd: passwd };
    props.handleLogIn(data);
  }
  return (
    <View style={welcomeStyles.view}>
      <TextInput
        style={welcomeStyles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder="Your email"
      ></TextInput>
      <TextInput
        placeholder="Your password"
        secureTextEntry={true}
        style={welcomeStyles.input}
        onChangeText={(text) => setPasswd(text)}
      ></TextInput>
      <Btn text={"Log in"} on={handleLog} style={welcomeStyles.submitBtn}></Btn>
    </View>
  );
}
