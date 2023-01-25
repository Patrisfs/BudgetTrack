import { Link } from "react-router-dom"

import Container from "./Container"

import styles from './NavBar.module.css'

function NavBar(){
    return(
        <nav class={styles.navbar}>
            <Container>
                <ul class={styles.list}>
                    <li class={styles.item}><Link to="/">Home</Link></li>
                    <li class={styles.item}><Link to="/projects">Projetos</Link></li>
                    <li class={styles.item}><Link to="/contact">Contato</Link></li>
                    <li class={styles.item}><Link to="/newproject">Novo Projeto</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar