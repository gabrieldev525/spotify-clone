// React
import React from 'react'

// Styles
import './styles/style.scss'

// Project
import MoreIcon from '../../static/icons/more.svg'
import LikeIcon from '../../static/icons/heart.svg'
import AddIcon from '../../static/icons/add.svg'
import HouseOutlineIcon from '../../static/icons/house-outline.svg'
import HouseFocusIcon from '../../static/icons/house-focus.svg'
import PlaylistIcon from '../../static/icons/playlist.svg'
import SearchIcon from '../../static/icons/search.svg'

// Local
import { IMenuSideProps } from './types'

export default function MenuSide({ isFocus }: IMenuSideProps) {
  return (
    <div id='container_menu_side'>
      <div className='container_navigation'>
        <div className='more_options'>
          <img src={MoreIcon} alt='More option' />
        </div>
        <div className='container_nav_platform'>
          <div className='content_home content_all_item_nav'>
            <img src={isFocus ? HouseFocusIcon : HouseOutlineIcon} alt='Home icon' />
            <h4>Início</h4>
          </div>
          <div className='content_search content_all_item_nav'>
            <img src={SearchIcon} alt='Search icon' />
            <h4>Buscar</h4>
          </div>
          <div className='content_playlist content_all_item_nav'>
            <img src={PlaylistIcon} alt='Playlist icon' />
            <h4>Sua Biblioteca</h4>
          </div>
        </div>
      </div>
      <div className='container_playlist_collections'>
        <div className='content_create_playlist content_all_playlist_collections'>
          <div className='icon_playlist icon_container_all_collection'>
            <img src={AddIcon} alt='Playlist icon' />
          </div>
          <h4>Criar playlist</h4>
        </div>
        <div className='content_like_music content_all_playlist_collections'>
          <div className='icon_like_music icon_container_all_collection'>
            <img src={LikeIcon} alt='like music icon' />
          </div>
          <h4>Músicas Curtidas</h4>
        </div>
      </div>
      <div className='container_music_collections'>
        <div className='content_music'>
          <p className='title_music'>This is Froid asldmçasdasd asdanlskjdhnaljsd </p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
          <p className='title_music'>This is Froid</p>
        </div>
      </div>
    </div>
  )
}