// React
import { map } from 'lodash'
import React from 'react'

// Third party
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Services
import MusicCategory from '../music-category'

// Local
import './style.scss'

export default function slideMusicCategory() {

  // Others
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const Api = [
    {
      "title": "Podcasts",
      "color": "#6748b7",
      "image": "https://cdn.pixabay.com/photo/2017/11/21/20/23/cd-cover-2969102__480.jpg"
    },
    {
      "title": "Feito para você",
      "color": "#50afa7",
      "image": "https://cdn.pixabay.com/photo/2018/09/13/17/15/cd-cover-3675280__340.jpg"
    },
    {
      "title": "Paradas",
      "color": "#f7c408",
      "image": "https://cdn.pixabay.com/photo/2019/05/17/14/45/portrait-4209832__340.jpg"
    },
    {
      "title": "Novos lançamentos",
      "color": "#e9162b",
      "image": "https://cdn.pixabay.com/photo/2018/05/26/20/18/cd-cover-3432167__340.jpg"
    },
    {
      "title": "Descobrir",
      "color": "#2342dc",
      "image": "https://cdn.pixabay.com/photo/2018/09/13/17/02/cd-cover-3675258__340.jpg"
    },
  ]

  const renderMusicCategory = () => {
    return map(Api, (card) => {
      return (
        <MusicCategory
          title={card.title}
          image={card.image}
          color={card.color}
          height={180}
          width={320}
        />
      )
    })
  }

  return (
    <Carousel responsive={responsive}>
      {renderMusicCategory()}
    </Carousel >
  )
}