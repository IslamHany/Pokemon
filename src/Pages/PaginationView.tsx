import { useState, useEffect } from "react";
import PokemonLayout from "../Components/PokemonLayout";
import { ButtonGroup, IconButton, Pagination, Center } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import LoadingSpinner from "../Components/ui/LoadingSpinner";
import PokemonCard from "../Components/PokemonCard";
import ErrorAlert from "../Components/ui/ErrorAlert";
import usePokemonList from "../Hooks/UsePokemonList";

const PAGE_SIZE = 20;

function PaginationView() {
  const [page, setPage] = useState(1);
  const { error, isLoading, dataCount, data, fetchPokemons } = usePokemonList(
    page
  );

  useEffect(() => {
    (async () => {
      await fetchPokemons(1);
    })();
  }, []);

  const pageChangeHandler = async (newPage: number) => {
    await fetchPokemons(newPage);
    setPage(newPage);
  };

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
  return (
    <>
      <PokemonLayout>{renderPokemons()}</PokemonLayout>

      <Center mt="4">
        <Pagination.Root
          count={dataCount}
          page={page}
          padding={PAGE_SIZE}
          onPageChange={async (e) => await pageChangeHandler(e.page)}
        >
          <ButtonGroup variant="ghost" size="sm">
            <Pagination.PrevTrigger asChild>
              <IconButton>
                <HiChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
              render={(page) => (
                <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                  {page.value}
                </IconButton>
              )}
            />

            <Pagination.NextTrigger asChild>
              <IconButton>
                <HiChevronRight />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
      </Center>
    </>
  );
}

export default PaginationView;
