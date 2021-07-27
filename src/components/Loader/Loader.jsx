import styled from 'styled-components'
import DotLoader from "react-spinners/DotLoader";

const LoaderContainer = styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
`

export function Loader({isReady}) {
    return (
        <LoaderContainer>
        <DotLoader size={100} color="#0288d1" loading={isReady} />
        </LoaderContainer>
    )
}