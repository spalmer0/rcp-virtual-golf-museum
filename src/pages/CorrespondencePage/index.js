import '../CorrespondencePage/index.css'
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



const books = [
    {
        name: 'achitecture', 
        img: architecture,
        title: 'Golf Architecture in America'
    },
    {
        name: 'gameOfGolf',
        img: gameOfGolf,
        title: 'The Game of Golf'
    }, {
        name: 'secret',
        img: secret,
        title: 'The Golf Secret'
    }, {
        name: 'snead',
        img: snead,
        title: 'Lessons from Sam Snead'
    }, {
        name: 'history',
        img: history,
        title: 'A History of Golf'
    },{
        name: 'donts',
        img: donts,
        title: "Golf Dos and Donts"
    },{
        name: 'isles',
        img: isles,
        title: 'The Golf Courses of the British Isles'
    }]


function BookPage(props) {
    
    
    const [show, setShow] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleClose = () => setShow(false);
    const handleClick = (imageName) => {
        setShow(true);
        setCurrentImage(imageName)
    } 

    
    
    return (
        <div>
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
                        currentImage && <img src={books.find(book => book.name === currentImage).img} alt={'currentImage'} width="300" height="auto" />
                    }
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque risus sit amet nisl aliquet luctus.
                    Vivamus euismod gravida pellentesque. Mauris ornare porta velit. Suspendisse nec libero ut odio porttitor laoreet eget at metus.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    ); 
};

export default BookPage;