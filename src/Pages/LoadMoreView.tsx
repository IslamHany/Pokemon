import { useEffect, useState } from "react";
import PokemonLayout from "../Components/PokemonLayout";
import usePokemonList from "../Hooks/UsePokemonList";
import type { PokemonListItem } from "../lib/types";
import PokemonList from "../Components/PokemonList";
import { Button, Center } from "@chakra-ui/react";
import LoadingSpinner from "../Components/ui/LoadingSpinner";

const LoadMoreView = () => {
  const [page, setPage] = useState(1);
  const { error, isLoading, dataCount, data } =
    usePokemonList(page);

  const [dataList, setDataList] = useState<PokemonListItem[]>([]);

  useEffect(() => {
    setDataList((prev) => [...prev, ...data]);
  }, [data]);

  return (
    <>
      <PokemonLayout>
        <PokemonList
          hideSpinner
          isLoading={isLoading}
          error={error}
          data={dataList}
        />
      </PokemonLayout>
      <Center mt="4" mb="8">
        Showing {dataList.length} of {dataCount} Pokémon
      </Center>
      <Center mt="4" mb="8">
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <Button onClick={() => setPage((prev) => prev + 1)}>Load More</Button>
        )}
      </Center>
    </>
  );
};

export default LoadMoreView;
