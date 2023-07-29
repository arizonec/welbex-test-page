import './App.scss';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Main } from './components/Main';

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
            <Header/>
            <Main/>
        </AppWrapper>
    </main>
  );
}


