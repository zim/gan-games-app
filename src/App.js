import React, { useState } from "react";

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

const gamesDataStore = [
  {
    "id": "1",
    "name": "Hotline",
    "limit": "high limit",
    "status": "new",
    "image": "img_138_01-min.png",
    "link": "/hotline"
  },
  {
    "id": "2",
    "name": "Neon Jwigle",
    "limit": "high limit",
    "status": "new",
    "image": "img_138_02-min.png",
    "link": "/hotline"
  },
  {
    "id": "3",
    "name": "Sea Of Tranquility",
    "limit": "high limit",
    "status": "old",
    "image": "img_138_04-min.png",
    "link": "/hotline"
  },
  {
    "id": "4",
    "name": "Aloka",
    "limit": "high limit",
    "status": "old",
    "image": "img_138_03-min.png",
    "link": "/hotline"
  },
  {
    "id": "5",
    "name": "Jack Hammer",
    "limit": "high limit",
    "status": "new",
    "image": "img_138_06-min.png",
    "link": "/hotline"
  },
  {
    "id": "6",
    "name": "Smokin Hot Gems",
    "limit": "low limit",
    "status": "popular",
    "image": "img_138_17-min.png",
    "link": "/hotline"
  },
  {
    "id": "7",
    "name": "Gonzo's Quest",
    "limit": "low limit",
    "status": "old",
    "image": "img_138_09-min.png",
    "link": "/hotline"
  },
  {
    "id": "8",
    "name": "3hit Pay",
    "limit": "low limit",
    "status": "old",
    "image": "img_288_01-min.png",
    "link": "/hotline"
  },
  {
    "id": "9",
    "name": "Spinata Grande",
    "limit": "low limit",
    "status": "old",
    "image": "img_138_10-min.png",
    "link": "/hotline"
  },
  {
    "id": "10",
    "name": "Suger Smash",
    "limit": "high limit",
    "status": "old",
    "image": "img_138_11-min.png",
    "link": "/hotline"
  },
  {
    "id": "11",
    "name": "Fruit Spin",
    "limit": "low limit",
    "status": "new",
    "image": "img_138_05-min.png",
    "link": "/hotline"
  },
  {
    "id": "12",
    "name": "Day Of The Dead",
    "limit": "high limit",
    "status": "new",
    "image": "img_138_14-min.png",
    "link": "/hotline"
  },
  {
    "id": "13",
    "name": "Dr Jekyl & Mr Hyde",
    "limit": "low limit",
    "status": "old",
    "image": "img_138_15-min.png",
    "link": "/hotline"
  },
  {
    "id": "14",
    "name": "Jumanji",
    "limit": "high limit",
    "status": "old",
    "image": "img_138_18-min.png",
    "link": "/hotline"
  },
  {
    "id": "15",
    "name": "Fa-Fa Twins",
    "limit": "low limit",
    "status": "old",
    "image": "img_138_16-min.png",
    "link": "/fafa-twins"
  },

]





function App() {
  const [gamesData, setGamesData] = useState(gamesDataStore);

  const [searchString, setSearchString] = useState('');

  const filterOptions = (e) => {
    // let filteredData = gamesDataStore.filter(game => game.status === "new")
    console.log('filterer')
    console.log(e.target.value)
    let filteredData = gamesDataStore.filter(game => {
      return game.name.toLowerCase().match(e.target.value);
    });

    console.log(filteredData)
    setGamesData(filteredData);
  };

  const filterGames = (filter) => {
    console.log(filter)

    let filteredData;
    switch (filter) {
      case "all":
        setGamesData(gamesDataStore);
        break;
      case "new":
        filteredData = gamesDataStore.filter(game => game.status === "new")
        setGamesData(filteredData);
        break;
      case "top":
        filteredData = gamesDataStore.filter(game => game.limit === "high limit")
        setGamesData(filteredData);
        break;
      default:
      // code block
    }

  };


  return (
    <div className="App">
      <Grid>
        <Row>
          <Col size={1}>
            <Header>
              <H1>SLOTS</H1>

              <HeaderControlsWrapper>
                <HeaderControlsList>
                  <HeaderControlsListItem><HeaderButton onClick={() => filterGames('all')}>ALL<BsGrid3X3 color="grey" /></HeaderButton></HeaderControlsListItem>
                  <HeaderControlsListItem><HeaderButton onClick={() => filterGames('new')}>NEW<BiBookmark color="grey" /></HeaderButton></HeaderControlsListItem>
                  <HeaderControlsListItem><HeaderButton onClick={() => filterGames('top')}>TOP<BsStar color="grey" /></HeaderButton></HeaderControlsListItem>
                </HeaderControlsList>

                <input id="search-input" type="text" name="search" placeholder="Search" onChange={(e) => filterOptions(e)} />
              </HeaderControlsWrapper>


            </Header>
          </Col>
        </Row>



        <Row>

          {gamesData.map((game, index) => {

            return (
              <Col>
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


      </Grid>

    </div>
  );
}

export default App;
