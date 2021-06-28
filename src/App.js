import React, { useEffect, useState } from 'react'
import axios from "axios";
import './App.css';
import Header from "./components/ui/Header"
import Search from "./components/ui/Search"
import CharacterGrid from "./components/characters/CharacterGrid"

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${query}`)

      // console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems();
    
  }, [query])

  return (
    <div className="container">
     <Header/>
     <Search getQuery = {(q)=> setQuery(q)} />
     <CharacterGrid isLoading = {isLoading} items = {items} />
    </div>
  );
}

export default App;
