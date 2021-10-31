// React
import React from 'react'

// Project
import Image from '../../static/images/music.jpeg'
import MenuSide from '../../components/MenuSide'
import MusicCategory from '../../components/music-category'

// Local
import './style.scss'
import PlayerMusic from '../../components/player-music'
import TopMenu from '../../components/TopMenu'

// Json
import apiCardSearch from '../../services/apiCardSearch.json'

// Third party
import { map } from 'lodash'
import SlideMusicCategory from '../../components/SlidesMusicCategory'

export default function Search() {

  const renderMusicCategory = () => {
    return map(apiCardSearch, (card) => {
      return (
        <MusicCategory
          title={card.title}
          image={card.image}
          color={card.color}
        />
      )
    })
  }

  return (
    <div className='home-container'>
      <div className='content-page'>
        <MenuSide />

        <div className='main-container'>
          <TopMenu />

          <div className='container_chidren'>
            <div className='container_slide'>
              <p className='category-container-title'>Seus gêneros favoritos</p>
              <SlideMusicCategory />
            </div>

            <div>
              <p className='category-container-title'>Navegar por todas as seções</p>
              <div className='category-container'>
                {renderMusicCategory()}
              </div>
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