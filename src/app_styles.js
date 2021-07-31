import styled from 'styled-components'

export const H1 = styled.h1`
    color:#00d9ff;
    padding:0px;
    margin:0px;
`;
export const ImageResponsive = styled.img`
    width:100%;
    height: auto;
`;

export const Grid = styled.div`
outline: 0px solid red;
margin: 0 auto;
    max-width: 1364px;
`;
export const Row = styled.div`
    display: flex;
    outline: 0px solid yellow;
`;

const media = {
    xs: (styles) => `
    @media only screen and (max-width: 480px) {
        ${styles}
    }
    `
}

export const Col = styled.div`
    flex: ${(props) => props.size};
    ${(props) => props.collapse && media[props.collapse](`
        display:none;
    `)}
    outline: 0px solid green;
`;


// HEADER STYLES
export const Header = styled.header`
    align-items: center;
    display: flex;
        justify-content: space-between;
    outline: 0px solid blue;
        padding: 20px 0px 0px 0px;
`;
export const HeaderButton = styled.button`
    color:grey;
    display: flex;
    outline: 0px solid blue;
    padding: 0px;
    margin:0px;
    position:relative;
        margin-top: 20px;
    padding: 4px;
    font-size: 12px;
    background: none;
    border:0px;
    cursor:pointer;

    > svg{
        position:absolute;
        top:-24px;
        height:22px;
        width:22px;

        
    }
`;
export const HeaderControlsWrapper = styled.div`
    display: flex;
    outline: 0px solid blue;
        align-items: center;
`;
export const HeaderControlsList = styled.ul`
display: flex;
    list-style:none;
    padding:0px;
    outline: 0px solid blue;
    margin-right: 20px;
`;
export const HeaderControlsListItem = styled.li`
    display: flex;
    list-style:none;
    padding:0px;
    outline: 0px solid blue;
    margin-right: 20px;
`;

export const SearchInput = styled.input`
    display: inline-block;
    -webkit-transition: box-shadow 0.4s ease, background 0.4s ease;
    transition: box-shadow 0.4s ease, background 0.4s ease;
    border: 0;
    border-radius: 19px;
    box-shadow: inset 0 0 0 1px #d9d9d9;
    background: #FFFFFF;
    padding: 6px;
    height: 35px;
    vertical-align: middle;
    white-space: normal;
    font-size: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width:150px;
`;

