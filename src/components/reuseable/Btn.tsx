import { Pressable, StyleProp, StyleSheet, Text, View } from "react-native";

export default function Btn(props: {
  text: String;
  on: () => void;
  style: any;
}) {
  return (
    <Pressable style={props.style} onPress={props.on}>
      <Text>{props.text}</Text>
    </Pressable>
  );
}
