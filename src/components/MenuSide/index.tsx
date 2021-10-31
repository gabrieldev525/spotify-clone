// React
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Third party
import { RiHomeLine, RiMoreFill } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import { AiFillHeart } from 'react-icons/ai'
import { BiLibrary } from 'react-icons/bi'
import { isUndefined, map } from 'lodash'

// Local
import './styles/style.scss'
import { IDataProps } from './types'

export default function MenuSide() {
  // Hooks
  const { pathname } = useLocation()

  // Others
  const data = [
    { id: 1, name: 'Forró' },
    { id: 2, name: 'Froid' },
    { id: 3, name: 'Tierry' },
    { id: 4, name: 'forro' },
    { id: 5, name: 'forro' },
    { id: 6, name: 'forro' },
    { id: 7, name: 'forro' },
    { id: 8, name: 'forro' },
    { id: 9, name: 'forro' },
    { id: 10, name: 'forro' },
    { id: 11, name: 'forro' },
    { id: 11, name: 'forro' },
    { id: 11, name: 'forro' },
    { id: 11, name: 'forro' },
    { id: 11, name: 'forro' },
    { id: 11, name: 'forro' },
    { id: 11, name: 'forro' },
    { id: 11, name: 'forro' },
    { id: 11, name: 'forro' },
    { id: 11, name: 'forro' },
    { id: 11, name: 'forro' },
    { id: 11, name: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd' },
  ]

  const renderPlaylist = () => {
    if (!isUndefined(data)) {
      return map(data, (value: IDataProps) => {
        return (
          <Link to={`/artist/${value.id}/detail`}><p className='title_music' key={value.id}>{value.name}</p></Link>
        )
      })
    }
  }

  return (
    <div id='container_menu_side'>
      <div className='container_navigation'>
        <div className='more_options'>
          <RiMoreFill size={25} color={'#ccc'} />
        </div>
        <div className='container_nav_platform'>
          <Link to='/'>
            <div className='content_home content_all_item_nav'>
              <RiHomeLine size={25} color={'#ccc'} />
              <h4
                style={{ color: pathname == '/' ? '#fff' : '#ccc' }} >
                Início
              </h4>
            </div>
          </Link>
          <Link to='/search'>
            <div className='content_search content_all_item_nav'>
              <FiSearch size={25} color={'#ccc'} />
              <h4
                style={{ color: pathname == '/search' ? '#fff' : '#ccc' }} >
                Buscar
              </h4>
            </div>
          </Link>
          <div className='content_playlist content_all_item_nav'>
            <BiLibrary size={25} color={'#ccc'} />
            <h4>Sua Biblioteca</h4>
          </div>
        </div>
      </div>
      <div className='container_playlist_collections'>
        <div className='content_create_playlist content_all_playlist_collections'>
          <div className='icon_playlist icon_container_all_collection'>
            <IoAdd size={20} color={'#000'} />
          </div>
          <h4>Criar playlist</h4>
        </div>
        <div className='content_like_music content_all_playlist_collections'>
          <div className='icon_like_music icon_container_all_collection'>
            <AiFillHeart size={18} color={'#ccc'} />
          </div>
          <h4>Músicas Curtidas</h4>
        </div>
      </div>
      <div className='container_music_collections'>
        <div className='content_music'>
          {renderPlaylist()}
        </div>
      </div>
    </div>
  )
}