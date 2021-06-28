import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.photoUrl} alt='' />
                </div>
            <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Allies:</strong> {item.allies} 
              </li>
              <li>
                <strong>Related to:</strong> {item.affiliation}
              </li>
              <li>
                <strong>Arc Enemy:</strong> {item.enemies}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CharacterItem
