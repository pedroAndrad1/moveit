var isGithubUrl = require('is-github-url');

/* 
    Valida se o user do github e valido. Essa function so valida se a url recebida
    e do dominio do github. Entao pode nao ser necessariamente o profile. 
    Preciso achar um regex para isso.
*/
const isGithubValid = (githubUser: string) =>{
    return isGithubUrl(githubUser);
}

const passWordValid = (password: string) =>{

}

export {
    isGithubValid,
    passWordValid
}