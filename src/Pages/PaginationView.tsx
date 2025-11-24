import { useState } from "react";
import PokemonLayout from "../Components/PokemonLayout";
import { ButtonGroup, IconButton, Pagination, Center } from "@chakra-ui/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

const PAGE_SIZE = 10;

function PaginationView() {
  const [page, setPage] = useState(1);

  const pageChangeHandler = (newPage: number) => {
    setPage(newPage);
  }
  return (
    <>
      <PokemonLayout></PokemonLayout>

      <Center mt="4">
        <Pagination.Root
          count={1328}
          page={page}
          padding={PAGE_SIZE}
          onPageChange={(e) => pageChangeHandler(e.page)}
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
