import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Pokemon, { Stats } from "../models/Pokemon";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPokemonList } from "../features/pokemonListSlice";
import { Colors } from "../color";
import { setPokemon } from "../features/pokemonSlice";
import { useNavigation } from "@react-navigation/native";
import { PokemonsName } from "../models/PokemonList";

const PokemonList = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const currentList = useAppSelector((state) => state.pokemonList);

  useEffect(() => {
    const getPokemons = async () => {
      const url: string = "https://pokeapi.co/api/v2/pokemon?limit=150";
      await fetch(url)
        .then((response) => response.json())
        .then((pokemons) => {
          const newPokemon: PokemonsName = {
            pokemon1: pokemons.results[2]?.name,
            pokemon2: pokemons.results[148]?.name,
            pokemon3: pokemons.results[24]?.name,
            pokemon4: pokemons.results[32]?.name,
            pokemon5: pokemons.results[75]?.name,
            pokemon6: pokemons.results[11]?.name,
            pokemon7: pokemons.results[8]?.name,
            pokemon8: pokemons.results[142]?.name,
            pokemon9: pokemons.results[65]?.name,
            pokemon10: pokemons.results[110]?.name,
            pokemon11: pokemons.results[145]?.name,
            pokemon12: pokemons.results[149]?.name,
          };
          dispatch(setPokemonList(newPokemon));
        })
        .catch((err) => console.log(err));
    };

    getPokemons();
  }, []);

  const getPokemonDetail = async (pokemonName: string) => {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    await fetch(url)
      .then((response) => response.json())
      .then((pokemon) => {
        const currentPokemonStats: Stats = {
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          specialAttack: pokemon.stats[3].base_stat,
          specialDefense: pokemon.stats[4].base_stat,
          speed: pokemon.stats[5].base_stat,
        };
        const newPokemon: Pokemon = {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon?.sprites?.front_default?.toString(),
          height: pokemon.height,
          weight: pokemon.weight,
          type: pokemon?.types[0]?.type?.name.toString(),
          move: pokemon?.moves[0]?.move?.name.toString(),
          stats: currentPokemonStats,
          color:
            pokemon?.types[0]?.type?.name?.toString() === "grass"
              ? Colors.grass
              : pokemon?.types[0]?.type?.name?.toString() === "fire"
              ? Colors.fire
              : pokemon?.types[0]?.type?.name?.toString() === "water"
              ? Colors.water
              : pokemon?.types[0]?.type?.name?.toString() === "electric"
              ? Colors.electric
              : pokemon?.types[0]?.type?.name?.toString() === "ice"
              ? Colors.ice
              : pokemon?.types[0]?.type?.name?.toString() === "fighting"
              ? Colors.fighting
              : pokemon?.types[0]?.type?.name?.toString() === "poison"
              ? Colors.poison
              : pokemon?.types[0]?.type?.name?.toString() === "ground"
              ? Colors.ground
              : pokemon?.types[0]?.type?.name?.toString() === "flying"
              ? Colors.flying
              : pokemon?.types[0]?.type?.name?.toString() === "psychic"
              ? Colors.psychic
              : pokemon?.types[0]?.type?.name?.toString() === "bug"
              ? Colors.bug
              : pokemon?.types[0]?.type?.name?.toString() === "rock"
              ? Colors.rock
              : pokemon?.types[0]?.type?.name?.toString() === "ghost"
              ? Colors.ghost
              : pokemon?.types[0]?.type?.name?.toString() === "dragon"
              ? Colors.dragon
              : pokemon?.types[0]?.type?.name?.toString() === "dark"
              ? Colors.dark
              : pokemon?.types[0]?.type?.name?.toString() === "steel"
              ? Colors.steel
              : pokemon?.types[0]?.type?.name?.toString() === "fairy"
              ? Colors.fairy
              : pokemon?.types[0]?.type?.name?.toString() === "normal"
              ? Colors.normal
              : Colors.black,
        };
        dispatch(setPokemon(newPokemon));
        navigation.navigate("pokemon-detail");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 70, marginBottom: 40 }}>
        <Image
          style={{ width: 300, height: 100, alignItems: "center" }}
          source={require("../assets/images/logo.png")}
        />
        
      </View>
      <View>
        <Text style={styles.title}>¡Descubre tu pokesorpresa!</Text>
      </View>
      <ScrollView>
        <View style={[styles.pokeballContainer, { marginTop: 50 }]}>
          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon1)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>

          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon2)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon3)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>
        </View>
        <View style={styles.pokeballContainer}>
          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon4)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon5)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon6)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>
        </View>
        <View style={styles.pokeballContainer}>
          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon7)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon8)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon9)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>
        </View>
        <View style={styles.pokeballContainer}>
          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon10)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon11)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => getPokemonDetail(currentList.pokemon12)}
            style={styles.btnContainer}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/images/pokeballClose.png")}
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  btnContainer: {
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
    width: 100,
  },
  textBtn: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  pokeballContainer: {
    display: "flex",
    flexDirection: "row",
  },
  pokeball: {
    position: "absolute",
    right: 20,
    top: 50,
  },
});
