import styled from 'styled-components';
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const IMG = styled.img`
    margin: 5px 5px;
    max-width: 90%;
    min-width: 50%;
    height: 90%;
`;
const ImgBox = styled.div`
    width: 100%;
    height: 70%;
`;

export function CatImage(props) {
    let [loading, setLoading] = useState(true);
    const override = {
        display: "block",
        margin: "50px auto",
        border: "25px solid"
    };
    return <ImgBox>
            {
                props.loading ?
                    <ClipLoader
                        color={"grey"}
                        loading={loading}
                        cssOverride={override}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />

                : <IMG src={ props.img } alt="no img"/>
            }
           </ImgBox>
}