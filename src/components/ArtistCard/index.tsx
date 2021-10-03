// React
import React from 'react'

// Project
import ArtistImg from '../../static/images/no-image.png'
import Playicon from '../../static/icons/play.svg'

// Styles
import './styles/styles.scss'

export default function ArtistCard() {
  return (
    <div id='container_main_card_artist'>
      <div className='container_img'>
        <img src={ArtistImg} alt='Image do artista' />
        <div className='container_play_music'>
          <img src={Playicon} alt='play music' />
        </div>
      </div>
      <div className='container_info_artist'>
        <h3 className='title_artist'>Queen</h3>
        <span className='sub_title'>Artista</span>
      </div>
    </div>
  )
}