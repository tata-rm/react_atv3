import React, {useState, useEffect} from 'react';

function Relógio() {
    const [tempo, setTempo] = useState(new Date());
    const [mensagem, setmensagem] = useState(true);

    useEffect(() => {
        const tempoAtual = () => {
            setTempo(new Date());
        };

        const intervalo = setInterval(tempoAtual, 120);

        const mudarMensagem = () => {
            setmensagem(prevMensagem => !prevMensagem);
            setTimeout(mudarMensagem, 60000);
        };

        const iniciar = setTimeout(mudarMensagem, 60000);

        return () => {
            clearInterval(intervalo);
            clearTimeout(iniciar);
        };
    }, []);

    return (
        <div className="App">
            <p id='p'>Relógio</p>
            <p>{tempo.toLocaleTimeString()}</p>
            {mensagem && <p>Passou um minuto</p>}
        </div>
    );

}
export default Relógio;