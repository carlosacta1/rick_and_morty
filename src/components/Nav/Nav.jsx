import styles from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar';

export default function Nav({onSearch}) {
    return (
       <nav className={styles.navbar}>
           <SearchBar onSearch={onSearch} />
       </nav>
    );
}