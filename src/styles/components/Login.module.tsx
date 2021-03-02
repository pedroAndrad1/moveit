import styled from 'styled-components';

export const LoginBox = styled.div`
    height: 80%;
    width: 50%;
    margin: 0 auto;
    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0,0,0, .05);

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        width: 80%;
        height: 60%;
    }
`

export const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: var(--blue-dark);
`

export const LoginInput = styled.input`
    display: block;
    border: 1px solid rgb(238, 238, 238);
    padding: .8rem;
    background: rgb(238, 238, 238);
    border-radius: .4rem;
    margin-top: 1rem;
    outline: none;
    transition: 0.3s;
    

    & :hover, & :focus{
        background: rgb(255, 255, 255) none repeat scroll 0% 0%;
        box-shadow: var(--blue) 0px 0px 0px 3px
    }


`
export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    padding: 2rem;
`
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
`

export const ButtonGroup = styled.div`
    width: 100%;
    display: flex;


   & button{
        height: 3rem;
        
        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: 5px;

        color: var(--white);

        font-size: 1rem;
        font-weight: 600;

        transition: .2s;
    }

    & button:hover{
        filter: brightness(0.9);
    }
`

export const LoginButton = styled.button`
    background: var(--green);
    width: 40%;
`
export const CadastroButton = styled.button`
    background: var(--red);
`
export const CadastroFooter = styled.footer`
    padding: .75rem 1.25rem;
    background-color: rgba(0,0,0,.03);
    border-top: 1px solid rgba(0,0,0,.125);

    text-align: center;
`