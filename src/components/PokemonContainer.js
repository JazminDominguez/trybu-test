import React from "react";
import { useQuery } from "@apollo/react-hooks";
import PokemonCard from "./PokemonCard";
import { GET_POKEMONS } from "../querys/get-list-pokemons";
import { Container, Row } from "react-bootstrap";

export function PokemonContainer() {
  const { loading, error, data: { pokemons = [] } = {} } = useQuery(
    GET_POKEMONS,
    {
      variables: { first: 80 },
    }
  );

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Container
      className="flex-wrap flex-column"
      fluid
      style={{ marginTop: "20px" }}
    >
      <Row className="justify-content-center">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Row>
    </Container>
  );
}
