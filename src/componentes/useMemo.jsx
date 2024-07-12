import React, {useState, useMemo} from 'react';

function Fatorial() {
    const [numero, setNumero] = useState(0);

    const fatorial = useMemo(() => {
        function calcularFatorial(num) {
            if(num < 0) return undefined;
            if(num === 0 || num === 1) return 1;
            let resultado = 1;
            for (let i = 2; i <= num; i++) {
                resultado *= i;
            }
            return resultado;
        }

        return calcularFatorial(numero);
    }, [numero]);

    const atualizar = (evento) => {
        const value = parseInt(evento.target.value);
        setNumero(value);
    }

    return (
        <div className="App">
            <p id='p'>Fatorial</p>
            <input type="number" value={numero} onChange={atualizar} />
            <p>O fatorial de {numero} é: {fatorial}</p>
        </div>
    );
}
export default Fatorial;