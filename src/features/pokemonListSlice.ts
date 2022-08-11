import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonsName } from "../models/PokemonList";

const initialState: PokemonsName = {
  pokemon1: "",
  pokemon2: "",
  pokemon3: "",
  pokemon4: "",
  pokemon5: "",
  pokemon6: "",
  pokemon7: "",
  pokemon8: "",
  pokemon9: "",
  pokemon10: "",
  pokemon11: "",
  pokemon12: "",
};

const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    setPokemonList: (state: any, action: PayloadAction<PokemonsName>) => {
      state.pokemon1 = action.payload.pokemon1;
      state.pokemon2 = action.payload.pokemon2;
      state.pokemon3 = action.payload.pokemon3;
      state.pokemon4 = action.payload.pokemon4;
      state.pokemon5 = action.payload.pokemon5;
      state.pokemon6 = action.payload.pokemon6;
      state.pokemon7 = action.payload.pokemon7;
      state.pokemon8 = action.payload.pokemon8;
      state.pokemon9 = action.payload.pokemon9;
      state.pokemon10 = action.payload.pokemon10;
      state.pokemon11 = action.payload.pokemon11;
      state.pokemon12 = action.payload.pokemon12;
    },
  },
});
export const { setPokemonList } = pokemonListSlice.actions;
export default pokemonListSlice.reducer;
