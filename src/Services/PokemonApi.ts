import axios, { type AxiosResponse } from "axios";
import type { PokemonDetail, PokemonResponse } from "../lib/types";

const BASE_URL = "https://pokeapi.co/api/v2";

const getPokemonList = async (
  limit: number,
  offset: number
): Promise<AxiosResponse<PokemonResponse>> => {
  const response = await axios.get(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );

  return response;
};

const getPokemonById = async (
  id: number
): Promise<AxiosResponse<PokemonDetail>> => {
  const response = await axios.get(
    `${BASE_URL}/pokemon/${id}`
  );

  return response;
};

export { getPokemonList, getPokemonById };
