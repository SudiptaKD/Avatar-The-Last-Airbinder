import React, { useEffect, useState } from 'react'
import './App.css';
import Header from "./components/ui/Header"
import Search from "./components/ui/Search"
import CharacterGrid from "./components/characters/CharacterGrid"
import searchCharacter from './service/characterService'
const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
  const result = await searchCharacter(query);
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
