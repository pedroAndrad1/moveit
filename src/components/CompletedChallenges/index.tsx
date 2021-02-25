import { useContext } from "react";
import { ChallengesContext } from "../../Contexts/ChallengesContext";
import { CompletedChallengesContainer } from "../../styles/components/CompletedChallenges.module";

export default function CompletedChallenges(){
    
    const {challengesCompleted} = useContext(ChallengesContext);
    
    return(
        <CompletedChallengesContainer>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </CompletedChallengesContainer>
    )
}