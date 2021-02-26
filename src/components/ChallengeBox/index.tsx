import { useContext } from 'react';
import { ChallengesContext } from '../../Contexts/ChallengesContext';
import { CountdownContext, CountdownContextProvider } from '../../Contexts/CountdownContext';
import { 
    ChallengeBoxActive, ChallengeBoxContainer, ChallengeBoxNotActive, FailedButton, 
    SucceedButton 
    }
 from '../../styles/components/ChallengeBox.module';

export default function ChallengeBox() {

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    const handleSucceed = () =>{
        completeChallenge();
        resetCountdown();
    }
    const handleFailed = () =>{
        resetChallenge();
        resetCountdown();
    }

    return (
        <ChallengeBoxContainer>
            {
                activeChallenge ?
                   <ChallengeBoxActive>
                       <header>Ganhe {activeChallenge.amount} xp</header>
                       <main>
                           <img 
                                src={`icons/${activeChallenge.type}.svg`} 
                                alt="Ícone de um olho ou punho segurando um altere"
                           />
                           <strong>Novo desafio!</strong>
                           <p>{activeChallenge.description}</p>
                       </main>
                       <footer>
                           <SucceedButton onClick={handleSucceed}>
                               Sucesso
                           </SucceedButton>
                           <FailedButton onClick={handleFailed}>
                               Fracasso
                           </FailedButton>
                       </footer>
                   </ChallengeBoxActive>
                    :
                    <ChallengeBoxNotActive>
                        <strong>
                            Finalize um ciclo para receber um desafio!
                         </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />
                            Avance de level completando desafios!
                        </p>
                    </ChallengeBoxNotActive>
            }
        </ChallengeBoxContainer>
    )
}