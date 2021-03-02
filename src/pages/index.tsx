import CompletedChallenges from "../components/CompletedChallenges";
import { Container } from "../components/Container";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { StyledSection } from '../styles/pages/Home.module';
import Head from 'next/head'
import ChallengeBox from "../components/ChallengeBox";
import { CountdownContextProvider } from "../Contexts/CountdownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../Contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider 
    level={props?.level} 
    currentExperience={props?.currentExperience} 
    challengesCompleted={props?.challengesCompleted} 
    >
      <Container>
        <Head>
          <title>Move.it | Home</title>
        </Head>

        <ExperienceBar />
        <CountdownContextProvider>
          <StyledSection>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <>
              <ChallengeBox />
            </>
          </StyledSection>
        </CountdownContextProvider>
      </Container>
    </ChallengesProvider>
  )
}

//PRECISA TER ESSE FORMATO E NOME

//Essa function ocorrera no servidor Next que intermedia o front com o back.
//Como isso ocorre antes de renderizar a page, e otimo para fazer requisicoes
//para api's. Assim o conteudo estara disponivel na renderizacao da pagina e  
//crawlers indexadores poderam ver o conteudo requisitado.
export const getServerSideProps: GetServerSideProps = async (context) => {

  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  if (level != null && currentExperience != null && challengesCompleted != null) {
    return {
      props: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted)
      }
    }
  }
  else {
    return {
      props: {}
    }
  }

}