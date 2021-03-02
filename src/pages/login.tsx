import { ButtonGroup, InputGroup, LoginBox, LoginButton, LoginContainer, LoginInput, CadastroButton, 
        CadastroFooter, Form } 
from "../styles/components/Login.module";

export default function Login() {
    return (
        <LoginContainer>
            <LoginBox>
                <Form>

                    <InputGroup>
                        <label htmlFor="github">Github:</label>
                        <LoginInput name='github' />
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="senha">Senha:</label>
                        <LoginInput type='password' name='senha' />
                    </InputGroup>

                    <ButtonGroup>
                        <LoginButton>
                            Login
                        </LoginButton>
                    </ButtonGroup>

                </Form>

                <CadastroFooter>
                    <a>Não tem uma conta? Cadastre-se aqui</a>
                </CadastroFooter>
            </LoginBox>
        </LoginContainer>
    )
}