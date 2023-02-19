import React from 'react'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import './App.css'

function App () {

  const [characters, setCharacters] = React.useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  return (
    <div className='App'>
        <Nav onSearch={onSearch}/>
        <Cards characters={characters} onClose={onClose} />
    </div>
  )
}

export default App