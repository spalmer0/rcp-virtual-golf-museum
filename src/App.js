import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import ArtPage from './pages/ArtPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const StyledApp = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  
`;


export default function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Header />
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={BookPage} path="/books" />
          <Route component={ArtPage} path="/artwork" />
        </Switch>
        <Footer />
      </StyledApp>
    </BrowserRouter>
    
  );

}


