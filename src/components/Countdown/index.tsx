import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../../Contexts/ChallengesContext";
import { CountdownButtonStart, CountdownContainer,  CountdownButtonGiveUp } from "../../styles/components/Countdown.module";

//THE FINAL COUNTDOWN !!!! TU RU TU.. TU RU TU RU TU TU...

let countdownTimeout: NodeJS.Timeout;// Para eu controlar o timeout

export default function Countdown() {

    const {startNewChallenge} = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    //Pegando os minutos. Estou arredondando pra baixo, pq o resto da divisao sao os segs
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    //Para pegar cada numero dos minutos e segundos, vou passar para string e splitar.
    //Se os minutos forem menor que uma dezena, ou seja, so tem um numero, vou
    //colocar um zero na frente com padStart. Assim fica 05, por exemplo.

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    //Para fazer o countdown funcionar, vou usar um useEffect que acontecera quando o isActive mudar
    //e quando o time mudar.
    //O segredo esta no time, pois vou muda-lo dentro do useEffect. Assim ele sera chamado dnv e dnv
    //ate o time ser igual a zero.

    useEffect(() => {

        if (isActive && time > 0) {
           countdownTimeout = setTimeout(() => setTime(time - 1), 1000);
        }
        else if(isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    const startCountdown = () => {
        setIsActive(true);
    }

    const resetCountdown = () =>{
        setIsActive(false);
        //Limpando as execucoes pendentes do timeout, para de vez o timeout
        clearTimeout(countdownTimeout);
        //Resetando o timer
        setTime(0.1 * 60);
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
            {   
                
                hasFinished ? 
                    <CountdownButtonGiveUp disabled >
                        Ciclo terminado
                    </CountdownButtonGiveUp>
                :
                isActive ?
                    <CountdownButtonGiveUp onClick={resetCountdown}>
                        Abandonar ciclo
                        <img src='icons/close.svg' alt='x'/>
                    </CountdownButtonGiveUp>
                :
                    <CountdownButtonStart onClick={startCountdown}>
                        Iniciar um ciclo
                    </CountdownButtonStart>
            }
        </>
    )
}