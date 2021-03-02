//Informacoes compartilhadas por todos os components
import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json';
import LevelUpModal from "../components/LevelUpModal/LevelUpModal";
import { Level } from "../styles/components/Profile.module";

export const ChallengesContext = createContext({} as ChallengesContextData);

//Para ficar explicito e ajudar com auto complete nos lugares que usarem esse context, 
//porem funciona sem isso abaixo.

//Para definir que o children sera um component. 
interface ChallengesProviderProps {
    children: ReactNode;
    level: number; 
    currentExperience: number; 
    challengesCompleted: number;
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
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps){
    //?? para caso nao tenha, coloque aquele valor
    const[level, setLevel] = useState(rest.level ?? 1);
    const[currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const[challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const[activeChallenge, setActiveChallenge] = useState(null);
    const[isLevelUpModalActive, setIsLevelUpModalActive] = useState(false);
    const experienceToNextLevel = Math.pow( (level + 1) * 4 , 2)
    
    //Pedindo permissao para fazer notificacoes assim que carrega a app ao carregar a app
    useEffect( () =>{
        Notification.requestPermission();
    }, [])
    
    //Salva o level, currentExperience, challengesCompleted em um cookie para fazer a persistencia
    //dos dados, sempre que um desses states mudarem. 
    //Essa vai ser uma forma provisoria e no futuro vou buscar um back-end para tal.
    useEffect( () =>{
        Cookies.set('level',String(level) );
        Cookies.set('currentExperience',String(currentExperience) );
        Cookies.set('challengesCompleted',String(challengesCompleted) );
    }, [level, currentExperience, challengesCompleted] )

    const levelUp = () => {
        setLevel( level + 1 );
        setIsLevelUpModalActive(true);
    }

    const closeLevelUpModal = () => {
        setIsLevelUpModalActive(false);
    }

    const startNewChallenge = () =>{
        const randomIndex = Math.floor( Math.random() * challenges.length );
        const challenge = challenges[randomIndex];

        setActiveChallenge(challenge);

        //Para avisar que o ciclo acabou
        new Audio('/notification.mp3').play();

        //Disparando uma notification se estiver permitido
        if(Notification.permission == 'granted'){
            new Notification('Novo desafio! 🎉 🎉 🎉 ', {
                body: `Valendo ${challenge.amount}xp.`
            })
        }
    }

    const resetChallenge = () =>{
        setActiveChallenge(null);
    }

    const completeChallenge = () => {
        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        //Se a experiencia final depois do challenge foi maior que a experiencia para o proximo
        //nivel. A experiencia final deve ser diminuida da experiencia pra upar e deve-se upar
        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }
        
        setCurrentExperience(finalExperience);
        setChallengesCompleted(challengesCompleted + 1);
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
                experienceToNextLevel,
                completeChallenge,
                closeLevelUpModal
            } 
        }>
            {children}
            {
                isLevelUpModalActive && <LevelUpModal />
            }
        </ChallengesContext.Provider>
    )
}