import { ChallengeBoxContainer, ChallengeBoxNotActive } from '../../styles/components/ChallengeBox.module';

export default function ChallengeBox(){
    return(
        <ChallengeBoxContainer>
            <ChallengeBoxNotActive>
                <strong>
                    Finalize um ciclo para receber um desafio!
                </strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Avance de level completando desafios!
                </p>
            </ChallengeBoxNotActive>
        </ChallengeBoxContainer>
    )
}