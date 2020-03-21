import styled from 'styled-components';


export const ContainerDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: calc(100vh - 64px);
    background-color: white;
    padding: 10px;
`

export const ContainerDivMobile = styled.div `
    display: flex;
    flex-direction: column;
    width: calc(100% - 20px);
    height: calc(100vh);
    overflow: hidden;
    background-color: rgb(255,255,255, .8);
    padding: 10px;
`

export const TopDiv = styled.div `
    display: flex;
    justify-content: space-evenly;
    /* margin: 10px; */
    width: 100%;

`

export const Title = styled.p `
    font-size: 24px;
    /* margin: 10px auto;  */
    font-weight: bold;
`

export const Border = styled.div `
    border: 1px solid #ececec;
    width: 90%;
    margin: 10px auto;
`

