import CompletedChallenges from "../components/CompletedChallenges";
import { Container } from "../components/Container";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { StyledSection } from '../styles/pages/Home.module';
import Head from 'next/head'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Move.it | Home</title>
      </Head>

      <ExperienceBar />
      <StyledSection>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
      </StyledSection>
    </Container>
  )
}
