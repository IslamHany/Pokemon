import { Center, Button, Box, Image, Card, Flex } from "@chakra-ui/react";
import { useParams } from "wouter";

const PokemonView = () => {
  const { id } = useParams();

  return (
    <>
      <Center mt="8">
        <Flex direction="column" mb="8">
          <Box mb="4">
            <Button>Back to list</Button>
          </Box>
          <Box width="400px">
            <Card.Root>
              <Center>
                <Image
                  boxSize="200px"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                />
              </Center>
            </Card.Root>
          </Box>
        </Flex>
      </Center>
    </>
  );
};

export default PokemonView;
