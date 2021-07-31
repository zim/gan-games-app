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
export const ThumbNailWrapper = styled.div`
        position: relative;
        overflow:hidden;
`;
export const ImageIcon = styled.img`
        position: absolute;
    width: 26%;
    top: 6px;
    ${props => (props.isHighLimit ? `right: 6px` : `left: 6px`)};
`;


export const Grid = styled.div`
outline: 0px solid red;
margin: 0 auto;
    max-width: 1364px;
`;
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    outline: 0px solid yellow;
    justify-content: space-between;
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
    width:13%;
    margin-bottom:20px;
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

// PLAY OVERLAY CSS
export const PlayOverlayStyled = styled.div`
    position: absolute;
left: 0;
right: 0;

display: block;
width: 100%;
height: 100%;
opacity: 1;
${props => props.hovered ? 'top: 0px; opacity:1;' : 'top: 100%; opacity:0;'}
background: rgba(78, 56, 56, 0.7);
transition: opacity .4s, top .4s;
`;

export const PlayOverlayPlayButton = styled.span`
    box-sizing: border-box;
display: block;
height: initial;
width: 100%;
padding: 0 8px;
line-height: 40px;
text-transform: uppercase;
font-size: 0.8rem;
font-weight: 400;
text-align: center;
border-radius: 50px;
border: none;
cursor: pointer;
transition: all 0.1s ease -in;
background-color: #00a9e0;
color: #fff;
border: 1px solid transparent;
max-width: 75%;
margin: 31% auto 0;
line-height: 60px;
font-size: 1.875rem;
`;

export const PlayOverlayTitle = styled.h4`
    position: absolute;
bottom: 14px;
margin: 0;
padding-left: 10px;
font-family: "opensans-regular", Arial, sans-serif;
font-weight: 400;
line-height: 14px;
font-size: 0.875rem;
text-transform: initial;
color: #00a9e0;

`;



