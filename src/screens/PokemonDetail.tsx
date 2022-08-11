import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { Colors } from "../color";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const PokemonDetail = () => {
  const currentPokemon = useAppSelector((state) => state.pokemon);
  const navigation = useNavigation();
  const StatLine = (props: {
    number: number | undefined;
    color: string | undefined;
  }) => {
    return (
      <View
        style={{
          width: props.number,
          marginVertical: 6,
          height: 5,
          marginLeft: 10,
          borderRadius: 5,
          backgroundColor: props.color,
        }}
      />
    );
  };

  const capitalLetterTransform = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <View style={[styles.container, { backgroundColor: currentPokemon.color }]}>
      <StatusBar barStyle={"light-content"} />
      <View
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 1,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../assets/images/flecha.png")}
          />
        </Pressable>
      </View>
      <Image
        style={styles.pokeball}
        source={require("../assets/images/Pokeball.png")}
      />
      <View style={styles.whiteSheet} />
      <SafeAreaView>
        {/* Pokemon name */}
        <View style={styles.row}>
          <Text style={styles.pokemonName}>
            {capitalLetterTransform(currentPokemon.name)}
          </Text>
        </View>
        <View style={[styles.row, { height: 200 }]}>
          <View></View>
          <Image
            style={styles.pokemonImage}
            source={{ uri: currentPokemon.image }}
          />
          <View></View>
        </View>
        {/* Pokemon type */}
        <View
          style={[
            styles.pokemonTypeContainer,
            { alignSelf: "center", backgroundColor: currentPokemon.color },
          ]}
        >
          <Text style={styles.pokemonTypeText}>
            {capitalLetterTransform(currentPokemon.type)}
          </Text>
        </View>
        {/* Pokemon About */}
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 20,
              color: currentPokemon.color,
            }}
          >
            About
          </Text>
          <View
            style={[styles.row, { justifyContent: "center", marginTop: 20 }]}
          >
            <View style={{ alignItems: "center", marginHorizontal: 10 }}>
              <Text>
                {currentPokemon.weight
                  ?.toString()
                  .slice(0, currentPokemon.weight.toString().length - 1)}
                .
                {currentPokemon.weight
                  ?.toString()
                  .slice(
                    currentPokemon.weight.toString().length - 1,
                    currentPokemon.weight.toString().length
                  )}{" "}
                kg
              </Text>
              <Text
                style={{
                  color: Colors.mediumGray,
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Weight
              </Text>
            </View>
            <View style={{ alignItems: "center", marginHorizontal: 10 }}>
              <Text>
                {currentPokemon.height
                  ?.toString()
                  .slice(0, currentPokemon.height.toString().length - 1)}
                .
                {currentPokemon.height
                  ?.toString()
                  .slice(
                    currentPokemon.height.toString().length - 1,
                    currentPokemon.height.toString().length
                  )}{" "}
                m
              </Text>
              <Text
                style={{
                  color: Colors.mediumGray,
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Height
              </Text>
            </View>
            <View style={{ alignItems: "center", marginHorizontal: 10 }}>
              <Text>{currentPokemon.move}</Text>
              <Text
                style={{
                  color: Colors.mediumGray,
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Move
              </Text>
            </View>
          </View>
        </View>
        {/* Pokemon Abilities */}
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 20,
              color: currentPokemon.color,
            }}
          >
            Base Stats
          </Text>
          <View
            style={[
              styles.row,
              {
                justifyContent: "center",
                marginHorizontal: 30,
                marginTop: 20,
              },
            ]}
          >
            <View style={{ alignItems: "flex-end", marginRight: 10 }}>
              <Text>HP</Text>
              <Text>Attack</Text>
              <Text>Defense</Text>
              <Text>Special Attack</Text>
              <Text>Special Defence</Text>
              <Text>Speed</Text>
            </View>
            <View
              style={{
                height: 100,
                width: 2,
                backgroundColor: Colors.lightGray,
                marginRight: 10,
              }}
            />
            <View>
              <Text>{currentPokemon.stats?.hp} </Text>
              <Text>{currentPokemon.stats?.attack} </Text>
              <Text>{currentPokemon.stats?.defense}</Text>
              <Text>{currentPokemon.stats?.specialAttack}</Text>
              <Text>{currentPokemon.stats?.specialDefense}</Text>
              <Text>{currentPokemon.stats?.speed}</Text>
            </View>
            <View>
              <StatLine
                number={currentPokemon.stats?.hp}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.attack}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.defense}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.specialAttack}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.specialDefense}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.speed}
                color={currentPokemon.color}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default PokemonDetail;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.fire,
  },
  pokeball: {
    position: "absolute",
    right: 50,
    top: 30,
    width: 120,
    height: 120,
  },
  pokemonName: {
    fontSize: 35,
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 20,
    marginTop: 60,
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pokemonTypeContainer: {
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonTypeText: {
    color: Colors.white,
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  whiteSheet: {
    position: "absolute",
    bottom: 10,
    left: 10,
    borderRadius: 20,
    backgroundColor: Colors.white,
    width: "95%",
    height: "60%",
  },
});
