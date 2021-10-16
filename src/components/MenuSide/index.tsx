// React
import React from 'react'

// Third party
import { RiHomeLine, RiMoreFill } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { IoAdd } from 'react-icons/io5'
import { AiFillHeart } from 'react-icons/ai'
import { BiLibrary } from 'react-icons/bi'
import { isUndefined, map } from 'lodash'

// Local
import './styles/style.scss'
import { IDataProps, IMenuSideProps } from './types'

export default function MenuSide({ data }: IMenuSideProps) {

  const renderPlaylist = () => {
    if (!isUndefined(data)) {
      return map(data, (value: IDataProps) => {
        return <p className='title_music' key={value.id}>{value.name}</p>
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
          <div className='content_home content_all_item_nav'>
            <RiHomeLine size={25} color={'#ccc'} />
            <h4>Início</h4>
          </div>
          <div className='content_search content_all_item_nav'>
            <FiSearch size={25} color={'#ccc'} />
            <h4>Buscar</h4>
          </div>
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