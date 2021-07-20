import styled from 'styled-components';
import oldBooks2 from '../../images/oldbooks2.jpeg';
import architecture from '../../images/architecture.jpeg';
import gameOfGolf from '../../images/game-of-golf.jpeg';
import secret from '../../images/secret.jpg';
import snead from '../../images/snead.jpg';
import history from '../../images/history.png';
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

    .imageHeader {
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

    /* .book-modal {
        height: 1000px;
        width: auto;
    }

    .book-thumbs {
        display:flex;
        justify-content:space-around;
        align-items:center;
    } */

    @media (max-width: 1100px) {
        div {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }

`;


function BookPage(props) {
    
    
    const books = [architecture, gameOfGolf, secret, snead, history];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const modalStyle = { display: 'flex' ,
        flexDirection: 'row' };
    
    return (
        <StyledPage>
            <img className="imageHeader" alt="Old Books" src={oldBooks2} />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque risus sit amet nisl aliquet luctus. Vivamus euismod gravida pellentesque. Mauris ornare porta velit. Suspendisse nec libero ut odio porttitor laoreet eget at metus. Cras facilisis pretium scelerisque. Nullam cursus elementum finibus. Maecenas eu nisl egestas, eleifend magna at, pulvinar arcu. Sed varius eros turpis, eu egestas orci bibendum mollis. Donec a enim felis. Mauris urna nisi, pharetra ut nisi sit amet, scelerisque pellentesque magna. Fusce imperdiet turpis at magna mattis, ac luctus mi bibendum. In aliquet gravida nibh sit amet cursus.
            </p>
            
            <div className="book-thumbs">
                {books.map(book => 
                    <Link>
                        <img src={book} alt="book" onClick={handleShow} />
                    </Link> 
                )}
            </div>
            

            <Modal {...props} className="book-modal" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Title</Modal.Title>
                </Modal.Header>
                <Modal.Body style={modalStyle}  >
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