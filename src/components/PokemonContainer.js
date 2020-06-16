import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import PokemonCard from "./PokemonCard";

import { Container, Row } from "react-bootstrap";

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
    }
  }
`;

export function PokemonContainer() {
  const { loading, error, data: { pokemons = [] } = {} } = useQuery(
    GET_POKEMONS,
    {
      variables: { first: 20 },
    }
  );

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Container className="flex-wrap flex-column" fluid>
      <Row className="justify-content-center">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Row>
    </Container>
  );
}
