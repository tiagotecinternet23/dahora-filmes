import { Button, StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function BuscarFilmes() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>
          Star Trek? O Poderoso Chefão? A trilogia Senhor dos Anéis?
        </Text>
        <Text style={estilos.texto}>
          Localize um filme que você viu ou gostaria de ver!
        </Text>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
  subtitulo: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    marginVertical: 8,
    fontSize: 18,
  },
  texto: {
    marginVertical: 8,
  },
  nomeApp: {
    fontWeight: "bold",
    color: "#5351a6",
  },
  viewApi: {
    alignItems: "center",
    marginVertical: 8,
  },
  imagemApi: {
    width: 160,
  },
});
