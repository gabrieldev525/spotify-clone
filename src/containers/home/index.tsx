// React
import React from 'react'
import SimpleListItem from '../../components/simple-list-item'

// Project
import Image from '../../static/images/music.jpeg'

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <SimpleListItem
        position={1}
        musicName='Nome da música'
        image={Image}
        totalPlays='2,525,702'
        timeDuration='2:27'
        active={true} />

      <SimpleListItem
        position={1}
        musicName='Nome da música'
        image={Image}
        totalPlays='2,525,702'
        timeDuration='2:27' />

      <SimpleListItem
        position={1}
        musicName='Nome da música'
        image={Image}
        totalPlays='2,525,702'
        timeDuration='2:27' />
    </>
  )
}