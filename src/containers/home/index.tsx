// React
import React from 'react'

// Project
import Image from '../../static/images/music.jpeg'
import MenuSide from '../../components/MenuSide'
import SimpleListItem from '../../components/simple-list-item'

// Local
import './styles.scss'

export default function Home() {
  const api = [
    {id: 1, name: 'Forró'},
    {id: 2, name: 'Froid'},
    {id: 3, name: 'Tierry'},
    {id: 4, name: 'forro'},
    {id: 5, name: 'forro'},
    {id: 6, name: 'forro'},
    {id: 7, name: 'forro'},
    {id: 8, name: 'forro'},
    {id: 9, name: 'forro'},
    {id: 10, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'forro'},
    {id: 11, name: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd'},
  ]

  return (
    <>
      <div style={{ display:  'flex', height: '100%' }}>
        <MenuSide data={api} />

        <div className='main-container'>
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
        </div>
      </div>
    </>
  )
}