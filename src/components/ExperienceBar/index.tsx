import {BarContainer, Bar, StyledExperienceBar, ExperienceValue} 
from '../../styles/components/ExperienceBar.module';

export default function ExperienceBar(){

    return(
        <BarContainer>
            <span>0xp</span>
            <Bar>
                <StyledExperienceBar />
                <ExperienceValue>{ 600 / 2}</ExperienceValue>
            </Bar>
            <span>600xp</span>
        </BarContainer>
    )

}

