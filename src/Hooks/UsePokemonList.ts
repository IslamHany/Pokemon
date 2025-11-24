import { useState, useEffect } from "react";
import { getPokemonList } from "../Services/PokemonApi";

const PAGE_SIZE = 20;

const usePokemonList = (page: number) => {
  const [data, setData] = useState<any[]>([]);
  const [dataCount, setDataCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      await fetchPokemons(page);
    })();
  }, [page]);

  const fetchPokemons = async (page: number) => {
    setIsLoading(true);
    const offset = (page - 1) * PAGE_SIZE;

    try {
      const response = await getPokemonList(PAGE_SIZE, offset);

      setData((response.data?.results as any[]) ?? []);
      setDataCount(response.data?.count ?? 0);
      setError(null);
    } catch (error) {
      setError("Failed to fetch Pokemons.");
    } finally {
      setIsLoading(false);
    }
  };

  return { data, dataCount, isLoading, error, fetchPokemons };
};

export default usePokemonList;