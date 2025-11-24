import { useState, useEffect } from "react";
import PokemonLayout from "../Components/PokemonLayout";
import { ButtonGroup, IconButton, Pagination, Center } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { getPokemonList } from "../Services/PokemonApi";
import LoadingSpinner from "../Components/ui/LoadingSpinner";

const PAGE_SIZE = 10;

function PaginationView() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<any[]>([]);
  const [dataCount, setDataCount] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      await fetchPokemons(1);
    })();
  }, []);

  const pageChangeHandler = async (newPage: number) => {
    await fetchPokemons(newPage);
    setPage(newPage);
  };

  const fetchPokemons = async (page: number) => {
    setIsLoading(true);
    const offset = (page - 1) * PAGE_SIZE;
    const response = await getPokemonList(PAGE_SIZE, offset);

    console.log("Fetched Pokemons:", response.data);
    setData((response.data?.results as any[]) ?? []);
    setDataCount(response.data?.count ?? 0);
    setIsLoading(false);
  };
  return (
    <>
      <PokemonLayout>{isLoading && <LoadingSpinner />}</PokemonLayout>

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
