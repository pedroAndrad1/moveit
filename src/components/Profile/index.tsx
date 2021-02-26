import { useContext } from 'react';
import { ChallengesContext } from '../../Contexts/ChallengesContext';
import { ProfileContainer, ProfilePhoto, ProfileInfos, Name, Level } 
from '../../styles/components/Profile.module';

export default function Profile(){
    
    const {level} = useContext(ChallengesContext)
    
    return(
        <ProfileContainer>
            <ProfilePhoto src='https://github.com/pedroAndrad1.png' alt='Pedro de Andrade' />
            <ProfileInfos>
                <Name>Pedro de Andrade</Name>
                <Level>
                    <img src='icons/level.svg' alt='Seta para cima'/>
                    Level {level}
                </Level>
            </ProfileInfos>
        </ProfileContainer>
    )
}