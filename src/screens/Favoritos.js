import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function Favoritos({ navigation }) {
  /* State para registrar os dados carregados do storage */
  const [listaFavoritos, setListaFavoritos] = useState([]);

  /* useEffect será disparado assim que o usuário entrar
  na tela Favoritos (portanto, somente uma vez) */
  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        /* Acessamos o storage criado previamente e guardamos
        as strings de dados. */
        const dados = await AsyncStorage.getItem("@favoritosdahora");

        /* Se houver dados, transformamos em objetos (JSON.parse)
        e atualizamos o state com a lista de favoritos */
        if (dados) {
          setListaFavoritos(JSON.parse(dados));
        }
      } catch (error) {
        console.error("Erro ao carregar os dados: " + error);
        Alert.alert("Erro", "Erro ao carregar os dados.");
      }
    };
    carregarFavoritos();
  }, []);

  const excluirTodosFavoritos = async () => {
    Alert.alert(
      "Excluir TODOS?",
      "Tem certeza que deseja excluir TODOS os favoritos",
      [
        /* Propriedade style (aparência do botão):
        SOMENTE NO IOS que faz diferença */
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim, manda ver",
          style: "destructive",
          onPress: async () => {
            // Removemos nosso storage de favoritos
            await AsyncStorage.removeItem("@favoritosdahora");

            // Atualizamos o state para sejam removidos da tela
            setListaFavoritos([]);
          },
        },
      ]
    );
  };

  const excluir = async () => {};

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>Quantidade: {listaFavoritos.length}</Text>

          <Pressable
            onPress={excluirTodosFavoritos}
            style={estilos.botaoExcluirFavoritos}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="trash-outline" size={16} /> Excluir favoritos
            </Text>
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => {
            return (
              <View key={filme.id} style={estilos.item}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Detalhes", { filme });
                  }}
                  style={estilos.botaoFilme}
                >
                  <Text style={estilos.titulo}>{filme.title}</Text>
                </Pressable>
                <Pressable onPress={excluir} style={estilos.botaoExcluir}>
                  <Ionicons color="white" name="trash" size={16} />
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  viewFavoritos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  texto: { marginVertical: 8 },
  botaoExcluirFavoritos: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 4,
  },
  textoBotao: { color: "red" },
  item: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee8fc",
    marginBottom: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  botaoFilme: { flex: 0.9 },
  titulo: { fontSize: 14 },
  botaoExcluir: {
    backgroundColor: "darkred",
    padding: 4,
    borderRadius: 4,
  },
});
