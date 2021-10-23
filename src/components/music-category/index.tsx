// React
import React from 'react'

// Local
import { IMusicCategory } from './types'
import './styles/styles.scss'

export default function MusicCategory({CategoryTitle, CategoryImage, CategoryColor}: IMusicCategory) {
    return (
      <div className="music-category" style={{backgroundColor: CategoryColor}}>
          <div className="music-cateogry-title">{CategoryTitle}</div>
          <img src={CategoryImage} alt="imagem do album da categoria de música" className="music-category-image" />
      </div>
    )
  }

