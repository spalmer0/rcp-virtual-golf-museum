import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: #000; */
    color: #fff;
    /* box-shadow: 3px 3px 5px 3px lightgrey; */
    /* padding: 0 15px; */
    position:absolute;
    z-index:2;
    /* right:0; */
    /* position: sticky; */

    nav {
        display: flex;
        margin-left:30px;
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 20px;
    }
    
    h1 {
        margin: 20px 0px 0px 20px;
        font-size: 4vw;
        margin-right: 20px;
    }

    li {
        font-size: 3vw;
        margin-right: 20px;
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