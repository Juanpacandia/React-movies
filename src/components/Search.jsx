import { useEffect, useState } from "react"
import styles from "./Search.module.css"
import { FaSearch } from "react-icons/fa"
import { useHistory } from 'react-router-dom'
import { useQuery } from '../hooks/useQuery'

export default function Search() {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setsearchText] = useState("");
    const history = useHistory(); //este hook permite añadir un nuevo valor a la url y moverse hacia ese
    
    useEffect(() => {
        setsearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault(); //cancela lo que hace por defecto el boton en el formulario
        history.push("/?search=" + searchText);
    }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
            <input className={styles.searchInput} type="text" value={searchText} onChange={(e) => setsearchText(e.target.value)}/>
            <button className={styles.searchButton} type="submit">
                <FaSearch size={20}/>
            </button>
        </div>
    </form>
  );
}
