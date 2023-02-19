import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = React.useState("");

   const handleChange = (event) => {
      const {value} = event.target;
      setCharacter(value)
   }

    return (
      <div className= {styles.search}>
         <input type='search' onChange={handleChange}/>
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
 