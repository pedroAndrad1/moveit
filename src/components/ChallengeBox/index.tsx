import { 
    ChallengeBoxActive, ChallengeBoxContainer, ChallengeBoxNotActive, FailedButton, 
    SucceedButton 
    }
 from '../../styles/components/ChallengeBox.module';

export default function ChallengeBox() {

    const hasChallenge = true;

    return (
        <ChallengeBoxContainer>
            {
                hasChallenge ?
                   <ChallengeBoxActive>
                       <header>Ganhe vários xp's</header>
                       <main>
                           <img src="icons/body.svg" alt=""/>
                           <strong>Novo desafio!</strong>
                           <p>Vá fazer uma sessão de alongamento.</p>
                       </main>
                       <footer>
                           <SucceedButton>
                               Sucesso
                           </SucceedButton>
                           <FailedButton>
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