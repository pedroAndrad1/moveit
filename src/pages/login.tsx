import Head from "next/head";
import LoginCadastro from "../components/LoginCadastro/LoginCadastro";

export default function Login() {
    return (
        <>
            <Head>
                <title>Moveit | Login</title>
            </Head>
            <LoginCadastro type='login' />
        </>
    )
}