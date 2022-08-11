import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../features/pokemonSlice";
import pokemonListReducer from "../features/pokemonListSlice";

export const store = configureStore({
  reducer: { pokemon: pokemonReducer, pokemonList: pokemonListReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
