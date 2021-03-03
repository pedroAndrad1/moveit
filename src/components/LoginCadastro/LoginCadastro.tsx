import {
    ButtonGroup, InputGroup, Box, Button, Container, Input, CadastroButton,
    Footer, Form, Main, Header
}
    from "../../styles/components/LoginCadatro.module";
import Link from 'next/link'

interface LoginCadastroProps {
    type: 'login' | 'cadastro'
}


export default function LoginCadastro({ type }: LoginCadastroProps) {



    return (
        <Container>
            <Box>
                {
                    type == 'login' ?
                        <Header>
                            Login
                    </Header>
                        :
                        <Header>
                            Cadastro
                    </Header>

                }
                <Main>
                    <Form>
                        <InputGroup>
                            <label htmlFor="github">Github:</label>
                            <Input name='github' />
                        </InputGroup>

                        <InputGroup>
                            <label htmlFor="senha">Senha:</label>
                            <Input type='password' name='senha' />
                        </InputGroup>

                        {
                            type == 'login' ?
                                <>
                                    <ButtonGroup>
                                        <Button type='submit'>
                                            Login
                                    </Button>
                                    </ButtonGroup>
                                </>
                                :
                                <ButtonGroup>
                                    <Button type='submit'>
                                        Cadastrar
                                </Button>
                                    <Link href='/login'>
                                        <CadastroButton>
                                            Voltar
                                    </CadastroButton>
                                    </Link>
                                </ButtonGroup>
                        }
                    </Form>
                </Main>
                {
                    type == 'login' &&
                    <Footer>
                        <Link href='/cadastro'>Não tem uma conta? Cadastre-se aqui</Link>
                    </Footer>
                }
            </Box>
        </Container>
    )
}