import styled from 'styled-components';
import oldbooks from '../../images/oldbooks.jpeg';
import architecture from '../../images/architecture.jpeg';
import gameOfGolf from '../../images/game-of-golf.jpeg';
import secret from '../../images/secret.jpg';
import snead from '../../images/snead.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const StyledPage = styled.main`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;


 /* .hero::before {    
      content: "";
      background-image: url(${oldbooks});
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.75;
} */

 

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



function BookPage(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const modalStyle = { display: 'flex' ,
        flexDirection: 'row' };
    
    return (
        <StyledPage>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque risus sit amet nisl aliquet luctus. Vivamus euismod gravida pellentesque. Mauris ornare porta velit. Suspendisse nec libero ut odio porttitor laoreet eget at metus. Cras facilisis pretium scelerisque. Nullam cursus elementum finibus. Maecenas eu nisl egestas, eleifend magna at, pulvinar arcu. Sed varius eros turpis, eu egestas orci bibendum mollis. Donec a enim felis. Mauris urna nisi, pharetra ut nisi sit amet, scelerisque pellentesque magna. Fusce imperdiet turpis at magna mattis, ac luctus mi bibendum. In aliquet gravida nibh sit amet cursus.
            </p>
            <Link>
                <img src={architecture} alt="architecture" onClick={handleShow} />
            </Link>
                
            <Link>
                <img src={gameOfGolf} alt="gameOfGolf" onClick={handleShow} />
            </Link>

            <Link>
                <img src={secret} alt="secret" onClick={handleShow} />
            </Link>

            <Link>
                <img src={snead} alt="snead" onClick={handleShow} />

            </Link>

            <Modal {...props} className="book-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Golf Architecture in America</Modal.Title>
                </Modal.Header>
                <Modal.Body style={modalStyle}  >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <img src={architecture} alt="architecture" />
                </Modal.Body>
                <Modal.Footer>
                <Button className="book-button" variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </StyledPage>
    ); 
};

export default BookPage;