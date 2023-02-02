import LinkButton from '../Layout/LinkButton'
import styles from './Home.module.css'

function Home(){
    return(
      <section className={styles.home_container}>
        <h1>Bem vindo ao<span> BudgetTrack</span></h1>
        <p>crie e gerencie seus projetos</p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
      </section>
    )
}

export default Home