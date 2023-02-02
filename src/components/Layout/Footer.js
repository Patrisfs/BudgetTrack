import styles from './Footer.module.css'
import {FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa'

function Footer(){
    return(
        <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li><a href='https://github.com/patrisfs' target='_blank' rel='noopener noreferrer'><FaGithub /></a></li>
            <li><a href='mailto:patrick.freitas@engenharia.ufjf.br' target='_blank' rel='noopener noreferrer'><FaEnvelope /></a></li>
            <li><a href='https://www.linkedin.com/in/patrick-freitas-5bb062194/' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a></li>
        </ul>
            <p className={styles.copy_right}>Compilado por patrick Freitas, 2023</p>
        </footer>
    )
}

export default Footer