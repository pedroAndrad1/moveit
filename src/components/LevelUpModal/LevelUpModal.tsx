import { useContext } from "react";
import { ChallengesContext } from "../../Contexts/ChallengesContext";
import { Overlay, ModalContainer} from "../../styles/components/LevelUpModal.module";

export default function LevelUpModal(){

    const {level, closeLevelUpModal} = useContext(ChallengesContext);
    
    return(
        <Overlay>
            <ModalContainer>
                <header>{level}</header>

                <strong>Parabéns!</strong>
                <p>Você upou de level.</p>

                <button onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Botão para fechar modal"/>
                </button>
            </ModalContainer>
        </Overlay>
    )
}