// React
import React from 'react'

// Third party
import { FaRegHeart, FaEllipsisH } from 'react-icons/fa'

// Local
import './style.scss'
import { ISimpleListProps } from './types'


const SimpleListItem = ({ position, image, musicName, totalPlays, timeDuration, active }: ISimpleListProps) => {
  return (
    <div className={`container ${active && 'active'}`}>
      <div className='left-content'>
        <span className='position'>{position}</span>
        <img className='music-image' src={image} alt='music image thumb' />
        <span className='music-name'>{musicName}</span>
      </div>

      <span className='total-plays'>{totalPlays}</span>

      <div className='right-content'>
        <FaRegHeart className='like-button' />
        <span className='time-duration'>{timeDuration}</span>
        <FaEllipsisH className='menu-button' />
      </div>
    </div>
  )
}

export default SimpleListItem