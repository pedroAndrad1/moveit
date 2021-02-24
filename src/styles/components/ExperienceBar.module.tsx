import styled from 'styled-components';

export const BarContainer = styled.header`
    display: flex;
    align-items: center;

    & span{
        font-size: 1rem;
    }
`
export const Bar = styled.div`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;

`
export const StyledExperienceBar = styled.div`
     height: 4px;
     border-radius: 4px;
     background: var(--green);
     width: 50%;
`
export const ExperienceValue = styled.span`
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
`