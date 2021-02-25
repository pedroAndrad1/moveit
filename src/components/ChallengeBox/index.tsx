import { useContext } from 'react';
import { ChallengesContext } from '../../Contexts/ChallengesContext';
import { 
    ChallengeBoxActive, ChallengeBoxContainer, ChallengeBoxNotActive, FailedButton, 
    SucceedButton 
    }
 from '../../styles/components/ChallengeBox.module';

export default function ChallengeBox() {

    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

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
                           <SucceedButton>
                               Sucesso
                           </SucceedButton>
                           <FailedButton onClick={resetChallenge}>
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