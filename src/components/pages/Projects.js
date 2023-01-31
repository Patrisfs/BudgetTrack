import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Message from "../Layout/Message"
import Container from "../Layout/Container"
import Loading from "../Layout/Loading"
import LinkButton from "../Layout/LinkButton"
import ProjectCard from "../Project/ProjectCard"

import styles from "./Projects.module.css"



function Projects(){

  const [projects, setprojects] = useState([])
  const [removeLoading, setRemoveLoading] =useState(false)


  const location = useLocation()
  let message =''
  if(location.state){
    message = location.state.message
  }

  useEffect(()=>{
    setTimeout(() => {
      fetch('http://localhost:5000/projects',{
        method:'GET',
        headers:{
          'content-type': 'application/json',
        },
      })
          .then((resp)=> resp.json())
          .then((data)=>{
            setprojects(data)
            setRemoveLoading(true)
            console.log(data)
          })
          .catch((err)=>console.log(err))
    },200);
  },[])



    return(
        <div className={styles.project_container}>
         <div className={styles.title_container}>
          <h1>Meus Projetos</h1>
          <LinkButton to="/newproject" text="Criar Projeto"/>
         </div>
          {message && <Message type="sucess" msg={message}/>}
          <Container customClass="start">
            {projects.length > 0 &&
              projects.map((project) => <ProjectCard 
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project?.category?.name}
              key={project.category.id}  
              />)}
              {!removeLoading && <Loading/>}
          </Container>
        </div>
    )
}

export default Projects