import { Card, Image, Center, Text, Box } from "@chakra-ui/react";
import type React from "react";
import { getPokemonIdFromUrl } from "../lib/utils";
import { Link } from "wouter";

interface PokemonCardProps {
  imgUrl: string;
  name: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ imgUrl, name }) => {
  const pokemonId = getPokemonIdFromUrl(imgUrl);

  return (
    <Link href={`/pokemon/${pokemonId}`}>
      <Box width="300px">
        <Card.Root maxW="sm" overflow="hidden">
          <Center>
            <Image
              boxSize="100px"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
              alt={name}
            />
          </Center>
          <Center>
            <Text fontSize="xl" fontWeight="bold" mt="2" mb="4">
              {name}
            </Text>
          </Center>
        </Card.Root>
      </Box>
    </Link>
  );
};

export default PokemonCard;
