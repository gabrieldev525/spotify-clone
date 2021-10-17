// React
import React from 'react'

// Third party
import {
  FaRegHeart,
  FaBan,
  FaPlayCircle,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaExpandAlt,
  FaDesktop,
  FaVolumeUp
} from 'react-icons/fa'
import { FiRepeat } from 'react-icons/fi'
import { Line } from 'rc-progress'

// Local
import './style.scss'
import { IPlayerMusicProps } from './types'

const PlayerMusic = ({
  image, musicName, musicArtist, currentMusicTime, totalMusicTime
}: IPlayerMusicProps) => {
  return (
    <div className='container-player-music'>
      <div className='left-container'>
        <img src={image} alt='music thumb' className='music-image' />

        <div className='music-info'>
          <span className='music-name'>{musicName}</span>
          <span className='music-artist'>
            {
              typeof(musicArtist) == 'object' ?
                musicArtist.join(', ') : musicArtist ?? '---'
            }
          </span>
        </div>

        <FaRegHeart className='like-button icons' />
        <FaBan className='remove-button icons' />
      </div>

      <div className='center-container'>
        <div className='actions-button'>
          <FaRandom className='icons random-button' />
          <FaStepBackward className='icons step-back-button' />
          <FaPlayCircle className='play-button icons' />
          <FaStepForward className='icons step-forward-button' />
          <FiRepeat className='icons repeat-button' />
        </div>

        <div className='music-time-container'>
          <span>{currentMusicTime}</span>
          <Line
            percent={10}
            strokeColor="#FFF"
            trailColor='#535353'
            className='progress-bar' />
          <span>{totalMusicTime}</span>
        </div>
      </div>

      <div className='right-content'>
        <FaDesktop className='devices-button' />

        <FaVolumeUp className='volume-button' />

        <Line
          percent={10}
          strokeColor="#FFF"
          trailColor='#535353'
          className='progress-bar' />

        <FaExpandAlt className='expand-button' />
      </div>
    </div>
  )
}

export default PlayerMusic