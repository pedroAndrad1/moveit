import styled from 'styled-components';

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    color: var(--title);
    
    //Caixas dos minutos e segundos
    & > div{
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: var(--white);
        box-shadow: 0 0 60px rgba(0,0,0, .05);
        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;
    }

    //Dois pontos
    & > span{
        font-size: 6.25rem;
        margin: 0 .5rem;
    }

    //Numeros
    & > div span{
        flex: 1;
    }

    //Primeiro numero de cada caixa
    & > div span:first-child{
        border-right: 1px solid #f0f1f3;
    }

    //Segundo numero de cada caixa
    & > div span:last-child{
        border-left: 1px solid #f0f1f3;
    }
`