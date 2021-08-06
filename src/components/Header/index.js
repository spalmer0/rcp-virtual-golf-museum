import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* background-color: #000; */
    color: #fff;
    /* box-shadow: 3px 3px 5px 3px lightgrey; */
    /* padding: 0 15px; */
    position:absolute;
    z-index:2;

    nav {
        display: flex;
        margin-right:30px;
        float: right;
    }

    ul {
        display: flex;
        list-style: none;
    }
    
    h1 {
        /* margin: 10px; */
        font-size: clamp(16px, 4vw, 30px);
        margin-left: 10px;
        
    }

    li {
        font-size: clamp(12px, 3vw, 30px);
        margin-right: 10px;
    }


    a {
        text-decoration: none;
        color: white; 
    }
`;


export default function Header(props) {
    return (
        <StyledHeader>
            <Link to="/">
                    <h1>RCP Virtual Golf Museum</h1>
            </Link>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/books">Books</Link>
                            </li>
                            <li>
                                <Link to="/artwork">Artwork</Link>
                            </li>
                            {/* <li>
                                <Link to="/correspondence">Correspondence</Link>
                            </li> */}
                            {/* <li>
                                <Link to="" onClick={props.handleLogout}>Logout</Link>
                            </li> */}
                        </>
                        :
                        <>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/books">Books</Link>
                            </li>
                            <li>
                                <Link to="/artwork">Artwork</Link>
                            </li>
                            {/* <li>
                                <Link to="/correspondence">Correspondence</Link>
                            </li> */}
                            
                            {/* <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li> */}
                        </>
                    }
                </ul>
            </nav>
        </StyledHeader>
    );
};