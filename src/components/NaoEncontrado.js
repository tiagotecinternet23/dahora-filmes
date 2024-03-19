import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function NaoEncontrado() {
  return (
    <View style={estilos.viewNaoEncontrado}>
      <Text>Nenhum filme encontrado!</Text>
      <MaterialIcons name="report-gmailerrorred" size={144} color="#5453a1" />
    </View>
  );
}
const estilos = StyleSheet.create({
  viewNaoEncontrado: {
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
