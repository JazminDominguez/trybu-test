import React, { useState } from "react";
import "./App.css";
import { PokemonContainer } from "./components/PokemonContainer";
import PokemonSearch from "./components/PokemonSearch";

//Navbar imports
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import pokemon_logo from "./assets/pokemon_logo.svg";

const App = () => {
  const [pokemonSearch, setInput] = useState();
  const [showPokemonResult, setPokemonResult] = useState("");

  const onChange = (e) => {
    setInput(e.currentTarget.value);
  };

  const handleOnClick = () => {
    setPokemonResult(pokemonSearch);
  };

  return (
    <div>
      {/* Navbar section */}
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="#home">
          <img
            style={{ width: "150px" }}
            src={pokemon_logo}
            alt="pokemon_logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <button onClick={() => setPokemonResult("")}>Show All!</button>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={onChange}
            />
            <Button className="navbar__button" onClick={() => handleOnClick()}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/*  ends Navbar section */}

      {showPokemonResult !== "" ? (
        <PokemonSearch pokemonName={showPokemonResult} />
      ) : (
        <PokemonContainer />
      )}
    </div>
  );
};

export default App;
