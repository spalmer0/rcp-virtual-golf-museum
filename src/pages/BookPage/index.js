import styled from 'styled-components';
import oldBooks2 from '../../images/oldbooks2.jpeg';
import architecture from '../../images/architecture.jpeg';
import gameOfGolf from '../../images/game-of-golf.jpeg';
import secret from '../../images/secret.jpg';
import snead from '../../images/snead.jpg';
import history from '../../images/history.jpeg';
import donts from '../../images/donts.jpeg';
import isles from '../../images/isles.jpeg';
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
        max-height:50vw;
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

    .book-thumbs {
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

    img, a {
        height: auto;
        width: 150px;
    }


    @media (max-width: 1100px) {
        div {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }

`;

const books = [
    {
        name: 'achitecture', 
        img: architecture,
        title: 'Golf Architecture in America',
        description: 'Golf Architecture in America is a masterpiece of early golf literature, written by famed architect George C. Thomas. Considered by historians to be the most influential book ever written on early American golf, this guide provides rare insight into the methods and philosophies used to design, construct, and maintain the most renowned golf courses in the United States.'
    },
    {
        name: 'gameOfGolf',
        img: gameOfGolf,
        title: 'The Game of Golf',
        description: 'this book is about golf'
    }, {
        name: 'secret',
        img: secret,
        title: 'The Golf Secret',
        description: 'this book is about the secret of begin good at golf, including not being terrible at chipping'
    }, {
        name: 'snead',
        img: snead,
        title: 'Lessons from Sam Snead',
        description: 'Sam Snead enjoyed slacks, like Fred'
    }, {
        name: 'history',
        img: history,
        title: 'A History of Golf',
        description: 'Description'
    },{
        name: 'donts',
        img: donts,
        title: "Golf Dos and Donts",
        description: 'DO put the ball in the hole. DONT put the ball in the woods.'
    },{
        name: 'isles',
        img: isles,
        title: 'The Golf Courses of the British Isles',
        description: 'there are a lot'
    }]


function BookPage(props) {
    
    
    const [show, setShow] = useState(false);
    const [currentBook, setCurrentBook] = useState('');

    const handleClose = () => setShow(false);
    const handleClick = (bookName) => {
        setShow(true);
        setCurrentBook(bookName)
    } 

    
    
    return (
        <StyledPage>
            <div className="img-wrapper">
                <img className="imageHeader" alt="Old Books" src={oldBooks2} />
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque risus sit amet nisl aliquet luctus. Vivamus euismod gravida pellentesque. Mauris ornare porta velit. Suspendisse nec libero ut odio porttitor laoreet eget at metus. Cras facilisis pretium scelerisque. Nullam cursus elementum finibus. Maecenas eu nisl egestas, eleifend magna at, pulvinar arcu. Sed varius eros turpis, eu egestas orci bibendum mollis. Donec a enim felis. Mauris urna nisi, pharetra ut nisi sit amet, scelerisque pellentesque magna. Fusce imperdiet turpis at magna mattis, ac luctus mi bibendum. In aliquet gravida nibh sit amet cursus.
            </p>
            
            <div className="book-thumbs">
                {books.map(book => 
                        <img src={book.img} alt="book" onClick={() => handleClick(book.name)} key={book.name} />
                )}
            </div>
            

            <Modal show={show} onHide={handleClose} >
                {/* <Modal.Header closeButton>
                <Modal.Title>
                    {currentImage && books.find(book => book.name === currentImage).title} 
                </Modal.Title>
                </Modal.Header> */}
                <Modal.Body >
                    {
                        currentBook && <img src={books.find(book => book.name === currentBook).img} alt={'currentImage'} width="300" height="auto" />
                    }
                    <br></br>
                    {
                        currentBook && books.find(book => book.name === currentBook).description
                    }
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </StyledPage>
    ); 
};

export default BookPage;