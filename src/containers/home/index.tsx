// React
import React from 'react'

// Project
import Image from '../../static/images/music.jpeg'
import MenuSide from '../../components/MenuSide'
import SimpleListItem from '../../components/simple-list-item'

// Local
import './styles.scss'
import PlayerMusic from '../../components/player-music'
import TopMenu from '../../components/TopMenu'

export default function Home() {
  const renderListMusic = () => {
    let list = []

    for (let i = 1; i <= 10; i++) {
      list.push(
        <SimpleListItem
          key={i}
          position={1}
          musicName='Nome da música'
          image={Image}
          totalPlays='2,525,702'
          timeDuration='2:27'
          active={false} />
      )
    }

    return list
  }

  return (
    <div className='home-container'>
      <div className='content-page'>
        <MenuSide />

        <div className='main-container'>
          <TopMenu />

          <div className='container_chidren'>
            {renderListMusic()}
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