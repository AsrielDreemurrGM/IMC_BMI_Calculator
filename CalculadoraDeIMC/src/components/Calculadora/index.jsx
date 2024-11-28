import { useState } from 'react';

import styles from './Calculadora.module.css'

const Calculadora = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculaIMC = () => {
        if (altura > 0) {
            setResultado(peso / (altura * altura));
        } else {
            setResultado(0);
        }
    }

    return (
        <div className={styles.containerDoFormulario}>
            <form className={styles.formulario}>
            <h1>Calculadora de IMC</h1>
                <label className={styles.formularioLabel} htmlFor="peso">Digite o Seu Peso</label>
                <input onChange={evento => setPeso(parseFloat(evento.target.value))} className={styles.formularioInput} type="text" id="peso" placeholder="Digite o seu Peso" />
                <label className={styles.formularioLabel} htmlFor="altura">Digite a Sua Altura</label>
                <input onChange={evento => setAltura(parseFloat(evento.target.value))} className={styles.formularioInput} type="text" id="altura" placeholder="Digite a sua Altura" />
            </form>
            <div className={styles.containerDoResultado}>
                <button onClick={calculaIMC} className={styles.botaoCalcular} type="button">Calcular</button>
                <input value={resultado} className={styles.resultadoInput} type="text" placeholder='Resultado' disabled />
            </div>
        </div>
    )
}

export default Calculadora;