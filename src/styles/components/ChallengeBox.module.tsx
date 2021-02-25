import styled from 'styled-components';

export const ChallengeBoxContainer = styled.div`
    height: 80%;

    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0,0,0, .05);
    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
`
export const ChallengeBoxNotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50%;

    & strong{
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.5;
    }

    & p{
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 70%;
    }
`