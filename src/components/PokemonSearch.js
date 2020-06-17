import React from "react";
import { useQuery } from "@apollo/react-hooks";
import PokemonCard from "./PokemonCard";
import { GET_POKEMON_BY_NAME } from "../querys/get-pokemon-by-name";
import { Container, Row } from "react-bootstrap";
import skittyPixel from "../assets/skitty-pixel.gif";

const PokemonSearch = ({ pokemonName }) => {
  const { loading, error, data: { pokemon = [] } = {} } = useQuery(
    GET_POKEMON_BY_NAME,
    {
      variables: { name: [pokemonName] },
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
        {pokemon === null || undefined ? (
          <div className="error__message">
            <p>
              Oops! it seems we can't find that Pokemon. Try typing it's name
              again!
            </p>
            <img src={skittyPixel} alt="animated" />
          </div>
        ) : (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        )}
      </Row>
    </Container>
  );
};
export default PokemonSearch;
