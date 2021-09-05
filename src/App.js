import React, { useEffect, useState } from 'react'
import './App.css';
import Header from "./components/ui/Header"
import Search from "./components/ui/Search"
import CharacterGrid from "./components/characters/CharacterGrid"
import searchCharacter from './service/characterService'
import axios from 'axios';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')


//Calling All Character api only Mounting Time
  useEffect(() => {
    const fetchItems = async () => {
  const result = await axios(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=150`);
      // console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems();
  },[])

  //Tracking Lifecycle
  const didMount = React.useRef(false);
  //To run useEffect only when Updating, Because of having different api. 
  useEffect(() => {
    if(didMount.current) {
      const fetchItems = async () => {
        const result = await searchCharacter(query);
            // console.log(result.data)
            setItems(result.data)
            setIsLoading(false)
          }
      
          fetchItems();
    }
    else {
      didMount.current = true;
    }
       
    }, [query])

  // useEffect(() => {
  //   const fetchItems = async () => {
  // const result = await searchCharacter(query);
  //     // console.log(result.data)
  //     setItems(result.data)
  //     setIsLoading(false)
  //   }

  //   fetchItems();
    
  // }, [query])

  

  return (
    <div className="container">
     <Header/>
     <Search getQuery = {(q)=> setQuery(q)} />
     <CharacterGrid isLoading = {isLoading} items = {items} />
    </div>
  );
}

export default App;
