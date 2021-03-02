import { motion } from "framer-motion";
import { useContext } from "react";
import { ChallengesContext } from "../../Contexts/ChallengesContext";
import { Overlay, ModalContainer} from "../../styles/components/LevelUpModal.module";

export default function LevelUpModal(){

    const {level, closeLevelUpModal} = useContext(ChallengesContext);
    
    return(
        <Overlay
            as={motion.div}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0},
            }}
            initial="hidden"
            animate="show"
        >
            <ModalContainer
                 
            >
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