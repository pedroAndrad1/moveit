import { useContext } from 'react';
import { ChallengesContext } from '../../Contexts/ChallengesContext';
import {BarContainer, Bar, StyledExperienceBar, ExperienceValue} 
from '../../styles/components/ExperienceBar.module';

export default function ExperienceBar(){

    const {experienceToNextLevel, currentExperience} = useContext(ChallengesContext);
    //Regra de tres
    const experiencePercent = Math.floor(currentExperience * 100) / experienceToNextLevel;
    
    return(
        <BarContainer>
            <span>0xp</span>
            <Bar>
                <StyledExperienceBar experiencePercent = {experiencePercent} />
                <ExperienceValue experiencePercent={experiencePercent} >
                    {currentExperience}xp
                </ExperienceValue>
            </Bar>
            <span>{experienceToNextLevel}xp</span>
        </BarContainer>
    )

}

