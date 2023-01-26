import styles from './SubmitButton.module.css'

function Select({text}){
    return(
        <div >
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>
                  selecione uma opção  
                </option>
            </select>
        </div>
    )
}

export default SubmitButton