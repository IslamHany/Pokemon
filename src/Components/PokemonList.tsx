import type { PokemonListItem } from "../lib/types";
import PokemonCard from "./PokemonCard";
import ErrorAlert from "./ui/ErrorAlert";
import LoadingSpinner from "./ui/LoadingSpinner";

interface PokemonListProps {
  isLoading: boolean;
  error: string | null;
  data: PokemonListItem[];
  hideSpinner?: boolean;
}

const PokemonList: React.FC<PokemonListProps> = ({
  isLoading,
  error,
  data,
  hideSpinner = false,
}) => {
  const renderPokemons = () => {
    if (isLoading && !hideSpinner) {
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
