import logo from './logo.svg';

import { FaBeer } from 'react-icons/fa';
import { BsStar, BsGrid3X3 } from 'react-icons/bs';
import { BiBookmark } from 'react-icons/bi';

import Game from './components/Game'


import {
  H1,
  Grid,
  Row,
  Col,
  Header,
  SearchInput,
  ImageResponsive,
  HeaderControlsWrapper,
  HeaderControlsList,
  HeaderButton,
  HeaderControlsListItem,
} from './app_styles';

import gameImageSmall from './game_image_138.png';
import gameImageMedium from './game_image_288.png';

const gamesData = [
  {
    "id": "1",
    "name": "Hotline",
    "limit": "high limit",
    "status": "new",
    "image": "image01.png",
    "link": "/hotline"
  },
  {
    "id": "2",
    "name": "Neon Jwigle",
    "limit": "high limit",
    "status": "new",
    "image": "image02.png",
    "link": "/hotline"
  },
  {
    "id": "3",
    "name": "Gambling Birds",
    "limit": "high limit",
    "status": "popular",
    "image": "image03.png",
    "link": "/hotline"
  },
  {
    "id": "4",
    "name": "Sea Of Tranquility",
    "limit": "high limit",
    "status": "old",
    "image": "image04.png",
    "link": "/hotline"
  },
  {
    "id": "5",
    "name": "Aloka",
    "limit": "high limit",
    "status": "old",
    "image": "image05.png",
    "link": "/hotline"
  },
  {
    "id": "5",
    "name": "Jack Hammer",
    "limit": "high limit",
    "status": "new",
    "image": "image06.png",
    "link": "/hotline"
  },
  {
    "id": "6",
    "name": "Smokin Hot Gems",
    "limit": "low limit",
    "status": "popular",
    "image": "image07.png",
    "link": "/hotline"
  },
  {
    "id": "7",
    "name": "Gonzo's Quest",
    "limit": "low limit",
    "status": "old",
    "image": "image08.png",
    "link": "/hotline"
  },
  {
    "id": "8",
    "name": "3hit Pay",
    "limit": "low limit",
    "status": "old",
    "image": "image09.png",
    "link": "/hotline"
  },
  {
    "id": "9",
    "name": "Spinata Grande",
    "limit": "low limit",
    "status": "old",
    "image": "image10.png",
    "link": "/hotline"
  },
  {
    "id": "10",
    "name": "Suger Smash",
    "limit": "high limit",
    "status": "old",
    "image": "image11.png",
    "link": "/hotline"
  },
  {
    "id": "11",
    "name": "Fruit Spin",
    "limit": "low limit",
    "status": "new",
    "image": "image12.png",
    "link": "/hotline"
  },
  {
    "id": "12",
    "name": "Day Of The Dead",
    "limit": "high limit",
    "status": "old",
    "image": "image013.png",
    "link": "/hotline"
  },
  {
    "id": "13",
    "name": "Dr Jekyl & Mr Hyde",
    "limit": "low limit",
    "status": "old",
    "image": "image14.png",
    "link": "/hotline"
  },
  {
    "id": "14",
    "name": "Jumanji",
    "limit": "high limit",
    "status": "old",
    "image": "image15.png",
    "link": "/hotline"
  },
  {
    "id": "15",
    "name": "Fa-Fa Twins",
    "limit": "low limit",
    "status": "old",
    "image": "image16.png",
    "link": "/fafa-twins"
  },

]

function App() {
  return (
    <div className="App">
      <Grid>
        <Row>
          <Col size={1}>
            <Header>
              <H1>SLOTS</H1>

              <HeaderControlsWrapper>
                <HeaderControlsList>
                  <HeaderControlsListItem><HeaderButton onClick={() => console.log('allll')}>ALL<BsGrid3X3 color="grey" /></HeaderButton></HeaderControlsListItem>
                  <HeaderControlsListItem><HeaderButton onClick={() => console.log('newww')}>NEW<BiBookmark color="grey" /></HeaderButton></HeaderControlsListItem>
                  <HeaderControlsListItem><HeaderButton onClick={() => console.log('toppp')}>TOP<BsStar color="grey" /></HeaderButton></HeaderControlsListItem>
                </HeaderControlsList>

                <SearchInput id="search-input" type="search" name="search" placeholder="Search" />
              </HeaderControlsWrapper>


            </Header>
          </Col>
        </Row>

        <Row>

          <Col size={1}>
            <ImageResponsive src={gameImageSmall} alt="" />
          </Col>
          <Col size={1}>
            <ImageResponsive src={gameImageSmall} alt="" />
          </Col>
          <Col size={1}>
            <ImageResponsive src={gameImageSmall} alt="" />
          </Col>
          <Col size={1}>
            <ImageResponsive src={gameImageSmall} alt="" />
          </Col>
          <Col size={1}>
            <ImageResponsive src={gameImageSmall} alt="" />
          </Col>
          <Col size={1}>
            <ImageResponsive src={gameImageSmall} alt="" />
          </Col>
          <Col size={1}>
            <ImageResponsive src={gameImageSmall} alt="" />
          </Col>

        </Row>

        <Row>

          <Col size={1}>
            <ImageResponsive src={gameImageSmall} alt="" />
          </Col>

          {gamesData.map((game, index) => {

            return (
              <Col size={1}>


                <Game
                  id={game.id}
                  name={game.name}
                  limit={game.limit}
                  status={game.status}
                  image={game.image}
                  link={game.link}
                />


              </Col>


            );
          })}

        </Row>

        <Row>
          <Col size={2}>
            Double Size
          </Col>
          <Col size={1}>
            <img src={gameImageSmall} alt="" />
          </Col>
        </Row>
      </Grid>

    </div>
  );
}

export default App;
