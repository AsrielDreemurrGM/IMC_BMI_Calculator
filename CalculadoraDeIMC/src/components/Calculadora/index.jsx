import styles from './Calculadora.module.css'

const Calculadora = () => {
    return (
        <div className={styles.containerDoFormulario}>
            <form className={styles.formulario}>
            <h1>Calculadora de IMC</h1>
                <label className={styles.formularioLabel} htmlFor="peso">Digite o Seu Peso</label>
                <input className={styles.formularioInput} type="text" id="peso" placeholder="Digite o seu Peso" />
                <label className={styles.formularioLabel} htmlFor="altura">Digite a Sua Altura</label>
                <input className={styles.formularioInput} type="text" id="altura" placeholder="Digite a sua Altura" />
            </form>
            <div className={styles.containerDoResultado}>
                <button className={styles.botaoCalcular} type="button">Calcular</button>
                <input className={styles.resultadoInput} type="text" placeholder='Resultado' disabled />
            </div>
        </div>
    )
}

export default Calculadora;