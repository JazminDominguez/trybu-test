import React from "react";
import { Col } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {
  return (
    <Col className="pokemon__card" xs={10} sm={10} md={4} lg={3}>
      <div className="pokemon__number">
        <span>{pokemon.number}</span>
      </div>
      <div className="pokemon__picture">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <span className="pokemon__name">{pokemon.name}</span>
    </Col>
  );
};

export default PokemonCard;
