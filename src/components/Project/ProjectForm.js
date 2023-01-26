import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'


function ProjectForm(){
    return(
            <form className={styles.form}>
                <Input 
                    type="text" 
                    text='Nome do projeto'
                    name='name'
                    placeholder="Insira o nome do projeto"
                />
                <div>
                <Input 
                    type="number" 
                    text='Orçamento do projeto'
                    name='budget'
                    placeholder="Insira o orçamento total"
                />
                </div>
                    <Select name="category_id" text="Selecione a categoria"/>
                <div>
                    <input type="submit" value="Criar projeto"></input>
                </div>
            </form>
    )
}

export default ProjectForm