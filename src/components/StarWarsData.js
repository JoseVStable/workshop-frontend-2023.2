import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StarWarsData() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div className='Card2'>
      <h1 id="H1x">Personagens de Star Wars</h1>
      <div className='card-container'>
        {characters.map((character) => (
          <div className='card' key={character.name}>
            <img id='img'
              src={`https://starwars-visualguide.com/assets/img/characters/${getImageId(character.url)}.jpg`}
              alt={`Imagem de ${character.name}`}
            />
            <h2>{character.name}</h2>
            <p>Gênero: {character.gender}</p>
            <p>Ano de nascimento: {character.birth_year}</p>
            <p>Cor do cabelo: {character.hair_color}</p>
            <p>Cor do olho: {character.eye_color}</p>
          </div>
        ))}
      </div>
    </div>
  );
 }
  

function getImageId(url) {

  const matches = url.match(/\/(\d+)\/$/);
  if (matches && matches.length === 2) {
    return matches[1];
  }
  return '';
}

export default StarWarsData;
