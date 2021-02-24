//Essa é uma maneira de eu acessar o document, analogo ao index numa app react raiz.
//Aqui vou fazer alteracoes no Head para colocar a fonte do projeto.
//Nao estou fazendo isso no _app, pq aqui isso so sera feito uma unica vez.

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href= 'public\favicon.png' type="image/png"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
                    rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}