import styled from 'styled-components';
import oldCourse from '../../images/oldCourse.jpeg';
import stAndrews from '../../images/st_andrews.jpeg';
import stAndrews2 from '../../images/st_andrews2.jpeg';
import stAndrews3 from '../../images/st_andrews3.jpeg';

const StyledPage = styled.main`
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
  padding: 10px;
  margin: 10px 15px 0 0;
  background-color: #fff;
  border: 1px solid red;
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
            <img className="imageHeader" alt="Old Course" src={oldCourse} />
            <div className="homeBody">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus blandit orci, accumsan vestibulum felis imperdiet nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus pretium sapien vitae condimentum ultricies. Nullam quis turpis arcu. Quisque dui orci, accumsan semper ipsum feugiat, sollicitudin consequat lacus. Morbi eu euismod justo. Integer nec ullamcorper metus.</p>
                <img src={stAndrews} alt="St. Andrews" />
                <p>Proin pretium ultrices sem nec maximus. Pellentesque id leo convallis, varius massa non, sollicitudin nibh. Quisque accumsan vitae massa id consectetur. Ut convallis ligula a odio egestas rhoncus. Morbi non pulvinar magna. Maecenas rhoncus elit felis, in pharetra nisl auctor non. Ut imperdiet justo nec bibendum blandit. In fermentum pharetra vulputate. Phasellus mattis eros quis convallis dignissim. Vestibulum id ornare felis. Fusce aliquet suscipit dui id laoreet. Suspendisse at lacinia libero.</p>
                <img src={stAndrews2} alt="St. Andrews" />
                <img src={stAndrews3} alt="St. Andrews" />
            </div>
        </StyledPage>
    );
};

export default HomePage;