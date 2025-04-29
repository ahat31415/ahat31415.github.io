import styled from 'styled-components';

const IMG = styled.img`
    margin: 5px 5px;
    max-width: 90%;
    min-width: 50%;
    height: 90%;
`;
const ImgBox = styled.div`
    /*padding: 15px 15px;*/
    width: 100%;
    height: 70%;
`

export function CatImage(props) {
    return <ImgBox>
                <IMG src={ props.img } alt="no img"/>
           </ImgBox>
}