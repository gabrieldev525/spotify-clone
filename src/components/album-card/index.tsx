// React
import React from 'react'

//style
import "./styles/styles.scss"

export default function AlbumCard() {
  return (
    <>
    <div className="album-card">
      <div className="album-card-info">
        <img className="album-card-image" src="https://via.placeholder.com/150" alt="artist album photo" />
        <p className="album-card-name">Artist Name</p>
      </div>
      <div className="play-album">
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 25">
            <path d="M3 22v-20l18 10-18 10z"/>
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}