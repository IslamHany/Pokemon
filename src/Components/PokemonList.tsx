import type { PokemonListItem } from "../lib/types";
import PokemonCard from "./PokemonCard";
import ErrorAlert from "./ui/ErrorAlert";
import LoadingSpinner from "./ui/LoadingSpinner";

interface PokemonListProps {
  isLoading: boolean;
  error: string | null;
  data: PokemonListItem[];
}

const PokemonList: React.FC<PokemonListProps> = ({
  isLoading,
  error,
  data,
}) => {
  const renderPokemons = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <ErrorAlert message={error} />;
    }

    return data.map((pokemon) => (
      <PokemonCard
        imgUrl={pokemon.url}
        name={pokemon.name}
        key={pokemon.name}
      />
    ));
  };

  return <>{renderPokemons()}</>;
};

export default PokemonList;
