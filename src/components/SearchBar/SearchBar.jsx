import styles from './SearchBar.module.css'

export default function SearchBar(props) {
    return (
      <div className= {styles.search}>
         <input type='search' />
         <button className= {styles.btn} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
 