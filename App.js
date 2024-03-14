import { Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";
import BuscarFilmes from "./src/screens/BuscarFilmes";
import Resultados from "./src/screens/Resultados";
import Detalhes from "./src/screens/Detalhes";

// Criação/inicialização do mecanismo Stack
const Stack = createNativeStackNavigator();

export default function App() {
  /* SOLUÇÃO 1 (AINDA ERRADA! REVISAR...) */
  /* const funcaoExterna = () => {
    navigation.navigate("Home");
  } */
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#5451a6" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: "Conheça nosso App" }}
          />
          <Stack.Screen name="Privacidade" component={Privacidade} />

          <Stack.Screen
            name="BuscarFilmes"
            component={BuscarFilmes}
            options={{
              title: "Qual filme quer pesquisar?",
            }}
          />

          <Stack.Screen name="Resultados" component={Resultados} />

          <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            options={({ navigation }) => {
              return {
                headerRight: () => (
                  <Button
                    color="black"
                    // onPress={funcaoExterna} // AINDA ZUADA!
                    onPress={() => navigation.navigate("Home")}
                    title="Home"
                  />
                ),
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
