import React, { useState } from 'react';

import GlobalStyles from './GlobalStyles';

import Header from './components/Header';
import { H6 } from './components/Titles';
import Load from './components/Load';

import Introduction from './home/Introduction';
import Main from './home/Main';
import Shots from './home/Shots';


function App() {
  const getNewEightShots = () => {
    let shotsList = [];
    for(let i = 0; i < 8 ;i++){
      shotsList = [...shotsList, <Shots key={Math.round(Math.random() * 100000).toString()} />]
    };

    return shotsList;
  };

  const [shots, setShots] = useState([ getNewEightShots() ]);
  const [load , setLoad] = useState(false);

  const removeLoad = () => {
    setTimeout(() => {
      setLoad(false);
      setShots([...shots, ...getNewEightShots()])
    }, 2000);
  };

  const HandleShotsLoad = () => {
    setLoad(true);
    removeLoad();
  };

  const InfinityScroll = () => {
    const scrollTopDisntace = window.pageYOffset + window.innerHeight;
    const scrollLimit = document.body.scrollHeight

    if(scrollTopDisntace === scrollLimit) return HandleShotsLoad()
  };

  window.onscroll = () => InfinityScroll()

  return (
    <>
      <GlobalStyles />
      <Header />
      <section className="container">
        <Introduction className="introduction" />

        <Main>
          <H6 fontWeight="700">Check out some of today’s popular shots</H6>
          <div className="designs-list">
            {shots.map(shotCard => shotCard)}
          </div>
          {load && <Load />}
        </Main>
      </section>
    </>
  );
}

export default App;
