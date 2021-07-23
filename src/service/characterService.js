import axios from "axios";

async function searchCharacter(query) {
    const result = await axios(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${query}`)
return result
}


export default searchCharacter;