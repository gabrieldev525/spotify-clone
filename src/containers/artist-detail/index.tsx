// React
import React from 'react'
import AlbumCard from '../../components/album-card'

// Project
import ArtistBanner from '../../components/artist-banner'
import ArtistCard from '../../components/ArtistCard'
import MenuSide from '../../components/MenuSide'
import PlayerMusic from '../../components/player-music'
import SimpleListItem from '../../components/simple-list-item'
import Image from '../../static/images/music.jpeg'
import '../home/styles.scss'

// Local
import './styles.scss'

const ArtistDetail = () => {
  return (
    <div className="home-container">
      <div className="content-page">
        <MenuSide />
        <div className="main-container">
          <div className="artist-detail-container">
            <ArtistBanner
              artistPlaylistName="Nome do artista"
              artistMusicName="Nome da música"
              artistBannerName="Nome do artista" />

            <p className="container-title">Populares</p>

            <SimpleListItem
              position={1}
              musicName="Nome da música"
              image={Image}
              totalPlays="2,525,702"
              timeDuration="2:27" />

            <SimpleListItem
              position={1}
              musicName="Nome da música"
              image={Image}
              totalPlays="2,525,702"
              timeDuration="2:27" />

            <SimpleListItem
              position={1}
              musicName="Nome da música"
              image={Image}
              totalPlays="2,525,702"
              timeDuration="2:27"
              active={false} />

            <SimpleListItem
              position={1}
              musicName="Nome da música"
              image={Image}
              totalPlays="2,525,702"
              timeDuration="2:27" />

            <SimpleListItem
              position={1}
              musicName="Nome da música"
              image={Image}
              totalPlays="2,525,702"
              timeDuration="2:27" />

            <p className="container-title">Lançamentos Populares</p>

            <div className="popular-releases">
              <ArtistCard
                image={Image}
                title="Nome da música"
                category="Categoria" />

              <ArtistCard
                image={Image}
                title="Nome da música"
                category="Categoria" />

              <ArtistCard
                image={Image}
                title="Nome da música"
                category="Categoria" />

              <ArtistCard
                image={Image}
                title="Nome da música"
                category="Categoria" />
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

export default ArtistDetail
