// React
import React from 'react'

// Project
import Image from '../../static/images/music.jpeg'
import MenuSide from '../../components/MenuSide'
import SimpleListItem from '../../components/simple-list-item'
import MusicCategory from '../../components/music-category'

// Local
import './styles.scss'
import PlayerMusic from '../../components/player-music'

// Json
import apiCardSearch from '../../services/apiCardSearch.json'


// Third party
import { map } from 'lodash'

export default function Home() {
  const api = [
    {id: 1, name: 'Forró'},
    {id: 2, name: 'Froid'},
    {id: 3, name: 'Tierry'},
    {id: 4, name: 'forro'},
    {id: 5, name: 'forro'},
    {id: 6, name: 'forro'},
    {id: 7, name: 'forro'},
    {id: 8, name: 'forro'},
    {id: 9, name: 'forro'},
    {id: 10, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd'},
  ]

  const renderMusicCategory = () => {
    return map(apiCardSearch, (card) => {
      return (
        <MusicCategory 
          CategoryTitle={card.title}
          CategoryImage={card.image} 
          CategoryColor={card.color} 
        />
      )
    })
  }

  return (
    <div className='home-container'>
      <div className='content-page'>
        <MenuSide data={api} />

        <div className='main-container'>
          <SimpleListItem
            position={1}
            musicName='Nome da música'
            image={Image}
            totalPlays='2,525,702'
            timeDuration='2:27'
            active={false} />

          <SimpleListItem
            position={1}
            musicName='Nome da música'
            image={Image}
            totalPlays='2,525,702'
            timeDuration='2:27' />

          <SimpleListItem
            position={1}
            musicName='Nome da música'
            image={Image}
            totalPlays='2,525,702'
            timeDuration='2:27' />

          <SimpleListItem
            position={1}
            musicName='Nome da música'
            image={Image}
            totalPlays='2,525,702'
            timeDuration='2:27'
            active={false} />

          <SimpleListItem
            position={1}
            musicName='Nome da música'
            image={Image}
            totalPlays='2,525,702'
            timeDuration='2:27' />

          <SimpleListItem
            position={1}
            musicName='Nome da música'
            image={Image}
            totalPlays='2,525,702'
            timeDuration='2:27' />

          <div className='category-container'>
            <p className='category-container-title'>Seus genêros favoritos</p>
            <div className='category-swiper'>
              { renderMusicCategory() }
            </div>
          </div>
        </div>
      </div>

      <PlayerMusic
        image={Image}
        musicName='Nome da música'
        musicArtist='Artista X'
        currentMusicTime='2:30'
        totalMusicTime='3:40' />
    </div>
  )
}