import { Card, Image, Center, Text } from "@chakra-ui/react";
function PokemonCard() {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Center>
        <Image
          boxSize="100px"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Pokemon Image"
        />
      </Center>
      <Center>
        <Text fontSize="xl" fontWeight="bold" mt="4">
          Bulbasaur
        </Text>
      </Center>
    </Card.Root>
  );
}

export default PokemonCard;
