import { useNavigate}  from 'react-router'

import ProjectForm from '../Project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){

    const history =useNavigate()

    function createPost(Project){

      //initialize cost and services
      Project.cost =0
      Project.services =[]

      fetch("http://localhost:5000/categories",{
        method: "POST",
        headers: {
           'Content-Type': 'application/json' 
        },
        body:JSON.stringify(Project),
    })
        .then((resp)=>resp.json())
        .then((data)=>{
        console.log(data)
        //redirect
    })
        .catch(err=> console.log(err))

    return(
        <div className={styles.newproject_container}>
          <h1>Criar Projeto</h1>
          <p>Crie seu projeto para depois adicionar os serviços</p>
          <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}
}
export default NewProject