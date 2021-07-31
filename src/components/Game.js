import React, { useState } from "react";

import {
    H1,
    Grid,
    Row,
    Col,
    Header,
    SearchInput,
    ImageResponsive,
    ImageIcon,
    ThumbNailWrapper,
    GameThumbnailWrapper,
    HeaderControlsList,
    HeaderButton,
    HeaderControlsListItem,
    PlayOverlayStyled,
    PlayOverlayPlayButton,
    PlayOverlayTitle,
} from '../app_styles';

import NewGameIcon from '../new-game.png';
import HighStakesIcon from '../high-limit-game.png';

const Game = ({ id, name, limit, status, image, link }) => {

    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = (e) => {
        setIsHovered(true);
    };
    const onMouseLeave = (e) => {
        setIsHovered(false);
    };



    return (
        <ThumbNailWrapper onMouseEnter={(e) => onMouseEnter(e)} onMouseLeave={(e) => onMouseLeave(e)}>

            {(status === "new") && <ImageIcon src={NewGameIcon} alt="null" />}
            {(limit === "high limit") && <ImageIcon src={HighStakesIcon} isHighLimit={true} alt="null" />}

            <a href={link} title={name} data-name={name} data-gameid={id}>
                <ImageResponsive src={image} alt="null" />
                <PlayOverlayStyled hovered={isHovered}>
                    <PlayOverlayPlayButton>Play</PlayOverlayPlayButton>

                    <PlayOverlayTitle>{name}</PlayOverlayTitle>
                </PlayOverlayStyled>

            </a>
        </ThumbNailWrapper>);
}

export default Game;