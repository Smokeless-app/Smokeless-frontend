import { View, Text, TextInput } from "react-native";
import { welcomeStyles } from "./styles/welcomeStyles";
import { useState } from "react";
import Btn from "../reuseable/Btn";
export default function Register(props: { handleRegister: (data) => void }) {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwd2, setPasswd2] = useState("");
  function handleReg() {
    const data = { email: email, passwd: passwd };
    props.handleRegister(data);
  }
  return (
    <View>
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
        <TextInput
          placeholder="Repeat password"
          secureTextEntry={true}
          style={welcomeStyles.input}
          onChangeText={(text) => setPasswd2(text)}
        ></TextInput>
        <Btn
          text={"Register"}
          on={handleReg}
          style={welcomeStyles.submitBtn}
        ></Btn>
      </View>
    </View>
  );
}
