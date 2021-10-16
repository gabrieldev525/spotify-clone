// React
import React from 'react'

// Third party
import { IoPlaySharp } from 'react-icons/io5'

// Local
import './styles/styles.scss'
import { IAlbumCardProps } from './types'

export default function AlbumCard({artistName, artistImage}: IAlbumCardProps) {
  return (
    <div className="album-card">
      <div className="album-card-info">
        <img className="album-card-image" src={artistImage} alt="artist album photo" />
        <p className="album-card-name">{artistName}</p>
      </div>
      <div className="play-album">
        <div className="icon">
            <IoPlaySharp />
        </div>
      </div>
    </div>
  )
}