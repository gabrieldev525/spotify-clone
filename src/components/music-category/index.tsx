// React
import React from 'react'

// Local
import { IMusicCategory } from './types'
import './styles/styles.scss'
import NoImage from '../../static/images/no-image.png'

export default function MusicCategory({ title, image, color, height, width }: IMusicCategory) {
  return (
    <div
      className='music-category'
      style={{
        backgroundColor: color,
        width: width,
        height: height
      }} >
      <p className='music-cateogry-title'>{title}</p>
      <img src={image ?? NoImage} alt='imagem do album da categoria de música' className='music-category-image' />
    </div>
  )
}
