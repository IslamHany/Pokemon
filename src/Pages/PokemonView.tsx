"use client";
import { Center, Button, Box, Image, Card, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import type { PokemonDetail } from "../lib/types";
import { getPokemonById } from "../Services/PokemonApi";
import ErrorAlert from "../Components/ui/ErrorAlert";
import LoadingSpinner from "../Components/ui/LoadingSpinner";

const PokemonView = () => {
  const { id } = useParams();
  const [data, setData] = useState<PokemonDetail | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      fetchPokemon();
    })();
  }, [id]);

  const fetchPokemon = async () => {
    try {
      setIsLoading(true);
      const res = await getPokemonById(id as unknown as number);
      setData(res.data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch Pokemon details.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <ErrorAlert message={error} />;
    }

    if (data) {
      return (
        <Box width="400px">
          <Card.Root>
            <Center>
              <Image
                boxSize="150px"
                borderRadius="full"
                fit="cover"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              />
              <Box as="ul" listStyleType="circle">
                <li>Height: {data?.height} m</li>
                <li>Weight: {data?.weight} kg</li>
              </Box>
            </Center>
          </Card.Root>
        </Box>
      );
    }
  };

  return (
    <>
      <Center mt="8">
        <Flex direction="column" mb="8">
          <Link href="/pagination">
            <Box mb="4">
              <Button>Back to list</Button>
            </Box>
          </Link>

          {renderContent()}
        </Flex>
      </Center>
    </>
  );
};

export default PokemonView;
