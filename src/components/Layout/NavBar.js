import { Link } from "react-router-dom"

import styles from './NavBar.module.css'

function NavBar(){
    return(
        <nav className={styles.navbar}>
          
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                    <li className={styles.item}><Link to="/newproject">Novo Projeto</Link></li>
                    <li className={styles.item}><Link to="/contact">Contato</Link></li>
                </ul>
   
        </nav>
    )
}

export default NavBar