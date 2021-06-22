import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import Wrapper from './Components/Wrapper';
import { Sidebar } from './Components/Sidebar';
import { Body, Card } from './Components/Body';
import {  ReactComponent as Earth } from './icons/earth.svg';
import {  ReactComponent as India } from './icons/globe.svg';
import { ReactComponent as Locate } from './icons/locate.svg';
import { ReactComponent as News } from './icons/newspaper.svg';
import { ReactComponent as Increase } from './icons/increase.svg';

export const SelectId = React.createContext();

function App() {
  const items = [
    {
      "id" : 1,
      "icon" : Earth,
      "text" : "World"
    },
    {
      "id" : 2,
      "icon": India ,
      "text": "India"
    },
    {
      "id" : 3,
      "icon" : Locate,
      "text" : "Countries"
    },
    {
      "id" : 4,
      "icon" : News,
      "text" : "News"
    }
  ]
  
  const [sidebarItems, setSidebarItems] =  useState(items);
  const [selectedId, setSelectedId] = useState(1);

  

  useEffect(() => {
    console.log(selectedId);
  }, [selectedId])

  return (
    <div className="App">
      <SelectId.Provider value={[selectedId, setSelectedId]}>
        <Wrapper>
          <Sidebar items={sidebarItems}/>
          <Body>
            <Card data={{"total": "1927394", "new" : "36432"}} Source={Increase} text="Coronavirus cases"/>
            <Card data={{ "total": "1927394", "new": "36432" }} Source={Increase}  text="Coronavirus cases"/>
            <Card data={{ "total": "1927394", "new": "36432" }} Source={Increase}  text="Coronavirus cases"/>

          </Body>
        </Wrapper>
      </SelectId.Provider>
    </div>
  )
}

export default App;
