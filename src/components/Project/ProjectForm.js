import {useEffect, useState} from 'react'


import styles from './ProjectForm.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


function ProjectForm({ handleSubmit,btnText, projectData}){

    const[categories, setCategories]= useState([])
    const[project, setProject] = useState(projectData || {})

   //metodo para chamar a API apenas uma vez e não infinitas
    useEffect(()=>{
         //promisses importando api da porta 5000 
        fetch("http://localhost:5000/categories",{
            method: "GET",
            headers: {
               'Content-Type': 'application/json' 
            }
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            setCategories(data)
        })
            .catch(err=> console.log(err))
    
    },[])

    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value})
    }
    function handleCategory(e){
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    return(
            <form onSubmit={submit} className={styles.form}>
                <Input 
                    type="text" 
                    text='Nome do projeto'
                    name='name'
                    placeholder="Insira o nome do projeto"
                    handleOnchange={handleChange}
                />
                <div>
                <Input 
                    type="number" 
                    text='Orçamento do projeto'
                    name='budget'
                    placeholder="Insira o orçamento total"
                    handleOnchange={handleChange}
                />
                </div>
                    <Select name="category_id" text="Selecione a categoria" options={categories}/>
                    <SubmitButton text={btnText}/>
            </form>
    )
}

export default ProjectForm