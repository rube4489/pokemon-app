import React from "react";
import { Provider } from "react-redux";
import PokemonList from "./src/components/PokemonList";
import { store } from "./src/app/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokemonDetail from "./src/screens/PokemonDetail";

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="home"
        >
          <RootStack.Screen name="home" component={PokemonList} />
          <RootStack.Screen name="pokemon-detail" component={PokemonDetail} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
