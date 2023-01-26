import LinkButton from '../Layout/LinkButton'
import styles from './Home.module.css'

function Home(){
    return(
      <section className={styles.home_container}>
        <h1>Bem vindo<span>Costs</span></h1>
        <p>comce a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
      </section>
    )
}

export default Home