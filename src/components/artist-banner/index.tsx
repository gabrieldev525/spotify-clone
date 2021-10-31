// React
import React from 'react'

// Local
import { IArtistBanner } from './types'
import './styles/styles.scss'

export default function ArtistBanner({
  artistBannerImage,
  artistPlaylistName,
  artistMusicName,
  artistBannerName
}: IArtistBanner) {
  return (
    <div className='artist-banner'>
      {artistBannerImage && (
        <img src={artistBannerImage} alt='artist banner image' />
      )}
      <div className='artist-banner-content'>
        <p>PlayList</p>
        <p className='artist-playlist-name'>{artistPlaylistName}</p>
        <p>
          Ouça agora <strong>{artistMusicName}</strong> a nova faixa <strong>{artistBannerName}</strong>
        </p>
        <div className='artist-banner-actions'>
          <button className='artist-banner-button play'>PLAY</button>
          <button className='artist-banner-button follow'>SEGUIR</button>
        </div>
      </div>
    </div>
  )
}
