import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Loading from '../Layout/Loading'
import Container from '../Layout/Container'

function Project(){
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setshowProjectForm]= useState(false)


    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch(err => console.log(err))
    }, [id])


    function toggleProjectForm(){
        setshowProjectForm(!showProjectForm)
    }



    return (
        <>
            {project.name ?(
                <div className={styles.project_details}>
                <Container customClass='column'>
                    <div className={styles.details_container}>
                        <h1>Projeto: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? "Editar projeto" : "Fechar"}</button>
                        {!showProjectForm ?(
                            <div className={styles.project_info}>

                            <p><span>Categoria: </span>{project.category.name}</p>
                            <p><span>Total do Orçamento: </span>{project.budget}</p>
                            <p><span>Total Ultilizado: </span>{project.cost}</p>

                            </div>
                        ):(
                        <div className={styles.project_info}>

                           <p>Detalhes do projeto</p> 
                        </div>)}
                    </div>
                </Container>
                </div>
            ) : (
                <Loading/>
            )}
        </>
    )  
}

export default Project