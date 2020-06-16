import React from "react";
import { Col } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {
  return (
    <Col className="pokemon__card" xs={11} sm={11} md={3} lg={3}>
      <div className="pokemon__number">
        <span>{pokemon.number}</span>
      </div>
      <div className="pokemon__picture">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__name">{pokemon.name}</div>
    </Col>
  );
};

export default PokemonCard;
