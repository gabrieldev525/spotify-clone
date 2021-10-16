// React
import React from 'react'

// Third party
import { IoPlaySharp } from 'react-icons/io5'

// Local
import './styles/styles.scss'
import { IArtistCardProps } from './types'

export default function ArtistCard({ image, title, category }: IArtistCardProps) {
  return (
    <div id='container_main_card_artist'>
      <div className='container_image_artist'>
        <img src={`${image}`} alt='Image do artista' />
        <div className='container_play_music'>
          <IoPlaySharp className='icon_play' size={30} />
        </div>
      </div>
      <div className='container_info_artist'>
        <h3 className='title_artist'>{title}</h3>
        <span className='sub_title'>{category}</span>
      </div>
    </div>
  )
}