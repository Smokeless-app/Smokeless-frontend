import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Btn(props: { text: String; on: () => {}; style: {} }) {
  return (
    <Pressable style={props.style} onPress={props.on}>
      <Text>{props.text}</Text>
    </Pressable>
  );
}
