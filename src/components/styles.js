import styled from "styled-components";

export const Layout = styled.div`
    height: 100%;
`

export const FlexContainer = styled.div`
    display: flex;
    color: #D1D2D3;
`

export const Sidebar = styled.div`
    background-color: #19171D;
    height: 100vh;
    flex: 1;
    h2 {
        font-size: 1rem;
        padding-bottom: .5rem;
    }
    > div {
        border: 0.4px solid #d1d2d336;
    }
    > div:nth-child(2) {
        height: 90%;
        overflow: auto;
        border-top: none;
    }
`

export const GroupName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    padding: 2rem;
    h1 {
        font-size: 1.5rem;
    }
    svg {
        color: #212121;
        background-color: #D1D2D3;
        padding: 5px  10px;
        font-size: 40px;
        border-radius: 100%;
    }

`

export const ChannelDMs = styled.div`

    h2 {
        padding: 2rem 2rem .5rem;
    }

    li {
        display: flex;
        align-items: center;
        padding: 5px 2rem;
        &:hover {
            background-color: #d1d2d336;
        }
    }

    li:last-child svg {
        color: #D1D2D3;
        background-color: #212121;
        padding: 5px;
        font-size: 20px;
        margin-right: 10px;
    }
 
`

export const Messages = styled.div`
    background-color: #212121;
    height: 100vh;
    flex: 4;
`