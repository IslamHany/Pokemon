export interface PokemonResponse {
  count: number;
  next: string;
  previous: any;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonDetail {
  weight: number;
  height: string;
}
