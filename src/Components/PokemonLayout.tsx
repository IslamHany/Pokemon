import { Center, Button, Flex } from "@chakra-ui/react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { Link } from "wouter";

function PokemonLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Center>
        <BsFillLightningChargeFill color="yellow" />
        Pokedex
      </Center>
      <Center>
        <Flex gap="4">
          <Link href="/pagination">
            <Button mt="4" mb="4">
              Page Controls
            </Button>
          </Link>
          <Link href="/loadmore">
            <Button mt="4" mb="4">
              Load More
            </Button>
          </Link>
        </Flex>
      </Center>

      <Center>
        <Flex gap="4" flexWrap="wrap" justifyContent="center">
            {children}
        </Flex>
      </Center>
    </>
  );
}

export default PokemonLayout;
