import styled from "styled-components";

export const Layout = styled.div`
    height: 100%;
`

export const FlexContainer = styled.div`
    display: flex;
    color: #D1D2D3;
`

export const SidebarStyles = styled.div`
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

export const ChannelDMsLayout = styled.div`

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

export const MessageContainer = styled.div`
    background-color: #212121;
    height: 100vh;
    flex: 4;
`

export const MessageTitle = styled.div`
    height: 10%;
    display: flex;
    align-items: center;
    padding: 2rem;
    border: 0.4px solid #d1d2d336;
    h1 {
        font-size: 1.2rem;
    }
`

export const MessagesStyles = styled.div`
    height: 70%;
    overflow: auto;
`

export const MessageLayout = styled.div`
    padding: 2rem;
    position: relative;
    border-top: 1px solid #d1d2d336;
    > span {
        position: absolute;
        top: -17%;
        left: 50%;
        transform: translateX(-50%);
        border: 1px solid #d1d2d336;
        padding: 10px 15px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 12px;
        background-color: #212121;
    }

    h5 {
        margin-bottom: 10px;
    }
`

export const MessageBox = styled.form`
    border: 1px solid #d1d2d336;
    border-radius: 10px;
    height: 15%;
    width: 90%;
    margin: auto;
    position: relative;
    padding: 1rem;

    textarea {
        width: 100%;
        height: 80%;
        display: block;
        background-color: transparent;
        border: none;
        resize: none;
        color: #d1d2d3;
        font-family: sans-serif;
        outline: none;
    }

    button {
        position: absolute;
        bottom: 0;
        right: 10px;
        border: none;
        color: #d1d2d3;
        font-size: 25px;
        background-color: transparent;
    }

`