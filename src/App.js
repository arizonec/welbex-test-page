import './App.scss';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Circle } from './components/Circle';

const AppWrapper = styled.div`
    max-width: 1140px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`

export function App() {
  return (
    <main>
        <AppWrapper>
            <Circle left={'-400px'} top={'20px'} color={'red'} width={'311px'} height={'311px'} border={'50%'} opacity={'0.5'} filter={'drop-shadow(302px 251px 10rem var(--first-shadow))'}/>
            <Circle left={'519px'} top={'83px'} color={'radial-gradient(circle at 20px 25px, rgba(255, 208, 208, 0.54) 0.1%,rgba(212, 93, 93, 0.26) 45%,rgba(167, 49, 49, 0.25) 60%,rgba(130, 25, 25, 0.25) 90%)'} width={'83px'} height={'83px'} border={'50%'} opacity={'1'} filter={'drop-shadow(10px 8px 0.8rem var(--second-shadow))'}/>
            <Circle left={'-400px'} top={'20px'} color={'red'} width={'259px'} height={'259px'} border={'50%'} opacity={'0.5'} filter={'drop-shadow(1002px -154px 10rem var(--third-shadow))'}/>
            <Circle left={'868px'} top={'2px'} color={'radial-gradient(circle at 10px 15px, rgba(236, 208, 255, 0.64) 0.5%,rgba(161, 93, 207, 0.24) 45%,rgba(118, 49, 164, 0.21) 60%,rgba(86, 24, 128, 0.23) 30%)'} width={'60px'} height={'60px'} border={'50%'} opacity={'1'} filter={'drop-shadow(3px 4px 10rem var(--third-shadow)) blur(3px)'}/>
            <Circle left={'851px'} top={'547px'} color={'radial-gradient(circle at 4px 4px, rgba(255, 208, 208, 0.48) 10%, rgba(212, 93, 93, 0.25) 45%,rgba(167, 49, 49, 0.26) 60%,rgba(130, 25, 25, 0.23) 30%)'} width={'28px'} height={'28px'} border={'50%'} opacity={'1'} filter={'drop-shadow(3px 4px 10rem var(--fifth-shadow)) blur(2px)'}/>
            <Header/>
            <Main/>
            <Footer/>
        </AppWrapper>
    </main>
  );
}


