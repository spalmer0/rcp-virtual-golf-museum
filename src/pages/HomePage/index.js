import styled from 'styled-components';
import oldCourse from '../../images/oldCourse.jpeg';
import stAndrews from '../../images/st_andrews.jpeg';
import stAndrews2 from '../../images/st_andrews2.jpeg';
// import stAndrews3 from '../../images/st_andrews3.jpeg';

const StyledPage = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    
    .img-wrapper {
        display: inline-block;
        overflow: hidden;
        max-height: 50vw;
    }
    
    .imageHeader {
        display: block;
        width: 100%;
        height: auto;
        position:top;
        z-index:1;
        right:0;
    }

    .homeBody {
        left: 0;
        bottom: 0;
        width: 100%;
        min-height: 5vh;
        display: grid;
        padding: 3px;
        grid-gap: 3px;
        /* grid-template-columns: 50% 50%; */
        grid-template-columns: repeat( auto-fit, minmax(400px, 1fr));
        /* grid-template-rows: 50% 50%; */
        /* text-decoration: none;    */
    }

    .homeBody img {
        max-width: 100%;
        height: auto;
    }

    .firstText {
        display: flex;
        justify-content: center;
        margin: 5px;
        overflow: auto;
        /* grid-column: 1 / 1;
        grid-row: 1 / 1; */
    }

    .firstImage {
        display: flex;
        justify-content: center;
        margin: 5px;
        overflow: auto;
        /* grid-column: 2 / 2;
        grid-row: 1 / 1; */
        /* min-height: 200px; */
        /* min-width: auto; */
    }

    .secondText {
        display: flex;
        justify-content: center;
        margin: 5px;
        overflow: auto;
        /* grid-column: 2 / 2;
        grid-row: 2 / 2; */
    }

    .secondImage {
        display: flex;
        justify-content: center;
        margin: 5px;
        overflow: auto;
        /* grid-column: 1 / 1;
        grid-row: 2 / 2; */
        /* min-height: 200px; */
        /* min-width: auto; */
    }
    

    p {
    color: #000;
    margin: 10px;
    background-color: #fff;
    }

    @media (max-width: 1100px) {
        div {
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }
`;



function HomePage(props) {
    return (
        <StyledPage>
            <div class="img-wrapper">
                <img className="imageHeader" alt="Old Course" src={oldCourse} />
            </div>
            <div className="homeBody">
                <div className="firstText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus blandit orci, accumsan vestibulum felis imperdiet nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus pretium sapien vitae condimentum ultricies. Nullam quis turpis arcu. Quisque dui orci, accumsan semper ipsum feugiat, sollicitudin consequat lacus. Morbi eu euismod justo. Integer nec ullamcorper metus.</p>
                </div>
                <div className="firstImage">
                    <img src={stAndrews} alt="St. Andrews" />
                </div>
                <div className="secondText">
                    <p>Proin pretium ultrices sem nec maximus. Pellentesque id leo convallis, varius massa non, sollicitudin nibh. Quisque accumsan vitae massa id consectetur. Ut convallis ligula a odio egestas rhoncus. Morbi non pulvinar magna. Maecenas rhoncus elit felis, in pharetra nisl auctor non. Ut imperdiet justo nec bibendum blandit. In fermentum pharetra vulputate. Phasellus mattis eros quis convallis dignissim. Vestibulum id ornare felis. Fusce aliquet suscipit dui id laoreet. Suspendisse at lacinia libero.</p>
                </div>
                <div className="secondImage">
                    <img src={stAndrews2} alt="St. Andrews" />
                </div>
            </div>
        </StyledPage>
    );
};

export default HomePage;