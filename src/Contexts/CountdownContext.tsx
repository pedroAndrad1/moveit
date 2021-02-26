import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownProviderProps {
    children: ReactNode;
}
interface CountdownContextData {
    time: number;
    isActive: boolean;
    hasFinished: boolean;
    minutes: number;
    seconds: number;
    startCountdown: () => void;
    resetCountdown: () => void;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownContextProvider({ children }: CountdownProviderProps) {
    // Para eu controlar o timeout
    let countdownTimeout: NodeJS.Timeout;

    const { startNewChallenge, resetChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    //Pegando os minutos. Estou arredondando pra baixo, pq o resto da divisao sao os segs
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    //Para pegar cada numero dos minutos e segundos, vou passar para string e splitar.
    //Se os minutos forem menor que uma dezena, ou seja, so tem um numero, vou
    //colocar um zero na frente com padStart. Assim fica 05, por exemplo.

    //Para fazer o countdown funcionar, vou usar um useEffect que acontecera quando o isActive mudar
    //e quando o time mudar.
    //O segredo esta no time, pois vou muda-lo dentro do useEffect. Assim ele sera chamado dnv e dnv
    //ate o time ser igual a zero.

    useEffect(() => {

        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => setTime(time - 1), 1000);
        }
        else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    const startCountdown = () => {
        setIsActive(true);
    }

    const resetCountdown = () => {
        setIsActive(false);
        //Limpando as execucoes pendentes do timeout, para de vez o timeout
        clearTimeout(countdownTimeout);
        //Resetando o timer
        setTime(0.1 * 60);
        //Resetando o botao
        setHasFinished(false);
    }

    return (
        <CountdownContext.Provider value={{
            time,
            isActive,
            hasFinished,
            minutes,
            seconds,
            startCountdown, 
            resetCountdown, 
        }}>
            {children}
        </CountdownContext.Provider>
    )
}