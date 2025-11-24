import axios, { type AxiosResponse } from "axios";
import type { PokemonResponse } from "../lib/types";

const getPokemonList = async (
  limit: number,
  offset: number
): Promise<AxiosResponse<PokemonResponse>> => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  return response;
};

export { getPokemonList };
