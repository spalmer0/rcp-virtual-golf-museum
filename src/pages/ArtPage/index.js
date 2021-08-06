import styled from 'styled-components';
import theMatch from '../../images/theMatch.jpeg';
import augusta from '../../images/augusta.jpeg';
import clubAndBall from '../../images/clubAndBall.jpeg';
import links from '../../images/links.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


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

    .artwork-thumbs {
        left: 0;
        bottom: 0;
        width: 100%;
        min-height: 5vh;
        display: grid;
        grid-gap: 3px;
        margin: 10px;
        grid-template-columns: repeat( auto-fit, minmax(150px, 1fr));
        align-items:center;
        justify-items:center;
    }

    p {
    color: #000;
    margin: 10px;
    
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

const artworks = [
    {
        name: 'augusta', 
        img: augusta,
        title: 'Golden Bell'
    },
    {
        name: 'clubAndBall',
        img: clubAndBall,
        title: 'Club and Ball'
    },{
        name: 'links', 
        img: links,
        title: 'Links'
    }]

function ArtPage(props) {
    
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleClose = () => setShow(false);
    const handleClick = (imageName) => {
        setShow(true);
        setCurrentImage(imageName)
    } 
    
    
    return (
        <StyledPage>
            <div className="img-wrapper">
                <img className="imageHeader" alt="The Match" src={theMatch} />
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque risus sit amet nisl aliquet luctus. Vivamus euismod gravida pellentesque. Mauris ornare porta velit. Suspendisse nec libero ut odio porttitor laoreet eget at metus. Cras facilisis pretium scelerisque. Nullam cursus elementum finibus. Maecenas eu nisl egestas, eleifend magna at, pulvinar arcu. Sed varius eros turpis, eu egestas orci bibendum mollis. Donec a enim felis. Mauris urna nisi, pharetra ut nisi sit amet, scelerisque pellentesque magna. Fusce imperdiet turpis at magna mattis, ac luctus mi bibendum. In aliquet gravida nibh sit amet cursus.
            </p>
            
            <div className="artwork-thumbs">
                {artworks.map(artwork => 
                        <img src={artwork.img} alt="artwork" onClick={() => handleClick(artwork.name)} key={artwork.name} />
                )}
            </div>
            
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                <Modal.Title>
                    {currentImage && artworks.find(artwork => artwork.name === currentImage).title} 
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        currentImage && <img src={artworks.find(artwork => artwork.name === currentImage).img} alt={'currentImage'} width="300" height="auto" />
                    }
                </Modal.Body>
                <Modal.Footer>
                <Button className="artwork-button" variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </StyledPage>
    );
    
};

export default ArtPage;