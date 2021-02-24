import { useEffect, useState } from "react";
import { CountdownButton, CountdownContainer } from "../../styles/components/Countdown.module";

//THE FINAL COUNTDOWN !!!! TU RU TU.. TU RU TU RU TU TU...

export default function Countdown() {

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    //Pegando os minutos. Estou arredondando pra baixo, pq o resto da divisao sao os segs
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    //Para pegar cada numero dos minutos e segundos, vou passar para string e splitar.
    //Se os minutos forem menor que uma dezena, ou seja, so tem um numero, vou
    //colocar um zero na frente com padStart. Assim fica 05, por exemplo.

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    
    //Para fazer o countdown funcionar, vou usar um useEffect que acontecera quando o active mudar
    //e quando o time mudar.
    //O segredo esta no time, pois vou muda-lo dentro do useEffect. Assim ele sera chamado dnv e dnv
    //ate o time ser igual a zero.

    useEffect( () =>{

        if(active && time > 0){
            setTimeout( () => setTime(time - 1) , 1000);
        }
    }, [active, time])

    const toggleCountdown = () =>{
        setActive(!active);
    }

    return (
        <>
            <CountdownContainer >
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </CountdownContainer>
            <CountdownButton onClick={toggleCountdown}>
                Iniciar um ciclo
            </CountdownButton>
        </>
    )
}