import { ProfileContainer, ProfilePhoto, ProfileInfos, Name, Level } 
from '../../styles/components/Profile.module';

export default function Profile(){
    return(
        <ProfileContainer>
            <ProfilePhoto src='https://github.com/pedroAndrad1.png' alt='Pedro de Andrade' />
            <ProfileInfos>
                <Name>Pedro de Andrade</Name>
                <Level>
                    <img src='icons/level.svg' alt='Seta para cima'/>
                    Level 1
                </Level>
            </ProfileInfos>
        </ProfileContainer>
    )
}