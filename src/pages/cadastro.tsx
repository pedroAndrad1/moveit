import Head from "next/head";
import LoginCadastro from "../components/LoginCadastro/LoginCadastro";

export default function Cadastro() {
    return (
        <>
            <Head>
                <title>Moveit | Cadastro</title>
            </Head>
            <LoginCadastro type='cadastro' />
        </>
    )
}