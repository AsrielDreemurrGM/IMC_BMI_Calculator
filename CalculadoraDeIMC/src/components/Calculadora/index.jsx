import { useState, useEffect } from 'react';

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

    const classificacaoDoIMC = () => {
        if (resultado < 18.5) return 'Abaixo do Peso';
        if (resultado < 25) return 'Peso Ideal (Parabéns)';
        if (resultado < 30) return <>Atenção!<br />Você Está Acima do Peso
        </>;
        if (resultado < 35) return 'Obesidade Grau I';
        if (resultado < 40) return 'Obesidade Grau II (Severa)';
        return 'Obesidade Grau III (Mórbida)';
    }

    return (
        <div className={styles.containerDoFormulario}>
            <form className={styles.formulario}>
                <h1>Calculadora de IMC</h1>
                <label className={styles.formularioLabel} htmlFor="peso">Digite o Seu Peso</label>
                <input onChange={evento => setPeso(parseFloat(evento.target.value))} className={styles.formularioInput} type="number" id="peso" placeholder="Digite o seu Peso" />
                <label className={styles.formularioLabel} htmlFor="altura">Digite a Sua Altura</label>
                <input onChange={evento => setAltura(parseFloat(evento.target.value))} className={styles.formularioInput} type="number" id="altura" placeholder="Digite a sua Altura" />
            </form>
            <div className={styles.containerDoResultado}>
                <button onClick={calculaIMC} className={styles.botaoCalcular} type="button">Calcular</button>
                <input value={resultado.toFixed(2)} className={styles.resultadoInput} type="text" placeholder='Resultado' disabled />
                <div className={styles.classificacao}>
                    <h3>Sua Classificação: </h3>
                    <p>{classificacaoDoIMC()}</p>
                </div>
            </div>
        </div>
    )
}

export default Calculadora;