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

  html:not([data-scroll='0']) {
    body {
      padding-top: 3em;
    }

    header {
      position: fixed;
      top: 0;
      background-color: #fff;
      box-shadow: 0 0 .5em rgba(0, 0, 0, .5);
    }

  }

  header {
    box-sizing: border-box;
    padding: 1em;
    transition: background-color .25s;
  }
  
`;

// The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();



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


