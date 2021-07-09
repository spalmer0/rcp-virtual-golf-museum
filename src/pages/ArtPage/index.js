import styled from 'styled-components';


const StyledPage = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

 

p {
  color: #000;
  text-decoration: none;
  border: 1px solid #000;
  border-radius: 9px;
  padding: 10px;
  margin: 10px 15px 0 0;
  background-color: #fff;
  &:hover {
    text-decoration: none;  
    background-color: #000;
      color: #fff;
  }
}

    @media (max-width: 1100px) {
        div {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }

`;



function ArtPage(props) {
    return (
        <StyledPage>
            <h1>Art Page</h1>
        </StyledPage>
    );
    
};

export default ArtPage;