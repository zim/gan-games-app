const Game = ({ id, name, limit, status, image, link }) => {
    console.log(id)
    console.log(name)
    console.log(limit)
    console.log(status)
    console.log(image)
    console.log(link)
    return (
        <div>

            <a href={link} title="Adorned Peacock" data-name="Adorned Peacock" data-gameid="4750"><img src={image} alt="null" />
                <span class="play-overlay">
                    <span class="play-btn">Play</span>
                    <h4 class="game-title hidden">{name}</h4>
                </span>
            </a>
        </div>);
}

export default Game;