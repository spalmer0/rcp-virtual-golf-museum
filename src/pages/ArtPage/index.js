import styled from 'styled-components';
import theMatch from '../../images/theMatch.jpeg';


const StyledPage = styled.main`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    .img-wrapper {
        display: inline-block;
        overflow: hidden;
        max-height:700px;
        width:100%;
    }
    
    .imageHeader {
        display:block;
        width: 100%;
        height: auto;
        position:top;
        z-index:1;
        right:0;
    }

    p {
    color: #000;
    
    }

    img {
        height:200px;
        width: auto;
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
            <div className="img-wrapper">
                <img className="imageHeader" alt="The Match" src={theMatch} />
            </div>
        </StyledPage>
    );
    
};

export default ArtPage;