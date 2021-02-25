//Informacoes compartilhadas por todos os components
import { createContext, ReactNode, useState } from "react";
import challenges from '../../challenges.json';

export const ChallengesContext = createContext({} as ChallengesContextData);

//Para ficar explicito e ajudar com auto complete nos lugares que usarem esse context, 
//porem funciona sem isso abaixo.

//Para definir que o children sera um component. 
interface ChallengesProviderProps {
    children: ReactNode;
}

interface ChallengesContextData{
    level: number;
    currentExperience: number ;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
    startNewChallenge: () => void;
    levelUp: () => void;
    resetChallenge: () => void;
}

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
export function ChallengesProvider({ children }: ChallengesProviderProps){

    const[level, setLevel] = useState(1);
    const[currentExperience, setCurrentExperience] = useState(50);
    const[challengesCompleted, setChallengesCompleted] = useState(0);
    const[activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow( (level + 1) * 4 , 2)

    const levelUp = () => {
        setLevel( level + 1 );
    }

    const startNewChallenge = () =>{
        const randomIndex = Math.floor( Math.random() * challenges.length );
        const randomChallenge = challenges[randomIndex];

        setActiveChallenge(randomChallenge);
    }

    const resetChallenge = () =>{
        setActiveChallenge(null);
    }

    return(
        <ChallengesContext.Provider value={ 
            {
                level, 
                levelUp, 
                currentExperience, 
                challengesCompleted,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel
            } 
        }>
            {children}
        </ChallengesContext.Provider>
    )
}